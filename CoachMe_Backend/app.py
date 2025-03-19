from flask import Flask
from flask_restful import Api
from flask_cors import CORS #comment this on deployment
from api.coachSearch import searchApi
from api.getCoachData import coachApi
from prisma import Prisma, register

db = Prisma()
db.connect()
register(db)
app = Flask(__name__)
api = Api(app)
CORS(app) #comment this on deployment

api.add_resource(searchApi, '/coachFinder/search/')
api.add_resource(coachApi, '/coachFinder/data/')


