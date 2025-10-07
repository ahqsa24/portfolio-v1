import React, { useState } from 'react'
import { educationData, organizationData, Code } from '../data.js'

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [expandedItems, setExpandedItems] = useState({});
  const [showAll, setShowAll] = useState({
    education: false,
    organization: false
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleDescription = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleShowAll = (tab) => {
    setShowAll(prev => ({
      ...prev,
      [tab]: !prev[tab]
    }));
  };

  const getDisplayData = (data, tab) => {
    return showAll[tab] ? data : data.slice(0, 3);
  };

  return (
    <div id="experience" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="flex justify-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">Experiences</h1>
        <p className="flex w-full sm:w-[80%] md:w-[70%] text-center text-sm sm:text-base md:text-lg leading-relaxed">Explore my journey through education and organizational involvement. Each section highlights key milestones in my academic growth and leadership experiences, shaping my technical expertise and professional development.</p>
      </div>
      <div className="flex flex-row sm:flex-row gap-2 sm:gap-8 mt-8 sm:mt-10 md:mt-12 justify-between bg-gray-700/50 py-2 rounded-xl">
        <div 
          className={`flex flex-col gap-2 mx-auto items-center py-3 sm:py-4 w-full sm:w-[45%] rounded-xl cursor-pointer transition-all duration-300 ${
            activeTab === 'education' 
              ? 'bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => handleTabClick('education')}
        >
          <img src={Code} alt="Education"/>
          <p className="text-sm sm:text-base">Education</p>
        </div>
        <div 
          className={`flex flex-col gap-2 mx-auto items-center py-3 sm:py-4 w-full sm:w-[45%] rounded-xl cursor-pointer transition-all duration-300 ${
            activeTab === 'organization' 
              ? 'bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => handleTabClick('organization')}
        >
          <img src={Code} alt="Organization"/>
          <p className="text-sm sm:text-base">Organization</p>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="mt-3 sm:mt-4">
        {activeTab === 'education' && (
          <div className="fade-in">
            <div className="space-y-3">
              {getDisplayData(educationData, 'education').map((education) => (
                <div key={education.id} className="bg-gray-700/50 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                  <img 
                    src={education.picture} 
                    alt={education.institution} 
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{education.degree}</h3>
                    <p className="text-base sm:text-lg text-gray-300 mb-1">{education.institution}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{education.year}</p>
                  </div>
                </div>
              ))}
            </div>
            {educationData.length > 3 && (
              <div className="flex justify-start mt-4">
                <button 
                  onClick={() => toggleShowAll('education')}
                  className="px-4 sm:px-6 py-2 bg-gray-700/50 rounded-lg text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity"
                >
                  {showAll.education ? 'Show Less' : `See More (${educationData.length - 3} more)`}
                </button>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'organization' && (
          <div className="fade-in">
            <div className="space-y-3">
              {getDisplayData(organizationData, 'organization').map((org) => (
                <div key={org.id} className="bg-gray-700/50 p-3 sm:p-4 rounded-xl">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                    <img 
                      src={org.picture} 
                      alt={org.organization} 
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{org.role}</h3>
                      <p className="text-base sm:text-lg text-gray-300 mb-1">{org.organization}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{org.year}</p>
                    </div>
                    {org.description && (
                      <button
                        onClick={() => toggleDescription(org.id)}
                        className="p-2 hover:bg-gray-600 rounded-full transition-colors flex-shrink-0"
                      >
                        <svg 
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-300 transform transition-transform duration-300 ${
                            expandedItems[org.id] ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {org.description && expandedItems[org.id] && (
                    <div className="mt-3 sm:mt-4 fade-in">
                      <ul className="space-y-1">
                        {org.description.map((desc, index) => (
                          <li key={index} className="text-gray-200 text-xs sm:text-sm flex items-start">
                            <span className="mr-2">•</span>
                            {desc.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {organizationData.length > 3 && (
              <div className="flex justify-start mt-4">
                <button 
                  onClick={() => toggleShowAll('organization')}
                  className="px-4 sm:px-6 py-2 bg-gray-700/50 rounded-lg text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity"
                >
                  {showAll.organization ? 'Show Less' : `See More (${organizationData.length - 3} more)`}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience