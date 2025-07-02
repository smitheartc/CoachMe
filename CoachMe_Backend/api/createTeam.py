from flask_restful import Resource, reqparse
from prisma.models import Team
from prisma.errors import PrismaError

class TeamApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('firstName', type=str, required=True, help="First name is required")
        parser.add_argument('lastName', type=str, required=True, help="Last name is required")
        parser.add_argument('clubName', type=str, required=True, help="Club name is required")
        parser.add_argument('email', type=str, required=True, help="Email is required")
        parser.add_argument('address', type=str, required=True, help="Address is required")
        parser.add_argument('city', type=str, required=True, help="City is required")
        parser.add_argument('state', type=str, required=True, help="State is required")
        parser.add_argument('zipcode', type=str, required=True, help="Zipcode is required")
        parser.add_argument('sport', type=str, required=True, help="Sport is required")
        parser.add_argument('age', type=str, required=True, help="Age group is required")
        parser.add_argument('skill', type=str, required=True, help="Skill level is required")

        args = parser.parse_args()

        try:
            team = Team.prisma().create(
                data={
                    'firstName': args['firstName'],
                    'lastName': args['lastName'],
                    'clubName': args['clubName'],
                    'email': args['email'],
                    'address': args['address'],
                    'city': args['city'],
                    'state': args['state'],
                    'zipcode': args['zipcode'],
                    'sport': args['sport'],
                    'age': args['age'],
                    'skill': args['skill']
                }
            )
            return {
                'message': 'Team created successfully',
                'team': team
            }, 201

        except PrismaError as e:
            return {
                'message': 'Failed to create team',
                'error': str(e)
            }, 500 