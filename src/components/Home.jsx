import React, { useState, useEffect, useMemo } from 'react'

const Home = () => {
  const roles = useMemo(() => ['Frontend Developer', 'UI/UX Designer', 'Software Engineer'], []);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        // Continue typing or deleting
        setCurrentText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div id="home" className="min-h-screen flex flex-col gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-24 justify-center">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl rounded-full bg-gray-700/50 border border-white py-2 px-4 sm:px-6 md:px-8 w-fit">Ready to Develop</p>
        <h1 className="flex flex-col gap-4 sm:gap-6 md:gap-8 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">Ahmad Qaulan</span>
          <span> Sadida</span>
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl">
          {currentText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
        </h3>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">Membangun Antarmuka Digital yang Responsif, Interaktif, dan Estetis <br className="hidden sm:block" /> untuk Pengalaman Pengguna Terbaik.</p>
        <div className="languages text-sm sm:text-base md:text-lg flex flex-wrap gap-2 w-full sm:w-[80%] md:w-[60%] lg:w-[30%] max-w-fit">
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-3 sm:px-4 md:px-6 w-fit">React</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-3 sm:px-4 md:px-6 w-fit">Express</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-3 sm:px-4 md:px-6 w-fit">NodeJS</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-3 sm:px-4 md:px-6 w-fit">Tailwind</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-3 sm:px-4 md:px-6 w-fit">UI/UX</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-3 sm:px-4 md:px-6 w-fit">Figma</p>
        </div>
        <div className="text-sm sm:text-base md:text-lg flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="flex gap-2 items-center justify-center rounded-lg bg-gray-700/50 py-2 sm:py-1 px-6 sm:px-8 w-full sm:w-fit">
              <img src="public/assets/project-icon.png" alt="Projects" className="w-4 h-4 sm:w-5 sm:h-5" />
              <a href="#projects">Projects</a>
            </button>
            <button className="flex gap-2 items-center justify-center rounded-lg bg-gray-700/50 py-2 sm:py-1 px-6 sm:px-8 w-full sm:w-fit">
              <img src="public/assets/contact-icon.png" alt="Contact" className="w-4 h-4 sm:w-5 sm:h-5" />
              <a href="#contact">Contact</a>
            </button>
        </div>
    </div>
  )
}

export default Home