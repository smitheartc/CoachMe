from prisma import Prisma
import json

async def main():
    db = Prisma()
    await db.connect()
    
    try:
        # Get all coaches
        coaches = await db.coach.find_many()
        
        if not coaches:
            print("No coaches found in the database.")
            return
            
        print(f"Found {len(coaches)} coach(es) in the database:")
        print("=" * 60)
        
        for coach in coaches:
            print(f"ID: {coach.id}")
            print(f"Created At: {coach.created_at}")
            print(f"Email: {coach.email}")
            print(f"Name: {coach.name}")
            print(f"Location: ({coach.location1}, {coach.location2})")
            print(f"Blurb: {coach.blurb}")
            print(f"Sport: {coach.sport}")
            print(f"Speciality: {coach.speciality}")
            print(f"Rate: ${coach.rate}")
            print(f"Image: {'Yes' if coach.image else 'No'}")
            print("-" * 60)
            
    except Exception as e:
        print(f"Error: {e}")
    finally:
        await db.disconnect()

if __name__ == "__main__":
    import asyncio
    asyncio.run(main()) 