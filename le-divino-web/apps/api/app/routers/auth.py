from fastapi import APIRouter, HTTPException

from app.config import settings
from app.schemas import LoginRequest

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/login")
def login(payload: LoginRequest):
    if payload.email != settings.admin_email or payload.password != settings.admin_password:
        raise HTTPException(status_code=401, detail="Identifiants invalides")
    return {"access_token": "bootstrap-access-token", "refresh_token": "bootstrap-refresh-token"}


@router.post("/refresh")
def refresh_token():
    return {"access_token": "bootstrap-access-token-refreshed"}


@router.get("/me")
def me():
    return {"email": settings.admin_email, "roles": ["admin"]}

