from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.routers import auth, events, health, menu, posters, reservations, reviews, settings as app_settings, signage, uploads

app = FastAPI(title=settings.api_name, version=settings.api_version)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(auth.router)
app.include_router(menu.router)
app.include_router(reservations.router)
app.include_router(events.router)
app.include_router(uploads.router)
app.include_router(app_settings.router)
app.include_router(reviews.router)
app.include_router(posters.router)
app.include_router(signage.router)


@app.get("/")
def root():
    return {"name": settings.api_name, "version": settings.api_version}

