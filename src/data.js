// Education Images
import IPB from "/assets/Experiences/IPB.png";
import Bangkit from "/assets/Experiences/Bangkit.png";
import Necis from "/assets/Experiences/Necis.png";

// Work Images
{/*import Tybloo from "../public/assets/Tybloo.png";
import CractIT from "../public/assets/CractIT.png";
import Codepanda from "../public/assets/Codepanda.png";
import Newsmaker from "../public/assets/Newsmaker.png";
import Ignacium9 from "../public/assets/Ignacium9.png"; */}

// Organization Images
import IEEE from "/assets/Experiences/IEEE.png";
import Himalkom from "/assets/Experiences/Himalkom.png";
import PI from "/assets/Experiences/PI.png";
import Agriinformatics from "/assets/Experiences/Agriinformatics.png";
import IWDC from "/assets/Experiences/IWDC.png";
import PSN from "/assets/Experiences/PSN.png";
import ITToday from "/assets/Experiences/IT-Today.png";
import CSAgri from "/assets/Experiences/CSAgri.png";
import PASSIONN7 from "/assets/Experiences/PASSION7.png";
import TheDoctorIPB from "/assets/Experiences/The-Doctor-IPB.png";


export const educationData = [
    {
        id: 1,
        picture: IPB,
        institution: "IPB University",
        degree: "Undergraduate Computer Science",
        year: "2022 - Present",
    },
    {
        id: 2,
        picture: Bangkit,
        institution: "Bangkit Academy",
        degree: "Cloud Computing Cohort",
        year: "2024",
    },
    {
        id: 3,
        picture: Necis,
        institution: "SMA N 1 Ciasem",
        degree: "Mathematics and Natural Sciences",
        year: "2019 - 2022",
    }
];

export const organizationData = [
    {
        id: 1,
        picture: IEEE,
        organization: "IEEE Student Branch IPB University",
        role: "Director of Creative & Branding",
        year: "January 2024 - December 2024",
        description: [
            { text: "Became the lead of the IEEE 2024 grand launching project." },
            { text: "Responsible for creating the IEEE design system." },
            { text: "Lead the creative and branding team to enhance insights on IEEE social media." },
            { text: "Initiate the center of publication template using Google Forms to handle requested briefs from other divisions." }
        ]
    },
    {
        id: 2,
        picture: Himalkom,
        organization: "Himpunan Mahasiswa Ilmu Komputer IPB",
        role: "Secretary of Media & Branding",
        year: "January 2024 - December 2024",
        description: [
            { text: "Initiate the 2024 grand launching project of Himalkom." },
            { text: "Responsible for managing administrative tasks for the media & branding division." },
            { text: "Collaborate with other divisions to complete requested content briefs." },
            { text: "Responsible for creating Himalkom Instagram feeds." }
        ]
    },
    {
        id: 3,
        picture: Agriinformatics,
        organization: "Agriinformatics 2024",
        role: "Head of Creative & Branding",
        year: "April 2024 - November 2024"
    },
    {
        id: 4,
        picture: PI,
        organization: "Pekan Ilkomerz 2024",
        role: "Staff of Public Relations",
        year: "June 2024 - September 2024",
    },
    {
        id: 5,
        picture: IWDC,
        organization: "IPB Web Development Community",
        role: "Coordinator of Social Media Team",
        year: "October 2023 - October 2024",
        description: [
            { text: "Responsible for attending every meeting held by the organization." },
            { text: "Served as coordinator for the social media team." },
            { text: "Organized and managed the official Instagram account of IWDC." }
        ]
    },
    {
        id: 6,
        picture: PSN,
        organization: "Pesta Sains Nasional",
        role: "Head of Graphic Designer",
        year: "July 2023 - November 2023",
        description: [
            { text: "Led the graphic design team to maintain and develop PSN branding content." },
            { text: "Created promotional posters to increase participant registrations." },
            { text: "Operated the camera and handled documentation during the event." },
            { text: "Collaborated with other divisions to fulfill creative design requests." }
        ]
    },
    {
        id: 7,
        picture: CSAgri,
        organization: "Summer Course CSAgri IPB 2022",
        role: "Staff of Event",
        year: "August 2023 - October 2023",
        description: [
            { text: "Operated presentation slides during speaker sessions." },
            { text: "Collaborated with other staff to organize event logistics." },
            { text: "Created PowerPoint templates for the main sessions." },
            { text: "Handled documentation as camera operator." }
        ]
    },
    {
        id: 8,
        picture: ITToday,
        organization: "IT TODAY IPB",
        role: "Staff of Creative",
        year: "January 2023 - October 2023",
        description: [
            { text: "Created Instagram feed designs for IT TODAY’s official account." },
            { text: "Collaborated with other divisions to complete creative design requests." },
            { text: "Designed posters that helped increase participant registration." }
        ]
    },
    {
        id: 9,
        picture: PASSIONN7,
        organization: "Eksekutif Ormawa PKU IPB",
        role: "Staff of Competition",
        year: "January 2023 - July 2023",
        description: [
            { text: "Created TOR and MOU documents for competition preparation." },
            { text: "Served as information source for PUBGM and Videography competition participants." },
            { text: "Collaborated with the events division to prepare and execute the PUBGM competition attended by 100+ participants." }
        ]
    },
    {
        id: 10,
        picture: TheDoctorIPB,
        organization: "The Doctor IPB",
        role: "Digital Entrepreneur in Wirausaha Muda",
        year: "September 2022 - July 2023",
        description: [
            { text: "Led photoshoot projects for Wirausaha Muda members." },
            { text: "Coordinated over 50 Instagram posts for Wirausaha Muda program." },
            { text: "Collaborated with public relations division to craft captions for Instagram content." }
        ]
    }

]

export const Project = [
    {
        id: 1,
        picture: "Tybloo",
        Title: "Tybloo",
        Description: "A comprehensive e-commerce platform for buying and selling second-hand items, featuring user-friendly interfaces, secure transactions, and efficient product management.",
        Link: [
            { LiveDemo: "https://tybloo.vercel.app/" },
            { GitHub: "https://github.com/ahqsa24/tybloo" },
        ],
        Technologies: ["React", "Express", "NodeJS", "MongoDB", "TailwindCSS"],
        KeyFeature: [
            { text: "User Authentication: Secure login and registration system." },
            { text: "Product Management: Easy listing, editing, and deleting of products." },
            { text: "Search and Filter: Advanced search and filtering options for products." },
            { text: "Shopping Cart: Add products to cart and manage orders." },
            { text: "Responsive Design: Optimized for both desktop and mobile devices." }
        ]
    }
]