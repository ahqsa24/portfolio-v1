import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

// Main Portfolio Page Component
const MainPortfolio = () => (
  <div className="mx-auto px-12 pt-20">
    <MotionSection variant="fadeInUp" aos="fade-up">
      <Home />
    </MotionSection>
    <MotionSection variant="fadeInUp" aos="fade-up" delay={0.1}>
      <About />
    </MotionSection>
    <MotionSection variant="fadeInUp" aos="fade-up" delay={0.2}>
      <Experience />
    </MotionSection>
    <MotionSection variant="fadeInUp" aos="fade-up" delay={0.3}>
      <Portfolio />
    </MotionSection>
    <MotionSection variant="fadeInUp" aos="fade-up" delay={0.4}>
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

function App() {
  return (
    <Router>
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