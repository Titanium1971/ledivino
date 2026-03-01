from fastapi import APIRouter

from app.schemas import EventPayload

router = APIRouter(prefix="/events", tags=["events"])


@router.get("")
def list_public_events():
    return []


@router.get("/{event_id}")
def get_public_event(event_id: str):
    return {"id": event_id}


@router.post("/admin")
def create_event(payload: EventPayload):
    return {"created": True, "event": payload.model_dump(mode="json")}


@router.patch("/admin/{event_id}")
def update_event(event_id: str, payload: EventPayload):
    return {"updated": True, "event_id": event_id, "event": payload.model_dump(mode="json")}


@router.delete("/admin/{event_id}")
def delete_event(event_id: str):
    return {"deleted": True, "event_id": event_id}

