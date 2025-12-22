import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null

  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
        <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={movie.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold truncate">{movie.title}</h3>
          <p className="text-gray-400 text-sm">{movie.release_date?.split('-')[0] || movie.year}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard