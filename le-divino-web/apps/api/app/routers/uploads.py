from fastapi import APIRouter, File, UploadFile

router = APIRouter(prefix="/uploads", tags=["uploads"])


@router.post("")
async def upload_asset(file: UploadFile = File(...)):
    return {"filename": file.filename, "content_type": file.content_type}

