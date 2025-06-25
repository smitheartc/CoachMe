from flask_restful import Resource, reqparse
from prisma.models import Client
from prisma.errors import PrismaError

class ClientApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('age', type=int, required=True, help="Age is required")
        parser.add_argument('location', type=str, required=True, help="Location is required")
        parser.add_argument('name', type=str, required=True, help="Name is required")
        parser.add_argument('sport', type=str, required=True, help="Sport is required")
        parser.add_argument('skill', type=int, required=True, help="Skill level is required")
        parser.add_argument('email', type=str, required=True, help="Email is required")

        args = parser.parse_args()

        try:
            client = Client.prisma().create(
                data={
                    'age': args['age'],
                    'location': args['location'],
                    'name': args['name'],
                    'sport': args['sport'],
                    'skill': args['skill'],
                    'email': args['email']
                }
            )
            return {
                'message': 'Client created successfully',
                'client': client
            }, 201

        except PrismaError as e:
            return {
                'message': 'Failed to create client',
                'error': str(e)
            }, 500 