import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import App from './App.jsx'
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
export const MainPortfolio = () => (
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
    <App />
  </div>
);

// initialize once on boot (safety)
if (!window.__aos_inited) {
  AOS.init({ offset: 80, duration: 600, easing: 'ease-out', once: true })
  window.__aos_inited = true
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
    </Router>
  </StrictMode>,
)
