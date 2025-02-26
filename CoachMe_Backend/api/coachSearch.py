from flask_restful import Api, Resource, reqparse

class searchApi(Resource):
    def post(self):
        reqparser = reqparse.RequestParser()

        
        reqparser.add_argument('sportType', type=int)
        reqparser.add_argument('availability', type=dict)
        reqparser.add_argument('rateMin', type=str)
        reqparser.add_argument('rateMax', type=str)
        reqparser.add_argument('location', type=str)

        # insert some query from database of coaches 

        

        args = reqparser.parse_args()   