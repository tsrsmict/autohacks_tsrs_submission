import openai

import config as cfg
openai.api_key = cfg.OPEN_AI_KEY

def gen_response(email:str,mood:str):
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt= email+"stiff",
    temperature=0.6,
    max_tokens=500,
    top_p=1,
    frequency_penalty=0.5,
    presence_penalty=0
    )

# Is this a yes or a no mail?
# If yes, generate a yes or a no question for a hypothetical responder.
# Would you like going to the park on Friday?
# Generate yes or no MCQ answer options for this (Generate it in the form of a python list).
# ['Yes', 'No']

# What should be the tone of this email
# Generate a list of 3-4 options for the tone of the email.
# ['Happy', 'Sad', 'Angry', 'Neutral']

# What should be the subject of this email
# Generate a list of 3-4 options for the subject of the email.
# ['Happy', 'Sad', 'Angry', 'Neutral']

# What is the setting of the email
# ['Work', 'Home', 'School', 'Other']

#Generate a sample response to this email based on the above parameters.