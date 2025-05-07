import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function CoachCard({ userID }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["key", userID],
    queryFn: async () => {
      const data = await axios.post("http://127.0.0.1:5000/coachFinder/data/", {
        userID,
      });
      console.log(data.data);
      return data;
    },
  });

  if (isPending) {
    return (
      <div className="border p-4 bg-white rounded shadow-md text-black">
        <span>Loading...</span>
      </div>
    );
  }

  if (isError) {
    return <span className="text-black">Error: {error.message}</span>;
  }

  return (
    <div className="border p-4 bg-white rounded shadow-md text-black">
      <div className="h-24 bg-gray-300 flex items-center justify-center">
        <img
          src={"data:image/jpg;base64," + data.data.image}
          alt="Coach"
        />
      </div>
      <h4 className="font-bold mt-2">{data.data.name}</h4>
      <p>{data.data.sport}</p>
      <p>{data.data.blurb}</p>
      <p>Rate: ${data.data.rate}/hr</p>
      <Link
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-black font-bold"
        to="/coachview"
        state={data.data}
      >
        View Details
      </Link>
    </div>
  );
}

export default function CoachListing() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-black">
      <main className="mt-6">
        <h2 className="text-2xl font-bold text-center">
          Best Coaches in Current Geographic Position
        </h2>

        {/* Updated Search Bar */}
        <div className="flex justify-center mt-4">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              className="border p-2 pr-20 rounded-full w-full text-black"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 text-white font-bold px-4 py-2 rounded-full focus:outline-none">
              Search
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded text-black font-bold">
            Type of Sport
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded text-black font-bold">
            Specialty
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded text-black font-bold">
            Location
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded text-black font-bold">
            Rate Min
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded text-black font-bold">
            Rate Max
          </button>
        </div>

        <h3 className="text-xl font-bold mt-6">Coaches Found:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          <CoachCard userID={1} />
          <CoachCard userID={2} />
        </div>
      </main>
    </div>
  );
}
