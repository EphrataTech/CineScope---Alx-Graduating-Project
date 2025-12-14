import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() && onSearch) {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="px-4 py-2 rounded-l bg-gray-700 text-white focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 rounded-r hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar