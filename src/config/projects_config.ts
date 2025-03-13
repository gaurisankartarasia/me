// projectConfig.ts

interface Project {
    title: string
    description: string
    technologies: string[]
    isImportant?: boolean
    isUnderDevelopment?: boolean
    liveUrl?: string
    viewProjectLink?: string
  }
  
  const projects: Project[] = [
    {
      title: "Synapse",
      description: "A platform that connects people together.",
      technologies: ["React", "Next.js", "TypeScript", "Firebase"],
      isImportant: true,
      isUnderDevelopment: true,
      liveUrl: "https://synapseweb.vercel.app",
      viewProjectLink: "https://github.com/gaurisankartarasia/synapse",
    },
    {
      title: "Portfolio site",
      description: "A personal portfolio website & and for sharing custom built rom details.",
      technologies: ["React", "Vite", "TypeScript"],
      liveUrl: "https://www.hackneyed.site",
    },
    {
      title: "Portfolio site",
      description: "A personal portfolio website.",
      technologies: ["React", "Vite", "TypeScript"],
      liveUrl: "https://ansh-agnihotri.web.app",
    },
    {
      title: "Badamba",
      description: "My village site.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://gaurisankartarasia.github.io/Badamba",
      viewProjectLink: "https://github.com/gaurisankartarasia/Badamba",
    },
    {
      title: "Stellar Wings",
      description: "An educational institution site.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://gaurisankartarasia.github.io/StellarWings",
      viewProjectLink: "https://github.com/gaurisankartarasia/StellarWings",
    },
    {
      title: "Convoya",
      description: "A small landing page for a platform.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://gaurisankartarasia.github.io/Convoya",
      viewProjectLink: "https://github.com/gaurisankartarasia/Convoya",
    },
  ]
  
  export default projects
  