import React, { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('editProfile');

  return (
    <div className="flex justify-center items-start min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-[1200px] bg-white rounded-xl shadow-md p-8">
        {/* Header Section */}
        <div className="flex items-center gap-8 mb-8">
          <div 
            className="relative cursor-pointer"
            onClick={() => setActiveTab('editProfile')}
          >
            <h2 className={`text-[16px] font-medium ${activeTab === 'editProfile' ? 'text-[#FFDB8C]' : 'text-[#718EBF]'}`}>
              Edit Profile
            </h2>
            {activeTab === 'editProfile' && (
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[120%] h-[2px] bg-[#FFDB8C]"></div>
            )}
          </div>
          <div 
            className="relative cursor-pointer"
            onClick={() => setActiveTab('myDetails')}
          >
            <h2 className={`text-[16px] font-medium ${activeTab === 'myDetails' ? 'text-[#FFDB8C]' : 'text-[#718EBF]'}`}>
              My Details
            </h2>
            {activeTab === 'myDetails' && (
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[120%] h-[2px] bg-[#FFDB8C]"></div>
            )}
          </div>
        </div>

        {/* Profile Content */}
        {activeTab === 'editProfile' ? (
          <div className="space-y-8">
            {/* Profile Picture and Form Fields */}
            <div className="flex gap-8">
              <div className="w-[132px] h-[130px] rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <img src="/src/assets/profile.png" alt="Profile" className="w-24 h-24" />
              </div>

              <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                  />
                </div>

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
        ) : (
          <div className="space-y-8">
            {/* Profile Picture and Form Fields */}
            <div className="flex gap-8">
              <div className="w-[132px] h-[130px] rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <img src="/src/assets/profile.png" alt="Profile" className="w-24 h-24" />
              </div>

              <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    className="w-full h-32 px-4 py-2 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C] resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rate per Hour</label>
                  <input
                    type="number"
                    className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                    placeholder="$"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialties</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                    placeholder="e.g., Pitching, Batting, Fielding"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zipcode for Designated Practice/Coaching</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sports</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                    placeholder="e.g., Baseball, Softball"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Affiliated Clubs</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 border border-[#DFEAF2] rounded-lg bg-white focus:outline-none focus:border-[#FFDB8C]"
                    placeholder="List any club affiliations"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

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