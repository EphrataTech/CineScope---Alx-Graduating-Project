import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          CineScope
        </Link>
        <SearchBar />
      </div>
    </nav>
  )
}

export default Navbar