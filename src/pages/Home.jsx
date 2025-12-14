import { useState, useEffect } from 'react'
import { fetchPopularMovies } from '../api/tmdb'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchPopularMovies()
        setMovies(data.results || [])
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  if (loading) {
    return <div className="container mx-auto p-4 text-center">Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home