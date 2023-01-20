from flask import Flask, request, jsonify

app = Flask(_name_)

@app.route('/submitform', methods=['POST'])
def submit_form():
    # Get the form data from the request
    data = request.get_json()

    # Extract the form fields from the data
    name = data['name']
    email = data['email']

    # Do something with the form data, like saving it to a database
    # ...

    # Return a response to the frontend
    return jsonify({'status': 'success'})

if _name_ == '_main_':
    app.run(port=5000)