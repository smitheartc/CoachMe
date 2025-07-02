from prisma import Prisma

def main():
    db = Prisma()
    db.connect()
    try:
        clients = db.client.find_many()
        if not clients:
            print("No clients (athletes) found in the database.")
            return
        print(f"Found {len(clients)} client(s) in the database:")
        print("=" * 60)
        for client in clients:
            print(f"ID: {client.id}")
            print(f"Created At: {client.createdAt}")
            print(f"Name: {client.name}")
            print(f"Email: {client.email}")
            print(f"Age: {client.age}")
            print(f"Location: ({client.location1}, {client.location2})")
            print(f"Sport: {client.sport}")
            print(f"Skill Level: {client.skill}")
            print(f"Position: {client.position}")
            print("-" * 60)
    except Exception as e:
        print(f"Error: {e}")
    finally:
        db.disconnect()

if __name__ == "__main__":
    main() 