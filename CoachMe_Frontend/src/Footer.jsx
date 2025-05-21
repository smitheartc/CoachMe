import logo from "./assets/transparentLogo.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12" style={{ backgroundColor: '#8897AD' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Top Section - Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and Description */}
          <div className="md:w-1/3 text-left">
            <img src={logo} className="h-20 md:h-24 w-auto mb-6 -ml-8" alt="Logo" />
            <p className="text-black text-[17px]">
              Find the perfect coach, Join the right team, Take your game to the next level.
            </p>
          </div>

          {/* Useful Links */}
          <div className="md:w-1/6">
            <h3 className="font-bold text-[#FFDB8C] mb-6 text-[25px]">Useful Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-black hover:text-gray-700 text-[18px]">Home</Link></li>
              <li><Link to="/about" className="text-black hover:text-gray-700 text-[18px]">About Us</Link></li>
              <li><Link to="/signup" className="text-black hover:text-gray-700 text-[18px]">Sign Up</Link></li>
              <li><Link to="/login" className="text-black hover:text-gray-700 text-[18px]">Login</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:w-1/6">
            <h3 className="font-bold text-[#FFDB8C] mb-6 text-[25px]">Contact</h3>
            <ul className="space-y-3">
              <li className="text-black text-[18px]">Email: support@coachme.com</li>
              <li className="text-black text-[18px]">Phone: (555) 123-4567</li>
              <li className="text-black text-[18px]">Location: San Francisco, CA</li>
            </ul>
          </div>

          {/* Join Us Section */}
          <div className="md:w-1/4">
            <h3 className="font-bold text-[#FFDB8C] mb-6 text-[25px]">Join Us</h3>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email..." 
                className="w-full bg-white text-gray-800 px-6 py-4 rounded-full pr-16 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFDB8C] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#FFD166] transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 