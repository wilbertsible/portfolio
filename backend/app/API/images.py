from flask import jsonify
from flask_restful import Resource
from app import new_connection
import base64
import json
import gridfs

class Images(Resource):
    def get(self, project):
        fs = gridfs.GridFS(new_connection.db)
        query = {}
        query['metadata.projectName'] = project
        cursor = new_connection.db['fs.files'].find(query,{"_id":1, "filename":1})
        list_cur = list(cursor)
        imageList = []
        for item in list_cur:
            imageItem = {}
            imageItem['filename'] = item['filename']
            imageItem['image'] = base64.b64encode(fs.get(item['_id']).read()).decode('utf-8')
            imageList.append(imageItem)
            json_data = json.dumps(imageList)
        return json_data
