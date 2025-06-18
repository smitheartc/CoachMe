import React from "react";
import { Link } from "react-router-dom";

function CoachCard({ name, sport, rate }) {
  return (
    <div className="flex flex-col">
      <div className="w-[361px] h-[361px] bg-[#FFDB8CBF] rounded-[50px] p-6 flex flex-col justify-end">
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-black">{name}</h4>
          <div className="flex items-center gap-1 mt-1">
            <img src="/src/assets/star.png" alt="Rating" className="w-5 h-5" />
            <span className="text-black">Rating</span>
          </div>
        </div>
      </div>
      <div className="mt-4 w-[361px]">
        <p className="text-black mb-2">{sport}</p>
        <p className="text-black mb-4 break-words">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="text-black font-bold text-xl mb-4">${rate}/hr</p>
        <Link
          className="text-black font-bold underline"
          to="/coachview"
        >
          View More Details
        </Link>
      </div>
    </div>
  );
}

export default function CoachListing() {
  const dummyCoaches = [
    { name: "John Smith", sport: "Baseball", rate: 20 },
    { name: "Sarah Johnson", sport: "Softball", rate: 25 },
    { name: "Mike Wilson", sport: "Baseball", rate: 30 },
    { name: "Emily Brown", sport: "Softball", rate: 22 },
    { name: "David Lee", sport: "Baseball", rate: 28 },
    { name: "Lisa Anderson", sport: "Softball", rate: 24 }
  ];

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <main className="mt-6">
        {/* New Search Bar Design */}
        <div className="flex justify-center mt-4">
          <div className="w-[1000px] h-[100px] bg-[#F0F0F0] rounded-[50px] flex items-center px-8">
            {/* Sport Section */}
            <div className="flex items-center gap-4">
              <img src="/src/assets/baseball.png" alt="Sport" className="w-10 h-10" />
              <div>
                <p className="text-base text-gray-600">Play</p>
                <p className="font-medium text-lg">Sports</p>
              </div>
            </div>
            {/* Divider */}
            <div className="h-14 w-[2px] bg-[#718EBF] mx-8"></div>
            {/* Specialty Section */}
            <div className="flex items-center gap-4">
              <img src="/src/assets/batter.png" alt="Specialty" className="w-10 h-10" />
              <div>
                <p className="text-base text-gray-600">Speciality</p>
                <p className="font-medium text-lg">Position</p>
              </div>
            </div>
            {/* Divider */}
            <div className="h-14 w-[2px] bg-[#718EBF] mx-8"></div>
            {/* Location Section */}
            <div className="flex items-center gap-4">
              <img src="/src/assets/location.png" alt="Location" className="w-10 h-10" />
              <div>
                <p className="text-base text-gray-600">Location</p>
                <p className="font-medium text-lg">Near you</p>
              </div>
            </div>
            {/* Search Button */}
            <button className="ml-auto bg-[#718EBF] text-white px-8 py-3 rounded-[50px] font-medium text-lg">
              Search
            </button>
          </div>
        </div>
        {/* Sort and Filter Section */}
        <div className="flex justify-between items-center mt-8 w-[1000px] mx-auto">
          {/* Sort Section */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Sort:</span>
            <div className="bg-white border border-gray-300 rounded-lg px-4 py-2">
              <span className="text-gray-800">Recommended</span>
            </div>
          </div>
          {/* Filter Section */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Filter:</span>
            <div className="flex gap-3">
              <div className="bg-white border border-gray-300 rounded-[50px] px-4 py-2">
                <span className="text-gray-800">Price</span>
              </div>
              <div className="bg-white border border-gray-300 rounded-[50px] px-4 py-2">
                <span className="text-gray-800">Skill Level</span>
              </div>
              <div className="bg-white border border-gray-300 rounded-[50px] px-4 py-2">
                <span className="text-gray-800">Availability</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-12 mt-8 justify-items-center max-w-[1200px] mx-auto">
          {dummyCoaches.map((coach, index) => (
            <CoachCard
              key={index}
              name={coach.name}
              sport={coach.sport}
              rate={coach.rate}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
