import logo from "./assets/transparentLogo.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-center items-center p-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-md text-black">
      <div className="flex justify-between items-center space-x-4">
        <img src={logo} className="h-12 md:h-20 w-auto" alt="Logo" />
        <Link to="/" className="px-4 py-2 rounded border border-black hover:bg-yellow-200">Home</Link>
        <Link to="/coachfinder" className="px-4 py-2 rounded border border-black hover:bg-yellow-200">Find a Coach</Link>
        <Link to="/dashboard" className="px-4 py-2 rounded border border-black hover:bg-yellow-200">Dashboard</Link>
        <Link to="/profile" className="px-4 py-2 rounded border border-black hover:bg-yellow-200">Profile</Link>
        <div>
          <Link className="px-4 py-2 rounded border border-black hover:bg-yellow-200">Log Out</Link>
        </div>
      </div>
    </header>
  );
}
