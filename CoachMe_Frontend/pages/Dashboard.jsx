import React from "react";
import { Link } from "react-router-dom";
import DashboardNav from "../src/DashboardNav";

export default function Dashboard() {
  // Dummy data for bookings
  const upcomingBookings = [
    {
      id: 1,
      studentName: "John Doe",
      sport: "Baseball",
      date: "2024-03-20",
      time: "14:00",
      duration: "1 hour",
      status: "Confirmed"
    },
    {
      id: 2,
      studentName: "Sarah Smith",
      sport: "Softball",
      date: "2024-03-21",
      time: "15:30",
      duration: "1.5 hours",
      status: "Pending"
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      sport: "Baseball",
      date: "2024-03-22",
      time: "10:00",
      duration: "1 hour",
      status: "Confirmed"
    }
  ];

  // Dummy data for messages
  const recentMessages = [
    {
      id: 1,
      sender: "John Doe",
      message: "Hi, I'd like to schedule a session for next week",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      sender: "Sarah Smith",
      message: "Thank you for the great session yesterday!",
      time: "5 hours ago",
      unread: false
    },
    {
      id: 3,
      sender: "Mike Johnson",
      message: "Can we reschedule our session to Friday?",
      time: "1 day ago",
      unread: true
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <DashboardNav />
      <div className="flex flex-1 mt-16">
        {/* Side Menu Bar */}
        <aside className="w-[250px] bg-[#F0F0F0] h-[calc(100vh-64px)] sticky top-16 p-6">
          <div className="flex flex-col gap-6">
            <Link to="/dashboard" className="flex items-center gap-3 text-black hover:text-[#718EBF]">
              <img src="/src/assets/dashboard.png" alt="Dashboard" className="w-6 h-6" />
              <span className="font-medium">Dashboard</span>
            </Link>
            
            <Link to="/availability" className="flex items-center gap-3 text-black hover:text-[#718EBF]">
              <img src="/src/assets/calendar.png" alt="Availability" className="w-6 h-6" />
              <span className="font-medium">Availability</span>
            </Link>
            
            <Link to="/bookings" className="flex items-center gap-3 text-black hover:text-[#718EBF]">
              <img src="/src/assets/booking.png" alt="Bookings" className="w-6 h-6" />
              <span className="font-medium">Bookings</span>
            </Link>
            
            <Link to="/messages" className="flex items-center gap-3 text-black hover:text-[#718EBF]">
              <img src="/src/assets/message.png" alt="Messages" className="w-6 h-6" />
              <span className="font-medium">Messages</span>
            </Link>
            
            <Link to="/profile" className="flex items-center gap-3 text-black hover:text-[#718EBF]">
              <img src="/src/assets/profile.png" alt="Profile" className="w-6 h-6" />
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome back, Coach!</h1>
              <p className="text-gray-600">Here's an overview of your coaching activities</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Upcoming Sessions */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Upcoming Sessions</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Today</span>
                </div>
                <p className="text-3xl font-bold mb-2">3</p>
                <p className="text-gray-600 text-sm">Next session at 2:00 PM</p>
              </div>

              {/* Total Earnings */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Total Earnings</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">This Month</span>
                </div>
                <p className="text-3xl font-bold mb-2">$1,250</p>
                <p className="text-gray-600 text-sm">+15% from last month</p>
              </div>

              {/* Student Progress */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Active Students</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Total</span>
                </div>
                <p className="text-3xl font-bold mb-2">12</p>
                <p className="text-gray-600 text-sm">+2 new this week</p>
              </div>
            </div>

            {/* Bookings and Messages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upcoming Bookings */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Upcoming Bookings</h2>
                  <Link to="/bookings" className="text-[#718EBF] hover:underline">View All</Link>
                </div>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{booking.studentName}</h3>
                          <p className="text-sm text-gray-600">{booking.sport}</p>
                          <p className="text-sm text-gray-600">
                            {booking.date} at {booking.time} ({booking.duration})
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          booking.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Messages */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Recent Messages</h2>
                  <Link to="/messages" className="text-[#718EBF] hover:underline">View All</Link>
                </div>
                <div className="space-y-4">
                  {recentMessages.map((message) => (
                    <div key={message.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{message.sender}</h3>
                            {message.unread && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{message.message}</p>
                        </div>
                        <span className="text-sm text-gray-500">{message.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
