import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
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

  // Initialize theme from current document state on mount
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []);

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

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !isDark;
    if (next) {
      root.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
    setIsDark(next);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flex items-center justify-between py-4 sm:py-6 px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="font-bold text-lg sm:text-xl bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">
          Ahqsa
        </div>

        {/* Desktop Menu */}
  <ul className="menu hidden md:flex items-center gap-6 lg:gap-8">
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
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            {isDark ? (
              // Sun icon (indicates switch to light)
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              // Moon icon (indicates switch to dark)
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
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
            <li className="px-6 py-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full flex items-center gap-2 justify-center rounded-lg bg-gray-800/70 hover:bg-gray-700 text-gray-200 py-2"
              >
                {isDark ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                    </svg>
                    Light mode
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Dark mode
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar