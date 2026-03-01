from fastapi import APIRouter

router = APIRouter(prefix="/signage", tags=["signage"])


@router.get("/playlist/active")
def active_playlist():
    return {"items": []}


@router.post("/heartbeat")
def player_heartbeat(payload: dict):
    return {"received": True, "payload": payload}


@router.get("/admin/players")
def list_players():
    return []

