import os
import json

from dotenv import load_dotenv, find_dotenv
from bson.json_util import dumps

from flask import Flask, Blueprint

from flask_restful import Api, Resource
from flask_cors import CORS

import app.Database.mongo as Mongodb



app = Flask(__name__)
api_bp = Blueprint('api', __name__)
api = Api(api_bp)
cors = CORS(app)

load_dotenv(find_dotenv())
user = os.getenv('MONGO_USER')
password = os.getenv('MONGO_PASS')
new_connection = Mongodb.MongoDatabase("websitedb", user, password)



import app.API.social as MySocials
import app.API.header_section as MyHeaders
import app.API.content as MyContent
import app.API.images as MyImages
api.add_resource(MySocials.Social, "/social")
api.add_resource(MyHeaders.Header, "/header")
api.add_resource(MyContent.Content, "/content/<string:project>")
api.add_resource(MyImages.Images, "/images/<string:project>")


app.register_blueprint(api_bp)

