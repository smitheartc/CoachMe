from peewee import *
import datetime

# Database connection
db = SqliteDatabase('database/database.db')


class BaseModel(Model):
    class Meta:
        database = db


class Client(BaseModel):
    id = AutoField()  # Prisma: Int @id @default(autoincrement())
    created_at = DateTimeField(default=datetime.datetime.now)
    email = CharField(unique=True)
    name = CharField(null=True)
    age = IntegerField()
    location1 = FloatField()
    location2 = FloatField()
    sport = CharField()
    skill = IntegerField()
    position = CharField(null=True)
    # Related bookings will be accessible via: client.bookings


class Coach(BaseModel):
    id = AutoField()
    created_at = DateTimeField(default=datetime.datetime.now)
    email = CharField(unique=True)
    name = CharField(null=True)
    location1 = FloatField()
    location2 = FloatField()
    blurb = TextField()
    sport = CharField()
    speciality = CharField()
    rate = FloatField()
    image = BlobField(null=True)
    # Related bookings will be accessible via: coach.bookings


class Booking(BaseModel):
    client = ForeignKeyField(Client, backref='bookings', on_delete='CASCADE')
    coach = ForeignKeyField(Coach, backref='bookings', on_delete='CASCADE')
    created_at = DateTimeField(default=datetime.datetime.now)
    booking_time = DateTimeField()

    class Meta:
        primary_key = CompositeKey('client', 'coach', 'booking_time')
