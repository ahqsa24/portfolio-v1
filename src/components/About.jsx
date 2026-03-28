import { Project, Certificates } from '../data.js'
import { About as AboutImage, aboutData } from '../content.js'
import { HiFolder, HiBadgeCheck, HiCalendar, HiChevronRight } from 'react-icons/hi'

const About = () => {
  const about = aboutData[0] // Get the first (and only) about data object

  return (
    <div id="about" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
    <h1 className="flex justify-center mb-8 sm:mb-10 md:mb-12 text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-red-via-maroon-to-orange hover:text-gradient-orange-via-red-to-maroon transition-all duration-500 animate-fade-in">{about.heading}</h1>
      <div className="flex xl:flex-row flex-col-reverse md:flex-row-reverse lg:flex-col-reverse justify-between gap-8 lg:gap-12">
        <div className="flex flex-col gap-6 sm:gap-8 flex-1 animate-slide-in-left">
          <h1 className="flex flex-col gap-3 sm:gap-4 font-bold text-3xl sm:text-4xl md:text-5xl">
            <span className="text-gradient-red-via-maroon-to-orange hover:text-gradient-orange-via-red-to-maroon transition-all duration-500 cursor-default">{about.firstLine}</span>
            <span className="hover:text-gray-900/60 dark:hover:text-gray-300 transition-colors duration-300 cursor-default">{about.name}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg w-full lg:w-full xl:w-[80%] text-justify leading-relaxed hover:text-gray-900/60 dark:hover:text-gray-300 transition-colors duration-300">{about.description}</p>
          <div className="text-sm sm:text-base md:text-lg flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="group flex gap-2 items-center justify-center rounded-lg bg-gradient-red-via-maroon-to-orange py-2 sm:py-1 px-6 sm:px-8 w-full sm:w-fit hover:from-gradientOrange hover:via-gradientRed hover:to-gradientMaroon hover:scale-105 hover:shadow-xl hover:shadow-gradientRed/30 transition-all duration-300">
              <a href={about.cvLink} className="group-hover:text-amber-50 text-amber-50 transition-colors duration-300">Curriculum Vitae</a>
            </button>
            <div className="rounded-lg bg-transparent border-1 border-gradientMaroon from-gradientRed via-gradientMaroon to-gradientOrange w-full sm:w-fit hover:bg-gradient-to-r hover:from-gradientRed/10 hover:via-gradientMaroon/10 hover:to-gradientOrange/10 hover:scale-105 transition-all duration-300">
              <button className="group font-semibold flex gap-2 items-center justify-center rounded-lg py-2 sm:py-1 px-6 sm:px-8 w-full text-sm sm:text-base md:text-lg text-gradient-red-via-maroon-to-orange">
                <a href="#portfolio" className="group-hover:from-gradientOrange group-hover:via-gradientRed group-hover:to-gradientMaroon transition-all duration-300">Project Showcase</a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-center flex-shrink-0 animate-slide-in-right">
          {/* Gradient Border Circle Container */}
          <div className="relative p-1 rounded-full bg-gradient-to-br from-gradientRed via-gradientMaroon to-gradientOrange hover:from-gradientOrange hover:via-gradientMaroon hover:to-gradientRed transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gradientRed/30">
            {/* Inner white/dark circle for spacing */}
            <div className="relative p-1 sm:p-1.5 md:p-2 rounded-full bg-white dark:bg-gray-900">
              {/* Profile Image */}
              <img 
                src={AboutImage} 
                alt="About Me" 
                className="w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-full transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-4 sm:gap-6 md:gap-4 mt-12 sm:mt-14 text-sm sm:text-base md:text-lg animate-slide-in-up delay-300">
        <div className="group xl:w-[33%] xl:py-8 xl:px-8 flex flex-col gap-3 sm:gap-4 bg-gradientMaroon text-amber-50 dark:bg-gray-700/50 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl dark:hover:bg-gradient-to-br dark:hover:from-gray-700/60 dark:hover:to-gray-600/60 hover:scale-105 hover:shadow-xl dark:hover:shadow-gradientRed/20 transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-center">
            <HiFolder className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xl sm:text-2xl font-semibold dark:group-hover:text-gradientOrange transition-colors duration-300">{Project.length}</p>
          </div>
          <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold group-hover:bg-gradient-to-r dark:group-hover:from-gradientRed dark:group-hover:via-gradientMaroon dark:group-hover:to-gradientOrange dark:group-hover:bg-clip-text dark:group-hover:text-transparent transition-all duration-300">TOTAL PROJECTS</h1>
              <p className="text-xs sm:text-sm dark:group-hover:text-gray-300 transition-colors duration-300">Innovative web solution crafted</p>
            </div>
            <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-50 flex-shrink-0 dark:group-hover:text-gradientOrange group-hover:translate-x-1 transition-all duration-300">
              <a href="#portfolio"></a>
            </HiChevronRight>
          </div>
        </div>
        <div className="group xl:w-[33%] xl:py-8 xl:px-8 flex flex-col gap-3 sm:gap-4 bg-gradientMaroon text-amber-50 dark:bg-gray-700/50 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl dark:hover:bg-gradient-to-br dark:hover:from-gray-700/60 dark:hover:to-gray-600/60 hover:scale-105 hover:shadow-xl dark:hover:shadow-gradientRed/20 transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-center">
            <HiBadgeCheck className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xl sm:text-2xl font-semibold dark:group-hover:text-gradientOrange transition-colors duration-300">{Certificates.length}</p>
          </div>
          <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold group-hover:bg-gradient-to-r dark:group-hover:from-gradientRed dark:group-hover:via-gradientMaroon dark:group-hover:to-gradientOrange dark:group-hover:bg-clip-text dark:group-hover:text-transparent transition-all duration-300">CERTIFICATES</h1>
              <p className="text-xs sm:text-sm dark:group-hover:text-gray-300 transition-colors duration-300">Professional skills validated</p>
            </div>
            <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-50 flex-shrink-0 dark:group-hover:text-gradientOrange group-hover:translate-x-1 transition-all duration-300">
              <a href="#portfolio"></a>
            </HiChevronRight>
          </div>
        </div>
        <div className="group xl:w-[33%] xl:py-8 xl:px-8 flex flex-col gap-3 sm:gap-4 bg-gradientMaroon text-amber-50 dark:bg-gray-700/50 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 rounded-xl dark:hover:bg-gradient-to-br dark:hover:from-gray-700/60 dark:hover:to-gray-600/60 hover:scale-105 hover:shadow-xl dark:hover:shadow-gradientRed/20 transition-all duration-300 cursor-pointer">
          <div className="flex justify-between items-center">
            <HiCalendar className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-xl sm:text-2xl font-semibold dark:group-hover:text-gradientOrange transition-colors duration-300">3</p>
          </div>
          <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold group-hover:bg-gradient-to-r dark:group-hover:from-gradientRed dark:group-hover:via-gradientMaroon dark:group-hover:to-gradientOrange dark:group-hover:bg-clip-text dark:group-hover:text-transparent transition-all duration-300">YEARS OF EXPERIENCES</h1>
              <p className="text-xs sm:text-sm dark:group-hover:text-gray-300 transition-colors duration-300">Continous learning journey</p>
            </div>
            <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-50 flex-shrink-0 dark:group-hover:text-gradientOrange group-hover:translate-x-1 transition-all duration-300">
              <a href="#experience"></a>
            </HiChevronRight>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About