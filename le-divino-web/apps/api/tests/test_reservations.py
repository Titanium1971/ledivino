from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_create_list_update_reservation_flow():
    create_response = client.post(
        "/reservations",
        json={
            "name": "Client Test",
            "email": "client@test.fr",
            "phone": "+33400000000",
            "datetime": "2026-03-05T19:30:00",
            "guests": 2,
            "message": "Table près de la fenêtre",
        },
    )
    assert create_response.status_code == 200
    payload = create_response.json()
    assert payload["created"] is True
    reservation_id = payload["reservation"]["id"]

    list_response = client.get("/reservations/admin")
    assert list_response.status_code == 200
    reservations = list_response.json()
    assert any(item["id"] == reservation_id for item in reservations)

    update_response = client.patch(f"/reservations/admin/{reservation_id}/status", json={"status": "confirmed"})
    assert update_response.status_code == 200
    assert update_response.json()["reservation"]["status"] == "confirmed"

