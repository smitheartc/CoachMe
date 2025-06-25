from peewee import *
import datetime

# Connect to the database

# Use the same database and model definition as in coachCreator.py

db = SqliteDatabase('database.db')

class Coach(Model):
    id = AutoField()
    created_at = DateTimeField(default=datetime.datetime.now)
    email = CharField(unique=True)
    firstName = CharField()
    lastName = CharField()
    presentAddress = FloatField()
    city = CharField()
    state = CharField()
    bookingAddress = FloatField()
    blurb = TextField()
    sport = CharField()
    speciality = CharField()
    clubAffiliation = CharField()
    image = BlobField()

    class Meta:
        database = db

def main():
    db.connect()
    for coach in Coach.select():
        print(f"ID: {coach.id}")
        print(f"Created At: {coach.created_at}")
        print(f"Email: {coach.email}")
        print(f"First Name: {coach.firstName}")
        print(f"Last Name: {coach.lastName}")
        print(f"Location: ({coach.presentAddress}, {coach.bookingAddress})")
        print(f"City: {coach.city}")
        print(f"State: {coach.state}")
        print(f"Blurb: {coach.blurb}")
        print(f"Sport: {coach.sport}")
        print(f"Speciality: {coach.speciality}")
        print(f"CLub Affiliation: {coach.clubAffiliation}")
        print(f"Image Size: {len(coach.image)} bytes")
        print("-"*40)
    db.close()

if __name__ == "__main__":
    main() 