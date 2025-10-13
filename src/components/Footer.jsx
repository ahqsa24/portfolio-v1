import React from 'react'
import { Logo } from '../data.js'

const Footer = () => {
  return (
    <div>
      <footer className="dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="https://www.linkedin.com/in/adidsadida/" className="flex items-center">
                        <img src={Logo} className="h-8 me-3" alt="Ahqsa Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ahqsa Portfolio</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-lg font-bold bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://react.dev/" className="hover:underline">React JS</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-bold bg-gradient-to-r from-gradientRed via-gradientMaroon to-gradientOrange bg-clip-text text-transparent uppercase dark:text-white">Social Media</h2>
                        <ul className="grid grid-rows-2 grid-flow-col gap-x-8 gap-y-4 text-gray-500 dark:text-gray-400 font-medium">
                            <li>
                                <a href="https://github.com/ahqsa24" className="hover:underline">Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/adidsadida" className="hover:underline">Linkedin</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/adidsadida24/" className="hover:underline">Instagram</a>
                            </li>
                            <li>
                                <a href="mailto:adhiet353@gmail.com" className="hover:underline">Email</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025 <a href="#Home" className="hover:underline">Ahqsa™</a>. All Rights Reserved.
                </span>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer