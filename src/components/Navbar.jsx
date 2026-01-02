import { useState } from 'react'
import { Link } from 'react-router-dom'
import { searchMovies } from '../api/tmdb'

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (query.trim()) {
      setIsSearching(true)
      const results = await searchMovies(query)
      onSearch(results)
      setIsSearching(false)
    }
  }

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          CineScope
        </Link>
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="px-4 py-2 rounded-l bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            type="submit" 
            disabled={isSearching}
            className="px-4 py-2 bg-blue-600 rounded-r hover:bg-blue-700 disabled:opacity-50"
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar