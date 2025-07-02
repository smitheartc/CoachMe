from flask import Flask, jsonify
from flask_restful import Api
from flask_cors import CORS #comment this on deployment
from api.coachSearch import searchApi
from api.getCoachData import coachApi
from api.createBooking import bookingApi
from api.createCoach import CoachApi
from api.createClient import ClientApi
from api.createTeam import TeamApi
from prisma import Prisma, register

db = Prisma()
db.connect()
register(db)
app = Flask(__name__)
api = Api(app)
CORS(app) #comment this on deployment

# Simple test route
@app.route('/')
def home():
    return jsonify({"message": "CoachMe API is running!", "status": "success"})

# Test endpoint
@app.route('/test')
def test():
    return jsonify({"message": "Test endpoint working!", "endpoints": [
        "/coachFinder/search/",
        "/coachFinder/data/", 
        "/booking/create/",
        "/coach/create/",
        "/client/create/",
        "/team/create/"
    ]})

api.add_resource(searchApi, '/coachFinder/search/', endpoint='coach_search')
api.add_resource(coachApi, '/coachFinder/data/', endpoint='coach_data')
api.add_resource(bookingApi, '/booking/create/', endpoint='booking_create')
api.add_resource(CoachApi, '/coach/create/', endpoint='coach_create')
api.add_resource(ClientApi, '/client/create/', endpoint='client_create')
api.add_resource(TeamApi, '/team/create/', endpoint='team_create')

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)


