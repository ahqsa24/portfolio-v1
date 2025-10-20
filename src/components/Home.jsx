import React, { useState, useEffect, useMemo } from 'react'
import { homeData } from '../content.js'
import { HiFolder, HiMail } from 'react-icons/hi'

const Home = () => {
  // Extract data from homeData
  const badgeText = homeData[0].text
  const { firstName, lastName } = homeData[1]
  const description = homeData[3].text
  const techStack = homeData[4].techstack.map(t => t.text)

  const roles = useMemo(() => homeData[2].position.map(p => p.text), []);
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
    <div id="home" className="min-h-screen flex flex-col gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-24 justify-center animate-fade-in">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl rounded-full dark:bg-gray-700/50 bg-gradientMaroon text-amber-50 border border-white py-2 px-4 sm:px-6 md:px-8 w-fit hover:border-gray-300 hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-in-down">{badgeText}</p>
        <h1 className="flex flex-col gap-4 sm:gap-6 md:gap-8 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-slide-in-left">
          <span className="text-gradient-red-via-maroon-to-orange hover:from-gradientOrange hover:via-gradientRed hover:to-gradientMaroon transition-all duration-500 cursor-default">{firstName}</span>
          <span className="hover:text-gray-900/60 dark:hover:text-gray-300 transition-colors duration-300 cursor-default"> {lastName}</span>
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl animate-slide-in-right">
          {currentText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
        </h3>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed hover:text-gray-900/60 dark:hover:text-gray-300 transition-colors duration-300 animate-slide-in-up">{description.split('<br />').map((line, i, arr) => (
          <React.Fragment key={i}>
            {line}
            {i < arr.length - 1 && <br className="hidden sm:block" />}
          </React.Fragment>
        ))}</p>
        <div className="languages text-sm sm:text-base md:text-lg flex flex-wrap gap-2 w-full sm:w-[80%] md:w-[60%] lg:w-full max-w-fit animate-slide-in-up delay-200">
            {techStack.map((tech, index) => (
              <p key={index} className="rounded-full bg-gradientMaroon text-amber-50 dark:bg-gray-700/50 border border-white py-1 px-3 sm:px-4 md:px-6 w-fit hover:bg-gradient-to-r hover:from-gradientRed hover:via-gradientMaroon hover:to-gradientOrange hover:scale-110 hover:shadow-lg hover:shadow-gradientRed/30 transition-all duration-300 cursor-pointer">{tech}</p>
            ))}
        </div>
        <div className="text-sm sm:text-base md:text-lg flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-in-up delay-400">
            <button className="group flex gap-2 items-center justify-center rounded-lg bg-gradientMaroon text-amber-50 dark:bg-gray-700/50 py-2 sm:py-1 px-6 sm:px-8 w-full sm:w-fit hover:bg-gradient-to-r hover:from-gradientRed hover:via-gradientMaroon hover:to-gradientOrange hover:scale-105 hover:shadow-xl hover:shadow-gradientRed/30 transition-all duration-300">
              <HiFolder className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <a href="#portfolio" className="group-hover:text-amber-50 transition-colors duration-300">Projects</a>
            </button>
            <button className="group flex gap-2 items-center justify-center rounded-lg bg-gradientMaroon text-amber-50 dark:bg-gray-700/50 py-2 sm:py-1 px-6 sm:px-8 w-full sm:w-fit hover:bg-gradient-to-r hover:from-gradientRed hover:via-gradientMaroon hover:to-gradientOrange hover:scale-105 hover:shadow-xl hover:shadow-gradientRed/30 transition-all duration-300">
              <HiMail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <a href="#contact" className="group-hover:text-amber-50 transition-colors duration-300">Contact</a>
            </button>
        </div>
    </div>
  )
}

export default Home