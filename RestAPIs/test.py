import requests

BASE = 'http://127.0.0.1:5000/'
data = {"likes": 10, "name": "Hot Desi Videos", "views": 1200}
response = requests.post(BASE + 'video/10',data)
print(response.json())
