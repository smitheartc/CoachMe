from flask_restful import Api, Resource, reqparse
from prisma.models import Coach

class searchApi(Resource):
    def get(self):
        """Get all coaches - useful for testing"""
        try:
            coaches = Coach.prisma().find_many()
            
            # Convert to list of dictionaries, excluding sensitive fields
            coach_list = []
            for coach in coaches:
                coach_dict = coach.dict()
                # Remove fields we don't want to expose
                del coach_dict['createdAt']
                del coach_dict['bookings']
                # Convert image bytes to base64 if it exists
                if coach_dict.get('image'):
                    import base64
                    coach_dict['image'] = base64.b64encode(coach_dict['image']).decode('utf-8')
                coach_list.append(coach_dict)
            
            return {'coaches': coach_list, 'count': len(coach_list)}
            
        except Exception as e:
            return {'error': str(e)}, 500

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('sportType', type=str)
        parser.add_argument('availability', type=dict)
        parser.add_argument('rateMin', type=float)
        parser.add_argument('rateMax', type=float)
        parser.add_argument('location', type=str)
        parser.add_argument('speciality', type=str)

        args = parser.parse_args()
        
        # Build the where clause for the database query
        where_conditions = {}
        
        if args['sportType']:
            where_conditions['sport'] = args['sportType']
            
        if args['speciality']:
            where_conditions['speciality'] = args['speciality']
            
        if args['rateMin'] is not None or args['rateMax'] is not None:
            rate_filter = {}
            if args['rateMin'] is not None:
                rate_filter['gte'] = args['rateMin']
            if args['rateMax'] is not None:
                rate_filter['lte'] = args['rateMax']
            where_conditions['rate'] = rate_filter

        # Query the database for coaches
        try:
            coaches = Coach.prisma().find_many(where=where_conditions)
            
            # Convert to list of dictionaries, excluding sensitive fields
            coach_list = []
            for coach in coaches:
                coach_dict = coach.dict()
                # Remove fields we don't want to expose
                del coach_dict['createdAt']
                del coach_dict['bookings']
                # Convert image bytes to base64 if it exists
                if coach_dict.get('image'):
                    import base64
                    coach_dict['image'] = base64.b64encode(coach_dict['image']).decode('utf-8')
                coach_list.append(coach_dict)
            
            return {'coaches': coach_list, 'count': len(coach_list)}
            
        except Exception as e:
            return {'error': str(e)}, 500   