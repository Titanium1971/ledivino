from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    api_name: str = "Le Divino API"
    api_version: str = "0.1.0"
    mongo_url: str = "mongodb://mongo:27017"
    mongo_db: str = "le_divino"
    jwt_secret: str = "change-me"
    admin_email: str = "admin@ledivino.fr"
    admin_password: str = "change-me-now"
    google_reviews_mode: str = "mock"
    openai_api_key: str | None = None

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()

