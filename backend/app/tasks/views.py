from flask import Blueprint, request, jsonify

import requests, json

from . import controllers

from config import configurations
from flask_pymongo import ObjectId

tasks = Blueprint('tasks', __name__)

@tasks.route('/', methods=['GET'])
def get_tasks():
    query = {}
    return jsonify(controllers.get_records(configurations.tasks_collection, query))

@tasks.route('/<id>/', methods=['GET'])
def get_task(id=None):
    query = {
        "_id": ObjectId(id),
    }
    return jsonify(controllers.get_record(configurations.tasks_collection, query))

@tasks.route('/', methods=['POST'])
def save_task():
    data = request.get_json()
    return jsonify(controllers.save_record(configurations.tasks_collection, data))

@tasks.route('/<id>/', methods=['DELETE'])
def delete_task(id=None):
    query = {
        "_id": ObjectId(id),
    }
    print (id)
    return jsonify(controllers.delete_record(configurations.tasks_collection, query))
