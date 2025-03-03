import React from "react";
import axios from "axios";
import {useQuery} from '@tanstack/react-query'

function CoachCard({userID}) { //individual coach cards on the coach listing page

  const { isPending, isError, data, error } = useQuery({ //get coach data from backend
    queryKey: ['key', userID],
    queryFn: async () => {
      console.log(userID);
      const data = await axios.post("http://127.0.0.1:5000/coachFinder/data/", {userID}); //replace URL later
      return data
    },
  })

  if (isPending) {
    return (
      <div className="border p-4 bg-white rounded shadow-md">
      <span>Loading...</span>
      </div>
    )
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
  <div className="border p-4 bg-white rounded shadow-md">
  <div className="h-24 bg-gray-300 flex items-center justify-center">
    Profile Photo
  </div>
  <h4 className="font-bold mt-2">{data.data.name}</h4>
  <p>{data.data.sportType}</p>
  <p>{data.data.bio}</p>
  <p>Rate: ${data.data.rate}/hr</p>
  <button className="mt-2 px-4 py-2 bg-gray-800 text-gray rounded">
    View Details
  </button>
</div>
  )
}

export default function CoachListing() {
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
          <button className="px-4 py-2 bg-black text-blue rounded">Search</button>
        </div>
        
        <h3 className="text-xl font-bold mt-6">Coaches Found:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
            <CoachCard userID={1} />
            <CoachCard userID={2} />
        </div>
      </main>
    </div>
  );
};