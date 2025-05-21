from flask_restful import Resource, reqparse
from modelspeewee import Coach
from datetime import datetime
from playhouse.shortcuts import model_to_dict
from peewee import IntegrityError

class CoachApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str, required=True, help="Email is required")
        parser.add_argument('name', type=str)
        parser.add_argument('location1', type=float, required=True, help="Location1 (lat) is required")
        parser.add_argument('location2', type=float, required=True, help="Location2 (long) is required")
        parser.add_argument('blurb', type=str, required=True, help="Blurb is required")
        parser.add_argument('sport', type=str, required=True, help="Sport is required")
        parser.add_argument('speciality', type=str, required=True, help="Speciality is required")
        parser.add_argument('rate', type=float, required=True, help="Rate is required")

        args = parser.parse_args()

        try:
            coach = Coach.create(
                email=args['email'],
                name=args['name'],
                location1=args['location1'],
                location2=args['location2'],
                blurb=args['blurb'],
                sport=args['sport'],
                speciality=args['speciality'],
                rate=args['rate'],
                created_at=datetime.now()
                # You can later add 'image' if image uploads are supported
            )

            return {
                'message': 'Coach created successfully',
                'coach': model_to_dict(coach, exclude=[Coach.image])
            }, 201

        except IntegrityError as e:
            return {
                'message': 'Failed to create coach — likely due to duplicate email',
                'error': str(e)
            }, 400

        except Exception as e:
            return {
                'message': 'An unexpected error occurred',
                'error': str(e)
            }, 500
