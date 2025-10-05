import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from './components/Portfolio.jsx'
import Experience from './components/Experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="relative">
      <Navbar />
      <div className="mx-auto px-12 pt-20">
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        <App />
      </div>
    </div>
  </StrictMode>,
)
