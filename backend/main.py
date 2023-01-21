from flask import Flask, request, jsonify

app = Flask(_name_)

@app.route('/submitform', methods=['POST'])
def submitform():
    var = submit_form()
    return var

@app.route('/signup', methods=['POST'])
def signupform_():
    var = signup_form()
    return var
if __name__ == '__main__':
    app.run(debug=True, port=5000)