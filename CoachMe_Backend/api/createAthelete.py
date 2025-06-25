from flask_restful import Api, Resource, reqparse
from prisma.models import Client

class bookingApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('age', type=int)
        parser.add_argument('location', type=str) #convert into lat and long
        parser.add_argument('name', type=str) 
        parser.add_argument('sport', type=str)
        parser.add_argument('skill', type=int)

        

        args = parser.parse_args()

        clientId = args['clientId']
        coachId = args['coachId']
        time = args['datetime']        

        Booking.prisma().create(
            data={
                'clientId' : clientId,
                'coachId' : coachId,
                'bookingTime' : time
            }
        )
        
