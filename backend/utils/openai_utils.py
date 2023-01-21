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

def gen_response(email:str,question:str,option:str):
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt= email+ "\nGenerate a sample response to this email based on the  parameters.",
    temperature=0.6,
    max_tokens=500,
    top_p=1,
    frequency_penalty=0.5,
    presence_penalty=0
    )
    return response.choices[0].text.strip()