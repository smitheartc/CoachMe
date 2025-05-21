from flask_restful import Resource, reqparse
from modelspeewee import Coach
from playhouse.shortcuts import model_to_dict

class searchApi(Resource):
    def post(self):
        reqparser = reqparse.RequestParser()
        reqparser.add_argument('sportType', type=str)
        reqparser.add_argument('availability', type=dict)  # Not used here, unless specified
        reqparser.add_argument('rateMin', type=str)
        reqparser.add_argument('rateMax', type=str)
        reqparser.add_argument('location', type=str)  # Not used here unless geolocation is implemented

        args = reqparser.parse_args()

        # Build dynamic query filters
        query = Coach.select()

        if args['sportType']:
            query = query.where(Coach.sport == args['sportType'])

        if args['rateMin']:
            query = query.where(Coach.rate >= float(args['rateMin']))

        if args['rateMax']:
            query = query.where(Coach.rate <= float(args['rateMax']))

        # You could add location-based filtering here if you store zip codes or use geo-coords

        # Convert results to list of dicts
        coach_list = [model_to_dict(coach, exclude=[Coach.image]) for coach in query]

        return {'results': coach_list}, 200
