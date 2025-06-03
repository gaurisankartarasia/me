import { DiJavascript1 } from "react-icons/di";
import {
  FaCss3Alt,
  FaNodeJs,
  FaLinux,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMui, SiTypescript, SiShadcnui } from "react-icons/si";
import { Skill } from "@/types";

export const skills: Skill[] = [
  { 
    icon: DiJavascript1, 
    name: "JavaScript", 
    size: "32",
    description: "A versatile programming language essential for web development, enabling interactive and dynamic content." 
  },
  { 
    icon: SiTypescript,
    name: "TypeScript",
    size: "27",
    description: "A superset of JavaScript that adds static typing, enhancing code quality and maintainability."
  },
  { 
    icon: FaReact,
    name: "React",
    size: "32",
    description: "A popular JavaScript library for building user interfaces with a component-based approach."
  },
  { 
    icon: FaNodeJs, 
    name: "NodeJS", 
    size: "32",
    description: "A JavaScript runtime environment that allows server-side execution, perfect for scalable network applications." 
  },
  { 
    icon: RiNextjsFill,
    name: "Next.js", 
    size: "32",
    description: "A React framework for production-grade applications, offering server-side rendering and static site generation." 
  },
  { 
    icon: SiMui,
    name: "Mui", 
    size: "32",
    description: "A comprehensive library of UI tools for faster and easier web development, based on Google's Material Design."
  },
  { 
    icon: SiShadcnui,
    name: "Shadcn/ui",
    size: "28",
    description: "A collection of reusable components built with Tailwind CSS and Radix UI, focused on accessibility and customization." 
  },
  { 
    icon: FaCss3Alt,
    name: "CSS3",
    size: "32",
    description: "The latest standard for Cascading Style Sheets, used for styling web pages and creating visually appealing designs." 
  },
  { 
    icon: FaGitAlt,
    name: "Git", 
    size: "32",
    description: "A distributed version control system for tracking changes in source code during software development."
  },
  { 
    icon: FaLinux,
    name: "Linux",
    size: "32",
    description: "A powerful open-source operating system widely used for servers, embedded systems, and development environments." 
  },
];