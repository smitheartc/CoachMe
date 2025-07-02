from prisma import Prisma
import json

async def main():
    db = Prisma()
    await db.connect()
    
    try:
        # Get all teams
        teams = await db.team.find_many()
        
        if not teams:
            print("No teams found in the database.")
            return
            
        print(f"Found {len(teams)} team(s) in the database:")
        print("=" * 60)
        
        for team in teams:
            print(f"ID: {team.id}")
            print(f"Created At: {team.created_at}")
            print(f"Name: {team.firstName} {team.lastName}")
            print(f"Club: {team.clubName}")
            print(f"Email: {team.email}")
            print(f"Address: {team.address}")
            print(f"Location: {team.city}, {team.state} {team.zipcode}")
            print(f"Sport: {team.sport}")
            print(f"Age Group: {team.age}")
            print(f"Skill Level: {team.skill}")
            print("-" * 60)
            
    except Exception as e:
        print(f"Error: {e}")
    finally:
        await db.disconnect()

if __name__ == "__main__":
    import asyncio
    asyncio.run(main()) 