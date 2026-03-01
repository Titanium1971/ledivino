import csv
import io
from datetime import UTC, datetime
from uuid import uuid4

from bson import ObjectId
from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import Response

from app.db import get_collection
from app.schemas import ReservationCreate, ReservationStatusUpdate

router = APIRouter(prefix="/reservations", tags=["reservations"])
_memory_reservations: dict[str, dict] = {}
_VALID_STATUSES = {"pending", "confirmed", "cancelled", "seated"}


def _serialize_reservation(record: dict) -> dict:
    reservation_id = str(record.get("_id") or record.get("id") or "")
    reservation_datetime = record.get("datetime")
    created_at = record.get("created_at")
    updated_at = record.get("updated_at")

    return {
        "id": reservation_id,
        "name": record.get("name"),
        "email": record.get("email"),
        "phone": record.get("phone"),
        "datetime": reservation_datetime.isoformat() if isinstance(reservation_datetime, datetime) else reservation_datetime,
        "guests": record.get("guests"),
        "message": record.get("message"),
        "status": record.get("status", "pending"),
        "created_at": created_at.isoformat() if isinstance(created_at, datetime) else created_at,
        "updated_at": updated_at.isoformat() if isinstance(updated_at, datetime) else updated_at,
    }


@router.post("")
def create_reservation(payload: ReservationCreate):
    now = datetime.now(UTC)
    document = payload.model_dump()
    document["status"] = "pending"
    document["created_at"] = now
    document["updated_at"] = now

    try:
        collection = get_collection("reservations")
        insert_result = collection.insert_one(document)
        created = collection.find_one({"_id": insert_result.inserted_id})
        if not created:
            raise HTTPException(status_code=500, detail="Réservation créée mais introuvable")
        return {"created": True, "reservation": _serialize_reservation(created)}
    except Exception:
        memory_id = uuid4().hex
        memory_document = {
            **document,
            "id": memory_id,
            "datetime": payload.datetime.isoformat(),
            "created_at": now.isoformat(),
            "updated_at": now.isoformat(),
        }
        _memory_reservations[memory_id] = memory_document
        return {"created": True, "reservation": _serialize_reservation(memory_document), "storage": "memory_fallback"}


@router.get("/admin")
def admin_list_reservations(status: str | None = Query(default=None)):
    if status is not None and status not in _VALID_STATUSES:
        raise HTTPException(status_code=400, detail="Statut invalide")

    try:
        collection = get_collection("reservations")
        query = {"status": status} if status else {}
        records = list(collection.find(query).sort("created_at", -1))
        return [_serialize_reservation(record) for record in records]
    except Exception:
        records = list(_memory_reservations.values())
        if status:
            records = [record for record in records if record.get("status") == status]
        records.sort(key=lambda item: item.get("created_at", ""), reverse=True)
        return [_serialize_reservation(record) for record in records]


@router.patch("/admin/{reservation_id}/status")
def admin_update_status(reservation_id: str, payload: ReservationStatusUpdate):
    if payload.status not in _VALID_STATUSES:
        raise HTTPException(status_code=400, detail="Statut invalide")

    now = datetime.now(UTC)

    try:
        collection = get_collection("reservations")
        query: dict = {"_id": ObjectId(reservation_id)} if ObjectId.is_valid(reservation_id) else {"id": reservation_id}
        result = collection.update_one(
            query,
            {"$set": {"status": payload.status, "updated_at": now}},
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Réservation introuvable")

        updated = collection.find_one(query)
        if not updated:
            raise HTTPException(status_code=404, detail="Réservation introuvable")
        return {"updated": True, "reservation": _serialize_reservation(updated)}
    except HTTPException:
        raise
    except Exception:
        memory_record = _memory_reservations.get(reservation_id)
        if not memory_record:
            raise HTTPException(status_code=404, detail="Réservation introuvable")
        memory_record["status"] = payload.status
        memory_record["updated_at"] = now.isoformat()
        return {"updated": True, "reservation": _serialize_reservation(memory_record), "storage": "memory_fallback"}


@router.get("/admin/export.csv")
def admin_export_csv():
    reservations = admin_list_reservations()
    buffer = io.StringIO()
    writer = csv.writer(buffer)
    writer.writerow(["id", "name", "email", "phone", "datetime", "guests", "status", "message", "created_at"])
    for reservation in reservations:
        writer.writerow(
            [
                reservation.get("id"),
                reservation.get("name"),
                reservation.get("email"),
                reservation.get("phone"),
                reservation.get("datetime"),
                reservation.get("guests"),
                reservation.get("status"),
                reservation.get("message") or "",
                reservation.get("created_at"),
            ]
        )

    return Response(
        content=buffer.getvalue(),
        media_type="text/csv",
        headers={"Content-Disposition": 'attachment; filename="reservations.csv"'},
    )
