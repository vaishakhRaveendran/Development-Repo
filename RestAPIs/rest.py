from flask import Flask
from flask_restful import Api,Resource

app=Flask(__name__)
api=Api(app)

class helloworld(Resource):
    def get(self,name,verb):
        return {'name':f"Hello {name}",'verb':verb}
    def post(self):
        return {'data': "Posted"}


api.add_resource(helloworld,"/helloworld/<string:name>/<string:verb>")

if __name__=='__main__':
 app.run(debug=True)