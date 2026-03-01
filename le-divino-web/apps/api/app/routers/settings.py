from fastapi import APIRouter

router = APIRouter(prefix="/settings", tags=["settings"])

DEFAULT_SETTINGS = {
    "name": "Restaurant Le Divino",
    "city": "Agde",
    "phone": "+33 0 00 00 00 00",
}


@router.get("/public")
def public_settings():
    return DEFAULT_SETTINGS


@router.patch("/admin")
def update_settings(payload: dict):
    return {"updated": True, "settings": payload}

