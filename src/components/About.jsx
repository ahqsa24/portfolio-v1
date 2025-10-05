import React from 'react'

const About = () => {
  return (
    <div id="about" className="min-h-screen px-24 py-24">
      <h1 className="flex justify-center mb-12 text-5xl font-bold bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">About Me</h1>
      <div className="flex justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="flex flex-col gap-4 font-bold text-5xl">
            <span className="bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">Hello I'm</span>
            <span>Ahmad Qaulan Sadida</span>
          </h1>
          <p className="text-lg w-[60%] text-justify">I am an undergraduate student of Computer Science at IPB University with a strong interest in programming and creative fields, especially web development and graphic design. I consider myself a hardworking person with good time management skills. When I commit to something, I strive to achieve it to the best of my ability.</p>
          <div className="text-lg flex gap-4">
            <button className="flex gap-2 rounded-lg bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange py-1 px-8 w-fit">
              <a href="https://drive.google.com">Curriculum Vitae</a>
            </button>
            <div className="rounded-lg bg-transparent border-1 border-gradientMaroon from-gradientRed via-gradientMaroon to-gradientOrange w-fit">
              <button className="font-semibold flex gap-2 rounded-lg py-1 px-8 w-fit text-lg bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">
                <a href="#projects">Project Showcase</a>
              </button>
            </div>
          </div>
        </div>
        <img src="public/assets/about-image.png" alt="About Me" />
      </div>
      <div className="flex justify-center gap-16 mt-16 text-lg">
        <div className="flex flex-col gap-4 bg-gray-700/50 px-12 py-6 rounded-xl">
          <div className="flex justify-between">
            <img src="public/assets/total-projects.png" alt="Total Projects" />
            <p className="text-2xl font-semibold">12</p>
          </div>
          <div className="flex justify-between items-center gap-36">
            <div>
              <h1 className="text-xl font-bold">TOTAL PROJECTS</h1>
              <p className="text-sm">Innovative web solution crafted</p>
            </div>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-gray-700/50 px-12 py-6 rounded-xl">
          <div className="flex justify-between">
            <img src="public/assets/certificates.png" alt="Certificates" />
            <p className="text-2xl font-semibold">42</p>
          </div>
          <div className="flex justify-between items-center gap-36">
            <div>
              <h1 className="text-xl font-bold">CERTIFICATES</h1>
              <p className="text-sm">Professional skills validated</p>
            </div>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-gray-700/50 px-12 py-6 rounded-xl">
          <div className="flex justify-between">
            <img src="public/assets/experiences.png" alt="Experiences" />
            <p className="text-2xl font-semibold">3</p>
          </div>
          <div className="flex justify-between items-center gap-36">
            <div>
              <h1 className="text-xl font-bold">YEARS OF EXPERIENCES</h1>
              <p className="text-sm">Continous learning journey</p>
            </div>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About