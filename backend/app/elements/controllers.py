from flask import Blueprint

import requests, json

from config.databases import omega_db
from config import configurations
from flask_pymongo import ObjectId
from bson import json_util

'''
The following are mocked functions for the Angular12 Boilerplate, but this
isn't meant to be in a finished state.
'''

def save_element(collection, content):

    # IDEA: Try to check if collections exist on app start
    try:
        omega_db.db.create_collection(collection)
    except Exception as e:
        print(e)

    collection = omega_db.db[collection]

    # collection.insert(content)
    return {"message": 'Record Saved'}

def get_element(collection, query):

    data = {
        "1": {
          "name": "Hydrogen",
          "position": 1,
          "weight": 1.008,
          "symbol": "H",
        },
        "6": {
          "name": "Carbon",
          "position": 6,
          "weight": 12.08,
          "symbol": "C",
        },
    }

    return data[query['_id']]


def get_elements(collection, query):

    data = [
        {
          "name": "Hydrogen",
          "position": 1,
          "weight": 1.008,
          "symbol": "H",
        },
        {
          "name": "Carbon",
          "position": 6,
          "weight": 12.08,
          "symbol": "C",
        },
    ]
    cursor = omega_db.db[collection].find(query);

    for i in cursor:
        data.append(i);

    if len(data) > 0:
        return json.loads(json_util.dumps(data))
    else:
        return {"message": 'The database is empty'}
