import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'
import Footer from './components/Footer'
import { sampleMovies } from './data/movies'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Popular Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleMovies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              title={movie.title} 
              year={movie.year} 
              image={movie.image} 
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App