# CineScope - Movie Database App

A modern React application that uses the TMDB API to browse, search, and view detailed movie information.

## ✨ Features
- 🎬 Browse popular movies from TMDB
- 🔍 Search movies by title with real-time results
- 📱 Responsive design for all devices
- 🎨 Clean dark theme UI with Tailwind CSS
- 📄 Detailed movie pages with ratings and info
- ⚡ Fast loading with Vite build tool

## 🚀 Quick Start

1. **Clone and install:**
   ```bash
   git clone <repository-url>
   cd CineScope-alx-Capstone
   npm install
   ```

2. **Get TMDB API Key:**
   - Visit [TMDB API](https://www.themoviedb.org/settings/api)
   - Create account and get your API key
   - Add to `.env` file:
     ```
     VITE_TMDB_API_KEY=your_actual_api_key_here
     ```

3. **Run the app:**
   ```bash
   npm run dev
   ```

## 📝 Technologies Used
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TMDB API** - Movie database and images

## 📁 Project Structure
```
src/
├── components/     # Reusable UI components
│   ├── Navbar.jsx   # Navigation with search
│   ├── MovieCard.jsx # Movie display cards
│   └── Footer.jsx   # Page footer
├── pages/         # Page components
│   ├── Home.jsx     # Main movie grid
│   └── MovieDetails.jsx # Individual movie info
├── api/           # API integration
│   └── tmdb.js      # TMDB API functions
└── data/          # Sample/fallback data
    └── movies.js    # Sample movie data
```

## 🌐 API Integration
- **Popular Movies**: Fetches trending movies from TMDB
- **Search**: Real-time movie search functionality  
- **Movie Details**: Complete movie information including ratings
- **Fallback Data**: Uses sample data when API is unavailable

## 📱 Responsive Design
- Mobile-first approach with Tailwind CSS
- Adaptive grid layouts (1-4 columns based on screen size)
- Touch-friendly navigation and interactions

## 🚀 Deployment Ready
The app is production-ready and can be deployed to:
- Vercel, Netlify, or any static hosting
- Build with: `npm run build`
- Preview with: `npm run preview`

---

**Built with ❤️ using React and TMDB API**
