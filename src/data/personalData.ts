// =====================================================
// PORTFOLIO DATA CONFIGURATION
// All personal details, projects, skills, etc. are centralized here
// Update this file to modify your portfolio content
// =====================================================

import { FileText, Lightbulb, Mail, MapPin, Github, Linkedin, Instagram, Terminal } from "lucide-react";
import ProfileImg from "@/assets/p1.png";
import CricLivelySS from "@/assets/CricLivelySS.png";
import NoteappImg from "@/assets/NotesApp.png";
import WeatherAppImg from "@/assets/Weatherapp-img.png";
import MyntraCloneImg from "@/assets/Myntraclone-img.png";
import OnlineExamSystemImg from "@/assets/OnlineExamSystem-img.png";
import MRNDlogo from "@/assets/MRND PVT LTD logo.svg";
import TCSlogo from "@/assets/tcs logo.png";

export const TCS_START_DATE = "2025-02-06";

export const personalInfo = {
  name: "Chetan Chopade",
  firstName: "CHETAN",
  lastName: "CHOPADE",
  roles: [
    "System Engineer @ TCS",
    "Full Stack Java Developer",
    "Cloud & Automation Engineer",
    "AI Tech Enthusiast",
  ],
  email: "chetan17302@gmail.com",
  location: "Pune, India",
  bio: "System Engineer at TCS specializing in Java/Spring Boot, AWS Cloud Operations, Runbook & Workflow Automation, and Full-Stack Web Development.",
  profileDetails:
    "Computer Engineering graduate currently working as a System Engineer at Tata Consultancy Services (TCS). Experienced in Spring Boot, PostgreSQL, MS Graph, JUnit, AWS (EC2, S3, RDS, ACM, CloudWatch), Octopus Deploy Runbooks, Grafana, JS7, and Shell Scripting alongside modern frontend frameworks.",
  profileImage: ProfileImg,
  aboutText1:
    "Computer Engineering graduate and System Engineer at Tata Consultancy Services (TCS), working across Full-Stack Java Development (Spring Boot, PostgreSQL, JUnit, MS Graph, JSP), AWS Cloud Operations, and enterprise task automation using Octopus Deploy, Grafana, JS7, and Shell Scripting.",
  aboutText2: `I am passionate about building <span class="text-primary font-semibold">scalable backend systems</span>, <span class="text-primary font-semibold">cloud automation</span>, and <span class="text-primary font-semibold">Artificial Intelligence / Web applications</span>. Having resolved 2,500+ incidents and automated complex operational workflows, I focus on engineering reliable systems that eliminate manual toil.`,
  resumeLink:
    "https://drive.google.com/file/d/1kNZT6NJKgZP0ef-PH7dbqK2_G5BptoI0/view?usp=drive_link",
};

export const education = [
  {
    degree: "BE - Computer Engineering",
    shortLabel: "Bachelor of Engineering",
    institution:
      "PCET's Nutan Maharashtra Institute of Engineering and Technology, Talegaon Pune",
    year: "2020 – 2024",
    score: "8.89 CGPA",
    percentage: "79.12%",
    coursework: [
      "DBMS & SQL",
      "Cloud Computing",
      "Computer Networks",
      "AI & Machine Learning",
      "Object-Oriented Java",
    ],
  },
  {
    degree: "HSC (Class 12th) — Science",
    shortLabel: "Higher Secondary",
    institution:
      "Novel Junior College of Science and Commerce, Chinchwad Pune",
    year: "2018 – 2020",
    score: "73.69%",
  },
  {
    degree: "SSC (Class 10th)",
    shortLabel: "Secondary School",
    institution: "Defence Career Academy, Chhatrapati Sambhaji Nagar",
    year: "2018",
    score: "83.00%",
  },
];

export type SkillCategory =
  | "Backend & APIs"
  | "Cloud & DevOps"
  | "Automation & Monitoring"
  | "Frontend"
  | "Databases";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  icon?: string;
  subtitle?: string;
  accentColor?: string;
}

export const skillCategories: SkillCategory[] = [
  "Backend & APIs",
  "Cloud & DevOps",
  "Automation & Monitoring",
  "Databases",
  "Frontend",
];

export const skills: SkillItem[] = [
  // Backend & APIs
  {
    name: "Java",
    category: "Backend & APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    subtitle: "Core & Enterprise",
  },
  {
    name: "Spring Boot",
    category: "Backend & APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    subtitle: "Microservices & REST",
  },
  {
    name: "JUnit",
    category: "Backend & APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg",
    subtitle: "Unit Testing",
  },
  {
    name: "MS Graph",
    category: "Backend & APIs",
    subtitle: "Microsoft 365 APIs",
    accentColor: "#0078D4",
  },
  {
    name: "JSP",
    category: "Backend & APIs",
    subtitle: "Server-Side Java",
    accentColor: "#EA580C",
  },
  {
    name: "REST API",
    category: "Backend & APIs",
    subtitle: "API Design",
    accentColor: "#10B981",
  },
  {
    name: "GraphQL",
    category: "Backend & APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    subtitle: "Query Language",
  },
  {
    name: "Python",
    category: "Backend & APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    subtitle: "Scripting & AI/ML",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    category: "Cloud & DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    subtitle: "EC2, S3, RDS, ACM, CW",
    accentColor: "#FF9900",
  },
  {
    name: "Octopus Deploy",
    category: "Cloud & DevOps",
    subtitle: "Runbooks & Triggers",
    accentColor: "#0D80D8",
  },
  {
    name: "Linux",
    category: "Cloud & DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    subtitle: "Patching & Admin",
  },
  {
    name: "Windows Server",
    category: "Cloud & DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    subtitle: "Patching & Ops",
  },
  {
    name: "Git",
    category: "Cloud & DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    subtitle: "Version Control",
  },
  {
    name: "GitHub",
    category: "Cloud & DevOps",
    subtitle: "Code Collaboration",
    accentColor: "#F97316",
  },

  // Automation & Monitoring
  {
    name: "Grafana",
    category: "Automation & Monitoring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    subtitle: "Dashboards & Alerts",
  },
  {
    name: "Sumo Logic",
    category: "Automation & Monitoring",
    subtitle: "Log Alerts & Migration",
    accentColor: "#0047BA",
  },
  {
    name: "JS7",
    category: "Automation & Monitoring",
    subtitle: "JobScheduler",
    accentColor: "#F59E0B",
  },
  {
    name: "Shell Script",
    category: "Automation & Monitoring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    subtitle: "Task Automation",
  },
  {
    name: "ServiceNow",
    category: "Automation & Monitoring",
    subtitle: "ITSM & 2,500+ Tickets",
    accentColor: "#81B5A1",
  },

  // Databases
  {
    name: "PostgreSQL",
    category: "Databases",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    subtitle: "Relational DB",
  },
  {
    name: "MySQL",
    category: "Databases",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    subtitle: "SQL Database",
  },
  {
    name: "MongoDB",
    category: "Databases",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    subtitle: "NoSQL Document DB",
  },

  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    subtitle: "UI Library",
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    subtitle: "Web Framework",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    subtitle: "Typed JS",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    subtitle: "ES6+",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    subtitle: "Utility CSS",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    subtitle: "Markup",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    subtitle: "Styling",
  },
];

export const projects = [
  {
    id: 1,
    title: "CricLively",
    description:
      "A cricket live scores dashboard, and dynamic matches & stats analysis",
    image: CricLivelySS,
    technologies: [
      "React",
      "Spring Boot",
      "Spring Security",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: true,
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "A full-stack notes application with user authentication, CRUD operations, and responsive design.",
    image: NoteappImg,
    technologies: ["Angular", "Spring Boot", "MongoDB", "Bootstrap"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: false,
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Real-time weather application with location-based forecasts and interactive UI.",
    image: WeatherAppImg,
    technologies: ["Angular", "API"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: false,
  },
  {
    id: 4,
    title: "Myntra Clone",
    description:
      "E-commerce platform clone with product listings, cart functionality, and responsive design.",
    image: MyntraCloneImg,
    technologies: ["Angular", "Spring", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: false,
  },
  {
    id: 5,
    title: "Online Exam System",
    description:
      "A comprehensive online examination platform with timer, auto-submit, and result generation.",
    image: OnlineExamSystemImg,
    technologies: ["Spring Boot", "MySQL", "Swing"],
    liveLink: "#",
    githubLink: "https://github.com/Chetan-1-hash",
    upcoming: false,
  },
];

export interface ExperienceDetail {
  label: string;
  text: string;
}

export interface ExperienceItem {
  logo: string;
  position: string;
  type: string;
  companyName: string;
  startDate?: string;
  endDate?: string;
  periodLabel?: string;
  isCurrent?: boolean;
  highlights?: string[];
  technologies: string[];
  experience: ExperienceDetail[];
}

export const experience: ExperienceItem[] = [
  {
    logo: TCSlogo,
    position: "System Engineer",
    type: "Full Time",
    companyName: "Tata Consultancy Services (TCS)",
    startDate: TCS_START_DATE,
    isCurrent: true,
    highlights: [
      "2,500+ Incidents Resolved",
      "AWS & CloudWatch",
      "Octopus Runbooks",
      "Spring Boot & PostgreSQL",
    ],
    technologies: [
      "Spring Boot",
      "PostgreSQL",
      "AWS",
      "Octopus Deploy",
      "MS Graph",
      "JUnit",
      "JSP",
      "Grafana",
      "JS7",
      "Sumo Logic",
      "Shell Script",
      "ServiceNow",
      "REST API",
      "GraphQL",
      "SQL",
    ],
    experience: [
      {
        label: "Incident Management, Patching & AWS Cloud",
        text: "Resolved 2,500+ incidents and service tickets, executed OS patching on both Windows and Linux servers, and worked extensively on AWS (EC2, S3 buckets, RDS, Certificate Manager, and CloudWatch alerts configuration & troubleshooting).",
      },
      {
        label: "Sumo Logic to AWS CloudWatch Migration",
        text: "Managed application and infrastructure alerts in Sumo Logic and executed the migration of alert pipelines to AWS CloudWatch.",
      },
      {
        label: "Octopus Deploy Runbook Automation",
        text: "Leveraged Octopus Deploy to configure and apply Runbooks and Runbook Triggers for reliable task and operational automation.",
      },
      {
        label: "Workflow & Script Automation",
        text: "Automated recurring operational tasks and saved significant manual effort using Grafana, JS7 JobScheduler, and Shell Scripting.",
      },
      {
        label: "Enterprise Module Development",
        text: "Developed requirement-based application modules using Spring Boot, PostgreSQL, JUnit, MS Graph, and JSP.",
      },
    ],
  },
  {
    logo: MRNDlogo,
    position: "Junior Full Stack Java Developer",
    type: "Intern",
    companyName: "MRND Pvt Ltd, Akurdi",
    periodLabel: "Internship",
    isCurrent: false,
    technologies: ["Java Swing", "MySQL", "Eclipse IDE"],
    experience: [
      {
        label: "Software Development Unit",
        text: "Worked as Junior Full Stack Java Application Developer - Intern in the Software Development Unit.",
      },
      {
        label: "Desktop UI & DB Connectivity",
        text: "Developed Desktop UI and Database connectivity of the application.",
      },
      {
        label: "Dental Clinic Appointment System",
        text: "Contributed to Desktop Application development for the Dental Clinic Appointment System project.",
      },
      {
        label: "End-to-End CRUD",
        text: "Developed a fully functional appointment system with all CRUD operations.",
      },
    ],
  },
];

export const achievements = [
  {
    icon: FileText,
    title: "Research Paper Publication",
    description:
      "Published Research Paper on Social Weather Assistance System at International Research Journal of Engineering and Technology",
  },
  {
    icon: Lightbulb,
    title: "Social Weather Assistance System",
    description:
      "Designed a social weather assistance system using Machine Learning and IOT to assist farmers, travelers, and emergency services.",
  },
  {
    icon: Lightbulb,
    title: "SEHC System",
    description:
      "Developed a Smart Enhanced Healthcare System concept utilizing IoT and machine learning for better patient care.",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Direct Email",
    value: "chetan17302@gmail.com",
    href: "mailto:chetan17302@gmail.com",
    copyable: true,
  },
  {
    icon: Terminal,
    label: "Current Role",
    value: "System Engineer @ TCS",
    href: "#experience",
    copyable: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "",
    copyable: false,
  },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/chetan-1-hash", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/chetan-chopade-27b50a25b/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/chetan.chopade17/",
    label: "Instagram",
  },
];

export const loadingTerminalCode = [
  "Initializing Portfolio Environment...",
  "Loading Cloud & DevOps Stack...",
  "Fetching Dynamic Experience...",
  "Compiling Projects & Modules...",
  "Portfolio Ready!",
];
