import React from 'react';
import heroBackground from '../src/assets/heroBackground.png'; 
import Footer from '../src/Footer';

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
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-[24px] md:text-[34px] text-white mb-4" style={{ lineHeight: '100%', fontFamily: 'SF Pro Rounded', fontWeight: 400 }}>
            COACHING FOR DREAMERS
          </h1>
          <h2 className="text-[40px] md:text-[58px] font-[700] text-white mb-4" style={{ lineHeight: '100%' }}>
            Where Athletes Meets Their Match
          </h2>
          <p className="text-[18px] md:text-[24px] text-white mb-4 whitespace-nowrap" style={{ lineHeight: '100%', fontFamily: 'SF Pro Rounded', fontWeight: 400 }}>
            Find the perfect coach, Join the right team, Take your game to the next level.
          </p>
        </div>

        <div className="mt-6 text-white text-[18px] md:text-[24px] font-semibold mb-4">
          I want to find a...
        </div>

        <div className="flex gap-4">
          <button className="bg-[#FFDB8C] text-black px-6 py-3 rounded-full text-[18px] md:text-[24px] font-medium shadow-md hover:scale-105 transition w-[120px] md:w-[150px] flex items-center justify-center">
            COACH
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full text-[18px] md:text-[24px] font-medium shadow-md hover:scale-105 transition w-[120px] md:w-[150px] flex items-center justify-center">
            TEAM
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="relative w-full" style={{ marginTop: '-100px', zIndex: 10 }}>
        <div className="w-full h-[557px] rounded-[50px] shadow-md flex flex-col md:flex-row items-center justify-between p-6 md:p-12" style={{ backgroundColor: 'rgba(255, 219, 140, 1)', backdropFilter: 'blur(8px)' }}>
          {/* Image Box */}
          <div className="w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0">
            <img 
              src="/src/assets/AboutCoachMe.png" 
              alt="About Coach Me" 
              className="w-[541px] h-[367px] object-cover rounded-[50px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-[36px] md:text-[56px] font-bold mb-4 text-gray-900">
              About Coach Me
            </h2>
            <p className="text-[16px] md:text-[20px] text-gray-800 mb-6">
              CoachMe is the all-in-one platform connecting young athletes with top coaches and teams. 
              No more searching multiple sites—CoachMe makes it easy to find the right fit for training and competition.
            </p>
            <button className="bg-[#8897AD] text-white px-6 py-3 rounded-[50px] text-[16px] md:text-[20px] font-medium hover:opacity-90 transition">
              FIND MORE ABOUT US
            </button>
          </div>
        </div>
      </div>

      {/* What You Get Section */}
      <div className="w-full bg-white py-16 px-6 md:px-12 text-center relative" style={{ marginTop: '-50px', zIndex: 5 }}>
        <div className="pt-20">
          <p className="text-[16px] md:text-[20px] text-[#FFDB8C] font-medium uppercase tracking-wide mb-2">
            What You Get
          </p>
          <h2 className="text-[32px] md:text-[45px] font-bold text-black mb-10">
            How We Support
          </h2>

          {/* Support Boxes */}
          <div className="flex justify-center gap-6">
            <div className="relative w-[366px] h-[366px] overflow-hidden" style={{ borderRadius: '50px' }}>
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img 
                src="/src/assets/1-on-1.jpg" 
                alt="1-on-1 Coaching" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start p-6 z-20">
                <h3 className="text-[40px] font-semibold mb-2 text-[#FFDB8C] w-full text-left">1-ON-1 COACHING</h3>
                <p className="text-[22px] text-white w-full text-left">Booking made simple</p>
              </div>
            </div>
            <div className="relative w-[366px] h-[366px] overflow-hidden" style={{ borderRadius: '50px' }}>
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img 
                src="/src/assets/TryoutListings.jpg" 
                alt="Tryout Listings" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start p-6 z-20">
                <h3 className="text-[40px] font-semibold mb-2 text-[#FFDB8C] w-full text-left">TRYOUT LISTINGS</h3>
                <p className="text-[22px] text-white w-full text-left">Discover tryouts and teams that match your level</p>
              </div>
            </div>
            <div className="relative w-[366px] h-[366px] overflow-hidden" style={{ borderRadius: '50px' }}>
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img 
                src="/src/assets/ProgressWithPurpose.jpg" 
                alt="Progress with Purpose" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start p-6 z-20">
                <h3 className="text-[40px] font-semibold mb-2 text-[#FFDB8C] w-full text-left">PROGRESS WITH PURPOSE</h3>
                <p className="text-[22px] text-white w-full text-left">Get personalized coach notes after each session to focus your training at home</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-white py-20 px-4 md:px-12">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-stretch gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="/src/assets/CoachingService.png" 
              alt="Coaching Service" 
              className="w-[537px] h-[500px] object-cover rounded-[50px]"
            />
          </div>
          {/* Right: Steps */}
          <div className="w-full md:w-1/2">
            <p className="text-[16px] md:text-[20px] text-[#FFDB8C] font-medium uppercase tracking-wide mb-2">
              How it works
            </p>
            <h2 className="text-[32px] md:text-[45px] font-bold text-black mb-6">
              Get Our Coaching Service
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-[#F5F5F5] border border-[#C4C4C4] p-4 flex items-center gap-4 relative">
                <div className="bg-[#FFDB8C] text-white font-bold w-14 h-14 rounded-[50px] flex items-center justify-center text-[28px] md:text-[36px] absolute -left-7">
                  1
                </div>
                <div className="ml-8">
                  <h3 className="text-[20px] md:text-[28px] font-semibold text-black">Sign Up</h3>
                  <p className="text-[16px] md:text-[24px] text-black">Create an account to have access to the best coaches and teams near you.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#F5F5F5] border border-[#C4C4C4] p-4 flex items-center gap-4 relative">
                <div className="bg-[#FFDB8C] text-white font-bold w-14 h-14 rounded-[50px] flex items-center justify-center text-[36px] absolute -left-7">
                  2
                </div>
                <div className="ml-8">
                  <h3 className="text-[28px] font-semibold text-black">Find Your Perfect Match</h3>
                  <p className="text-[24px] text-black">Connect and explore with the top coaches and teams.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#F5F5F5] border border-[#C4C4C4] p-4 flex items-center gap-4 relative">
                <div className="bg-[#FFDB8C] text-white font-bold w-14 h-14 rounded-[50px] flex items-center justify-center text-[36px] absolute -left-7">
                  3
                </div>
                <div className="ml-8">
                  <h3 className="text-[28px] font-semibold text-black">Train, Improve, Succeed</h3>
                  <p className="text-[24px] text-black">Monitor your training progress and advance with expert guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Coaches & Clubs CTA Section */}
      <div className="w-full bg-white py-20 px-4 md:px-12 text-center">
        <h2 className="text-[32px] md:text-[45px] font-bold text-black mb-4">
          For Coaches and Clubs
        </h2>
        <p className="text-[18px] md:text-[24px] font-normal mb-8 text-black">
          Want to grow your client base or fill your team with passionate players?
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#FFDB8C] text-black px-6 py-3 rounded-[50px] text-[16px] md:text-[19px] font-medium shadow-md hover:scale-105 transition">
            Apply to be a Coach
          </button>
          <button className="bg-[#FFDB8C] text-black px-6 py-3 rounded-[50px] text-[16px] md:text-[19px] font-medium shadow-md hover:scale-105 transition">
            Post Your Team Tryouts
          </button>
        </div>
      </div>
      {/* Founder Section */}
      <div className="w-full bg-white py-20 pb-60 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Left Text Block */}
          <div className="w-full md:w-1/2">
            <p className="text-[16px] md:text-[20px] text-[#FFDB8C] font-medium uppercase tracking-wide mb-2">
              Meet the Founder
            </p>
            <h2 className="text-[32px] md:text-[45px] font-bold text-black mb-4">
              Why Coach Me?
            </h2>
            <p className="text-[18px] md:text-[24px] text-gray-700 mb-0">
              "With 15+ years as an athlete, I experienced firsthand the struggle of constantly searching for the right coaches and teams.
              If I had found the right coaches and teammates sooner, I could have accelerated my growth and avoided wasted time.
              That's why I created CoachMe—to give young athletes an easier way to connect with the right coaches and teams from the start,
              so they can train smarter, improve faster, and reach their full potential."
            </p>
            <p className="text-[18px] md:text-[24px] font-bold text-black text-right -mt-2">– Alex Vo</p>
          </div>

          {/* Right Image Block */}
          <div className="w-full md:w-1/2 relative flex justify-end">
            <div className="relative w-full max-w-[477px] flex justify-end">
              <div className="relative w-full md:w-[477px]">
                <img
                  src="/src/assets/AlexVo1.jpg"
                  alt="Alex Vo"
                  className="w-full h-[488px] object-cover rounded-[50px]"
                  style={{ objectPosition: '70% 50%' }}
                />
                <img 
                  src="/src/assets/AlexVo2.jpg" 
                  alt="Alex Vo Logo" 
                  className="absolute bottom-[-70px] right-[-70px] w-[200px] h-[200px] md:w-[270px] md:h-[270px] object-cover rounded-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
