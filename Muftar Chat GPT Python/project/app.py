import numpy as np
import json
import pymongo
import openai
import joblib
from flask import Flask, render_template, request


model = joblib.load('model.pkl')
openai.api_key = "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"
database_uri = "mongodb+srv://hamza_gds:mR4kSuSp@instance1.g00cl.mongodb.net/?retryWrites=true&w=majority"
# database_uri = "mongodb://localhost:27017/"

def database_init():
    client = pymongo.MongoClient(database_uri)
    db = client["chat"]
    all_collections = db.list_collection_names()

    global collection
    ## No database maintained; i.e; strting new conversation
    if not all_collections:
        collection = db['0']
    # If database maintained
    elif all_collections:
        # get last active collection
        last_collection = sorted([eval(i) for i in all_collections])[-1]
        collection = db[str(last_collection)]
        last_conversation = [conversation for conversation in collection.find()][-1]['human']

        # Check last conversation is terminated then start new conversation with new collection
        if last_conversation == 'q':
            collection = db[str(last_collection+1)]
        # Continue to conversation
        else:
            pass

def ai_response(user_input):
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=model + "\nHuman: " + user_input + "\nAI: ",
        temperature=0.9,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0.0,
        presence_penalty=0.6,
        stop=[" Human:", " AI:"]
    )
    bot_response = response.choices[0].text
    return bot_response


def chatbot_response(msg):
    if msg == 'q':
        conversation = {"human": 'q'}
        collection.insert_one(conversation)
        database_init()
        return "Bye"
    response = ai_response(msg)
    conversation = {"human": msg.split("\n")[-1], "ai": response}
    collection.insert_one(conversation)
    return response




app = Flask(__name__)
app.static_folder = 'static'

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return chatbot_response(userText)

@app.route("/feedback", methods=["POST"])
def handle_feedback():
    message = request.json["message"]
    feedback = request.json["feedback"]
    # Do something with the feedback (e.g. store it in a database)
    return "OK"

if __name__ == "__main__":
    database_init()
    app.run()