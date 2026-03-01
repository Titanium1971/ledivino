from fastapi import APIRouter

from app.schemas import ReservationCreate

router = APIRouter(prefix="/reservations", tags=["reservations"])


@router.post("")
def create_reservation(payload: ReservationCreate):
    return {"created": True, "reservation": payload.model_dump()}


@router.get("/admin")
def admin_list_reservations():
    return []


@router.patch("/admin/{reservation_id}/status")
def admin_update_status(reservation_id: str):
    return {"updated": True, "reservation_id": reservation_id}


@router.get("/admin/export.csv")
def admin_export_csv():
    return {"export": "todo"}

