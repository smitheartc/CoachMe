import React from 'react';

export default function Profile() {
  return (
    <div className="flex justify-center items-start min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-[717px] bg-white rounded-xl shadow-md p-8">
        {/* Header Section */}
        <div className="flex items-center gap-8 mb-8">
          <div className="relative">
            <h2 className="text-[16px] font-medium text-[#FFDB8C]">Edit Profile</h2>
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[120%] h-[2px] bg-[#FFDB8C]"></div>
          </div>
          <h2 className="text-[16px] font-medium text-[#718EBF]">My Details</h2>
        </div>

        {/* Profile Content */}
        <div className="flex gap-8">
          {/* Left Column */}
          <div className="flex-1">
            {/* Profile Picture */}
            <div className="w-[132px] h-[130px] rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <img src="/src/assets/profile.png" alt="Profile" className="w-24 h-24" />
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {/* Left Column Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                />
              </div>

              {/* Right Column Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Present Address</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Permanent Address</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Zip-code</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <button className="px-8 py-3 bg-[#FFDB8C] text-white rounded-[15px] font-medium hover:bg-[#FFDB8C]/90 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
} 