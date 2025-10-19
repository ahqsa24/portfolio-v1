import { footerData } from '../content.js'

const Footer = () => {
    // Extract footer data from text.js
    const portfolioInfo = footerData[0];      // Portfolio name, link, and logo
    const socialMediaData = footerData[1];    // Social media links
    const copyrightData = footerData[2];      // Copyright year text

  return (
    <div>
      <footer className="dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href={portfolioInfo.link} className="flex items-center">
                        <img src={portfolioInfo.logo} className="h-8 me-3" alt={portfolioInfo.title} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{portfolioInfo.title}</span>
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
                            {socialMediaData.socialMedia.map((social, index) => (
                                <li key={index}>
                                    <a href={social.link} className="hover:underline">{social.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    {copyrightData.year}
                </span>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer