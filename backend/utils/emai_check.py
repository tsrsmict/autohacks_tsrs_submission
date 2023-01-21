import imaplib
import email
from flask import request, jsonify
servers = {'gmail': 'imap.gmail.com',
            'yahoo': 'imap.mail.yahoo.com',
           'zoho': 'imap.zoho.com',
           'outlook': 'outlook.office365.com',
           'aol': 'imap.aol.com'
        }

def check_email():
    # Get the form data from the request
    data = request.get_json()
    
    server = data['server']
    email = data['email']
    password = data['password']
    imap = imaplib.IMAP4_SSL('imap.gmail.com')
    try :
        imap.login(email, password)
        return jsonify({'status': 'success'})
    except:
        return jsonify({'status': 'error'})
