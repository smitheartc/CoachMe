import React from 'react';

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('/heroBackground.png')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        COACHING FOR DREAMERS
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-white mb-2">
        Where Athletes Meets Their Match
      </h2>
      <p className="text-lg md:text-xl text-white max-w-xl mb-10">
        Find the perfect coach, Join the right team, Take your game to the next level.
      </p>

      <div className="mt-6 text-white text-xl font-semibold mb-4">
        I want to find a...
      </div>

      <div className="flex gap-4">
        <button
          className="bg-[#FFDB8C] text-black px-6 py-3 rounded-full text-lg font-medium shadow-md hover:scale-105 transition"
        >
          COACH
        </button>
        <button
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium shadow-md hover:scale-105 transition"
        >
          TEAM
        </button>
      </div>
    </div>
  );
};

export default Home;
