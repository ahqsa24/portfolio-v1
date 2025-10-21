/**
 * ============================================
 * PORTFOLIO CONTENT CONFIGURATION
 * ============================================
 * 
 * This file centralizes all text content and image references for easy customization.
 * 
 * HOW TO CUSTOMIZE:
 * 1. Text: Simply edit the strings in each data object below
 * 2. Images: Replace image files in /public/assets/ with your own (keep the same names, or update the imports below)
 * 
 * SECTIONS INCLUDED:
 * - Site Assets (logo, icons)
 * - Home Section
 * - About Section
 * - Experience Section
 * - Portfolio Section
 * - Contact Section
 */

// ============================================
// SITE ASSETS - Icons and Images
// ============================================
// Update these paths if you rename or move your asset files
import About from "/assets/about-image.png";
import Logo from "/assets/Logo.png";

// Note: Icon images (ProjectIcon, Contact, TotalProjects, Certificate, Experiences, Code, Certif, Education, Organization, Tech)
// have been replaced with React Icons library for better performance and smaller bundle size.
// See: Home.jsx, About.jsx, Experience.jsx, Portfolio.jsx for React Icons implementation.

// Export individual images for component imports
export { About, Logo };

// Asset registry (optional, for programmatic access)
export const Image = [
    { id: 1, picture: About, name: "about-image" },
    { id: 2, picture: Logo, name: "logo" }
];

// ============================================
// NAVBAR SECTION CONTENT
// ============================================
/**
 * Customize your navbar section here:
 * - Your portfolio name
 */
export const navData = [
    {
        id: 1,
        title: "Ahqsa",
    }
]


// ============================================
// HOME SECTION CONTENT
// ============================================
/**
 * Customize your home/hero section here:
 * - Badge text (e.g., "Ready to Develop", "Available for Work")
 * - Your full name
 * - Rotating job titles/roles
 * - Hero description/tagline
 * - Tech stack badges
 */
export const homeData = [
    {
        id: 1,
        text: "Ready to Develop" // Badge text shown above your name
    },
    {
        id: 2,
        firstName: "Ahmad Qaulan", // Your first name (with gradient)
        lastName: "Sadida",        // Your last name
    },
    {
        id: 3,
        position: [
            { text: "Front-End Developer" },  // Job title 1 (rotating)
            { text: "UI/UX Enthusiast" },     // Job title 2
            { text: "Software Engineer" }     // Job title 3
        ]
    },
    {
        id: 4,
        text: "Membangun Antarmuka Digital yang Responsif, Interaktif, dan Estetis untuk Pengalaman Pengguna Terbaik." // Hero description
    },
    {
        id: 5,
        techstack: [
            { text: "ReactJS" },      // Tech badge 1
            { text: "TailwindCSS" },  // Tech badge 2
            { text: "UI/UX" },        // Tech badge 3
            { text: "Figma" }         // Tech badge 4
            // Add more tech badges as needed
        ]
    }
]

// ============================================
// ABOUT SECTION CONTENT
// ============================================
/**
 * Customize your About section:
 * - Section heading
 * - Greeting line
 * - Your full name
 * - About description/bio
 * - Profile picture (change the import above if needed)
 */
export const aboutData = [
    {
        id: 1,
        heading: "About Me",           // Section title
        firstLine: "Hello I'm",        // Greeting text before name
        name: "Ahmad Qaulan Sadida",   // Your full name
        description: "I am an undergraduate student of Computer Science at IPB University with a strong interest in programming and creative fields, especially web development and graphic design. I consider myself a hardworking person with good time management skills. When I commit to something, I strive to achieve it to the best of my ability.", // Your bio/description
        picture: About,                 // Profile image (imported above)
        cvLink: "https://drive.google.com/file/d/1iG7oQWNnhBpxQSON7Wdki1vqO167zSJM/view?usp=drive_link" // Link to your CV or resume
    }
]

// ============================================
// EXPERIENCE SECTION CONTENT
// ============================================
/**
 * Heading and intro text for Experience section
 * (Individual experiences are in data.js)
 */
export const experiencesData = [
    {
        id: 1,
        heading: "Experiences",  // Section title
        text: "Explore my journey through education and organizational involvement. Each section highlights key milestones in my academic growth and leadership experiences, shaping my technical expertise and professional development." // Section intro text
    }
]

// ============================================
// PORTFOLIO SECTION CONTENT
// ============================================
/**
 * Heading and intro text for Portfolio section
 * (Projects, certificates, tech stack are in data.js)
 */
export const portfolioData = [
    {
        id: 1,
        heading: "Portfolio", // Section title
        text: "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path." // Section intro text
    }
]

// ============================================
// CONTACT SECTION CONTENT
// ============================================
/**
 * Customize contact section headings and descriptions
 * Each object represents different text variants you can use
 */
export const contactData = [
    {
        id: 1,
        heading: "Contact Me",  // Main heading option 1
        text: "I would love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.", // Description option 1
    },
    {
        id: 2,
        heading: "Connect with Me", // Main heading option 2
        text: "Feel free to reach out through any of these platforms." // Description option 2
    },
    {
        id: 3,
        heading: "Get in Touch", // Main heading option 3
        text: "Have something to discuss? Send me a message and let's talk." // Description option 3
    }
]

// ============================================
// NAVBAR SECTION CONTENT
// ============================================
/**
 * Customize your navbar section here:
 * - Your portfolio name
 */
export const footerData = [
    {
        id: 1,
        title: "Ahqsa Portfolio", // Portfolio name in footer
        link: "https://www.linkedin.com/in/adidsadida/", // Portfolio link
        logo: Logo
    },
    {
        id: 2,
        socialMedia: [
            { name: "Github", link: "https://github.com/ahqsa24" },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/adidsadida/" },
            { name: "Instagram", link: "https://www.instagram.com/adidsadida24/" },
            { name: "Email", link: "mailto:adhiet353@gmail.com" }
        ]
    },
    {
        id: 3,
        year: "© " + new Date().getFullYear() + " Ahqsa™. All Rights Reserved."
    }
]