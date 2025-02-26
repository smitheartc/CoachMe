from flask import Flask
from flask_restful import Api
from flask_cors import CORS #comment this on deployment
from api.coachSearch import searchApi

app = Flask(__name__)
api = Api(app)
CORS(app) #comment this on deployment

api.add_resource(searchApi, 'coachFinder/search/')





