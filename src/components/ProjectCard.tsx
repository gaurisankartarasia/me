// import { FC } from "react";

// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   liveUrl?: string;
// }

// interface ProjectCardProps {
//   project: Project;
// }

// const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
//   return (
//     <div className="bg-white shadow p-6 rounded-lg">
//       <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//       <p className="text-gray-600 mb-4">{project.description}</p>
//       <ul className="flex flex-wrap gap-2 mb-4">
//         {project.technologies.map((tech, index) => (
//           <li key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
//             {tech}
//           </li>
//         ))}
//       </ul>
//       {project.liveUrl && (
//         <a
//           href={project.liveUrl}
//           className="text-blue-500 hover:underline"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           View Project
//         </a>
//       )}
//     </div>
//   );
// };

// export default ProjectCard;







// import React from 'react';
// import { Card } from '@nextui-org/react';
// import { FaExternalLinkAlt, FaStar, FaHourglassEnd } from 'react-icons/fa';

// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   isImportant?: boolean;
//   isUnderDevelopment?: boolean;
//   liveUrl?: string;
//   viewProjectLink?: string;
// }

// interface ProjectCardProps {
//   project: Project;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//   return (
//     <div className="group relative">
//       <Card isBlurred  className="relative  overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 
//         border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 
//         hover:shadow-lg hover:-translate-y-1">
        
//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 
//           dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//         <div className="p-6 relative z-10">

//          <div>
//           <div className='flex items-center float-end gap-2'>
//           {project.isImportant && (<FaStar className='text-gray-500 dark:text-gray-300'/> )}
//           {project.isUnderDevelopment && ( <FaHourglassEnd className='text-gray-500 dark:text-gray-300'/>)}
//           </div>
//          </div>

//           {/* Title */}
//           <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
//             from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-3">
//             {project.title}
//           </h3>

//           {/* Description */}
//           <p className="text-gray-600 dark:text-gray-300 mb-4">
//             {project.description}
//           </p>

//           {/* Technologies */}
//           <div className="flex flex-wrap  gap-2 mb-4">
//             {project.technologies.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 text-sm rounded-full bg-gray-100/70 dark:bg-gray-700/70 
//                   text-gray-700 dark:text-gray-300 backdrop-blur-sm"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>

//           {/* Live URL */}
//           <div className='flex items-center justify-between'>

//           {project.liveUrl && (
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 
//                 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
//             >
//               <span>View Live</span>
//               <FaExternalLinkAlt className="text-sm" />
//             </a>
//           )}
//           {project.viewProjectLink && (
//             <a
//               href={project.viewProjectLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 
//                 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
//             >
//               <span>Project Link</span>
//               <FaExternalLinkAlt className="text-sm" />
//             </a>
//           )}
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default ProjectCard;










import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Link, Divider, Spacer, Chip, Tooltip } from '@nextui-org/react';
import {FaStar, FaHourglassStart } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  isImportant?: boolean;
  isUnderDevelopment?: boolean;
  liveUrl?: string;
  viewProjectLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card  isPressable shadow='sm' className="max-w-[400px] bg-white/70 dark:bg-gray-800/70 ">
      <CardHeader className="flex gap-3 items-center justify-between">
      <Tooltip content="Project name." showArrow={true} color='foreground'>

          <b className="text-md">{project.title}</b>
</Tooltip>
        
       <div className='flex items-center gap-2 justify-end text-gray-500 dark:text-gray-300'>
       <Tooltip content="This project is under development." showArrow={true} color='foreground'>

       {project.isUnderDevelopment && (<FaHourglassStart/>)}
       </Tooltip>
       <Tooltip content="Primary project." showArrow={true} color='foreground'>

        {project.isImportant && (<FaStar/>)}
        </Tooltip>
       </div>



      </CardHeader>
      <Divider />
      <CardBody>
        <p>{project.description}</p>

     <Spacer y={5} />
    <div className='flex items-center justify-start gap-2'>
    {project.technologies.map((tech) => (
              <Chip
              size='sm'
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-100/70 dark:bg-gray-700/70 
                  text-gray-700 dark:text-gray-300 backdrop-blur-sm"
              >
                {tech}
              </Chip>
            ))}

    </div>
       
      </CardBody>
      <Divider />
      <CardFooter>
       <div className='gap-5 flex'>
       <Tooltip content="View this project live." showArrow={true} color='foreground'>

       <Link isExternal showAnchorIcon href={project.liveUrl}>
          View live
        </Link>
        </Tooltip>
        <Tooltip content="View this project source link." showArrow={true} color='foreground'>

        <Link isExternal showAnchorIcon href={project.viewProjectLink}>
          View project
        </Link>
        </Tooltip>
       </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;


