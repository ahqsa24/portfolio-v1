import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { SocialMedia } from '../data.js'

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Get EmailJS credentials from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setMessage('✅ Message sent successfully! Thank you for reaching out.');
          setFormData({ name: '', email: '', subject: '', message: '' });
          form.current.reset();
        },
        (error) => {
          setMessage('❌ Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div id="contact" className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="flex flex-col justify-center items-center mb-8 sm:mb-12">
        <h1 className="flex justify-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent text-center">Contact Me</h1>
        <p className="flex w-full sm:w-[80%] md:w-[70%] text-center text-sm sm:text-base md:text-lg leading-relaxed">I would love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.</p>
      </div>
      
      {/* Main Content - Side by Side Layout */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 max-w-8xl mx-auto">
        
        {/* Left Side - Social Media Section */}
        <div className="lg:w-xl flex flex-col gap-6">
          <div className="bg-gray-700/50 p-4 sm:p-6 md:p-8 rounded-xl h-full flex flex-col">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">Connect with Me</h2>
              <p className="text-sm lg:text-lg sm:text-base">Feel free to reach out through any of these platforms.</p>
            </div>
            
            <div className="space-y-4 flex-1">
              {SocialMedia.map((socialmedia) => (
                <a 
                  key={socialmedia.id}
                  href={socialmedia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-600/30 rounded-xl hover:bg-gray-600/50 transition-all duration-300 cursor-pointer group"
                >
                  <img 
                    src={socialmedia.picture} 
                    alt={socialmedia.Title} 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-medium text-white group-hover:text-gradientOrange transition-colors duration-300">{socialmedia.Title}</p>
                    <p className="text-xs sm:text-sm text-gray-300">{socialmedia.Name}</p>
                  </div>
                  <svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-gradientOrange transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Side - Contact Form */}
        <div className="lg:w-7xl">
          <div className="bg-gray-700/50 p-4 sm:p-6 md:p-8 rounded-xl">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent">Get in Touch</h2>
                <p className="text-sm sm:text-base md:text-lg mb-4">Have something to discuss? Send me a message and let's talk.</p>
              </div>
              
              {message && (
                <div className="mb-4 p-3 rounded-lg bg-gray-600/50 text-white text-sm sm:text-base">
                  {message}
                </div>
              )}
              
              <label className="mb-2 text-base sm:text-lg font-medium text-gray-300" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mb-4 p-2 sm:p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-gradientRed text-sm sm:text-base"
                placeholder="Your Name"
                required
              /> 
              <label className="mb-2 text-base sm:text-lg font-medium text-gray-300" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mb-4 p-2 sm:p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-gradientRed text-sm sm:text-base"
                placeholder="Your Email"
                required
              />
              <label className="mb-2 text-base sm:text-lg font-medium text-gray-300" htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="mb-4 p-2 sm:p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-gradientRed text-sm sm:text-base"
                placeholder="Your Subject"
                required
              />
              <label className="mb-2 text-base sm:text-lg font-medium text-gray-300" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="mb-4 p-2 sm:p-3 rounded-xl bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-gradientRed text-sm sm:text-base"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-fit px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange text-white font-semibold rounded-lg transition-opacity text-sm sm:text-base ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact