import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

// Components
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from './components/Portfolio.jsx'
import Experience from './components/Experience.jsx'
import DetailProject from './components/detailProject.jsx'
import MotionSection from './components/MotionSection.jsx'
import AOSRouteInit from './components/AOSRouteInit.jsx'

// Portfolio Content
const MainPortfolio = () => (
  <div className="mx-auto px-12 pt-18">
    <MotionSection variant="fadeInUp" aos="fade-up" id="home">
      <Home />
    </MotionSection>
    <MotionSection variant="fadeInUp" aos="fade-up" delay={0.1} id="about">
      <About />
    </MotionSection>
    <MotionSection variant="fadeInUp" aos="fade-up" delay={0.2} id="experience">
      <Experience />
    </MotionSection>
    <MotionSection variant="fadeInUp" aos="fade-up" delay={0.3} id="portfolio">
      <Portfolio />
    </MotionSection>
    <MotionSection variant="fadeInUp" aos="fade-up" delay={0.4} id="contact">
      <Contact />
    </MotionSection>
    <Footer />
  </div>
);

// Initialize AOS once on boot
if (!window.__aos_inited) {
  AOS.init({ 
    offset: 80, 
    duration: 600, 
    easing: 'ease-out', 
    once: true 
  })
  window.__aos_inited = true
}

// Component to handle scroll on location change
function ScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    // Check if there's a scroll target in location state
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo
      const element = document.getElementById(sectionId)
      
      if (element) {
        // Wait a bit for page to render, then scroll
        setTimeout(() => {
          const navbarHeight = 80
          const elementPosition = element.offsetTop - navbarHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [location])

  return null
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <AOSRouteInit>
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
      </AOSRouteInit>
      {/* Vercel Analytics */}
      <Analytics />
    </Router>
  )
}

export default App