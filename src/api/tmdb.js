const API_KEY = 'YOUR_TMDB_API_KEY'
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  return response.json()
}

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
  return response.json()
}

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  return response.json()
}