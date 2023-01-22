import openai

import config as cfg
openai.api_key = cfg.OPEN_AI_KEY

def gen_questions(email:str):
# Is this a yes or a no mail?
# If yes, generate a yes or a no question for a hypothetical responder.
# Would you like going to the park on Friday?
# Generate yes or no MCQ answer options for this (Generate it in the form of a python list).
# ['Yes', 'No']
    questions=[]
    yes_no = openai.Completion.create(
    model="text-davinci-003",
    prompt= email+ "\nCan the response to this mail be yes or no? Return yes or no (without any punctuations or capitalization).",
    temperature=0.6,
    max_tokens=500,
    top_p=1,
    frequency_penalty=0.5,
    presence_penalty=0
    )
    yes_no = False if yes_no.choices[0].text.strip() == "no" else True
    if yes_no:
        yes_no_question = openai.Completion.create(
        model="text-davinci-003",
        prompt= email+ "\nGenerate a yes or a no question for a hypothetical responder to this email.",
        temperature=0.6,
        max_tokens=500,
        top_p=1,
        frequency_penalty=0.5,
        presence_penalty=0
        )
        questions.append({'question':yes_no_question.choices[0].text.strip(),'options':['Yes','No']})


# What should be the tone of this email
# Generate a list of 3-4 options for the tone of the email.
# ['Happy', 'Sad', 'Angry', 'Neutral']
    subject = openai.Completion.create(
# What should be the subject of this email
# Generate a list of 3-4 options for the subject of the email.
# ['Happy', 'Sad', 'Angry', 'Neutral']

# What is the setting of the email
# ['Work', 'Home', 'School', 'Other']

#Generate a sample response to this email based on the above parameters.
    model="text-davinci-003",
    prompt= email+ "\nWhat should be the subject to the response of this email? Generate a list of 4 options for the subject to the response to this email. Write the answer in a single line as a comma separated list.",
    temperature=0.6,
    max_tokens=500,
    top_p=1,
    frequency_penalty=0.5,
    presence_penalty=0
    )
    questions.append({'question':'What should be the subject of this email?','options':subject.choices[0].text.strip().split(',')})
    questions[1]['options'].append('Other')
    questions.append({'question':'What is the setting of the email?','options':['Work', 'Home', 'School', 'Other']})    
    questions.append({'question':'What should be the tone of this email?','options':['Happy', 'Sad', 'Angry', 'Neutral','Casual','Formal','Business','Other']})
    return questions

def gen_response(email:str,questions:list):
    doc = email+ "\n"+"The receiver of this email above was asked questions about the what their response would be to the email, the questions and the answers were as follows:\n"
    for question in questions:
        doc += "Questions: "+question['question'] + "\t"
        doc += "Answer:" + question['answer'] + "\n"
    doc += "Generate a response to this email based on the above parameters."   
    print(doc) 
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt= doc,
    temperature=0.6,
    max_tokens=500,
    top_p=1,
    frequency_penalty=0.5,
    presence_penalty=0
    )
    return response.choices[0].text.strip()

def gen_summary(email:list):
    emails = "\n\n".join(email)
    summary = openai.Completion.create(
    model="text-davinci-003",
    prompt=  "\nGenerate a 100 word morning brief about the important stuff in the following emails. Address the person to whom the mails are written as you."+emails,
    temperature=0.6,
    max_tokens=500,
    top_p=1,
    frequency_penalty=0.5,
    presence_penalty=0
    )
    return summary.choices[0].text.strip()

# print(gen_summary(["Hey John,\r\n\r\nJust a quick reminder that we are having a party next weekend at\r\nlocation], you're definitely on the guest list! Please let me know if\r\nyou're coming so I can make sure we have enough food and drinks.\r\n\r\nCan't wait to see you there!\r\n\r\nStacy\r\n","Dear John,\r\n\r\nI am writing to request your assistance with an order I recently placed\r\nwith your company. My order number is 09290822121 and it was placed on\r\n12/1/23. Unfortunately, I have run into some issues and I would like to\r\nrequest your help in resolving them.\r\n\r\nIf you could look into the matter and let me know what the next steps are,\r\nI would greatly\r\nappreciate it.\r\n\r\nThank you for your help and I look forward to hearing from you soon.\r\n\r\nSincerely,\r\nSmith\r\n","Dear All, We are excited to announce that the annual company picnic will be\r\nheld on Saturday, June 12th in Dubai. There will be food, games, and\r\nactivities for everyone to enjoy. Please RSVP by May 31st to\r\nshreedharraj.personal@gmail.com with the number of attendees from your\r\nteam. We look forward to seeing you all there! Best, Shreedhar Raj.\r\n","Hey John,\r\n\r\nLong time no see! How have you been? I was wondering if you're free for a\r\ncatch-up session over coffee sometime next week. Let me know what works for\r\nyou and we'll make it happen.\r\n\r\nTake care,\r\nRick\r\n"]))