import { useState, useEffect } from 'react'
import { fetchPopularMovies } from '../api/tmdb'
import { sampleMovies } from '../data/movies'
import MovieCard from '../components/MovieCard'

const Home = ({ searchResults, onClearSearch }) => {
  const [movies, setMovies] = useState(sampleMovies)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true)
      const apiMovies = await fetchPopularMovies()
      if (apiMovies.length > 0) {
        setMovies(apiMovies.slice(0, 12))
      }
      setLoading(false)
    }
    if (!searchResults) {
      loadMovies()
    }
  }, [searchResults])

  const displayMovies = searchResults || movies
  const title = searchResults ? 'Search Results' : 'Popular Movies'

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        {searchResults && (
          <button 
            onClick={onClearSearch}
            className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
          >
            Clear Search
          </button>
        )}
      </div>
      {loading && <p className="text-center">Loading movies...</p>}
      {displayMovies.length === 0 && !loading && (
        <p className="text-center text-gray-400">No movies found.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home