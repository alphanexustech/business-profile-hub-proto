from flask import Blueprint, request, jsonify
from flask import flash, redirect, url_for

import requests, json

from . import controllers

from config import configurations
from flask_pymongo import ObjectId

from werkzeug.utils import secure_filename

UPLOAD_FOLDER = '/path/to/the/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

files = Blueprint('files', __name__)

@files.route('/', methods=['GET'])
def get_files():
    query = {}
    file_names = [] 
    return jsonify(controllers.get_files(file_names))

@files.route('/<file_name>/', methods=['GET'])
def get_file(file_name=None):
    # query = {}
    # print("ln 28 filename:", file_name)
    # file_name = file_name
    # IDEA: Use allowed_file() to ensure the filename is appropriate. 
    if allowed_file(file_name):
        return controllers.get_file(file_name) 
    else:
        return jsonify({"error": "invalid filename"})
    # return controllers.get_file(file_name)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@files.route('/', methods=['POST'])
def save_file(file_name=None):

    # check if the post request has the file part
    # if 'file' not in request.files:
    #     print('No file part')
    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    # if file.filename == '':
        # flash('No selected file')
        # return redirect(request.url)
        # filename = secure_filename(file.filename)
        # file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    
    # root_path = "storage/"
    # IDEA: ensure each filename is serviceable. 
    # For each key in the request.files dict, use the werkzeug save function and name it using the provided key.
    # print("Request dict:", request.__dict__)
    # print(list(request.__dict__.keys()))
    # if 'files' in request.__dict__:
    # files = request.files
    # _ = [request.files[file].save(root_path + file) for file in request.files]
    # request.files
    # print(f"Files from line 50: {files}")
    # print([f for f in files.values()])
    # print(dir(list(files.values())[0]))
    # print(files[0])
    
    # for filedata in files:
    # with open(storage_root + filename) as savefile:
    # savefile.write(filedata)

    # IDEA: Use allowed_file() to ensure the filename is appropriate. 
    return jsonify(controllers.save_file(list(request.files.values())[0]))
    # return jsonify({"response":"Not Implemented"})

@files.route('/<uuid>/', methods=['POST'])
def save_file_uuid(uuid):
    # Return the result of calling the controller to save a file inside a folder with the 
    # supplied RESTful UUID value.
    return jsonify(controllers.save_file_uuid(list(request.files.values())[0], uuid))

@files.route('/<uuid>/<file_name>/', methods=['GET'])
def get_file_uuid(uuid, file_name=None):
    # Check if the supplied file_name conforms to basic expectations of a media file. 
    print(f"in get file by uui, ln86: ", uuid)
    if allowed_file(file_name):
        return controllers.get_file_uuid(uuid, file_name)
    else: 
        return jsonify({"error": "invalid filename"})
    # pass 