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
    query = {}
    file_name = ''
    return jsonify(controllers.get_file(file_name))

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@files.route('/', methods=['POST'])
def save_file(file_name=None):
    
    # check if the post request has the file part
    # if 'file' not in request.files:
    #     print('No file part')
    # file = request.files['file']
    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    # if file.filename == '':
    #     flash('No selected file')
    #     return redirect(request.url)
    #     filename = secure_filename(file.filename)
    #     # file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    print(request) 
    print(dir(request))
    print(dir(request.form))
    print("Form itself: ", request.form)
    print("To dict: ", request.form.to_dict())
    print("Here be form dict keys:", list(request.form.keys()))

    print("Attempt at values:", request.form.values())
    print("Get data:", request.get_data())
    print("get json:" , request.get_json())
    # print(request.form['file'])

    # file_data = request.get_file()
    # print(file_data)
    return "Not Implemented"
    # return jsonify(controllers.save_file(file_data))
