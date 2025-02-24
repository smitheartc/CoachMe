import logo from "./assets/transparentLogo.png";

export default function Navbar() {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src={logo} className="h-12 md:h-20 w-auto" alt="Logo" />
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Home</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Find a Coach</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Dashboard</button>
          <button className="px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600">Log out</button>
        </div>
      </header>
    )
}