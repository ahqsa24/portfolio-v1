import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Project } from '../data.js'

const DetailProject = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Get project by ID from URL params
  const getProjectById = (id) => {
    return Project.find(project => project.id === parseInt(id));
  };

  const project = getProjectById(id);

  const handleBackClick = () => {
    // Navigate to home page with state to scroll to portfolio
    navigate('/', { state: { scrollTo: 'portfolio' } })
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 pt-20">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gradient-red-via-maroon-to-orange hover:text-gradient-orange-via-red-to-maroon">404</h1>
          <h1 className="text-xl sm:text-2xl font-bold text-gradient-red-via-maroon-to-orange hover:text-gradient-orange-via-red-to-maroon mb-4">Project Not Found</h1>
          <p className="dark:text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
          <button 
            onClick={handleBackClick}
            className="px-6 py-2 bg-gradient-red-via-maroon-to-orange rounded-lg text-white"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24 pt-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Back Button */}
        <div className="mb-6 sm:mb-8">
          <button 
            onClick={handleBackClick}
            className="flex items-center gap-2 dark:text-gray-400 hover:text-gray-900/60 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>
        </div>

        {/* Project Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold lg:mb-8 sm:mb-4">
            {project.Title}
          </h1>
          <img 
            src={project.picture} 
            alt={project.Title} 
            className="border-2 w-full h-full sm:h-64 md:h-80 my-6 lg:h-96 lg:mb-12 object-cover rounded-xl"
          />
          <p className="text-sm lg:text-lg sm:text-sm text-justify dark:text-gray-300">{project.Description}</p>
        </div>

        {/* Technologies */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.Technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 sm:px-4 py-1 sm:py-2 bg-gradientRed text-white dark:bg-gray-700/50 rounded-full text-xs sm:text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        {project.KeyFeature && (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Key Features</h2>
            <ul className="space-y-2 sm:space-y-3">
              {project.KeyFeature.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <span className="mt-1">•</span>
                  <span className="dark:text-gray-200 text-sm sm:text-base">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        {project.Link && (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Project Links</h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {project.Link.map((link, index) => {
                const linkType = Object.keys(link)[0];
                const linkUrl = link[linkType];
                return (
                  <a 
                    key={index}
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 sm:px-6 py-2 sm:py-3 bg-gradientRed dark:bg-gray-700/50 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity text-center"
                  >
                    {linkType}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DetailProject