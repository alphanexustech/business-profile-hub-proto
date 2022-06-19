from flask import Blueprint

import requests, json

from config.databases import omega_db
from config import configurations
from flask_pymongo import ObjectId
from bson import json_util

def save_record(collection, content):

    # IDEA: Try to check if collections exist on app start
    try:
        omega_db.db.create_collection(collection)
    except Exception as e:
        print(e)

    collection = omega_db.db[collection]

    collection.insert(content)
    return {"message": 'Record Saved'}

def get_record(collection, query):

    cursor = None
    try:
        cursor = omega_db.db[collection].find(query);
        if cursor:
            return json.loads(json_util.dumps(cursor[0]))
        else:
            return {"message": 'The database is empty'}
    except Exception as e:
        print (e)
        return {"message": 'The database is empty'}

def get_records(collection, query):

    data = []
    cursor = omega_db.db[collection].find(query);

    for i in cursor:
        data.append(i);
    if len(data) > 0:
        return json.loads(json_util.dumps(data))
    else:
        return {"message": 'The database is empty'}

def delete_record(collection, query):

    data = []
    cursor = omega_db.db[collection].remove(query);

    return {"message": 'Record Deleted'}
