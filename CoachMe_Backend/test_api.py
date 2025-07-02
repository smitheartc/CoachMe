import requests
import json
import time

# Test Create Coach API
def test_create_coach():
    url = "http://127.0.0.1:5000/coach/create/"
    data = {
        "email": "coach@example.com",
        "name": "John Coach",
        "location1": 40.7128,
        "location2": -74.0060,
        "blurb": "Experienced soccer coach with 10+ years of experience",
        "sport": "Soccer",
        "speciality": "Youth Development",
        "rate": 50.0
    }
    
    try:
        print("Testing Coach Creation API...")
        response = requests.post(url, json=data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        print("-" * 50)
        return response.status_code == 201
    except requests.exceptions.ConnectionError:
        print("❌ Connection Error: Flask server is not running!")
        print("Please start the Flask server with: python app.py")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

# Test Create Client API
def test_create_client():
    url = "http://127.0.0.1:5000/client/create/"
    data = {
        "age": 25,
        "location": "New York, NY",
        "name": "Jane Client",
        "sport": "Soccer",
        "skill": 5,
        "email": "client@example.com"
    }
    
    try:
        print("Testing Client Creation API...")
        response = requests.post(url, json=data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        print("-" * 50)
        return response.status_code == 201
    except requests.exceptions.ConnectionError:
        print("❌ Connection Error: Flask server is not running!")
        print("Please start the Flask server with: python app.py")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

# Test Create Team API
def test_create_team():
    url = "http://127.0.0.1:5000/team/create/"
    data = {
        "firstName": "Mike",
        "lastName": "Manager",
        "clubName": "Elite Soccer Club",
        "email": "team@example.com",
        "address": "123 Sports Ave",
        "city": "New York",
        "state": "NY",
        "zipcode": "10001",
        "sport": "Soccer",
        "age": "U16",
        "skill": "Advanced"
    }
    
    try:
        print("Testing Team Creation API...")
        response = requests.post(url, json=data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        print("-" * 50)
        return response.status_code == 201
    except requests.exceptions.ConnectionError:
        print("❌ Connection Error: Flask server is not running!")
        print("Please start the Flask server with: python app.py")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

# Test Get All Endpoints
def test_endpoints():
    endpoints = [
        "http://127.0.0.1:5000/",
        "http://127.0.0.1:5000/test",
        "http://127.0.0.1:5000/coachFinder/search/",
        "http://127.0.0.1:5000/coachFinder/data/"
    ]
    
    print("Testing GET Endpoints...")
    for endpoint in endpoints:
        try:
            response = requests.get(endpoint, timeout=5)
            print(f"✅ GET {endpoint}: {response.status_code}")
            if response.status_code == 200:
                print(f"   Response: {response.json()}")
        except requests.exceptions.ConnectionError:
            print(f"❌ GET {endpoint}: Connection refused")
        except Exception as e:
            print(f"❌ GET {endpoint}: {e}")
    print("-" * 50)

def main():
    print("🚀 Testing CoachMe API Endpoints...")
    print("=" * 60)
    
    # Test GET endpoints first
    test_endpoints()
    
    # Test POST endpoints
    coach_success = test_create_coach()
    client_success = test_create_client()
    team_success = test_create_team()
    
    print("📊 Test Results Summary:")
    print(f"Coach Creation: {'✅ PASS' if coach_success else '❌ FAIL'}")
    print(f"Client Creation: {'✅ PASS' if client_success else '❌ FAIL'}")
    print(f"Team Creation: {'✅ PASS' if team_success else '❌ FAIL'}")
    
    if coach_success and client_success and team_success:
        print("\n🎉 All tests passed! Your signup pages are ready to connect.")
        print("You can now test the signup forms in your React frontend.")
    else:
        print("\n⚠️  Some tests failed. Please check your Flask server and API endpoints.")

if __name__ == "__main__":
    main() 