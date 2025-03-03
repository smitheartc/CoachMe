import React from "react";
import {Link, useLocation} from "react-router-dom"

export default function ClientCoachView() {
const coachData = useLocation().state;
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <div class="grid grid-flow-col grid-rows-3 gap-4">
        <Link className="text-black hover:underline cursor-pointer">My Bookings</Link>
          <Link className="hover:underline cursor-pointer">Messages</Link>

        </div>
      </div>
    </div>
  );
}
