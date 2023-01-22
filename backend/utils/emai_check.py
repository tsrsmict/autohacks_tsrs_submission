import imaplib
import email
from email.header import decode_header
import webbrowser
import os


username = "iamanerdynerdn@gmail.com"
password = "absxssnbhtgjeqxz"

imap_server = "imap.gmail.com"

emaildata = []
def check_email():
    # create an IMAP4 class with SSL 
    imap = imaplib.IMAP4_SSL(imap_server)
    # authenticate
    imap.login(username, password)  
    status, messages = imap.select("INBOX")
    # number of top emails to fetch
    N = 5    # total number of emails
    messages = int(messages[0])

    for i in range(messages, messages-N, -1):
        # fetch the email message by ID
        res, msg = imap.fetch(str(i), "(RFC822)")
        for response in msg:
            if isinstance(response, tuple):
                # parse a bytes email into a message object
                msg = email.message_from_bytes(response[1])
                # decode the email subject
                subject, encoding = decode_header(msg["Subject"])[0]
                if isinstance(subject, bytes):
                    # if it's a bytes, decode to str
                    subject = subject.decode(encoding)
                # decode email sender
                From, encoding = decode_header(msg.get("From"))[0]
                if isinstance(From, bytes):
                    From = From.decode('utf-8')
                emailinfo = {
                    "subject": subject,
                    "from": From
                }
                # if the email message is multipart
                if msg.is_multipart():
                    # iterate over email parts
                    for part in msg.walk():
                        # extract content type of email
                        content_type = part.get_content_type()
                        content_disposition = str(part.get("Content-Disposition"))
                        try:
                            # get the email body
                            body = part.get_payload(decode=True).decode()
                        except:
                            pass
                        if content_type == "text/plain" and "attachment" not in content_disposition:
                            # print text/plain emails and skip attachments

                            emailinfo["email-body"] = body
                        
                else:
                    # extract content type of email
                    content_type = msg.get_content_type()
                    # get the email body
                    body = msg.get_payload(decode=True).decode()
                    if content_type == "text/plain":
                        # print only text email parts
                        emailinfo["email-body"] = body

                
                # print("="*100)
        emaildata.append(emailinfo)
    # close the connection and logout
    imap.close()
    imap.logout()
    # print(emaildata)
    y=1
    for i in emaildata:
        try:
            body = i['email-body']
            for line in body:
                line = line.rstrip()
                line.replace("\r", "")
            i['email-body'] = body
            
        except:
            i['email-body'] = ""

        x = i["from"].split(" <")
    
        i['from'] = x[0]
        try: 
            i['from-email'] = x[1]
            i['from-email'] = i['from-email'].replace(">", "")
        except:
            emaildata.remove(i)

        y += 1
<<<<<<< HEAD
    return emaildata

=======
        print(emaildata)
        return emaildata
>>>>>>> 7ffec388aaf1afea74293e8343e49f21660e6720
