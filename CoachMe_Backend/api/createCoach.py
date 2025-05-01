from flask_restful import Resource, reqparse
from prisma.models import Coach
from prisma.errors import PrismaError

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
        # image and createdAt are optional/auto-handled

        args = parser.parse_args()

        try:
            coach = Coach.prisma().create(
                data={
                    'email': args['email'],
                    'name': args['name'],
                    'location1': args['location1'],
                    'location2': args['location2'],
                    'blurb': args['blurb'],
                    'sport': args['sport'],
                    'speciality': args['speciality'],
                    'rate': args['rate']
                    # 'image': ... (optional: handle if you support image upload)
                }
            )
            return {
                'message': 'Coach created successfully',
                'coach': coach
            }, 201

        except PrismaError as e:
            return {
                'message': 'Failed to create coach',
                'error': str(e)
            }, 500
