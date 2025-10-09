import React from 'react'
import { Project, Certificates, About as AboutImage, TotalProjects, Certificate, Experiences } from '../data.js'

const About = () => {
  return (
    <div id="about" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
      <h1 className="flex justify-center mb-8 sm:mb-10 md:mb-12 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent hover:from-gradientOrange hover:via-gradientRed hover:to-gradientMaroon transition-all duration-500 animate-fade-in">About Me</h1>
      <div className="flex xl:flex-row flex-col-reverse md:flex-row-reverse lg:flex-col-reverse justify-between gap-8 lg:gap-12">
        <div className="flex flex-col gap-6 sm:gap-8 flex-1 animate-slide-in-left">
          <h1 className="flex flex-col gap-3 sm:gap-4 font-bold text-3xl sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent hover:from-gradientOrange hover:via-gradientRed hover:to-gradientMaroon transition-all duration-500 cursor-default">Hello I'm</span>
            <span className="hover:text-gray-300 transition-colors duration-300 cursor-default">Ahmad Qaulan Sadida</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg w-full lg:w-full xl:w-[80%] text-justify leading-relaxed hover:text-gray-300 transition-colors duration-300">I am an undergraduate student of Computer Science at IPB University with a strong interest in programming and creative fields, especially web development and graphic design. I consider myself a hardworking person with good time management skills. When I commit to something, I strive to achieve it to the best of my ability.</p>
          <div className="text-sm sm:text-base md:text-lg flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="group flex gap-2 items-center justify-center rounded-lg bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange py-2 sm:py-1 px-6 sm:px-8 w-full sm:w-fit hover:from-gradientOrange hover:via-gradientRed hover:to-gradientMaroon hover:scale-105 hover:shadow-xl hover:shadow-gradientRed/30 transition-all duration-300">
              <a href="https://drive.google.com/file/d/1iG7oQWNnhBpxQSON7Wdki1vqO167zSJM/view?usp=drive_link" className="group-hover:text-white transition-colors duration-300">Curriculum Vitae</a>
            </button>
            <div className="rounded-lg bg-transparent border-1 border-gradientMaroon from-gradientRed via-gradientMaroon to-gradientOrange w-full sm:w-fit hover:bg-gradient-to-r hover:from-gradientRed/10 hover:via-gradientMaroon/10 hover:to-gradientOrange/10 hover:scale-105 transition-all duration-300">
              <button className="group font-semibold flex gap-2 items-center justify-center rounded-lg py-2 sm:py-1 px-6 sm:px-8 w-full text-sm sm:text-base md:text-lg bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">
                <a href="#portfolio" className="group-hover:from-gradientOrange group-hover:via-gradientRed group-hover:to-gradientMaroon transition-all duration-300">Project Showcase</a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-center flex-shrink-0 animate-slide-in-right">
          <img src={AboutImage} alt="About Me" className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-cover rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-gradientRed/20 transition-all duration-500 hover:rotate-1" />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-4 sm:gap-6 md:gap-4 mt-12 sm:mt-14 text-sm sm:text-base md:text-lg animate-slide-in-up delay-300">
        <div className="group xl:w-[33%] xl:py-8 xl:px-8 flex flex-col gap-3 sm:gap-4 bg-gray-700/50 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl hover:bg-gradient-to-br hover:from-gray-700/60 hover:to-gray-600/60 hover:scale-105 hover:shadow-xl hover:shadow-gradientRed/20 transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-center">
            <img src={TotalProjects} alt="Total Projects" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xl sm:text-2xl font-semibold group-hover:text-gradientOrange transition-colors duration-300">{Project.length}</p>
          </div>
          <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold group-hover:bg-gradient-to-r group-hover:from-gradientRed group-hover:via-gradientMaroon group-hover:to-gradientOrange group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">TOTAL PROJECTS</h1>
              <p className="text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">Innovative web solution crafted</p>
            </div>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 group-hover:text-gradientOrange group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <a href="#portfolio"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></a>
            </svg>
          </div>
        </div>
        <div className="group xl:w-[33%] xl:py-8 xl:px-8 flex flex-col gap-3 sm:gap-4 bg-gray-700/50 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl hover:bg-gradient-to-br hover:from-gray-700/60 hover:to-gray-600/60 hover:scale-105 hover:shadow-xl hover:shadow-gradientRed/20 transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-center">
            <img src={Certificate} alt="Certificates" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xl sm:text-2xl font-semibold group-hover:text-gradientOrange transition-colors duration-300">{Certificates.length}</p>
          </div>
          <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold group-hover:bg-gradient-to-r group-hover:from-gradientRed group-hover:via-gradientMaroon group-hover:to-gradientOrange group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">CERTIFICATES</h1>
              <p className="text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">Professional skills validated</p>
            </div>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 group-hover:text-gradientOrange group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <a href="#portfolio"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></a>
            </svg>
          </div>
        </div>
        <div className="group xl:w-[33%] xl:py-8 xl:px-8 flex flex-col gap-3 sm:gap-4 bg-gray-700/50 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl hover:bg-gradient-to-br hover:from-gray-700/60 hover:to-gray-600/60 hover:scale-105 hover:shadow-xl hover:shadow-gradientRed/20 transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-center">
            <img src={Experiences} alt="Experiences" className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xl sm:text-2xl font-semibold group-hover:text-gradientOrange transition-colors duration-300">3</p>
          </div>
          <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold group-hover:bg-gradient-to-r group-hover:from-gradientRed group-hover:via-gradientMaroon group-hover:to-gradientOrange group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">YEARS OF EXPERIENCES</h1>
              <p className="text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">Continous learning journey</p>
            </div>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 group-hover:text-gradientOrange group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <a href="#experience"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></a>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About