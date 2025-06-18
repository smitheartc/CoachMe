import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardNav() {
  return (
    <nav className="h-16 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left Section with Logo and Profile Settings */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img src="/src/assets/transparentLogo.png" alt="CoachMe Logo" className="h-12" />
          </Link>
          <Link to="/profile" className="text-[#8BA3CB] hover:text-[#718EBF] font-medium">
            Profile Settings
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for something"
              className="w-[300px] h-[40px] bg-[#F5F7FA] rounded-[50px] pl-4 pr-10 text-[15px] text-[#8BA3CB] placeholder-[#8BA3CB] focus:outline-none"
            />
            <img
              src="/src/assets/search.png"
              alt="Search"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>

          {/* Notifications Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <img src="/src/assets/notification.png" alt="Notifications" className="w-6 h-6" />
          </button>

          {/* Profile Icon */}
          <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
            <img src="/src/assets/profile.png" alt="Profile" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
} 