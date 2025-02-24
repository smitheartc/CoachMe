import logo from "./assets/transparentLogo.png";
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src={logo} className="h-12 md:h-20 w-auto" alt="Logo" />
          <Link to="/"className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Home</Link>
          <Link to="/coachfinder" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Find a Coach</Link>
          <Link to="dashboard" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Dashboard</Link>
          <Link to="profile" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Profile</Link>
          <Link className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">Log out</Link>
        </div>
      </header>
    )
}