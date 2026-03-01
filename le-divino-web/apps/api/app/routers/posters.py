from fastapi import APIRouter

router = APIRouter(prefix="/posters", tags=["posters"])


@router.post("/generate")
def generate_poster(payload: dict):
    return {"generated": True, "mocked": True, "params": payload}


@router.get("/history")
def posters_history():
    return []

