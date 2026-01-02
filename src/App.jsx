import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

function App() {
  const [searchResults, setSearchResults] = useState(null)

  const handleSearch = (results) => {
    setSearchResults(results)
  }

  const clearSearch = () => {
    setSearchResults(null)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onSearch={handleSearch} />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Home searchResults={searchResults} onClearSearch={clearSearch} />} 
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App