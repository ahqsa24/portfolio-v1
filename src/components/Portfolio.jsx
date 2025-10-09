import { React, useState }from 'react'
import { Project, Certificates, TechStack, Code, Tech, Certif } from '../data.js'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [showAll, setShowAll] = useState({
    projects: false,
    certificates: false
  });
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleShowAll = (tab) => {
    setShowAll(prev => ({
      ...prev,
      [tab]: !prev[tab]
    }));
  };

  const getDisplayData = (data, tab) => {
    return showAll[tab] ? data : data.slice(0, 6);
  };

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  return (
    <div id="portfolio" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="flex flex-col justify-center items-center animate-fade-in">
        <h1 className="flex justify-center mb-6 lg:text-5xl text-3xl font-bold bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent hover:from-gradientOrange hover:via-gradientRed hover:to-gradientMaroon transition-all duration-500">Portfolio</h1>
        <p className="flex w-full sm:w-[80%] md:w-[70%] text-center text-sm sm:text-base md:text-lg leading-relaxed hover:text-gray-300 transition-colors duration-300">Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
      </div>
      <div className="flex gap-8 mt-12 justify-between bg-gray-700/50 py-2 rounded-xl hover:bg-gray-600/60 transition-all duration-300 animate-slide-in-up delay-200">
        <div 
          className={`group flex flex-col gap-2 mx-auto items-center py-4 w-[30%] rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gradientRed/20 ${
            activeTab === 'projects' 
              ? 'bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange text-white shadow-lg' 
              : 'text-gray-300 hover:text-white hover:bg-gray-600/30'
          }`}
          onClick={() => handleTabClick('projects')}
        >
          <img src={Code} alt="Projects" className="group-hover:scale-110 transition-transform duration-300" />
          <p className="group-hover:font-semibold transition-all duration-300">Projects</p>
        </div>
        <div 
          className={`group flex flex-col gap-2 mx-auto items-center py-4 w-[30%] rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gradientMaroon/20 ${
            activeTab === 'certificates' 
              ? 'bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange text-white shadow-lg' 
              : 'text-gray-300 hover:text-white hover:bg-gray-600/30'
          }`}
          onClick={() => handleTabClick('certificates')}
        >
          <img src={Certif} alt="Certificates" className="group-hover:scale-110 transition-transform duration-300" />
          <p className="group-hover:font-semibold transition-all duration-300">Certificates</p>
        </div>
        <div 
          className={`group flex flex-col gap-2 mx-auto items-center py-4 w-[30%] rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gradientOrange/20 ${
            activeTab === 'techstack' 
              ? 'bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange text-white shadow-lg' 
              : 'text-gray-300 hover:text-white hover:bg-gray-600/30'
          }`}
          onClick={() => handleTabClick('techstack')}
        >
          <img src={Tech} alt="Tech Stack" className="group-hover:scale-110 transition-transform duration-300" />
          <p className="group-hover:font-semibold transition-all duration-300">Tech Stack</p>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4 flex justify-center items-center">
        {activeTab === 'projects' && (
          <div className="fade-in w-full animate-slide-in-up delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {getDisplayData(Project, 'projects').map((project, index) => (
                <div key={project.id} className={`group flex flex-col p-4 gap-2 bg-gray-700/50 rounded-xl cursor-pointer transition-all duration-500 hover:bg-gray-600/70 hover:scale-105 hover:shadow-2xl hover:shadow-gradientRed/20 animate-fade-in`} style={{animationDelay: `${index * 100}ms`}}>
                  <div className="overflow-hidden rounded-lg">
                    <img src={project.picture} alt={project.Title} className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h2 className="font-bold text-xl group-hover:text-gradientRed transition-colors duration-300">{project.Title}</h2>
                    <p className="text-sm mt-2 text-gray-300 line-clamp-3 overflow-hidden group-hover:text-gray-200 transition-colors duration-300">{project.Description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.Technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-600 rounded-full text-xs hover:bg-gradient-to-r hover:from-gradientRed hover:to-gradientOrange hover:text-white transition-all duration-300 cursor-pointer">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex mt-2 justify-end">
                    <button className="flex gap-2 rounded-lg bg-gray-900 px-8 py-2 w-fit hover:bg-gradient-to-r hover:from-gradientRed hover:to-gradientOrange hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gradientRed/30">
                      <a href={`/project/${project.id}`} className="flex items-center gap-2">
                        Details
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {Project.length > 6 && (
              <div className="flex justify-start mt-6">
                <button 
                  onClick={() => toggleShowAll('projects')}
                  className="px-6 py-2 bg-gray-700/50 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-gradientRed hover:to-gradientOrange hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  {showAll.projects ? 'Show Less' : `See More (${Project.length - 6} more)`}
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="fade-in w-full animate-slide-in-up delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {getDisplayData(Certificates, 'certificates').map((certificates, index) => (
                <div 
                  key={certificates.id} 
                  className={`relative flex flex-col bg-gray-700/50 rounded-xl overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-gradientMaroon/30 transition-all duration-500 cursor-pointer animate-fade-in`}
                  style={{animationDelay: `${index * 100}ms`}}
                  onClick={() => openCertificateModal(certificates)}
                >
                  <div className="overflow-hidden">
                    <img src={certificates.picture} alt={certificates.Title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="items-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 p-3 group-hover:from-gradientRed/90 group-hover:via-gradientMaroon/70 group-hover:to-gradientOrange/40 transition-all duration-500">
                    <h2 className="text-white text-lg font-semibold group-hover:text-yellow-100 transition-colors duration-300">{certificates.Title}</h2>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">Click to view full certificate</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            {Certificates.length > 6 && (
              <div className="flex justify-start mt-6">
                <button 
                  onClick={() => toggleShowAll('certificates')}
                  className="px-6 py-2 bg-gray-700/50 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-gradientMaroon hover:to-gradientOrange hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  {showAll.certificates ? 'Show Less' : `See More (${Certificates.length - 6} more)`}
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'techstack' && (
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto animate-slide-in-up delay-300">
            {TechStack.map((techstack, index) => (
              <div 
                key={techstack.id} 
                className={`group flex flex-col p-6 gap-3 bg-gray-700/50 rounded-xl items-center w-48 hover:scale-110 hover:bg-gray-600/70 hover:shadow-2xl hover:shadow-gradientOrange/20 transition-all duration-500 cursor-pointer animate-fade-in`}
                style={{animationDelay: `${index * 50}ms`}}
              >
                <div className="overflow-hidden rounded-lg">
                  <img src={techstack.picture} alt={techstack.Title} className="w-24 h-24 object-cover rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
                </div>
                <div>
                  <h2 className="text-lg text-center font-semibold group-hover:text-gradientOrange group-hover:scale-105 transition-all duration-300">{techstack.Title}</h2>
                </div>
                <div className="w-0 h-0.5 bg-gradient-to-r from-gradientRed to-gradientOrange group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {showModal && selectedCertificate && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeCertificateModal}>
          <div className="relative max-w-6xl w-full max-h-[95vh] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeCertificateModal}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Certificate Image Only */}
            <img 
              src={selectedCertificate.picture} 
              alt={selectedCertificate.Title}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio