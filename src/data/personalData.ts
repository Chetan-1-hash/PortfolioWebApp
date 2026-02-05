// =====================================================
// PORTFOLIO DATA CONFIGURATION
// All personal details, projects, skills, etc. are centralized here
// Update this file to modify your portfolio content
// =====================================================

import { FileText, Lightbulb } from "lucide-react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import ProfileImg from "/a1.png";
import AboutmeImg from "@/assets/developer-portrait.png";
import CricLivelySS from "@/assets/CricLivelySS.png";
import NoteappImg from "@/assets/Noteapp-img.png";
import WeatherAppImg from "@/assets/Weatherapp-img.png";
import MyntraCloneImg from "@/assets/Myntraclone-img.png";
import OnlineExamSystemImg from "@/assets/OnlineExamSystem-img.png";
import MRNDlogo from "@/assets/MRND PVT LTD logo.svg"
import TCSlogo from "@/assets/tcs logo.png"

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
  profileImage: ProfileImg,
  developerPortrait: AboutmeImg,
  aboutText1: "Computer Engineering graduate and System Engineer at Tata Consultancy Services (TCS), specializing in Core/Advanced Java, Python, and AI/ML. Passionate about transforming ideas into reliable, scalable applications, with strong interests in Aritifial Intelligence and Web Development. Motivated to contribute to innovative teams while continuously learning and evolving as a software professional.",
  aboutText2: `I am an enthusiast in the field of <span class="text-primary font-semibold">Aritifial Intelligence/Machine Learning</span> 
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
  { name: "GitHub", icon: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
];

export const projects = [
  {
    id: 1,
    title: "CricLively",
    description: "A cricket live scores dashboard, and dynamic matches & stats analysis",
    image: CricLivelySS,
    technologies: ["React", "Spring boot", "Spring Security", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: true,
  },
  {
    id: 2,
    title: "Notes App",
    description: "A full-stack notes application with user authentication, CRUD operations, and responsive design.",
    image: NoteappImg,
    technologies: ["Angular", "Spring boot", "MongoDB", "Bootstrap"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: false,
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and interactive UI.",
    image: WeatherAppImg,
    technologies: ["Angular", "API"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: false,
  },
  {
    id: 4,
    title: "Myntra Clone",
    description: "E-commerce platform clone with product listings, cart functionality, and responsive design.",
    image: MyntraCloneImg,
    technologies: ["Angular", "Spring", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: false,
  },
  {
    id: 5,
    title: "Online Exam System",
    description: "A comprehensive online examination platform with timer, auto-submit, and result generation.",
    image: OnlineExamSystemImg,
    technologies: ["Spring boot", "MySQL", "Swing"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: false,
  },
];

export const experience = [
  {
    logo:MRNDlogo,
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
    logo:TCSlogo,
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
  "Initializing Portfolio Environment...",
  "Loading Projects & Skills...",
  "Fetching Experience Modules...",
  "Compiling Work Samples...",
  "Optimizing Performance...",
  "Connecting to Creativity Hub...",
  "Portfolio Ready!",
];
