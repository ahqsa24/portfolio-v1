// Education Images
import IPB from "/assets/Experiences/IPB.png";
import Bangkit from "/assets/Experiences/Bangkit.png";
import Necis from "/assets/Experiences/Necis.png";

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

// Professional Imagess
import PTSapphire from "/assets/Experiences/PTSapphire.png";
import Newsmaker23 from "/assets/Experiences/Newsmaker23.png";
import TyblooLab from "/assets/Experiences/TyblooLab.png";
import LPKPBMerdeka from "/assets/Experiences/LPKPBMerdeka.png";

// Projects
import AiGo from "/assets/Projects/AiGo.png";
import DesaDigital from "/assets/Projects/KMS.png";
import FeynMind from "/assets/Projects/FeynMind.png";
import Infokan from "/assets/Projects/Infokan.png";
import SDDA from "/assets/Projects/SDDA.png";
import Notes from "/assets/Projects/Notes.png";
import Bookshelf from "/assets/Projects/Bookshelf.png";
import API from "/assets/Projects/API.png";
import logbook from "/assets/Projects/logbook.png"
import lpkmerdeka from "/assets/Projects/lpkmerdeka.png"
import tybloo from "/assets/Projects/tybloo.png"
import newsmaker from "/assets/Projects/newsmaker.png"

// Certificates
import Certificates1 from "/assets/Certificates/1.png";
import Certificates2 from "/assets/Certificates/2.png";
import Certificates3 from "/assets/Certificates/3.png";
import Certificates4 from "/assets/Certificates/4.png";
import Certificates5 from "/assets/Certificates/5.png";
import Certificates6 from "/assets/Certificates/6.png";
import Certificates7 from "/assets/Certificates/7.png";
import Certificates8 from "/assets/Certificates/8.png";
import Certificates9 from "/assets/Certificates/9.png";
import Certificates10 from "/assets/Certificates/10.png";
import Certificates11 from "/assets/Certificates/11.png";
import Certificates12 from "/assets/Certificates/12.png";
import Certificates13 from "/assets/Certificates/13.png";
import Certificates14 from "/assets/Certificates/14.png";
import Certificates15 from "/assets/Certificates/15.png";
import Certificates16 from "/assets/Certificates/16.png";
import Certificates17 from "/assets/Certificates/17.png";
import Certificates18 from "/assets/Certificates/18.png";
import Certificates19 from "/assets/Certificates/19.png";
import Certificates20 from "/assets/Certificates/20.png";
import Certificates21 from "/assets/Certificates/21.png";
import Certificates22 from "/assets/Certificates/22.png";
import Certificates23 from "/assets/Certificates/23.png";
import Certificates24 from "/assets/Certificates/24.png";

// Note: Social Media and TechStack icons are now handled by React Icons library
// No need to import images anymore - see Portfolio.jsx and Contact.jsx

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
        description: [
            { text: "Selected as one of 4,636 students from 45,841 applicants to participate in the Bangkit program and graduated with an 'A' grade." },
            { text: "Acquired hands-on experience with Google Cloud technologies, covering infrastructure, networking, security, load balancing, and Kubernetes for building and managing scalable cloud environments." },
            { text: "Gained knowledge in implementing DevOps practices, system monitoring, and designing reliable cloud infrastructures using tools such as Terraform and Google Cloud Observability." },
            { text: "Strengthened programming expertise in JavaScript, Git/GitHub, and backend development to support scalable application deployment." },
            { text: "Developed practical skills in cloud application development, including integrating services such as Cloud Run, Firestore, and Cloud Storage to deliver secure, end-to-end solutions." }
        ]
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

export const workData = [
    {
        id: 1,
        picture: TyblooLab,
        company: "Tybloo Lab",
        role: "Founder & Software Engineer",
        year: "January 2026 - Present",
        description: [
            { text: "Developed project briefs to define requirements, scope, and planning for digital product development " },
            { text: "Built digital products including portfolio websites, landing pages, and CMS using React.js and Next.js " },
            { text: "Developed company website using Next.js and NestJS for handling dynamic web operations, delivering an interactive UI and seamless order tracking dashboards with integrated bilingual systems. " },
            { text: "Led team collaboration and facilitated regular meetings to manage end-to-end development processes." }
        ]
    },
    {
        id: 2,
        picture: Newsmaker23,
        company: "Newsmaker23",
        role: "Web Developer Intern",
        year: "March 2026 - Present",
        description: [
            { text: "Redesigned and modernized website UI to improve user experience and visual consistency." },
            { text: "Integrated news APIs and implemented category-based filtering for dynamic content delivery." },
            { text: "Fetched and displayed real-time data including live charts, economic calendar, and investment instrument prices." },
            { text: "Developed financial calculators for pivot points and Fibonacci analysis." }
        ]
    },
    {
        id: 3,
        picture: LPKPBMerdeka,
        company: "LPK PB Merdeka",
        role: "Web Developer Intern",
        year: "December 2025 - February 2026",
        description: [
            { text: "Developed landing page and CMS for dynamic content management." },
            { text: "Built multi-role system (user, admin, superadmin) with role-based access control" },
            { text: "Implemented authentication system included register, login, forgot password, and 2FA authencticator using Better Auth." },
            { text: "Designed and developed RESTful APIs for LMS features including video/ebook materials, attendance tracking, and leaderboard system " }
        ]
    },
    {
        id: 4,
        picture: PTSapphire,
        company: "PT Sapphire Asset International",
        role: "IT Intern",
        year: "September - December 2025",
        description: [
            { text: "Converted company subsidiary websites into cross-platform web applications using Flutter." },
            { text: "Implemented bottom navigation bar to enhance mobile user experience." },
            { text: "Integrated Shorebird for over-the-air updates and application version management." },
            { text: "Created test cases and performed manual black-box testing for company subsidiary websites." }
        ]
    },
]

export const Project = [
    {
        id: 1,
        picture: logbook,
        Title: "IPB Logbook Generator System",
        Description: "IPB Logbook Generator adalah sebuah sistem yang dibuat untuk mempermudah proses pengisian logbook pada student portal IPB University. Sistem ini memungkinkan pengisian logbook menggunakan input berupa file Excel yang telah disesuaikan dengan format pada platform. Dibandingkan dengan metode pada student portal yang mengharuskan pengisian satu per satu, penggunaan Excel jauh lebih mudah dan praktis, terutama jika terjadi kesalahan saat submit. Selain itu, sistem ini telah mendukung batch upload, sehingga beberapa file Excel dapat digabungkan menjadi satu batch yang siap digenerate ke platform student portal. Tidak hanya melalui input Excel, platform ini juga mendukung fitur CRUD, sehingga pengguna dapat menambahkan row yang kurang, menghapus row yang tidak diperlukan, serta mengedit data jika terdapat kesalahan. Sistem ini memanfaatkan cookies dan ID logbook pengguna untuk proses autentikasi, sehingga dapat mengakses dan melakukan generate logbook secara otomatis.",
        Link: [
            { LiveDemo: "https://ipb-logbook-generator.vercel.app/" },
            { GitHub: "https://github.com/ahqsa24/logbook-generator" },
        ],
        Technologies: ["NextJS", "Supabase", "Tailwind CSS"],
        KeyFeature: [
            { text: "Memanfaatkan cookies dan ID logbook untuk melakukan autentikasi dan mengakses sistem." },
            { text: "Menggunakan file Excel sebagai input utama yang telah disesuaikan dengan format logbook pada platform." },
            { text: "Mendukung input gambar melalui file ZIP yang digabungkan dengan data Excel dalam satu proses upload." },
            { text: "Menyediakan fitur CRUD serta dukungan batch untuk mengelola dan menggabungkan beberapa file Excel atau ZIP." }
        ]
    },
    {
        id: 2,
        picture: lpkmerdeka,
        Title: "LPK PB Merdeka Platform",
        Description: "LPK PB Merdeka merupakan sebuah sistem pelatihan kerja pialang berjangka yang menerapkan konsep gamifikasi di dalamnya. Sistem ini memiliki tiga role utama, yaitu user, admin, dan superadmin. User dapat mengakses dashboard user, admin dapat mengakses dashboard admin serta melakukan assign user, sedangkan superadmin memiliki akses penuh ke dashboard admin sekaligus dapat melakukan assign admin. Sistem autentikasi dibangun menggunakan Better Auth yang mendukung login melalui Google dan fitur 2FA, selain fitur umum seperti login, registrasi, dan lupa kata sandi. Pada dashboard admin, tersedia fitur untuk melihat overview sistem, mengelola materi pembelajaran seperti video dan e-book, mengatur absensi, serta melakukan manajemen user. Selain itu, sistem gamifikasi diimplementasikan melalui leaderboard yang berbasis API, sehingga user dapat melihat peringkat berdasarkan aktivitas mereka. User juga dapat mengakses dashboard yang berisi konten pembelajaran yang telah disediakan oleh admin. Terdapat juga landing page yang seluruh kontennya dapat dikelola melalui CMS pada dashboard admin.",
        Link: [
            { LiveDemo: "https://lpk-merdeka.vercel.app/" },
        ],
        Technologies: ["NextJS", "Prisma", "Better Auth", "Railway"],
        KeyFeature: [
            { text: "Sistem autentikasi terintegrasi dengan Better Auth yang mendukung login Google, 2FA, serta fitur autentikasi umum." },
            { text: "Manajemen role terstruktur dengan tiga level akses (user, admin, dan superadmin) beserta kontrol assign pengguna." },
            { text: "Dashboard admin lengkap untuk mengelola materi pembelajaran, absensi, user, serta monitoring sistem." },
            { text: "Implementasi gamifikasi melalui leaderboard berbasis API dan CMS untuk pengelolaan konten landing page." }
        ]
    },
    {
        id: 3,
        picture: newsmaker,
        Title: "Newsmaker23",
        Description: "Newsmaker23 merupakan sebuah platform berita digital yang berfokus pada penyajian informasi di bidang ekonomi dan keuangan. Platform ini menyediakan berbagai konten terkait instrumen investasi seperti emas, forex, cryptocurrency, serta kategori ekonomi lainnya dalam bentuk berita yang aktual dan relevan. Selain itu, Newsmaker23 juga dilengkapi dengan fitur kalender ekonomi yang menampilkan jadwal rilis data penting global, sehingga pengguna dapat memantau peristiwa yang berpotensi memengaruhi pergerakan pasar. Platform ini juga menyediakan data historis harga dari berbagai indeks dan instrumen keuangan yang diperbarui secara harian, sehingga pengguna dapat melakukan analisis berbasis data dengan lebih akurat. Untuk mendukung analisis teknikal, tersedia juga tools seperti kalkulator pivot point dan Fibonacci yang membantu dalam menentukan level support dan resistance. Selain sebagai sumber informasi, Newsmaker23 juga menghadirkan analisis pasar terkini setiap harinya yang dapat dijadikan referensi dalam pengambilan keputusan investasi.",
        Link: [
            { LiveDemo: "https://newsmaker-v2.vercel.app/" },
        ],
        Technologies: ["NextJS", "ExpressJS", "Tailwind CSS"],
        KeyFeature: [
            { text: "Menyediakan berita ekonomi dan investasi terkini yang mencakup berbagai instrumen seperti emas, forex, dan cryptocurrency." },
            { text: "Menampilkan kalender ekonomi global untuk memantau jadwal rilis data penting." },
            { text: "Menyediakan data historis harga harian untuk berbagai indeks dan instrumen keuangan." },
            { text: "Dilengkapi tools analisis seperti kalkulator pivot point dan Fibonacci serta insight analisis pasar harian." }
        ]
    },
    {
        id: 4,
        picture: tybloo,
        Title: "Tybloo Lab",
        Description: "Tybloo Lab merupakan sebuah platform tempat produk digital yang difokuskan pada software seperti website, aplikasi, ataupun script automation. Platform ini sedang dalam masa pengembangan awal pada bagian frontend, yang secara khusus dirancang untuk memberikan pengalaman pengguna kelas premium dengan standar estetika SaaS modern. Melalui platform ini, pengguna tidak hanya dapat mengeksplorasi katalog produk dan membeli template lisensi siap pakai, tetapi juga dapat mengajukan request kustomisasi fitur, pemeliharaan (maintenance), hingga deployment aplikasi ke cloud. Sistem ini menawarkan dashboard terpusat yang interaktif, sehingga pelanggan dapat dengan transparan melacak seluruh riwayat pesanan dan status proyek mereka. Selain itu, platform ini juga mendemonstrasikan sistem percakapan (chat/messaging) terintegrasi yang memudahkan komunikasi antara klien dengan tim customer service maupun developer yang sedang menangani proyek bersangkutan. Dengan antarmuka responsif dan dukungan penuh pada lokalisasi dwibahasa, Tybloo Lab memastikan aksesibilitas yang optimal bagi pasar lokal maupun internasional.",
        Link: [
            { LiveDemo: "https://tybloolab.vercel.app/" },
        ],
        Technologies: ["NextJS", "NestJS", "Tailwind CSS", "Supabase"],
        KeyFeature: [
            { text: "Menghadirkan UI berstandar premium dengan layout bento grid yang responsif dan animasi yang interaktif di berbagai perangkat." },
            { text: "Mendukung fitur transisi dwibahasa (Inggris dan Indonesia) secara real-time di seluruh platform." },
            { text: "Menyediakan dashboard pengguna untuk memantau pesanan, histori transaksi, dan status permintaan kustomisasi." }
        ]
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
        picture: AiGo,
        Title: "AiGo: Enhance The Beautiful of Indonesia",
        Description: "AiGo merupakan sebuah Travel Journal Website yang memiliki tagline “Rangkum Perjalanmu Menjadi Lebih Mudah”. AiGo berfokus ke dalam bidang pariwisata, seperti memudahkan pengguna dalam mencari informasi mengenai destinasi wisata, berbagi pengalaman perjalanan menarik dengan pengguna lainnya, serta dapat berinteraksi terhadap sesama penggemar pariwisata secara online. Tujuan utama dari aplikasi Travel Journal ini adalah untuk menyediakan platform yang komprehensif bagi wisatawan dalam merencanakan, mencatat, dan berbagi pengalaman perjalanan mereka. AiGo menawarkan beberapa manfaat kepada para pengguna, seperti memudahkan pengguna dalam merekap dan mengorganisir riwayat perjalanan, mencari informasi terkait destinasi wisata di Indonesia melalui artikel informatif, serta menyediakan forum diskusi interaktif yang memungkinkan pengguna bertanya, berbagi pengalaman, dan berkomentar mengenai berbagai destinasi wisata.",
        Link: [
            { GitHub: "https://github.com/ahqsa24/aigo-rpl" },
        ],
        Technologies: ["VanillaCSS", "JavaScript"],
        KeyFeature: [
            { text: "Memudahkan para penggiat traveling untuk saling bertanya dan mengutarakan pendapat dengan fitur forum bersama." },
            { text: "Membantu para penggiat traveling untuk merekap tempat yang sudah mereka kunjungi dengan fitur daftar kunjungan." },
            { text: "Membantu penggiat travelling untuk mencari informasi terkait tempat wisata yang dituju berbasis artikel informatif" }
        ]
    },
    {
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        picture: Certificates2,
        Title: "Belajar Membuat Aplikasi Web dengan React.js",
    },
    {
        id: 3,
        picture: Certificates3,
        Title: "Belajar Jaringan Komputer untuk Pemula",
    },
    {
        id: 4,
        picture: Certificates4,
        Title: "UIUX Design Mastery Skilvul",
    },
    {
        id: 5,
        picture: Certificates5,
        Title: "Belajar Penerapan Machine Learning dengan Google Cloud",
    },
    {
        id: 6,
        picture: Certificates6,
        Title: "Belajar Dasar-Dasar DevOps",
    },
    {
        id: 7,
        picture: Certificates7,
        Title: "Belajar Back-End Pemula dengan JavaScript",
    },
    {
        id: 8,
        picture: Certificates8,
        Title: "Menjadi Google Cloud Engineer",
    },
    {
        id: 9,
        picture: Certificates9,
        Title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    },
    {
        id: 10,
        picture: Certificates10,
        Title: "Belajar Dasar AI",
    },
    {
        id: 11,
        picture: Certificates11,
        Title: "Belajar Dasar Pemrograman JavaScript",
    },
    {
        id: 12,
        picture: Certificates12,
        Title: "Belajar Dasar Pemrograman Web",
    },
    {
        id: 13,
        picture: Certificates13,
        Title: "Belajar Dasar Git dengan GitHub",
    },
    {
        id: 14,
        picture: Certificates14,
        Title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    },
    {
        id: 15,
        picture: Certificates15,
        Title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    },
    {
        id: 16,
        picture: Certificates16,
        Title: "Belajar Machine Learning untuk Pemula",
    },
    {
        id: 17,
        picture: Certificates17,
        Title: "Belajar Dasar SQL",
    },
    {
        id: 18,
        picture: Certificates18,
        Title: "Belajar Dasar Data Science",
    },
    {
        id: 19,
        picture: Certificates19,
        Title: "Belajar Dasar Manajemen Proyek",
    },
    {
        id: 20,
        picture: Certificates20,
        Title: "Belajar Dasar Visualisasi Data",
    },
    {
        id: 21,
        picture: Certificates21,
        Title: "Belajar Dasar Pemrograman Python",
    },
    {
        id: 22,
        picture: Certificates22,
        Title: "Belajar Membuat Front-End Web untuk Pemula",
    },
    {
        id: 23,
        picture: Certificates23,
        Title: "Belajar Dasar AWS Cloud",
    },
    {
        id: 24,
        picture: Certificates24,
        Title: "Belajar Implementasi CI CD",
    },

]

export const TechStack = [
    {
        id: 1,
        Title: "HTML",
    },
    {
        id: 2,
        Title: "CSS",
    },
    {
        id: 3,
        Title: "JavaScript",
    },
    {
        id: 3,
        Title: "Typescript",
    },
    {
        id: 4,
        Title: "ReactJS",
    },
    {
        id: 5,
        Title: "Tailwind CSS",
    },
    {
        id: 6,
        Title: "Nodejs",
    },
    {
        id: 7,
        Title: "ExpressJS",
    },
    {
        id: 8,
        Title: "NextJS",
    },
    {
        id: 9,
        Title: "Shadcn/UI",
    },
    {
        id: 10,
        Title: "Vite",
    },
    {
        id: 11,
        Title: "Firebase",
    },
    {
        id: 12,
        Title: "Vercel",
    },
    {
        id: 13,
        Title: "MySQL",
    },
    {
        id: 14,
        Title: "Google Cloud Platform",
    },
    {
        id: 15,
        Title: "Figma",
    },
    {
        id: 16,
        Title: "Postman",
    },
    {
        id: 17,
        Title: "MongoDB",
    },
    {
        id: 18,
        Title: "Railway",
    },
    {
        id: 19,
        Title: "Supabase",
    }
]

export const SocialMedia = [
    {
        id: 1,
        Title: "Linkedln",
        Name: "Ahmad Qaulan Sadida",
        link: "https://www.linkedin.com/in/adidsadida"
    },
    {
        id: 2,
        Title: "GitHub",
        Name: "ahqsa24",
        link: "https://github.com/ahqsa24"
    },
    {
        id: 3,
        Title: "Instagram",
        Name: "@adidsadida24",
        link: "https://www.instagram.com/adidsadida24/"
    },
    {
        id: 4,
        Title: "Email",
        Name: "adhiet353@gmail.com",
        link: "mailto:adhiet353@gmail.com"
    },
    {
        id: 5,
        Title: "YouTube",
        Name: "Cozzy",
        link: "https://www.youtube.com/adidsadida"
    }
]