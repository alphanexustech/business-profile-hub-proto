from flask import Blueprint
import flask
import requests, json, os

from config.databases import omega_db
from config import configurations

STORAGE_ROOT = "storage/" # IDEA: make this configurable or summat. 

def save_file(file):
    filename = STORAGE_ROOT + file.filename
    file.save(filename)
    # print(file)
    return {"message": f'{file.filename} saved at {STORAGE_ROOT}'}

def save_file_uuid(file, uuid):
    # Ensure that the folder exists, or do the filename ID-injection technique. 
    # check if a folder at root/uuid/ exists; otherwise, create it so we can put files in it. 
    path = STORAGE_ROOT + uuid + "/"
    filename = path + file.filename
    target_path = os.getcwd() + "/" + path
    print(f"current working directory: {os.getcwd()}")
    print(f"ln 21: {target_path}")
    if os.path.isdir(target_path):
        # save the file. 
        print(f"ln 23: {os.path.isdir(path)}")
        file.save(filename)

    else: 
        # save the file.
        # os.mkdir. 
        os.mkdir(path)
        file.save(filename)
    
    return {"message": f'{file.filename} saved at {filename}'}

def get_file(file_name):
    # print("controllers ln 17 file_name:", file_name)
    # return flask.send_file(STORAGE_ROOT + file_name)
    # IDEA: FUN FACT: flask functions are relative to '/app', while python functions are relative to the file they're in!
    return flask.send_from_directory("../" + STORAGE_ROOT, file_name)

def get_file_uuid(uuid, file_name):
    # print("controllers ln 17 file_name:", file_name)
    # return flask.send_file(STORAGE_ROOT + file_name)
    # IDEA: FUN FACT: flask functions are relative to '/app', while python functions are relative to the file they're in!
    return flask.send_from_directory("../" + STORAGE_ROOT, uuid + "/" + file_name)

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
