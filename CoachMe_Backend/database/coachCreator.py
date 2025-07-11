from peewee import *
import datetime

# Create database connection
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

def convert_to_binary_data(filename):
    with open(filename, 'rb') as file:
        return file.read()

# Connect to the database
db.connect()

# Drop existing tables and create new ones
db.drop_tables([Coach])
db.create_tables([Coach])

# Create two coach records
bin_data1 = convert_to_binary_data("test.jpg")
coach1 = Coach.create(
    email='coach1@example.com',
    name='John Doe',
    location1=40.7128,
    location2=-74.0060,
    blurb='Experienced basketball coach',
    sport='Basketball',
    speciality='Shooting',
    rate=50.0,
    image=bin_data1
)

bin_data2 = convert_to_binary_data("test2.jpg")
coach2 = Coach.create(
    email='coach2@example.com',
    name='Jane Smith',
    location1=34.0522,
    location2=-118.2437,
    blurb='Former professional tennis player',
    sport='Tennis',
    speciality='Serve',
    rate=60.0,
    image=bin_data2
)

print(f'Created coach: {coach1}')
print(f'Created coach: {coach2}')

# Close the connection
db.close()
