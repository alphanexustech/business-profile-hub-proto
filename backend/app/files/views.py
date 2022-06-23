from flask import Blueprint, request, jsonify

import requests, json

from . import controllers

from config import configurations
from flask_pymongo import ObjectId

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

@files.route('/', methods=['POST'])
def save_file():
    # IDEA: write the correct syntaxt for the getting the file from the request
    file_data = request.get_file()
    return jsonify(controllers.save_file(file_data))
