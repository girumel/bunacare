from app import db

class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    date = db.Column(db.DateTime, nullable=False)

    def __init__(self, status, name, description, date):
        self.status = status
        self.name = name
        self.description = description
        self.date = date

    def __repr__(self):
        return '<Task %r>' % self.name
    
    def insert(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'date': self.date,
            'status': self.status
        }