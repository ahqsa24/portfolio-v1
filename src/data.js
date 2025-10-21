// Dummy template data for portfolio
// Use the three Dummy images requested by the user
import Experiences from "/assets/Dummy/Experiences.png";
import ProjectsImg from "/assets/Dummy/Projects.png";
import CertificatesImg from "/assets/Dummy/Certificates.png";

// Education (5 entries) - dummy
export const educationData = [
    { id: 1, picture: Experiences, institution: "Demo University A", degree: "B.Sc. Computer Science", year: "2018 - 2022" },
    { id: 2, picture: Experiences, institution: "Demo Institute B", degree: "Diploma Web Dev", year: "2016 - 2018" },
    { id: 3, picture: Experiences, institution: "Demo Highschool C", degree: "Science Major", year: "2013 - 2016" },
    { id: 4, picture: Experiences, institution: "Online Course D", degree: "UI/UX Bootcamp", year: "2020" },
    { id: 5, picture: Experiences, institution: "Short Course E", degree: "Cloud Fundamentals", year: "2021" }
];

// Organization (5 entries) - dummy
export const organizationData = [
    { id: 1, picture: Experiences, organization: "Demo Org A", role: "Designer", year: "2022", description: [{ text: "Led design initiatives." }] },
    { id: 2, picture: Experiences, organization: "Demo Org B", role: "Developer", year: "2021", description: [{ text: "Built frontend features." }] },
    { id: 3, picture: Experiences, organization: "Demo Org C", role: "Coordinator", year: "2020", description: [{ text: "Coordinated events." }] },
    { id: 4, picture: Experiences, organization: "Demo Org D", role: "Volunteer", year: "2019", description: [{ text: "Community volunteer work." }] },
    { id: 5, picture: Experiences, organization: "Demo Org E", role: "Contributor", year: "2018", description: [{ text: "Open-source contributions." }] }
];

// Projects (7 entries) - dummy
export const Project = [
    { id: 1, picture: ProjectsImg, Title: "Demo Project 1", Description: "Short dummy description for project 1.", Link: [{ GitHub: "https://example.com" }], Technologies: ["React", "Tailwind"], KeyFeature: [{ text: "Feature A" }] },
    { id: 2, picture: ProjectsImg, Title: "Demo Project 2", Description: "Short dummy description for project 2.", Link: [{ GitHub: "https://example.com" }], Technologies: ["Node", "Express"], KeyFeature: [{ text: "Feature B" }] },
    { id: 3, picture: ProjectsImg, Title: "Demo Project 3", Description: "Short dummy description for project 3.", Link: [{ GitHub: "https://example.com" }], Technologies: ["VanillaJS"], KeyFeature: [{ text: "Feature C" }] },
    { id: 4, picture: ProjectsImg, Title: "Demo Project 4", Description: "Short dummy description for project 4.", Link: [{ GitHub: "https://example.com" }], Technologies: ["React"], KeyFeature: [{ text: "Feature D" }] },
    { id: 5, picture: ProjectsImg, Title: "Demo Project 5", Description: "Short dummy description for project 5.", Link: [{ GitHub: "https://example.com" }], Technologies: ["HTML", "CSS"], KeyFeature: [{ text: "Feature E" }] },
    { id: 6, picture: ProjectsImg, Title: "Demo Project 6", Description: "Short dummy description for project 6.", Link: [{ GitHub: "https://example.com" }], Technologies: ["Python"], KeyFeature: [{ text: "Feature F" }] },
    { id: 7, picture: ProjectsImg, Title: "Demo Project 7", Description: "Short dummy description for project 7.", Link: [{ GitHub: "https://example.com" }], Technologies: ["Go"], KeyFeature: [{ text: "Feature G" }] }
];

// Certificates (7 entries) - dummy
export const Certificates = [
    { id: 1, picture: CertificatesImg, Title: "Demo Certificate 1" },
    { id: 2, picture: CertificatesImg, Title: "Demo Certificate 2" },
    { id: 3, picture: CertificatesImg, Title: "Demo Certificate 3" },
    { id: 4, picture: CertificatesImg, Title: "Demo Certificate 4" },
    { id: 5, picture: CertificatesImg, Title: "Demo Certificate 5" },
    { id: 6, picture: CertificatesImg, Title: "Demo Certificate 6" },
    { id: 7, picture: CertificatesImg, Title: "Demo Certificate 7" }
];

// Tech stack (7 entries) - dummy
export const TechStack = [
    { id: 1, Title: "HTML" },
    { id: 2, Title: "CSS" },
    { id: 3, Title: "JavaScript" },
    { id: 4, Title: "ReactJS" },
    { id: 5, Title: "Tailwind CSS" },
    { id: 6, Title: "Nodejs" },
    { id: 7, Title: "Figma" }
];

// Social media (5 dummy entries)
export const SocialMedia = [
    { id: 1, Title: "LinkedIn", Name: "Demo User", link: "https://example.com" },
    { id: 2, Title: "GitHub", Name: "demo", link: "https://github.com" },
    { id: 3, Title: "Instagram", Name: "@demo", link: "https://instagram.com" },
    { id: 4, Title: "Email", Name: "demo@example.com", link: "mailto:demo@example.com" },
    { id: 5, Title: "YouTube", Name: "Demo", link: "https://youtube.com" }
];

