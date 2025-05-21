import React from 'react';
import AboutHero from '../src/assets/AboutHero.png';
import Footer from '../src/Footer';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-screen bg-cover bg-center relative px-4"
        style={{
          backgroundImage: `url(${AboutHero})`,
          backgroundColor: '#000',
        }}
      >
        <div className="absolute top-1/3 right-[10%] md:top-1/3 md:right-[10%] lg:top-1/3 lg:right-[10%]">
          <h1 className="text-[34px] md:text-[48px] text-white text-right" style={{ fontWeight: 400 }}>
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
              <h2 className="text-[52px] font-bold text-[#8897AD] mb-6">
                Our Mission
              </h2>
              <p className="text-[30px] text-gray-700 mb-6">
                CoachMe exists to <span className="font-bold">empower</span> youth athletes by simplifying the journey of <span className="font-bold">growth</span> and <span className="font-bold">development</span>.
              </p>
              <p className="text-[30px] text-gray-700">
                We make it easy to find the right coach, join the right team, and receive the right feedback — all in one place. Every athlete deserves the opportunity to train, compete, and thrive in an environment that matches their potential.
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
            <h2 className="text-[52px] font-bold text-[#8897AD] mb-4">
              WHY WE STARTED
            </h2>
            <p className="text-[28px] text-gray-800">
              CoachMe was born from a personal journey — and a pattern we kept seeing in our community.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Content */}
            <div className="w-full md:w-1/2">
              <p className="text-[28px] text-gray-800 mb-6">
                Our founder played baseball starting at age 5 and went through over 16 coaching changes and team switches. Each time, it meant starting over — with new teammates, new training styles, and no clear path forward. Finding the right coach and a team that helped him grow was like rolling dice. But it wasn't just his story.
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
            <p className="text-[30px] text-gray-800">
              As he got older, he started noticing the same cycle all around him — Parents constantly posting in Facebook groups asking:
            </p>
          </div>

          <div className="w-full">
            <div className="mb-4 ml-40">
              <div className="bg-white p-6 rounded-[34px] shadow-md">
                <p className="text-[43px] font-bold text-gray-800">
                  "Does anyone know of a good coach around here?"
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-[34px] shadow-md max-w-3xl">
                <p className="text-[43px] font-bold text-gray-800">
                  "Any teams still looking for players?"
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-[30px] text-gray-800">
              Friends bouncing from coach to coach, hoping to finally find one that matched their learning style. Teams disbanding — and parents scrambling to find new tryouts on short notice. And now, watching his little sister and her friends going through the same trial-and-error, it was clear: the system is broken, so we decided to fix it.
            </p>
          </div>
        </div>
      </div>

      {/* Our Purpose Section */}
      <div className="w-full bg-white py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[52px] font-bold text-[#8897AD] text-center mb-12">
            Our Purpose
          </h2>
          <div className="space-y-0">
            <div className="flex items-center gap-4">
              <span className="text-[152px] font-bold text-[#FFDB8C]">1</span>
              <p className="text-[30px] font-bold text-gray-800">
                To help parents, athletes, and coaches connect in one place not just for lessons, but for real development and real opportunity.
              </p>
            </div>
            <div className="flex items-center gap-4 ml-40">
              <span className="text-[152px] font-bold text-[#FFDB8C]">2</span>
              <p className="text-[30px] font-bold text-gray-800">
                Help youth athletes meet their match — the coach that gets them, and the team that helps them thrive.
              </p>
            </div>
            <div className="flex items-center gap-4 ml-80">
              <span className="text-[152px] font-bold text-[#FFDB8C]">3</span>
              <p className="text-[30px] font-bold text-gray-800">
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
            <h2 className="text-[52px] font-bold text-[#8897AD] mb-4">
              What is CoachMe?
            </h2>
            <p className="text-[28px] text-gray-800">
              CoachMe is your all-in-one sports development platform for youth athletes and parents:
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <div className="w-[300px] bg-[#8897AD] rounded-[25px] p-8 flex items-center justify-center text-center">
              <p className="text-black text-[28px]">
                Book private coaching sessions from verified local coaches
              </p>
            </div>
            <div className="w-[300px] bg-[#8897AD] rounded-[25px] p-8 flex items-center justify-center text-center">
              <p className="text-black text-[28px]">
                See real-time availability and pricing — no back-and-forth
              </p>
            </div>
            <div className="w-[300px] bg-[#8897AD] rounded-[25px] p-8 flex items-center justify-center text-center">
              <p className="text-black text-[28px]">
                Receive feedback from your coach after each session
              </p>
            </div>
            <div className="w-[300px] bg-[#8897AD] rounded-[25px] p-8 flex items-center justify-center text-center">
              <p className="text-black text-[28px]">
                Explore local tryouts and discover new teams that fit your level
              </p>
            </div>
            <div className="w-[300px] bg-[#8897AD] rounded-[25px] p-8 flex items-center justify-center text-center">
              <p className="text-black text-[28px]">
                Track your development with feedback and session history
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[28px] font-semibold text-gray-800 w-[752px] mx-auto">
              We're starting with baseball and softball in Texas — and expanding to every major youth team sport nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* Join Our Journey Section */}
      <div className="w-full bg-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[52px] font-bold text-[#8897AD] mb-8">
            Join Our Journey
          </h2>
          <div className="w-full bg-white border border-[#8897AD] rounded-[25px] flex flex-col items-center justify-center p-12">
            <div className="w-full">
              <p className="text-[28px] text-gray-800">
                We're just getting started.
              </p>
              <p className="text-[28px] text-gray-800">
                Subscribe to stay updated on our launch, special offers, and new cities we're rolling out to.
              </p>
            </div>
            <button className="bg-[#FFDB8C] text-black font-semibold py-3 px-16 rounded-[41px] hover:bg-[#FFD166] transition-colors mt-8 text-[19px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
