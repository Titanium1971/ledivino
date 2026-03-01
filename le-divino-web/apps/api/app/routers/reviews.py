from fastapi import APIRouter

from app.config import settings

router = APIRouter(prefix="/reviews", tags=["reviews"])


@router.get("/google")
def list_google_reviews():
    return {"mode": settings.google_reviews_mode, "reviews": []}


@router.post("/google/sync")
def sync_google_reviews():
    return {"synced": True, "mode": settings.google_reviews_mode}

