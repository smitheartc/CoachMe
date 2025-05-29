from flask_restful import Resource, reqparse
from modelspeewee import Booking, Client, Coach
from datetime import datetime

class bookingApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('clientId', type=int, required=True)
        parser.add_argument('coachId', type=int, required=True)
        parser.add_argument('datetime', type=str, required=True)  # Expecting ISO format string

        args = parser.parse_args()

        client_id = args['clientId']
        coach_id = args['coachId']
        booking_time = datetime.fromisoformat(args['datetime'])

        # Create the booking
        Booking.create(
            client=client_id,
            coach=coach_id,
            booking_time=booking_time,
            created_at=datetime.now()
        )

        return {'message': 'Booking created successfully'}, 201
