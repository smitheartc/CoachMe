import React from 'react';
import heroBackground from '../src/assets/heroBackground.png';

const About = () => {
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
        <h1 className="text-[34px] font-semibold text-white mb-4" style={{ lineHeight: '100%' }}>
          ABOUT COACH ME
        </h1>
        <h2 className="text-[58px] font-bold text-white mb-2" style={{ lineHeight: '100%' }}>
          Our Mission & Vision
        </h2>
        <p className="text-[24px] font-semibold text-white mb-10 max-w-3xl" style={{ lineHeight: '100%' }}>
          Empowering athletes to reach their full potential through meaningful connections with coaches and teams.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="w-full bg-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At CoachMe, our mission is to revolutionize the way athletes connect with coaches and teams. 
                We're dedicated to creating a seamless platform where talent meets opportunity, and where 
                every athlete can find their perfect match for growth and success.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that access to quality coaching and team opportunities should be available to all athletes. 
                Our platform breaks down barriers, making it easier for athletes to find the right guidance and 
                for coaches to discover promising talent.
              </p>
              <p className="text-lg text-gray-700">
                Through innovation and community building, we're creating a future where every athlete can 
                reach their full potential, supported by the right coaches and teams at every step of their journey.
              </p>
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img 
                src="/src/assets/AboutCoachMe.png" 
                alt="About Coach Me" 
                className="w-full h-[500px] object-cover rounded-[50px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why We Started Section */}
      <div className="w-full bg-[#FFDB8C] py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why We Started
            </h2>
            <p className="text-lg text-gray-800">
              CoachMe was born from a personal journey — and a pattern we kept seeing in our community.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Content */}
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-800 mb-6">
                Our founder played baseball starting at age 5 and went through over 16 coaching changes and team switches. 
                Each time, it meant starting over — with new teammates, new training styles, and no clear path forward. 
                Finding the right coach and a team that helped him grow was like rolling dice. But it wasn't just his story.
              </p>
            </div>
            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img 
                src="/src/assets/AlexVo1.jpg" 
                alt="Founder Story" 
                className="w-full h-[500px] object-cover rounded-[50px]"
              />
            </div>
          </div>

          <div className="text-center mt-12 mb-8">
            <p className="text-lg text-gray-800">
              As he got older, he started noticing the same cycle all around him — Parents constantly posting in Facebook groups asking:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end mb-4">
              <div className="bg-white p-6 rounded-[20px] shadow-md max-w-md">
                <p className="text-lg font-bold text-gray-800">
                  "Does anyone know of a good coach around here?"
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white p-6 rounded-[20px] shadow-md max-w-md">
                <p className="text-lg font-bold text-gray-800">
                  "Any teams still looking for players?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
