import { useState, useEffect } from 'react'
import { fetchPopularMovies } from '../api/tmdb'
import { sampleMovies } from '../data/movies'
import MovieCard from '../components/MovieCard'

const Home = () => {
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
    loadMovies()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Popular Movies</h2>
      {loading && <p className="text-center">Loading movies...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
          />
        ))}
      </div>
    </div>
  )
}

export default Home