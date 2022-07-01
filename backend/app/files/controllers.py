from flask import Blueprint

import requests, json

from config.databases import omega_db
from config import configurations

def save_file(file):
    print(file)
    return {"message": 'File Not Saved'}

def get_file(file_name):
    print(file_name)
    return {"message": 'File Not Found'}

def get_files(file_names):
    files = []
    for f in file_names:
        file = get_file(f)
        files.append(file)
    return files

def delete_record(collection, query):

    data = []
    cursor = omega_db.db[collection].remove(query);

    return {"message": 'Record Deleted'}
