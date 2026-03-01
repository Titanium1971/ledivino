from pymongo import MongoClient
from pymongo.collection import Collection

from app.config import settings

_client: MongoClient | None = None


def get_mongo_client() -> MongoClient:
    global _client
    if _client is None:
        _client = MongoClient(settings.mongo_url, serverSelectionTimeoutMS=1500)
    return _client


def get_collection(name: str) -> Collection:
    client = get_mongo_client()
    return client[settings.mongo_db][name]

