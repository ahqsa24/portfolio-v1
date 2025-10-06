import React from 'react'
import { Project } from '../data.js'

const detailProject = ({ projectId }) => {
  // Get project by ID from URL or props
  const getProjectById = (id) => {
    return Project.find(project => project.id === parseInt(id));
  };

  // If no projectId provided, try to get from URL
  const id = projectId || window.location.pathname.split('/').pop();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
          <a href="/#portfolio" className="px-6 py-2 bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange rounded-lg text-white">
            Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-24 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <a href="/#portfolio" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </a>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">
            {project.Title}
          </h1>
          <p className="text-xl text-gray-300">{project.Description}</p>
        </div>

        {/* Project Image */}
        <div className="mb-8">
          <img 
            src={project.picture} 
            alt={project.Title} 
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.Technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-700/50 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        {project.KeyFeature && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.KeyFeature.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="text-gray-200">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        {project.Link && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Links</h2>
            <div className="flex gap-4">
              {project.Link.map((link, index) => {
                const linkType = Object.keys(link)[0];
                const linkUrl = link[linkType];
                return (
                  <a 
                    key={index}
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
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

export default detailProject