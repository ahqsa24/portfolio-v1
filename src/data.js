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

// Projects
import AiGo from "/assets/Projects/AiGo.png";
import DesaDigital from "/assets/Projects/KMS.png";
import FeynMind from "/assets/Projects/FeynMind.png";
import Infokan from "/assets/Projects/Infokan.png";
import SDDA from "/assets/Projects/SDDA.png";
import Notes from "/assets/Projects/Notes.png";
import Bookshelf from "/assets/Projects/Bookshelf.png";
import API from "/assets/Projects/API.png";

// Certificates
import Certificates1 from "/assets/Certificates/1.png";

// Social Media
import Linkedin from "/assets/Social/LinkedIn.png";
import Github from "/assets/Social/GitHub.png";
import Instagram from "/assets/Social/Instagram.png";
import Email from "/assets/Social/Gmail.png";
import Youtube from "/assets/Social/YouTube.png";

// TechStack
import HTML from "/assets/TechStack/HTML.png";
import CSS from "/assets/TechStack/CSS.png";
import JavaScript from "/assets/TechStack/JavaScript.png";
//import TypeScript from "/assets/TechStack/TypeScript.png";
import ReactJS from "/assets/TechStack/ReactJS.png";
import TailwindCSS from "/assets/TechStack/TailwindCSS.png";
import ExpressJS from "/assets/TechStack/ExpressJS.png";
import NextJS from "/assets/TechStack/NextJS.png";
import NodeJS from "/assets/TechStack/NodeJS.png";
import ShadeUI from "/assets/TechStack/ShadeUI.png";
import Figma from "/assets/TechStack/Figma.png";
import GCloud from "/assets/TechStack/GCloud.png";
import Firebase from "/assets/TechStack/Firebase.png";
import Vite from "/assets/TechStack/Vite.png";
import Vercell from "/assets/TechStack/Vercell.png";
import Postman from "/assets/TechStack/Postman.png";
import MySQL from "/assets/TechStack/MySQL.png";

// Others
import About from "/assets/about-image.png";
import Arrow from "/assets/arrow (1).png";
import Certificate from "/assets/certificates.png";
import Code from "/assets/Code (1).png";
import Contact from "/assets/contact-icon.png";
import Experiences from "/assets/experiences.png";
import Logo from "/assets/Logo-1.png";
import ProjectIcon from "/assets/project-icon.png";
import TotalProjects from "/assets/total-projects.png";

export const Image = [
    {
        id: 1,
        picture: About,
        name: "about-image"
    },
    {
        id: 2,
        picture: Arrow,
        name: "arrow"
    },
    {
        id: 3,
        picture: Certificate,
        name: "certificates"
    },
    {
        id: 4,
        picture: Code,
        name: "code"
    },
    {
        id: 5,
        picture: Contact,
        name: "contact-icon"
    },
    {
        id: 6,
        picture: Experiences,
        name: "experiences"
    },
    {
        id: 7,
        picture: Logo,
        name: "logo"
    },
    {
        id: 8,
        picture: ProjectIcon,
        name: "project-icon"
    },
    {
        id: 9,
        picture: TotalProjects,
        name: "total-projects"
    }
]

// Export individual images for easy import in components
export { About, Arrow, Certificate, Code, Contact, Experiences, Logo, ProjectIcon, TotalProjects };

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
        picture: DesaDigital,
        Title: "KMS Inovasi Desa Digital",
        Description: "Desa Digital merupakan sebuah platform sistem terintegrasi yang dirancang untuk menghubungkan perangkat desa dengan para inovator guna mendukung penerapan inovasi di tingkat desa.  Pada Capstone Desa Digital 2025, saya berkontribusi dalam optimalisasi platform dengan mengembangkan beberapa fitur utama, seperti Tambah Inovasi, Pengajuan Inovasi, dan Pengajuan Klaim yang memungkinkan pengguna menambahkan dan melihat inovasi serta klaim dari desa. Saya juga mengembangkan fitur Klaim Inovasi untuk memungkinkan desa mengklaim inovasi yang dibutuhkan, serta Report Admin untuk membantu admin memantau seluruh aktivitas inovasi dan klaim. Proyek ini merupakan kelanjutan dari tahun sebelumnya dan berfokus pada peningkatan fungsionalitas agar platform lebih siap digunakan oleh publik.",
        Link: [
            { LiveDemo: "https://desa-digital-v2.vercel.app/" },
            { GitHub: "https://github.com/Adsattt/desa-digital.v2" },
        ],
        Technologies: ["ReactJS", "Typescript", "Tailwind CSS", "Firestore"],
        KeyFeature: [
            { text: "Mengbubungkan perangkat desa dengan inovator untuk menerapkan inovasi yang diterapkan." },
            { text: "Menyediakan fitur pencarian dan filter untuk mempermudah pencocokan inovasi, desa, dan inovator" },
            { text: "Memantau aktivitas inovasi dan klaim melalui dashboard admin" },
            { text: "Memberikan sistem badge dan ranking untuk mendorong partisipasi aktif dan inovasi unggulan" }
        ]
    },
    {
        id: 2,
        picture: FeynMind,
        Title: "FeynMind: Your Learning Buddy",
        Description: "FeynMind adalah aplikasi mobile yang dirancang untuk meningkatkan pemahaman sains terutama biologi  bagi siswa SMA di Indonesia dengan menerapkan Feynman Technique, yaitu metode belajar melalui penjelasan konsep untuk memperdalam pemahaman. Aplikasi ini memungkinkan siswa memasukkan materi pelajaran dan melakukan sesi mengajar simulasi, di mana sistem akan mengajukan pertanyaan untuk mengidentifikasi celah pemahaman mereka. Dengan fitur pengenalan suara dan respons interaktif, FeynMind membantu siswa belajar secara lebih aktif. FeynMind dirancang agar dapat menyesuaikan tingkat kesulitan pertanyaan berdasarkan pemahaman siswa, sehingga pembelajaran menjadi lebih personal dan efektif. Aplikasi ini juga dilengkapi dengan fitur referensi pintar yang menyediakan sumber belajar tambahan untuk membantu siswa memahami konsep yang masih kurang dikuasai.  FeynMind berfungsi sebagai asisten belajar yang mendukung siswa dalam menguasai materi sains secara mandiri dan menyenangkan.",
        Link: [
            { GitHub: "https://github.com/FeynMind" },
        ],
        Technologies: ["Express", "Cloud Run", "Firestore"],
        KeyFeature: [
            { text: "Menganalisis penjelasan siswa melalui pengenalan suara dan memberikan umpan balik atau pertanyaan lanjutan." },
            { text: "Memungkinkan siswa menjelaskan materi secara verbal untuk menguji pemahaman mereka." },
            { text: "Menyediakan sumber belajar tambahan untuk membantu memperjelas konsep yang belum dikuasai." },
        ]
    },
    {
        id: 3,
        picture: AiGo,
        Title: "AiGo: Enhance The Beautiful of Indonesia",
        Description: "AiGo merupakan sebuah Travel Journal Website yang memiliki tagline “Rangkum Perjalanmu Menjadi Lebih Mudah”. AiGo berfokus ke dalam bidang pariwisata, seperti memudahkan pengguna dalam mencari informasi mengenai destinasi wisata, berbagi pengalaman perjalanan menarik dengan pengguna lainnya, serta dapat berinteraksi terhadap sesama penggemar pariwisata secara online. Tujuan utama dari aplikasi Travel Journal ini adalah untuk menyediakan platform yang komprehensif bagi wisatawan dalam merencanakan, mencatat, dan berbagi pengalaman perjalanan mereka. AiGo menawarkan beberapa manfaat kepada para pengguna, seperti memudahkan pengguna dalam merekap dan mengorganisir riwayat perjalanan, mencari informasi terkait destinasi wisata di Indonesia melalui artikel informatif, serta menyediakan forum diskusi interaktif yang memungkinkan pengguna bertanya, berbagi pengalaman, dan berkomentar mengenai berbagai destinasi wisata.",
        Link: [
            { GitHub: "https://github.com/ahqsa24/aigo-rpl" },
        ],
        Technologies: ["VanillaCSS", "JavaScript"],
        KeyFeature: [
            { text: "Mengbubungkan perangkat desa dengan inovator untuk menerapkan inovasi yang diterapkan." },
            { text: "Menyediakan fitur pencarian dan filter untuk mempermudah pencocokan inovasi, desa, dan inovator" },
            { text: "Memantau aktivitas inovasi dan klaim melalui dashboard admin" },
            { text: "Memberikan sistem badge dan ranking untuk mendorong partisipasi aktif dan inovasi unggulan" }
        ]
    },
    {
        id: 4,
        picture: Infokan,
        Title: "Infokan: Interactive Learning Platform",
        Description: "Infokan merupakan sebuah media pembelajaran interaktif yang berfokus pada materi seputaran dunia ilmu komputer. Platform ini dibuat sebagai keperluan untuk projek basis data dengan pengembangan utama terdapat pada fitur CRUD (Create, Read, Update, Delete) dan integrasi terhadap DBMS untuk keperluan manajemen data dari aplikasi. Infokan memiliki beberapa fitur yang sudah dikembangkan, mencakup fitur utama forum diskusi yang menjadi ajang tanya jawab kepada sesama mahasiswa lainnya, fitur notes yang dibuat guna mendukung proses pembelajaran dari mahasiswa setelah mempelajari berbagai macam materi yang disediakan, dan pengembangan sistem secara CRUD (Create, Read, Update, Delete) untuk beberapa fitur seperti profile, notes, sampai pertanyaan, dan komentar pada forum diskusi. Platform ini dikembangkan dengan Vanilla CSS dan HTML sebagai frontend, bahasa PHP murni sebagai backend, dan integrasi dengan MySQL sebagai Database Management System.",
        Link: [
         { GitHub: "https://github.com/ahqsa24/infokan-basis-data" },
        ],
        Technologies: ["VanillaCSS", "PHP", "MySQL"],
        KeyFeature: [
            { text: "Berdiskusi melalui forum diskusi interaktif dengan sesama pengguna lainnya." },
            { text: "Menambahkan notes yang bisa disesuaikan dengan materi dan sub-materi yang sedang dipelajari." },
            { text: "Melakukan operasi CRUD terkait dengan notes, profile, pertanyaan, dan komentar yang diberikan oleh pengguna." },
        ]
    },
    {
        id: 5,
        picture: SDDA,
        Title: "SDDA Creative Landing Page",
        Description: "Sadida Creative merupakan sebuah platform yang menyediakan jasa pembuatan desain grafis sesuai dengan keinginan dari Client. Tampilan di atas merupakan landing page sederhana yang berisi data dummy dari platform Sadida Creative yang kita sebut sebagai iterasi pertama. Kedepannya landing page ini akan dikembangkan pada iterasi kedua dengan data rill yang akan membuatnya lebih interaktif kepada pengguna. Landing page tersebut berisi beberapa informasi dari Sadida Creative, seperti pengenalan singkat tentang Sadida Creative, pengenalan para eksekutor di balik layar Sadida Creative, melihat rating dari para eksekutor tersebut, melihat projek-projek yang sudah diselesaikan, sampai menghubungi narabuhung dari Sadida Creative untuk melakukan pemesanan jasa desain grafis. Landing page tersebut dibuat sebagai keperluan submisi untuk projek akhir dari Dicoding menggunakan HTML dan CSS sederhana. ",
        Link: [
            { LiveDemo: "https://ahqsa24.github.io/sddacreative.github.io/" },
            { GitHub: "https://github.com/ahqsa24/sddacreative.github.io" },
        ],
        Technologies: ["HTML", "VanillaCSS"],
        KeyFeature: [
            { text: "Menghubungi narahubung untuk melakukan pemesanan terkait jasa desain grafis." },
            { text: "Menyediakan informasi terkait pengenalan sadida creative dan para eksekutor di balik layar." },
            { text: "Menampilkan rating dari para eksekutor sebagai bentuk transparansi kepada para pelanggan," },
            { text: "Menampilkan projek-projek yang sudah diselesaikan sebagai portofolio dari Sadida Creative." }
        ]
    },
    {
        id: 6,
        picture: Notes,
        Title: "Personal Notes Using ReactJS",
        Description: "Aplikasi catatan pribadi berbasis ReactJS yang memungkinkan pengguna untuk menulis, mengedit, dan menghapus catatan secara interaktif. Dibangun dengan arsitektur SPA (Single Page Application) menggunakan Vite untuk performa tinggi dan respon cepat. Fitur utama mencakup pengarsipan catatan yang sudah tidak digunakan serta pembatasan karakter judul untuk menjaga keterbacaan dan kerapian tampilan.",
        Link: [
         { GitHub: "https://github.com/ahqsa24/react-notes" },
        ],
        Technologies: ["ReactJS", "Vite"],
        KeyFeature: [
            { text: "Melakukan operasi CRUD dalam membuat notes baru dengan atribut judul dan deskripsi." },
            { text: "Mengarsipkan notes yang sudah tidak digunakan membantu efektifitas tampilan dari notes." },
            { text: "Menghitung jumlah karakter dari judul notes dan membatasi maksimal 50 karakter." },
        ]
    },
    {
        id: 7,
        picture: Bookshelf,
        Title: "Bookshelf App Using JavaScript",
        Description: "Aplikasi rak buku sederhana berbasis JavaScript murni yang dirancang untuk membantu pengguna mengelola daftar bacaan mereka. Data buku disimpan secara lokal menggunakan Local Storage, memungkinkan pengguna menambahkan, memindahkan, dan menghapus buku tanpa koneksi internet. Aplikasi ini juga dilengkapi fitur pencarian buku untuk mempermudah navigasi dan pengelolaan koleksi.",
        Link: [
         { GitHub: "https://github.com/ahqsa24/bookshelf-api" },
        ],
        Technologies: ["JavaScript"],
        KeyFeature: [
            { text: "Menyimpan input dari user dengan local storage pada JavaScipt." },
            { text: "Memindahkan notes dari rak belum dibaca menjadi sudah dibaca." },
            { text: "Membuat, menghapus, dan mencari notes sesuai input yang diberikan pengguna." }
        ]
    },
    {
        id: 8,
        picture: API,
        Title: "Bookshelf API Backend HapiJS",
        Description: "API backend yang dikembangkan menggunakan HapiJS untuk mendukung aplikasi Bookshelf. Proyek ini menerapkan prinsip RESTful API dan memungkinkan operasi CRUD (Create, Read, Update, Delete) untuk data buku. Dengan validasi input dan penanganan error yang baik, API ini memastikan pengalaman pengguna yang stabil dan responsif dalam mengelola data bacaan melalui endpoint terstruktur.",
        Link: [
         { GitHub: "https://github.com/ahqsa24/notes-app-back-end" },
        ],
        Technologies: ["NodeJS", "HapiJS", "Postman"],
        KeyFeature: [
            { text: "Melakukan operasi CRUD berbasis HapiJS untuk menerima input dari pengguna." },
            { text: "Mengembalikan pesan error ketika ada kondisi salah yang dimasukkan oleh pengguna." },
            { text: "Membagi buku ke dalam kelompok sudah dibaca dan belum dibaca seperti prinsip rak buku." }
        ]
    },
]

export const Certificates = [
    {
        id: 1,
        picture: Certificates1,
        Title: "Bangkit 2024 Batch 2 Cloud Computing",
    },
    {
        id: 2,
        picture: Certificates1,
        Title: "Belajar Membuat Aplikasi Web dengan React.js",
    },
    {
        id: 3,
        picture: Certificates1,
        Title: "Belajar Jaringan Komputer untuk Pemula",
    },
    {
        id: 4,
        picture: Certificates1,
        Title: "UIUX Design Mastery Skilvul",
    },
    {
        id: 5,
        picture: Certificates1,
        Title: "Belajar Penerapan Machine Learning dengan Google Cloud",
    },
    {
        id: 6,
        picture: Certificates1,
        Title: "Belajar Dasar-Dasar DevOps",
    },
    {
        id: 7,
        picture: Certificates1,
        Title: "Belajar Back-End Pemula dengan JavaScript",
    },
    {
        id: 8,
        picture: Certificates1,
        Title: "Menjadi Google Cloud Engineer",
    },
    {
        id: 9,
        picture: Certificates1,
        Title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    },
    {
        id: 10,
        picture: Certificates1,
        Title: "Belajar Dasar AI",
    },
    {
        id: 11,
        picture: Certificates1,
        Title: "Belajar Dasar Pemrograman JavaScript",
    },
    {
        id: 12,
        picture: Certificates1,
        Title: "Belajar Dasar Pemrograman Web",
    },
    {
        id: 13,
        picture: Certificates1,
        Title: "Belajar Dasar Git dengan GitHub",
    },
    {
        id: 14,
        picture: Certificates1,
        Title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    },
    {
        id: 15,
        picture: Certificates1,
        Title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    },
    {
        id: 16,
        picture: Certificates1,
        Title: "Belajar Machine Learning untuk Pemula",
    },
    {
        id: 17,
        picture: Certificates1,
        Title: "Belajar Dasar SQL",
    },
    {
        id: 18,
        picture: Certificates1,
        Title: "Belajar Dasar Data Science",
    },
    {
        id: 19,
        picture: Certificates1,
        Title: "Belajar Dasar Manajemen Proyek",
    },
    {
        id: 20,
        picture: Certificates1,
        Title: "Belajar Dasar Visualisasi Data",
    },
    {
        id: 21,
        picture: Certificates1,
        Title: "Belajar Dasar Pemrograman Python",
    },
    {
        id: 22,
        picture: Certificates1,
        Title: "Belajar Membuat Front-End Web untuk Pemula",
    },
    {
        id: 23,
        picture: Certificates1,
        Title: "Belajar Dasar AWS Cloud",
    },
    {
        id: 24,
        picture: Certificates1,
        Title: "Belajar Implementasi CI CD",
    },

]

export const TechStack = [
    {
        id: 1,
        picture: HTML,
        Title: "HTML",
    },
    {
        id: 2,
        picture: CSS,
        Title: "CSS",
    },
    {
        id: 3,
        picture: JavaScript,
        Title: "JavaScript",
    },
    {
        id: 4,
        picture: ReactJS,
        Title: "ReactJS",
    },
    {
        id: 5,
        picture: TailwindCSS,
        Title: "Tailwind CSS",
    },
    {
        id: 6,
        picture: NodeJS,
        Title: "Nodejs",
    },
    {
        id: 7,
        picture: ExpressJS,
        Title: "ExpressJS",
    },
    {
        id: 8,
        picture: NextJS,
        Title: "NextJS",
    },
    {
        id: 9,
        picture: ShadeUI,
        Title: "Shade UI",
    },
    {
        id: 10,
        picture: Vite,
        Title: "Vite",
    },
    {
        id: 11,
        picture: Firebase,
        Title: "Firebase",
    },
    {
        id: 12,
        picture: Vercell,
        Title: "Vercell",
    },
    {
        id: 13,
        picture: MySQL,
        Title: "MySQL",
    },
    {
        id: 14,
        picture: GCloud,
        Title: "Google Cloud",
    },
    {
        id: 15,
        picture: Figma,
        Title: "Figma",
    },
    {
        id: 16,
        picture: Postman,
        Title: "Postman",
    }
]

export const SocialMedia = [
    {
        id: 1,
        picture: Linkedin,
        Title: "Linkedln",
        Name: "Ahmad Qaulan Sadida",
        link: "https://www.linkedin.com/in/adidsadida"
    },
    {
        id: 2,
        picture: Github,
        Title: "GitHub",
        Name: "ahqsa24",
        link: "https://github.com/ahqsa24"
    },
    {
        id: 3,
        picture: Instagram,
        Title: "Instagram",
        Name: "@adidsadida24",
        link: "https://www.instagram.com/adidsadida24/"
    },
    {
        id: 4,
        picture: Email,
        Title: "Email",
        Name: "adhiet353@gmail.com",
        link: "mailto:adhiet353@gmail.com"
    },
    {
        id: 5,
        picture: Youtube,
        Title: "YouTube",
        Name: "Cozzy",
        link: "https://www.youtube.com/adidsadida"
    }
]