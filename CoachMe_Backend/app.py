from flask import Flask
from flask_restful import Api
from flask_cors import CORS  # comment this on deployment

# Import your Peewee models and initialize the DB connection
from modelspeewee import db
from api.coachSearch import searchApi
from api.getCoachData import coachApi
from api.createBooking import bookingApi

# Initialize Flask app and API
app = Flask(__name__)
api = Api(app)
CORS(app)  # comment this on deployment

# Register API routes
api.add_resource(searchApi, '/coachFinder/search/')
api.add_resource(coachApi, '/coachFinder/data/')
api.add_resource(bookingApi, '/booking/create/')

# Open and close DB connections properly
@app.before_request
def _db_connect():
    if db.is_closed():
        db.connect()

@app.teardown_request
def _db_close(exception=None):
    if not db.is_closed():
        db.close()

# Optional: Run the app
if __name__ == '__main__':
    app.run(debug=True)
