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