import React from "react";

function CoachCard({name,sportType, bio, rate}) {
  return (
  <div className="border p-4 bg-white rounded shadow-md">
  <div className="h-24 bg-gray-300 flex items-center justify-center">
    Profile Photo
  </div>
  <h4 className="font-bold mt-2">{name}</h4>
  <p>{sportType} | Specialty</p>
  <p>{bio}</p>
  <p>Rate: ${rate}/hr</p>
  <button className="mt-2 px-4 py-2 bg-gray-800 text-gray rounded">
    View Details
  </button>
</div>
  )
}

export default function CoachListing() {
  const coaches = [
    { name: "John Doe", sportType: "Basketball", bio: "Experienced coach", rate: 50 },
    { name: "Jane Smith", sportType: "Tennis", bio: "Former pro player", rate: 60 },
    { name: "Alex Johnson", sportType: "Soccer", bio: "Youth trainer", rate: 40 },
    { name: "Emily Davis", sportType: "Swimming", bio: "Olympic-level coach", rate: 70 },
    { name: "Chris Brown", sportType: "Football", bio: "Tactical expert", rate: 55 },
    { name: "Sarah Wilson", sportType: "Golf", bio: "Precision coach", rate: 65 },
    { name: "Mike Anderson", sportType: "Boxing", bio: "Strength coach", rate: 45 },
    { name: "Laura Martinez", sportType: "Volleyball", bio: "Team strategy coach", rate: 50 },
    { name: "David White", sportType: "Track & Field", bio: "Speed coach", rate: 55 }
  ];
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <main className="mt-6">
        <h2 className="text-2xl font-bold text-center">Best Coaches in Current Geographic Position</h2>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded w-1/2"
          />
        </div>

        {/* Button collection at the top, become drop downs later? */}
        <div className="flex justify-center space-x-2 mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded">Type of Sport</button>
          <button className="px-4 py-2 bg-gray-300 rounded">Specialty</button>
          <button className="px-4 py-2 bg-gray-300 rounded">Location</button>
          <button className="px-4 py-2 bg-gray-300 rounded">Rate min</button>
          <button className="px-4 py-2 bg-gray-300 rounded">Rate max</button>
          <button className="px-4 py-2 bg-black text-white rounded">Search</button>
        </div>
        
        <h3 className="text-xl font-bold mt-6">Coaches Found:</h3>
        <div className="grid col-span-15 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        {coaches.map((coach, index) => (
            <CoachCard key={index} {...coach} />
          ))}
        </div>
      </main>
    </div>
  );
};