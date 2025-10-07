import React from 'react'
import { Project, Certificates } from '../data.js'

const About = () => {
  return (
    <div id="about" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
      <h1 className="flex justify-center mb-8 sm:mb-10 md:mb-12 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">About Me</h1>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12">
        <div className="flex flex-col gap-6 sm:gap-8 flex-1">
          <h1 className="flex flex-col gap-3 sm:gap-4 font-bold text-3xl sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">Hello I'm</span>
            <span>Ahmad Qaulan Sadida</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg w-full lg:w-[80%] xl:w-[60%] text-justify leading-relaxed">I am an undergraduate student of Computer Science at IPB University with a strong interest in programming and creative fields, especially web development and graphic design. I consider myself a hardworking person with good time management skills. When I commit to something, I strive to achieve it to the best of my ability.</p>
          <div className="text-sm sm:text-base md:text-lg flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="flex gap-2 items-center justify-center rounded-lg bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange py-2 sm:py-1 px-6 sm:px-8 w-full sm:w-fit">
              <a href="https://drive.google.com">Curriculum Vitae</a>
            </button>
            <div className="rounded-lg bg-transparent border-1 border-gradientMaroon from-gradientRed via-gradientMaroon to-gradientOrange w-full sm:w-fit">
              <button className="font-semibold flex gap-2 items-center justify-center rounded-lg py-2 sm:py-1 px-6 sm:px-8 w-full text-sm sm:text-base md:text-lg bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">
                <a href="#projects">Project Showcase</a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end flex-shrink-0">
          <img src="public/assets/about-image.png" alt="About Me" className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-cover rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mt-12 sm:mt-14 md:mt-16 text-sm sm:text-base md:text-lg">
        <div className="flex flex-col gap-3 sm:gap-4 bg-gray-700/50 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl">
          <div className="flex justify-between items-center">
            <img src="public/assets/total-projects.png" alt="Total Projects" className="w-8 h-8 sm:w-10 sm:h-10" />
            <p className="text-xl sm:text-2xl font-semibold">{Project.length}</p>
          </div>
          <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold">TOTAL PROJECTS</h1>
              <p className="text-xs sm:text-sm">Innovative web solution crafted</p>
            </div>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 bg-gray-700/50 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl">
          <div className="flex justify-between items-center">
            <img src="public/assets/certificates.png" alt="Certificates" className="w-8 h-8 sm:w-10 sm:h-10" />
            <p className="text-xl sm:text-2xl font-semibold">{Certificates.length}</p>
          </div>
          <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold">CERTIFICATES</h1>
              <p className="text-xs sm:text-sm">Professional skills validated</p>
            </div>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 bg-gray-700/50 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl">
          <div className="flex justify-between items-center">
            <img src="public/assets/experiences.png" alt="Experiences" className="w-8 h-8 sm:w-10 sm:h-10" />
            <p className="text-xl sm:text-2xl font-semibold">3</p>
          </div>
          <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold">YEARS OF EXPERIENCES</h1>
              <p className="text-xs sm:text-sm">Continous learning journey</p>
            </div>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About