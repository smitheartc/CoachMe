from peewee import *
import datetime

# Connect to the database

# Use the same database and model definition as in coachCreator.py

db = SqliteDatabase('database.db')

class Coach(Model):
    id = AutoField()
    created_at = DateTimeField(default=datetime.datetime.now)
    email = CharField(unique=True)
    name = CharField()
    location1 = FloatField()
    location2 = FloatField()
    blurb = TextField()
    sport = CharField()
    speciality = CharField()
    rate = FloatField()
    image = BlobField()

    class Meta:
        database = db

def main():
    db.connect()
    for coach in Coach.select():
        print(f"ID: {coach.id}")
        print(f"Created At: {coach.created_at}")
        print(f"Email: {coach.email}")
        print(f"Name: {coach.name}")
        print(f"Location: ({coach.location1}, {coach.location2})")
        print(f"Blurb: {coach.blurb}")
        print(f"Sport: {coach.sport}")
        print(f"Speciality: {coach.speciality}")
        print(f"Rate: {coach.rate}")
        print(f"Image Size: {len(coach.image)} bytes")
        print("-"*40)
    db.close()

if __name__ == "__main__":
    main() 