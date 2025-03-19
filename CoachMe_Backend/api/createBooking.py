from flask_restful import Api, Resource, reqparse
from prisma.models import Booking

class bookingApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('clientId', type=int)
        parser.add_argument('coachId', type=int)
        parser.add_argument('datetime', type=To_Be_Determined) 

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
        
