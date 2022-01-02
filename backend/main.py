import os

from dotenv import load_dotenv, find_dotenv

from flask import Flask
from flask_restful import Api, Resource
import Database.mongo as Mongodb
from bson.json_util import dumps



app = Flask(__name__)
api = Api(app)

load_dotenv(find_dotenv())
user = os.getenv('MONGO_USER')
password = os.getenv('MONGO_PASS')
new_connection = Mongodb.MongoDatabase("websitedb", user, password)

class Social(Resource):
    def get(self):
        cursor  = new_connection.db["social"].find({},{"_id":0, "name":1,"icon":1,"link":1})
        list_cur = list(cursor)
        json_data = dumps(list_cur)
        return json_data

api.add_resource(Social, "/")

if __name__ == "__main__":
    app.run(debug=True)

