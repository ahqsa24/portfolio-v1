import { React, useState }from 'react'
import { Project, Certificates, TechStack, Code } from '../data.js'

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
      <div className="flex flex-col justify-center items-center">
        <h1 className="flex justify-center mb-6 lg:text-5xl text-3xl font-bold bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">Portfolio</h1>
        <p className="flex w-full sm:w-[80%] md:w-[70%] text-center text-sm sm:text-base md:text-lg leading-relaxed">Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
      </div>
      <div className="flex gap-8 mt-12 justify-between bg-gray-700/50 py-2 rounded-xl">
        <div 
          className={`flex flex-col gap-2 mx-auto items-center py-4 w-[30%] rounded-xl cursor-pointer transition-all duration-300 ${
            activeTab === 'projects' 
              ? 'bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => handleTabClick('projects')}
        >
          <img src={Code} alt="Projects" />
          <p>Projects</p>
        </div>
        <div 
          className={`flex flex-col gap-2 mx-auto items-center py-4 w-[30%] rounded-xl cursor-pointer transition-all duration-300 ${
            activeTab === 'certificates' 
              ? 'bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => handleTabClick('certificates')}
        >
          <img src={Code} alt="Certificates" />
          <p>Certificates</p>
        </div>
        <div 
          className={`flex flex-col gap-2 mx-auto items-center py-4 w-[30%] rounded-xl cursor-pointer transition-all duration-300 ${
            activeTab === 'techstack' 
              ? 'bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => handleTabClick('techstack')}
        >
          <img src={Code} alt="Tech Stack" />
          <p>Tech Stack</p>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4 flex justify-center items-center">
        {activeTab === 'projects' && (
          <div className="fade-in w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {getDisplayData(Project, 'projects').map((project) => (
                <div key={project.id} className="flex flex-col p-4 gap-2 bg-gray-700/50 rounded-xl">
                  <img src={project.picture} alt={project.Title} className="w-full h-full object-cover rounded-lg" />
                  <div>
                    <h2 className="font-bold text-xl">{project.Title}</h2>
                    <p className="text-sm mt-2 text-gray-300 line-clamp-3 overflow-hidden">{project.Description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.Technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-600 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex mt-2 justify-end">
                    <button className="flex gap-2 rounded-lg bg-gray-900 px-8 py-2 w-fit hover:bg-gray-800 transition-colors">
                      <a href={`/project/${project.id}`} className="flex items-center gap-2">
                        Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  className="px-6 py-2 bg-gray-700/50 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  {showAll.projects ? 'Show Less' : `See More (${Project.length - 6} more)`}
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="fade-in w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {getDisplayData(Certificates, 'certificates').map((certificates) => (
                <div 
                  key={certificates.id} 
                  className="relative flex flex-col bg-gray-700/50 rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openCertificateModal(certificates)}
                >
                  <img src={certificates.picture} alt={certificates.Title} className="w-full h-full object-cover" />
                  <div className="items-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 p-2">
                    <h2 className="text-white text-lg">{certificates.Title}</h2>
                  </div>
                </div>
              ))}
            </div>
            {Certificates.length > 6 && (
              <div className="flex justify-start mt-6">
                <button 
                  onClick={() => toggleShowAll('certificates')}
                  className="px-6 py-2 bg-gray-700/50 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  {showAll.certificates ? 'Show Less' : `See More (${Certificates.length - 6} more)`}
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'techstack' && (
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
            {TechStack.map((techstack) => (
              <div 
                key={techstack.id} 
                className="flex flex-col p-4 gap-2 bg-gray-700/50 rounded-xl items-center w-48 hover:scale-105 hover:bg-gray-600/50 transition-all duration-300"
              >
                <img src={techstack.picture} alt={techstack.Title} className="w-24 h-24 object-cover rounded-lg" />
                <div>
                  <h2 className="text-lg text-center">{techstack.Title}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {showModal && selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeCertificateModal}
              className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-800 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Certificate Image */}
            <img 
              src={selectedCertificate.picture} 
              alt={selectedCertificate.Title}
              className="w-full h-auto object-contain"
            />
            
            {/* Certificate Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">{selectedCertificate.Title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio