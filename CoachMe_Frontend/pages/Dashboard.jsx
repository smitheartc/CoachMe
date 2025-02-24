import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4 text-lg">
          <li className="hover:underline cursor-pointer">My Bookings</li>
          <li className="hover:underline cursor-pointer">Messages</li>
        </ul>
      </div>
    </div>
  );
}
