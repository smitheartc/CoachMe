import React from 'react';
import heroBackground from '../src/assets/heroBackground.png'; // Must exist

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundColor: '#000',
        }}
      >
        <h1 className="text-2xl md:text-3xl font-normal text-white mb-4">
          COACHING FOR DREAMERS
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
          Where Athletes Meets Their Match
        </h2>
        <p className="text-lg md:text-2xl font-normal text-white max-w-xl mb-10">
          Find the perfect coach, Join the right team, Take your game to the next level.
        </p>

        <div className="mt-6 text-white text-xl font-semibold mb-4">
          I want to find a...
        </div>

        <div className="flex gap-4">
          <button className="bg-[#FFDB8C] text-black px-6 py-3 rounded-full text-lg font-medium shadow-md hover:scale-105 transition">
            COACH
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium shadow-md hover:scale-105 transition">
            TEAM
          </button>
        </div>
      </div>

      {/* True Full-Width About Section */}
      <div className="relative z-10 -mt-20 w-full">
        <div className="w-full bg-[#FFDB8C] rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between">
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/600x350.png?text=Coach+Me+Image"
              alt="Coach Me"
              className="w-full h-auto rounded-l-2xl md:rounded-r-none"
            />
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2 p-6 md:p-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              About Coach Me
            </h2>
            <p className="text-md md:text-lg text-gray-800 mb-6">
              Coach Me is your personalized platform for connecting athletes with expert coaches and top-tier teams.
              Whether you're looking to grow your skills or take your game to the next level, we provide the tools and
              community to help you succeed.
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              Find More About Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
