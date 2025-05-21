from flask_restful import Resource, reqparse
from modelspeewee import Client, Booking
from datetime import datetime

class bookingApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('age', type=int, required=True)
        parser.add_argument('location', type=str, required=True)  # e.g. "32.7767,-96.7970"
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('sport', type=str, required=True)
        parser.add_argument('skill', type=int, required=True)
        parser.add_argument('coachId', type=int, required=True)
        parser.add_argument('datetime', type=str, required=True)  # ISO format

        args = parser.parse_args()

        try:
            lat, lng = map(float, args['location'].split(','))
        except ValueError:
            return {'error': 'Invalid location format. Use "lat,lng".'}, 400

        # Create the Client
        client = Client.create(
            created_at=datetime.now(),
            email=f"auto-{datetime.now().timestamp()}@example.com",  # Auto-generated dummy email
            name=args['name'],
            age=args['age'],
            location1=lat,
            location2=lng,
            sport=args['sport'],
            skill=args['skill'],
            position=None
        )

        # Create the Booking
        Booking.create(
            client=client.id,
            coach=args['coachId'],
            booking_time=datetime.fromisoformat(args['datetime']),
            created_at=datetime.now()
        )

        return {'message': 'Client and booking created successfully', 'clientId': client.id}, 201
