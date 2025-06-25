from prisma import Prisma
import datetime

prisma=Prisma()

prisma.connect()

try:
        # Query all coaches
        coaches = prisma.coach.find_many()
        
        for coach in coaches:
            print(f"ID: {coach.id}")
            print(f"Created At: {coach.createdAt}")
            print(f"Email: {coach.email}")
            print(f"First Name: {coach.firstName}")
            print(f"Last Name: {coach.lastName}")
            print(f"Location: ({coach.presentAddress}, {coach.bookingAddress})")
            print(f"City: {coach.city}")
            print(f"State: {coach.state}")
            print(f"Blurb: {coach.blurb}")
            print(f"Sport: {coach.sport}")
            print(f"Speciality: {coach.speciality}")
            print(f"Club Affiliation: {coach.clubAffiliation}")
            if coach.image:
                print(f"Image Size: {len(coach.image)} bytes")
            else:
                print("Image Size: No image")
            print("-"*40)
    
finally:
    # Always disconnect from the database
    prisma.disconnect()

if __name__ == "__main__":
    main() 