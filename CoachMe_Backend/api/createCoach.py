from flask_restful import Resource, reqparse
from prisma.models import Coach
from prisma.errors import PrismaError

class CoachApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str, required=True, help="Email is required")
        parser.add_argument('firstName', type=str, required=True, help="First Name is required")
        parser.add_arguement('lastName', type=str, required=True, help="Last Name is required")
        parser.add_argument('presentAddress', type=float, required=True, help="Present address (lat) is required")
        parser.add_arguement('city', type=str, required=True, help="City is required")
        parser.add_arguement('state', type=str, required=True, help="State is required")
        parser.add_argument('bookingAddress', type=float, required=True, help="Booking Address (long) is required")
        parser.add_argument('blurb', type=str, required=True, help="Blurb is required")
        parser.add_argument('sport', type=str, required=True, help="Sport is required")
        parser.add_argument('speciality', type=str, required=True, help="Speciality is required")
        parser.add_argument('clubAffiliation', type=str, required=True, help="Club Affiliation is required")
        # image and createdAt are optional/auto-handled

        args = parser.parse_args()

        try:
            coach = Coach.prisma().create(
                data={
                    'email': args['email'],
                    'firstName': args['firstName'],
                    'lastName': args['lastName'],
                    'presentAddress': args['presentAddress'],
                    'city': args['city'],
                    'state': args['state'],
                    'bookingAddress': args['bookingAddress'],
                    'blurb': args['blurb'],
                    'sport': args['sport'],
                    'speciality': args['speciality'],
                    'clubAffiliation': args['clubAffiliation']
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
