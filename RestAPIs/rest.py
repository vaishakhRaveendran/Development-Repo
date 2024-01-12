from flask import Flask,request
from flask_restful import Api,Resource,reqparse,abort

#Wrapping the api over the app
app = Flask(__name__)
api = Api(app)

#Video put argument parser
video_put_args=reqparse.RequestParser()
video_put_args.add_argument("name",type=str,help="Name of the video",required=True)
video_put_args.add_argument("views",type=int,help="Views of the video",required=True)
video_put_args.add_argument("likes",type=int,help="Likes of the video",required=True)

videos = {}
class Video(Resource):
    def get(self, video_id):
        if video_id in videos:
            return videos[video_id]
        else:
            abort(404,message="video id is not valid")

    def post(self, video_id):
        if video_id in videos:
            return {"error": "Video already exists"}, 400

        args = video_put_args.parse_args()
        videos[video_id] = args
        return videos[video_id], 201

    def delete(self,video_id):
        if video_id in videos:
            del videos[video_id]
            return '',204
        else:
            abort(404, message="video not found")

api.add_resource(Video, "/video/<int:video_id>")

if __name__ == '__main__':
    app.run(debug=True)