import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Update scroll state for blur effect
      setIsScrolled(scrollPosition > 50);
      
      // Only update active section if we're on the main page
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'experience', 'portfolio', 'contact'];
        const scrollWithOffset = scrollPosition + 100; // Offset for better detection

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && scrollWithOffset >= section.offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (section) => {
    // If we're not on the main page, navigate to main page first
    if (location.pathname !== '/') {
      navigate(`/#${section}`);
      window.location.href = `/#${section}`;
    } else {
      setActiveSection(section);
    }
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flex items-center justify-between py-4 sm:py-6 px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="font-bold text-lg sm:text-xl bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">
          Ahqsa
        </div>

        {/* Desktop Menu */}
        <ul className="menu hidden md:flex gap-6 lg:gap-8">
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => handleNavClick('experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={() => handleNavClick('portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 z-40">
          <ul className="flex flex-col py-4">
            <li>
              <a 
                href="#home" 
                className={`nav-link block py-3 px-6 text-base hover:bg-gray-800/50 transition-colors duration-300 ${
                  activeSection === 'home' ? 'active' : ''
                }`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link block py-3 px-6 text-base hover:bg-gray-800/50 transition-colors duration-300 ${
                  activeSection === 'about' ? 'active' : ''
                }`}
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={`nav-link block py-3 px-6 text-base hover:bg-gray-800/50 transition-colors duration-300 ${
                  activeSection === 'experience' ? 'active' : ''
                }`}
                onClick={() => handleNavClick('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className={`nav-link block py-3 px-6 text-base hover:bg-gray-800/50 transition-colors duration-300 ${
                  activeSection === 'portfolio' ? 'active' : ''
                }`}
                onClick={() => handleNavClick('portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link block py-3 px-6 text-base hover:bg-gray-800/50 transition-colors duration-300 ${
                  activeSection === 'contact' ? 'active' : ''
                }`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar