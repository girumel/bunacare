from sqlalchemy import Column, String, Integer, DateTime
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

def setup_db(app):
