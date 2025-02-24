export default function Navbar() {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold">Coach Me</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Home</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Find a Coach</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Dashboard</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">Log out</button>
        </div>
      </header>
    )
}