import logo from "./assets/transparentLogo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md text-black" style={{ background: 'linear-gradient(to bottom, #FFDB8C, #FFD14B)' }}>
      {/* Logo on the left */}
      <Link to="/">
        <img src={logo} className="h-12 md:h-20 w-auto" alt="Logo" />
      </Link>

      {/* Navigation on the right */}
      <nav className="flex items-center space-x-4 font-bold">
        <Link
          to="/about"
          className="px-4 py-2 rounded hover:bg-yellow-300 focus:outline-none"
        >
          About
        </Link>
        <Link
          to="/coachfinder"
          className="px-4 py-2 rounded hover:bg-yellow-300 focus:outline-none"
        >
          Find a Coach
        </Link>
        <Link
          to="/dashboard"
          className="px-4 py-2 rounded hover:bg-yellow-300 focus:outline-none"
        >
          Dashboard
        </Link>
        <Link
          to="/profile"
          className="px-4 py-2 rounded hover:bg-yellow-300 focus:outline-none"
        >
          Profile
        </Link>
        <Link
          className="px-4 py-2 rounded hover:bg-yellow-300 focus:outline-none"
        >
          Log Out
        </Link>
      </nav>
    </header>
  );
}
