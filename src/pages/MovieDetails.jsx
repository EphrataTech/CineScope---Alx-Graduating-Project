import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY || 'demo_key'
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        const data = await response.json()
        setMovie(data)
      } catch (error) {
        console.error('Error fetching movie:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovie()
  }, [id])

  if (loading) return <div className="container mx-auto p-4 text-center">Loading...</div>
  if (!movie) return <div className="container mx-auto p-4 text-center">Movie not found</div>

  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-400 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          {imageUrl ? (
            <img src={imageUrl} alt={movie.title} className="w-full rounded-lg" />
          ) : (
            <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-400 mb-4">{movie.release_date}</p>
          <p className="text-lg mb-6">{movie.overview}</p>
          <div className="grid grid-cols-2 gap-4">
            <div><span className="font-semibold">Rating:</span> {movie.vote_average}/10</div>
            <div><span className="font-semibold">Runtime:</span> {movie.runtime} min</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails