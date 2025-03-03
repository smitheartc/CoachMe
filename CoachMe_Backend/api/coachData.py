from flask_restful import Api, Resource, reqparse
import json

class coachApi(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('userID', type=int)
        args = parser.parse_args()

        userID = args['userID']

        print(userID)

        #replace this part with actual database functionality later
        #rn the user ID is just their place in the array minus one, later have a real field for it in the DB

        with open('api/sampleCoaches.json', 'r') as file:
            data = json.load(file)
            
        return data["coaches"][userID-1]
        
