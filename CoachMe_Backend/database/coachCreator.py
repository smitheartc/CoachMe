from prisma import Prisma, Base64

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        blobData = file.read()
    return blobData

db = Prisma()
db.connect()

# Create two coach records

binData = convertToBinaryData("test.jpg")

coach1 = db.coach.create(
    data={
        'id' : 1,
        'email': 'coach1@example.com',
        'name': 'John Doe',
        'location1': 40.7128,
        'location2': -74.0060,
        'blurb': 'Experienced basketball coach',
        'sport': 'Basketball',
        'speciality': 'Shooting',
        'rate': 50.0,
        'image' : Base64.encode(binData)
    }
)

binData = convertToBinaryData("test2.jpg")

coach2 = db.coach.create(
    data={
        'id' : 2,
        'email': 'coach2@example.com',
        'name': 'Jane Smith',
        'location1': 34.0522,
        'location2': -118.2437,
        'blurb': 'Former professional tennis player',
        'sport': 'Tennis',
        'speciality': 'Serve',
        'rate': 60.0,
        'image' : Base64.encode(binData)
    }
)

print(f'Created coach: {coach1}')
print(f'Created coach: {coach2}')

db.disconnect()
