from app import db

class Crop(db.Model):
    __tablename__ = 'crops'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    date_taken = db.Column(db.DateTime, nullable=False)
    infected = db.Column(db.Boolean, nullable=False)
    infected_by = db.Column(db.Integer, db.ForeignKey('crops.id'), nullable=True)
    severity_level = db.Column(db.Integer, nullable=False)

    def __init__(self, name, date_taken, infected, infected_by, severity_level):
        self.name = name
        self.date_taken = date_taken
        self.infected = infected
        self.infected_by = infected_by
        self.severity_level = severity_level

    def __repr__(self):
        return '<Crop %r>' % self.name
    
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
            'date_taken': self.date_taken,
            'infected': self.infected,
            'infected_by': self.infected_by,
            'severity_level': self.severity_level
        }
    
    