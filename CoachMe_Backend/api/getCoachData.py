from flask_restful import Api, Resource, reqparse
from prisma.models import Coach

class coachApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('userID', type=int)
        args = parser.parse_args()

        userID = args['userID']

        coach = Coach.prisma().find_unique(where={'id' : userID}) # replace later with stuff
        returnDict = coach.dict()
        del returnDict["createdAt"]
        del returnDict["bookings"]
        return returnDict
        
