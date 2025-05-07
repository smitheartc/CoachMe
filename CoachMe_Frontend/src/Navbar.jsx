import logo from "./assets/transparentLogo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-yellow-400 shadow-md text-black">
      {/* Logo on the left */}
      <div>
        <img src={logo} className="h-12 md:h-20 w-auto" alt="Logo" />
      </div>

      {/* Navigation on the right */}
      <nav className="flex items-center space-x-4 font-bold">
        <Link
          to="/"
          className="px-4 py-2 rounded hover:bg-yellow-300 focus:outline-none"
        >
          Home
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
