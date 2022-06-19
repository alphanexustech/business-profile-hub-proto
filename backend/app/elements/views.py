from flask import Blueprint, request, jsonify

import requests, json

from . import controllers

from config import configurations
from flask_pymongo import ObjectId

elements = Blueprint('elements', __name__)

@elements.route('/', methods=['GET'])
def get_elements():
    query = {}
    return jsonify(controllers.get_elements(configurations.elements_collection, query))

@elements.route('/<id>/', methods=['GET'])
def get_element(id=None):
    query = {
        "_id": id,
    }
    return jsonify(controllers.get_element(configurations.elements_collection, query))

@elements.route('/', methods=['POST'])
def save_element():
    data = request.get_json()
    return jsonify(controllers.save_element(configurations.elements_collection, data))

@elements.route('/<id>/', methods=['DELETE'])
def delete_element(id=None):
    query = {
        "_id": ObjectId(id),
    }
    print (id)
    return jsonify(controllers.delete_element(configurations.elements_collection, query))
