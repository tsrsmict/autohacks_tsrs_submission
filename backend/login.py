from flask import request, jsonify
import pyrebase
import json
pwd = ""
email = ""
status = 'success'
config = {
  "apiKey": "AIzaSyDsBhvO4xXaooczwS88tdHNbIhI5mOPmm4",
  "authDomain": "autohacks-645db.firebaseapp.com",
  "projectId": "autohacks-645db",
  "storageBucket": "autohacks-645db.appspot.com",
  "messagingSenderId": "812457136452",
  "appId": "1:812457136452:web:1da970066592261e408711",
  "measurementId": "G-C9SR363XR8",
  "databaseURL": "https://autohacks-645db-default-rtdb.firebaseio.com/"
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

def submit_form():
    # Get the form data from the request
    data = request.get_json()

    # Extract the form fields from the data
    pwd = data['pwd']
    email = data['email']

    # Do something with the form data, like saving it to a database
    # ...
    # Return a response to the frontend
    
    try:
        auth.sign_in_with_email_and_password(email, pwd)
        return jsonify({'status': 'success'})
    except:
        return jsonify({'status': 'error'})

