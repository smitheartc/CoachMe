import React from 'react';
import heroBackground from '../src/assets/heroBackground.png';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center relative px-4"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundColor: '#000',
        }}
      >
        <div className="absolute top-1/3 right-1/4 md:top-1/3 md:right-1/4 lg:top-1/3 lg:right-1/4">
          <h1 className="text-[34px] md:text-[48px] font-bold text-white text-right">
            WHERE ATHLETES<br />
            MEET THEIR MATCH.
          </h1>
        </div>
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
                src="/src/assets/Mission.png" 
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
                src="/src/assets/WhyWeStarted.png" 
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

          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-lg text-gray-800">
              Friends bouncing from coach to coach, hoping to finally find one that matched their learning style. Teams disbanding — and parents scrambling to find new tryouts on short notice. And now, watching his little sister and her friends going through the same trial-and-error, it was clear: the system is broken, <span className="font-bold">so we decided to fix it.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Our Purpose Section */}
      <div className="w-full bg-white py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Our Purpose
          </h2>
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <span className="text-[48px] font-bold text-[#FFDB8C]">1</span>
              <p className="text-lg text-gray-800">
                To help parents, athletes, and coaches connect in one place not just for lessons, but for real development and real opportunity.
              </p>
            </div>
            <div className="flex items-center gap-6 ml-12">
              <span className="text-[48px] font-bold text-[#FFDB8C]">2</span>
              <p className="text-lg text-gray-800">
                Help youth athletes meet their match — the coach that gets them, and the team that helps them thrive.
              </p>
            </div>
            <div className="flex items-center gap-6 ml-24">
              <span className="text-[48px] font-bold text-[#FFDB8C]">3</span>
              <p className="text-lg text-gray-800">
                Save people time, money, and frustration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What is CoachMe Section */}
      <div className="w-full bg-[#FFDB8C] py-20 px-4 md:px-12 -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What is CoachMe?
            </h2>
            <p className="text-lg text-gray-800">
              CoachMe is your all-in-one sports development platform for youth athletes and parents:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-[209px] h-[209px] bg-[#8897AD] rounded-lg p-6 flex items-center justify-center text-center">
              <p className="text-white text-lg">
                Book private coaching sessions from verified local coaches
              </p>
            </div>
            <div className="w-[209px] h-[209px] bg-[#8897AD] rounded-lg p-6 flex items-center justify-center text-center">
              <p className="text-white text-lg">
                See real-time availability and pricing — no back-and-forth
              </p>
            </div>
            <div className="w-[209px] h-[209px] bg-[#8897AD] rounded-lg p-6 flex items-center justify-center text-center">
              <p className="text-white text-lg">
                Receive feedback from your coach after each session
              </p>
            </div>
            <div className="w-[209px] h-[209px] bg-[#8897AD] rounded-lg p-6 flex items-center justify-center text-center">
              <p className="text-white text-lg">
                Explore local tryouts and discover new teams that fit your level
              </p>
            </div>
            <div className="w-[209px] h-[209px] bg-[#8897AD] rounded-lg p-6 flex items-center justify-center text-center">
              <p className="text-white text-lg">
                Track your development with feedback and session history
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Journey Section */}
      <div className="w-full bg-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Join Our Journey
          </h2>
          <div className="w-[1086px] h-[212px] bg-white border border-[#8897AD] rounded-lg flex flex-col items-center justify-center p-8">
            <div className="w-full">
              <p className="text-lg text-gray-800 mb-4">
                We're just getting started.
              </p>
              <p className="text-lg text-gray-800">
                Subscribe to stay updated on our launch, special offers, and new cities we're rolling out to.
              </p>
            </div>
            <button className="bg-[#FFDB8C] text-black font-semibold py-3 px-8 rounded-lg hover:bg-[#FFD166] transition-colors mt-8">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
