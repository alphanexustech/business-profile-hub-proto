from app import app
from flask_pymongo import PyMongo

app.config["MONGO_URI"] = "mongodb://localhost:27017/omega"
omega_db = PyMongo(app)
