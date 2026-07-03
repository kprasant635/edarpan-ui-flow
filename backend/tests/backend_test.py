import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://edarpan-design.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert r.json() == {"message": "Hello World"}


def test_create_status(api):
    payload = {"client_name": "TEST_client_1"}
    r = api.post(f"{BASE_URL}/api/status", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert data["client_name"] == "TEST_client_1"
    assert "id" in data and isinstance(data["id"], str)
    assert "timestamp" in data


def test_list_status_contains_created(api):
    payload = {"client_name": "TEST_client_persist"}
    c = api.post(f"{BASE_URL}/api/status", json=payload)
    assert c.status_code == 200
    created_id = c.json()["id"]

    r = api.get(f"{BASE_URL}/api/status")
    assert r.status_code == 200
    lst = r.json()
    assert isinstance(lst, list)
    assert any(item["id"] == created_id for item in lst)


def test_create_status_missing_field(api):
    r = api.post(f"{BASE_URL}/api/status", json={})
    assert r.status_code == 422
