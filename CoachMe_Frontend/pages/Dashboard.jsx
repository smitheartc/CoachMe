import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <p className="hover:underline cursor-pointer">My Bookings</p>
          <p className="hover:underline cursor-pointer">Messages</p>
        </div>
      </div>
    </div>
  );
}
