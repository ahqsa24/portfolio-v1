import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from './components/Portfolio.jsx'
import Experience from './components/Experience.jsx'
import DetailProject from './components/detailProject.jsx'

// Main Portfolio Page Component
const MainPortfolio = () => (
  <div className="mx-auto px-12 pt-20">
    <Home />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    <App />
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          {/* Main portfolio page */}
          <Route path="/" element={<MainPortfolio />} />
          {/* Project detail page */}
          <Route path="/project/:id" element={<DetailProject />} />
          {/* Fallback route for any unmatched paths */}
          <Route path="*" element={<MainPortfolio />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>,
)
