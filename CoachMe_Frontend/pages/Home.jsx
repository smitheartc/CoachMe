import React from 'react';
import heroBackground from '../src/assets/heroBackground.png'; // Ensure this exists

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

{/* About Section */}
<div className="relative z-10 -mt-20 w-full">
  <div className="w-full bg-[#FFDB8C] rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
    {/* Placeholder Box */}
    <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
      <div className="w-72 h-44 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-lg">
        Coach Me Placeholder
      </div>
    </div>

    {/* Text Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
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



      {/* What You Get Section */}
      <div className="w-full bg-white py-16 px-6 md:px-12 text-center">
        <p className="text-sm text-[#FFDB8C] font-medium uppercase tracking-wide mb-2">
          What You Get
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          How We Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">1-on-1 Coaching</h3>
            <p className="text-sm text-gray-600">Get matched with a coach for personalized training to elevate your skills.</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Tryout Listings</h3>
            <p className="text-sm text-gray-600">Never miss an opportunity. Explore verified tryouts near you.</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Progress with Purpose</h3>
            <p className="text-sm text-gray-600">Track your progress and build a roadmap toward your athletic goals.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-white py-20 px-4 md:px-12">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-12">
          {/* Left: Placeholder Image */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-300 w-full h-64 md:h-[400px] rounded-xl flex items-center justify-center text-gray-600 text-xl">
              Placeholder Image
            </div>
          </div>

          {/* Right: Steps */}
          <div className="w-full md:w-1/2">
            <p className="text-sm text-[#FFDB8C] font-medium uppercase tracking-wide mb-2">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Get our coaching service
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-[#C4C4C4] rounded-xl p-4 flex items-start gap-4 shadow">
                <div className="bg-[#FFDB8C] text-black font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sign Up</h3>
                  <p className="text-sm text-gray-700">Create your athlete or coach profile in minutes.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#C4C4C4] rounded-xl p-4 flex items-start gap-4 shadow">
                <div className="bg-[#FFDB8C] text-black font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Find Your Perfect Match</h3>
                  <p className="text-sm text-gray-700">Explore listings or get matched with the right coach or team.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#C4C4C4] rounded-xl p-4 flex items-start gap-4 shadow">
                <div className="bg-[#FFDB8C] text-black font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Train, Improve, Succeed</h3>
                  <p className="text-sm text-gray-700">Start your journey with purpose and measurable progress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* Coaches & Clubs CTA Section */}
            <div className="w-full bg-white py-20 px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          For Coaches and Clubs
        </h2>
        <p className="text-md text-gray-700 mb-8">
          Share your expertise or grow your team — help shape the future of the game.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#FFDB8C] text-black px-6 py-3 rounded-full text-md font-medium shadow-md hover:scale-105 transition">
            Apply to be a Coach
          </button>
          <button className="bg-[#FFDB8C] text-black px-6 py-3 rounded-full text-md font-medium shadow-md hover:scale-105 transition">
            Post Your Team Tryouts
          </button>
        </div>
      </div>
           {/* Founder Section */}
           <div className="w-full bg-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Left Text Block */}
          <div className="w-full md:w-1/2">
            <p className="text-sm text-[#FFDB8C] font-medium uppercase tracking-wide mb-2">
              Meet the Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Coach Me?
            </h2>
            <p className="text-md text-gray-700 mb-6">
              With 15+ years as an athlete, I experienced firsthand the struggle of constantly searching for the right coaches and teams.
              If I had found the right coaches and teammates sooner, I could have accelerated my growth and avoided wasted time.
              That’s why I created CoachMe—to give young athletes an easier way to connect with the right coaches and teams from the start,
              so they can train smarter, improve faster, and reach their full potential.
            </p>
            <p className="text-md font-bold text-black">– Alex Vo</p>
          </div>

          {/* Right Placeholder Box */}
          <div className="w-full md:w-1/2 relative">
            <div className="w-full h-72 bg-gray-300 rounded-xl shadow-md flex items-center justify-center text-gray-600 text-xl">
              Founder Placeholder
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center text-sm text-white shadow-lg">
              Logo
            </div>
          </div>
        </div>
      </div>

    </>
    
  );
};

export default Home;
