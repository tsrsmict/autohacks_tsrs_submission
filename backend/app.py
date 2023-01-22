from flask import Flask, request, jsonify
# from functions.login import submit_form
# from functions.signup import signup_form
from utils.emai_check import check_email
app = Flask(__name__)
from utils.emai_check import check_email
from utils.openai_utils import gen_summary, gen_questions, gen_response
# import utils.config as cfg
emaildata = check_email()
emails = []
for i in emaildata:
    email = i['email-body']
    emails.append(email)


# @app.route('/submitform', methods=['POST'])
# def submitform():
#     var = submit_form()
#     return var

# @app.route('/signup', methods=['POST'])
# def signupform_():
#     var = signup_form()
#     return var
@app.route('/summary', methods=['GET'])
def checkemail():
    return {"message":gen_summary(emails)}

@app.route('/questions', methods=['GET'])
def questions():
    message = []
    for i in emails:
        quest = {'questions   ': gen_questions(i)}
    message.append(quest)
    return {"message":message}
if __name__ == '__main__':
    app.run(debug=True, port=5000)