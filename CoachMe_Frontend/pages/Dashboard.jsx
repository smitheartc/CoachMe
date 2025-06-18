import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import DashboardNav from "../src/DashboardNav";

// Import dashboard section components
import DashboardHome from "./dashboard/DashboardHome";
import Availability from "./dashboard/Availability";
import Bookings from "./dashboard/Bookings";
import Messages from "./dashboard/Messages";
import Profile from "./dashboard/Profile";

export default function Dashboard() {
  const location = useLocation();
  const isActive = (path) => location.pathname === `/dashboard${path}`;

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
    <div className="flex flex-col min-h-screen bg-[#F0F0F0]">
      <DashboardNav />
      <div className="flex flex-1 mt-16">
        {/* Side Menu Bar */}
        <aside className="w-[250px] bg-white h-[calc(100vh-64px)] sticky top-16 p-6">
          <div className="flex flex-col gap-6">
            <Link 
              to="/dashboard" 
              className={`flex items-center gap-3 ${isActive('') ? 'text-[#718EBF]' : 'text-black hover:text-[#718EBF]'}`}
            >
              <img src="/src/assets/dashboard.png" alt="Dashboard" className="w-6 h-6" />
              <span className="font-medium">Dashboard</span>
            </Link>
            
            <Link 
              to="/dashboard/availability" 
              className={`flex items-center gap-3 ${isActive('/availability') ? 'text-[#718EBF]' : 'text-black hover:text-[#718EBF]'}`}
            >
              <img src="/src/assets/calendar.png" alt="Availability" className="w-6 h-6" />
              <span className="font-medium">Availability</span>
            </Link>
            
            <Link 
              to="/dashboard/bookings" 
              className={`flex items-center gap-3 ${isActive('/bookings') ? 'text-[#718EBF]' : 'text-black hover:text-[#718EBF]'}`}
            >
              <img src="/src/assets/booking.png" alt="Bookings" className="w-6 h-6" />
              <span className="font-medium">Bookings</span>
            </Link>
            
            <Link 
              to="/dashboard/messages" 
              className={`flex items-center gap-3 ${isActive('/messages') ? 'text-[#718EBF]' : 'text-black hover:text-[#718EBF]'}`}
            >
              <img src="/src/assets/message.png" alt="Messages" className="w-6 h-6" />
              <span className="font-medium">Messages</span>
            </Link>
            
            <Link 
              to="/dashboard/profile" 
              className={`flex items-center gap-3 ${isActive('/profile') ? 'text-[#718EBF]' : 'text-black hover:text-[#718EBF]'}`}
            >
              <img src="/src/assets/profile.png" alt="Profile" className="w-6 h-6" />
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
