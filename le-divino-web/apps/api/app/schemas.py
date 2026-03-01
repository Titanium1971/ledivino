from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)


class ReservationCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=6, max_length=32)
    datetime: datetime
    guests: int = Field(ge=1, le=20)
    message: str | None = Field(default=None, max_length=500)


class ReservationStatusUpdate(BaseModel):
    status: str = Field(pattern="^(pending|confirmed|cancelled|seated)$")


class EventPayload(BaseModel):
    title: str = Field(min_length=3, max_length=160)
    description: str = Field(min_length=10, max_length=4000)
    starts_at: datetime
    ends_at: datetime | None = None
    published: bool = False
