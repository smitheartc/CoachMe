from flask_restful import Api, Resource, reqparse
from prisma.models import Coach  # Assuming you have this model

class createCoachApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('age', type=int, required=True)
        parser.add_argument('location', type=str, required=True)  # e.g., "Dallas, TX"
        parser.add_argument('sport', type=str, required=True)
        parser.add_argument('skill', type=int, required=True)

        args = parser.parse_args()

        coach = Coach.prisma().create(
            data={
                'name': args['name'],
                'age': args['age'],
                'location': args['location'],
                'sport': args['sport'],
                'skill': args['skill'],
            }
        )

        return {'status': 'success', 'coach': coach}, 201
