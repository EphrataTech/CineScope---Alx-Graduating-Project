import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../api/tmdb'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await fetchMovieDetails(id)
        setMovie(data)
      } catch (error) {
        console.error('Error fetching movie details:', error)
      } finally {
        setLoading(false)
      }
    }

    loadMovie()
  }, [id])

  if (loading) {
    return <div className="container mx-auto p-4 text-center">Loading...</div>
  }

  if (!movie) {
    return <div className="container mx-auto p-4 text-center">Movie not found</div>
  }

  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-movie.jpg'

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-400 mb-4">{movie.release_date}</p>
          <p className="text-lg mb-6">{movie.overview}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-semibold">Rating:</span> {movie.vote_average}/10
            </div>
            <div>
              <span className="font-semibold">Runtime:</span> {movie.runtime} min
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails