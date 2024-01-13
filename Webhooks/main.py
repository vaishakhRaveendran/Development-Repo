from flask import Flask,request

app = Flask(__name__)

#We want this function to be called when something happens.
#We got a remote server which notify us about an event by calling this function without us asking..

@app.route('/webhookcallback',methods=['POST'])
def hook():
    print(request.data)
    return "Hello world"

if __name__ == "__main__" :
    app.run(debug=True)