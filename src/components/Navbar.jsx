import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="navbar flex items-center justify-between py-6 px-24">
        <div className="font-bold text-xl bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">Ahqsa</div>
        <ul className="menu flex gap-8">
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
    </div>
  )
}

export default Navbar