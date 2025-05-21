import logo from "./assets/transparentLogo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-2 shadow-md text-black" style={{ background: 'linear-gradient(to bottom, #FFDB8C, #FFD14B)' }}>
      {/* Logo on the left */}
      <Link to="/">
        <img src={logo} className="h-16 md:h-24 w-auto" alt="Logo" />
      </Link>

      {/* Navigation on the right */}
      <nav className="flex items-center space-x-4 font-bold">
        <Link
          to="/about"
          className="px-4 py-2 rounded focus:outline-none text-[20px]"
        >
          ABOUT
        </Link>
        <Link
          to="/coachfinder"
          className="px-4 py-2 rounded focus:outline-none text-[20px]"
        >
          FIND A COACH
        </Link>
        <Link
          to="/dashboard"
          className="px-4 py-2 rounded focus:outline-none text-[20px]"
        >
          DASHBOARD
        </Link>
        <Link
          to="/profile"
          className="px-4 py-2 rounded focus:outline-none text-[20px]"
        >
          PROFILE
        </Link>
        <Link
          className="px-4 py-2 rounded focus:outline-none text-[20px]"
        >
          LOG OUT
        </Link>
      </nav>
    </header>
  );
}
