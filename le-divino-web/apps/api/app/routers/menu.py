from fastapi import APIRouter

router = APIRouter(prefix="/menu", tags=["menu"])


@router.get("/categories")
def list_categories():
    return [{"id": "entrees", "name": "Entrées", "order": 1}]


@router.get("/items")
def list_items():
    return []


@router.post("/categories")
def create_category():
    return {"created": True}


@router.post("/items")
def create_item():
    return {"created": True}


@router.patch("/items/{item_id}")
def update_item(item_id: str):
    return {"updated": True, "item_id": item_id}


@router.delete("/items/{item_id}")
def delete_item(item_id: str):
    return {"deleted": True, "item_id": item_id}

