const MovieCard = ({ title, year, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold truncate">{title}</h3>
        <p className="text-gray-400 text-sm">{year}</p>
      </div>
    </div>
  )
}

export default MovieCard