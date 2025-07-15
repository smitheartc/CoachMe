import logo from "./assets/transparentLogo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  // Remove Auth0 logic. Just show a link to /login or a logout button.
  // You can wire up logout logic later if you want to clear tokens, etc.
  const isAuthenticated = false; // TODO: Replace with real auth state if you store a token
  const user = null; // TODO: Replace with real user info if you store it

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
        {isAuthenticated ? (
          <>
            <span className="px-2">{user?.name}</span>
            <button
              className="px-4 py-2 rounded focus:outline-none text-[20px] bg-yellow-400 hover:bg-yellow-500"
              // TODO: Add logout logic here
            >
              LOG OUT
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 rounded focus:outline-none text-[20px] hover:underline"
          >
            LOG IN
          </Link>
        )}
      </nav>
    </header>
  );
}