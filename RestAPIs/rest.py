from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort
from flask_sqlalchemy import SQLAlchemy

# Wrapping the API over the app
app = Flask(__name__)
api = Api(app)
#Creating a new db
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///database.db'
db = SQLAlchemy(app)
db.create_all()

# Video put argument parser
video_put_args = reqparse.RequestParser()
video_put_args.add_argument("name", type=str, help="Name of the video", required=True)
video_put_args.add_argument("views", type=int, help="Views of the video", required=True)
video_put_args.add_argument("likes", type=int, help="Likes of the video", required=True)

videos = {}

def abort_if_video_id_not_exist(video_id):
    if video_id not in videos:
        abort(404, message="Video ID does not exist")


def abort_if_video_id_exist(video_id):
    if video_id in videos:
        abort(404, message="Video ID already exists")


class Video(Resource):
    def get(self, video_id):
        abort_if_video_id_not_exist(video_id)
        return videos[video_id]

    def post(self, video_id):
        abort_if_video_id_exist(video_id)
        args = video_put_args.parse_args()
        videos[video_id] = args
        return videos[video_id], 201

    def delete(self, video_id):
        abort_if_video_id_not_exist(video_id)
        del videos[video_id]
        return '', 204


api.add_resource(Video, "/video/<int:video_id>")

if __name__ == '__main__':
    app.run(debug=True)
