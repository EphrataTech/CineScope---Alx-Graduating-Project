const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">CineScope</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search movies..."
            className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar