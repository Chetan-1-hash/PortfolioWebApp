// =====================================================
// PORTFOLIO DATA CONFIGURATION
// All personal details, projects, skills, etc. are centralized here
// Update this file to modify your portfolio content
// =====================================================

import { FileText, Lightbulb } from "lucide-react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export const personalInfo = {
  name: "Chetan Chopade",
  firstName: "CHETAN",
  lastName: "CHOPADE",
  roles: ["Full Stack Developer", "Java Developer", "AI Tech Enthusiast"],
  email: "chetanchopade20@gmail.com",
  phone: "+91 XXXXXXXXXX",
  location: "Pune, India",
  bio: "I'm a B.E graduate in Computer Engineering with a strong passion for Machine Learning and Web Development. I love building innovative solutions and exploring new technologies.",
  profileDetails: "Computer Engineering graduate currently working as a System Engineer at Tata Consultancy Services (TCS). Skilled in Core/Advanced Java, Python, and Machine Learning, with a strong passion for both Machine Learning and Web Development. Dedicated to building impactful, user-friendly solutions and contributing to innovative projects. A collaborative team player with a continuous drive to upskill in emerging technologies and deliver high-quality results in fast-paced environments.",
  profileImage: "src//assets//a1.png",
  developerPortrait: "src//assets//developer-portrait.png",
  aboutText1: "I completed B.E in Computer Engineering, committed to utilizing my skills for the mission of the company. Looking for a challenging role in an organization to utilize my Core and Advanced Java, Python, and Machine Learning skills.",
  aboutText2: `I am an enthusiast in the field of <span class="text-primary font-semibold">Machine Learning</span> 
    and <span class="text-primary font-semibold">Web Development</span>. Bringing forth the ability to work well with others to utilize my skills to visually enhance projects and continuously upskill in emerging technologies  to create more delightful experiences.`,
  resumeLink: "https://drive.google.com/file/d/1kNZT6NJKgZP0ef-PH7dbqK2_G5BptoI0/view?usp=drive_link",
};


export const education = [
  {
    degree: "BE - Computer Engineering",
    institution: "PCET's Nutan Maharashtra Institute of Engineering and Technology, Talegoan Pune",
    year: "2020-2024",
    score: "CGPA - 8.89 | Percentage - 79.12%",
  },
  {
    degree: "Maharashtra State Board HSC - 12th",
    institution: "Novel Junior College of Science and Commerce, Chinchwad Pune",
    year: "2018-2020",
    score: "Percentage - 73.69%",
  },
  {
    degree: "Maharashtra State Board SSC - 10th",
    institution: "Defence Career Academy, Chhatrapati Sambhaji Nagar",
    year: "2018",
    score: "Percentage - 83.00%",
  },
];

export const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://chetan-1-hash.github.io/PortfolioWebApp/assets/github.png" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
];

export const projects = [
  {
    id: 1,
    title: "CricLively",
    description: "A cricket live scores dashboard, and dynamic matches & stats analysis",
    image: "src//assets//CricLivelySS.png",
    technologies: ["React", "Spring boot", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
  },
  {
    id: 2,
    title: "Notes App",
    description: "A full-stack notes application with user authentication, CRUD operations, and responsive design.",
    image: "src//assets//Noteapp-img.png",
    technologies: ["Angular", "Spring boot", "MongoDB", "Bootstrap"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and interactive UI.",
    image: "src//assets//Weatherapp-img.png",
    technologies: ["Angular", "API"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
  },
  {
    id: 4,
    title: "Myntra Clone",
    description: "E-commerce platform clone with product listings, cart functionality, and responsive design.",
    image: "src//assets//Myntraclone-img.png",
    technologies: ["Angular", "Spring", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
  },
  {
    id: 5,
    title: "Online Exam System",
    description: "A comprehensive online examination platform with timer, auto-submit, and result generation.",
    image: "src//assets//OnlineExamSystem-img.png",
    technologies: ["Spring boot", "MySQL", "Swing"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
  },
];

export const experience = [
  {
    logo:"src//assets//MRND PVT LTD logo.svg",
    position: "Junior Full Stack Java Developer",
    type: "Intern",
    companyName: "MRND Pvt Ltd, Akurdi",
    technologies: ["Java Swing", "MySQL", "Eclipse IDE"],
    experience: [
      "Worked as Junior Full Stack Java Application Developer - Intern in the Software Development Unit",
      "Developed Desktop UI and Database connectivity of application",
      "Contributed in Desktop Application development - Dental Clinic Appointment System project",
      "Developed fully functional appointment system with all CRUD operations",
    ]
  },
  {
    logo:"src//assets//tcs logo.png",
    position: "System Engineer",
    type: "Full Tiime",
    companyName: "Tata Consultancy Services (TCS)",
    technologies: ["Spring Boot", "SQL", "REST API", "JSP", "GraphQL", "ServiceNow"],
    experience: [
      "Worked as Junior Full Stack Java Application Developer - Intern in the Software Development Unit",
      "Developed Desktop UI and Database connectivity of application",
      "Contributed in Desktop Application development - Dental Clinic Appointment System project",
      "Developed fully functional appointment system with all CRUD operations",
    ]
  }
]


export const achievements = [
  {
    icon: FileText,
    title: "Research Paper Publication",
    description: "Published Research Paper on Social Weather Assistance System at International Research Journal of Engineering and Technology",
  },
  {
    icon: Lightbulb,
    title: "Social Weather Assistance System",
    description: "Designed a social weather assistance system using Machine Learning and IOT to assist farmers, travelers, and emergency services.",
  },
  {
    icon: Lightbulb,
    title: "SEHC System",
    description: "Developed a Smart Enhanced Healthcare System concept utilizing IoT and machine learning for better patient care.",
  },
];


export const contactInfo = [
  { icon: Mail, label: "Email", value: "chetan17302@gmail.com", href: "mailto:chetanchopade20@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
  { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India", href: "#" },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/chetan-1-hash", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/chetan-chopade-27b50a25b/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/chetan.chopade17/", label: "Instagram" },
];

export const loadingTerminalCode = [
  "Initializing Neural Network...",
  "Loading AI Modules...",
  "Compiling Experience Data...",
  "Analyzing Skill Matrix...",
  "Connecting to Creative Hub...",
  "Portfolio Ready!",
];

export const siteMetadata = {
  title: "Chetan Chopade | Portfolio",
  description: "Full Stack Developer specializing in Java, React, and Web Technologies",
  author: "Chetan Chopade",
};
