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
    <div id="home" className="min-h-screen flex flex-col gap-8 px-24 py-24">
        <p className="text-xl rounded-full bg-gray-700/50 border border-white py-2 px-8 w-fit">Ready to Develop</p>
        <h1 className="flex flex-col gap-8 font-bold text-7xl">
          <span className="bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">Ahmad Qaulan</span>
          <span> Sadida</span>
        </h1>
        <h3 className="text-2xl">
          {currentText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
        </h3>
        <p className="text-lg">Membangun Antarmuka Digital yang Responsif, Interaktif, dan Estetis <br /> untuk Pengalaman Pengguna Terbaik.</p>
        <div className="languages text-lg flex flex-wrap gap-2 w-[30%] max-w-fit">
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-6 w-fit">React</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-6 w-fit">Express</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-6 w-fit">NodeJS</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-6 w-fit">Tailwind</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-6 w-fit">UI/UX</p>
            <p className="rounded-full bg-gray-700/50 border border-white py-1 px-6 w-fit">Figma</p>
        </div>
        <div className="text-lg flex gap-4">
            <button className="flex gap-2 rounded-lg bg-gray-700/50 py-1 px-8 w-fit">
              <img src="public/assets/project-icon.png" alt="Projects" />
              <a href="#projects">Projects</a>
            </button>
            <button className="flex gap-2 rounded-lg bg-gray-700/50 py-1 px-8 w-fit">
              <img src="public/assets/contact-icon.png" alt="Contact" />
              <a href="#contact">Contact</a>
            </button>
        </div>
    </div>
  )
}

export default Home