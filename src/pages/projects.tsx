// import { FC, Suspense, lazy } from "react";

// // Lazy load the ProjectCard component
// const ProjectCard = lazy(() => import('../components/ProjectCard'));

// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   liveUrl?: string;
// }

// // Dummy project data
// const projects: Project[] = [
//   {
//     title: "Quixxle",
//     description: "A platform that connects people together. Currently it is under development.",
//     technologies: ["React", "Next.js", "TypeScript"],
//     liveUrl: "https://quixxle.web.app",
//   },
//   {
//     title: "Badamba",
//     description: "A local site, aims to provide some information about my village.",
//     technologies: ["HTML5", "CSS3", "JavaScript"],
//     liveUrl: "https://gaurisankartarasia.github.io/Badamba",
//   },
//   {
//     title: "Stellar Wings",
//     description: "An educational institution site.",
//     technologies: ["HTML5", "CSS3", "JavaScript"],
//     liveUrl: "https://gaurisankartarasia.github.io/StellarWings",
//   },
//   {
//     title: "Convoya",
//     description: "A small landing page for a platform.",
//     technologies: ["HTML5", "CSS3", "JavaScript"],
//     liveUrl: "https://gaurisankartarasia.github.io/Convoya",
//   },
// ];

// const Projects: FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8" id="projects">
//       <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
//       {/* Suspense to lazy load ProjectCard */}
//       <Suspense fallback={<div className="mx-auto">Loading Projects...</div>}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </Suspense>
//     </div>
//   );
// };

// export default Projects;







// import { FC, Suspense, lazy } from "react";
// import { FaSpinner } from "react-icons/fa";

// const ProjectCard = lazy(() => import('../components/ProjectCard'));

// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   isImportant?: boolean;
//   isUnderDevelopment?: boolean;
//   liveUrl?: string;
//   viewProjectLink?: string;
// }

// const projects: Project[] = [
//   {
//     title: "Synapse",
//     description: "A platform that connects people together.",
//     technologies: ["React", "Next.js", "TypeScript", 'Firebase'],
//     isImportant: true,
//     isUnderDevelopment: true,
//     liveUrl: "https://synapse-orcin.vercel.app",
//     viewProjectLink: "kn",
//   },
//   {
//     title: "Badamba",
//     description: "My village site.",
//     technologies: ["HTML5", "CSS3", "JavaScript"],
//     liveUrl: "https://gaurisankartarasia.github.io/Badamba",
//     viewProjectLink: "",
//   },
//   {
//     title: "Stellar Wings",
//     description: "An educational institution site.",
//     technologies: ["HTML5", "CSS3", "JavaScript"],
//     liveUrl: "https://gaurisankartarasia.github.io/StellarWings",
//     viewProjectLink: "",
//   },
//   {
//     title: "Convoya",
//     description: "A small landing page for a platform.",
//     technologies: ["HTML5", "CSS3", "JavaScript"],
//     liveUrl: "https://gaurisankartarasia.github.io/Convoya",
//     viewProjectLink: "",
//   },
// ];

// const Projects: FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl" />
//       </div>

//       <div className="relative pt-24 px-4 pb-16">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
//               from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
//               My Projects
//             </h1>
//             <p className="text-gray-600 dark:text-gray-300">
//               Explore some of my recent work
//             </p>
//           </div>

//           {/* Projects Grid */}
//           <Suspense 
//             fallback={
//               <div className="flex items-center justify-center min-h-[200px]">
//                 <FaSpinner className="w-8 h-8 text-blue-500 animate-spin" />
//               </div>
//             }
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {projects.map((project, index) => (
//                 <ProjectCard key={index} project={project} />
//               ))}
//             </div>
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;




import { Suspense } from "react"
import { Loader2 } from "lucide-react"
import ProjectCard from "../components/ProjectCard"

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
    liveUrl: "https://synapse-orcin.vercel.app",
    viewProjectLink: "kn",
  },
  {
    title: "Badamba",
    description: "My village site.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://gaurisankartarasia.github.io/Badamba",
    viewProjectLink: "",
  },
  {
    title: "Stellar Wings",
    description: "An educational institution site.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://gaurisankartarasia.github.io/StellarWings",
    viewProjectLink: "",
  },
  {
    title: "Convoya",
    description: "A small landing page for a platform.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://gaurisankartarasia.github.io/Convoya",
    viewProjectLink: "",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#fefaf5] dark:bg-[#2a2420]">
      {/* Vintage texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Decorative borders */}
      <div
        className="absolute inset-x-0 top-0 h-4 bg-repeat-x"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23832c12' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 12px",
        }}
      ></div>

      <div className="relative pt-24 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header with vintage ornaments */}
          <div className="text-center mb-16 relative">
            {/* Decorative lines */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-[#832c12] dark:bg-[#e6d5c3] opacity-20"></div>
            <div className="relative inline-block bg-[#fefaf5] dark:bg-[#2a2420] px-8">
              <h1 className="font-serif text-4xl font-bold text-[#832c12] dark:text-[#e6d5c3] mb-4">Projects</h1>
              <p className="text-[#8B4513] dark:text-[#e6d5c3]/80 font-serif">Explore some of my recent work</p>
            </div>

            {/* Vintage ornaments */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-6">
              <div className="w-24 h-1 bg-[#832c12] dark:bg-[#e6d5c3] opacity-20"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -mb-6">
              <div className="w-24 h-1 bg-[#832c12] dark:bg-[#e6d5c3] opacity-20"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[200px]">
                <Loader2 className="w-8 h-8 text-[#832c12] dark:text-[#e6d5c3] animate-spin" />
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </Suspense>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div
        className="absolute inset-x-0 bottom-0 h-4 bg-repeat-x transform rotate-180"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23832c12' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 12px",
        }}
      ></div>
    </div>
  )
}

