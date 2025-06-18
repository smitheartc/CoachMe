from flask_restful import Resource, reqparse
from prisma.models import Booking, Client, Coach
from datetime import datetime

class bookingApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('clientId', type=int, required=True)
        parser.add_argument('coachId', type=int, required=True)
        parser.add_argument('bookingTime', type=str, required=True)  # ISO format string
        args = parser.parse_args()

        # Parse bookingTime to datetime
        try:
            booking_time = datetime.fromisoformat(args['bookingTime'])
        except Exception as e:
            return {'error': f'Invalid bookingTime format: {e}'}, 400

        # Create the booking in the database
        try:
            booking = Booking.prisma().create(
                data={
                    'clientId': args['clientId'],
                    'coachId': args['coachId'],
                    'bookingTime': booking_time,
                }
            )
            return {'message': 'Booking created successfully', 'booking': booking.dict()}
        except Exception as e:
            return {'error': str(e)}, 500
        
