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







import { FC, Suspense, lazy } from "react";
import { FaSpinner } from "react-icons/fa";

const ProjectCard = lazy(() => import('../components/ProjectCard'));

interface Project {
  title: string;
  description: string;
  technologies: string[];
  isImportant?: boolean;
  isUnderDevelopment?: boolean;
  liveUrl?: string;
  viewProjectLink?: string;
}

const projects: Project[] = [
  {
    title: "Synapse",
    description: "A platform that connects people together.",
    technologies: ["React", "Next.js", "TypeScript", 'Firebase'],
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
];

const Projects: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative pt-24 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
              from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              My Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Explore some of my recent work
            </p>
          </div>

          {/* Projects Grid */}
          <Suspense 
            fallback={
              <div className="flex items-center justify-center min-h-[200px]">
                <FaSpinner className="w-8 h-8 text-blue-500 animate-spin" />
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Projects;