import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navData } from '../text.js'

const Navbar = () => {
  const navItems = navData[0];
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
        const navbarHeight = 80; // Approximate navbar height
        const offset = navbarHeight + 100; // Add some buffer for better UX

        // Iterate forward and update to the last section that meets the criteria
        let currentSection = 'home'; // Default to home
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.offsetTop;
            // Check if we've scrolled past this section's start (minus offset)
            // Only update if section is valid and positioned
            if (section.offsetTop > 0 && scrollPosition + offset >= sectionTop) {
              currentSection = sections[i];
            }
          }
        }
        setActiveSection(currentSection);
      }
    };

    // Initial detection on mount or route change
    const detectInitialSection = () => {
      // Check if there's a hash in the URL
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'experience', 'portfolio', 'contact'].includes(hash)) {
        setActiveSection(hash);
        // Scroll to the section
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'auto' // Use 'auto' instead of 'smooth' for initial load
          });
        }
      } else {
        // Otherwise detect based on scroll position
        handleScroll();
      }
    };

    // Handle hash changes (e.g., when clicking browser back/forward)
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'experience', 'portfolio', 'contact'].includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Delay initial detection to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      detectInitialSection();
    }, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  const handleNavClick = (section) => {
    // Update active section immediately for instant feedback
    setActiveSection(section);
    
    // If we're not on the main page, navigate to main page first
    if (location.pathname !== '/') {
      navigate(`/#${section}`);
      window.location.href = `/#${section}`;
    } else {
      // Smooth scroll to section
      const element = document.getElementById(section);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        // Update URL hash without triggering page reload
        window.history.pushState(null, '', `#${section}`);
      }
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
          {navItems.title}
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