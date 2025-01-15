

// import { FC } from "react";
// import { FaReact, FaJsSquare, FaNode, FaCss3Alt, FaGitAlt, FaLinux } from "react-icons/fa";
// import { SiNextdotjs, SiTypescript } from "react-icons/si";

// const Knowledge: FC = () => {
//   const skills = [
//     { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-500", bg: "bg-yellow-100/50 dark:bg-yellow-900/20" },
//     { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", bg: "bg-blue-100/50 dark:bg-blue-900/20" },
//     { icon: FaReact, name: "React", color: "text-cyan-500", bg: "bg-cyan-100/50 dark:bg-cyan-900/20" },
//     { icon: FaNode, name: "NodeJS", color: "text-green-600", bg: "bg-green-100/50 dark:bg-green-900/20" },
//     { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-gray-200", bg: "bg-gray-100/50 dark:bg-gray-800/40" },
//     { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", bg: "bg-blue-100/50 dark:bg-blue-900/20" },
//     { icon: FaGitAlt, name: "Git", color: "text-orange-600", bg: "bg-orange-100/50 dark:bg-orange-900/20" },
//     { icon: FaLinux, name: "Linux", color: "text-gray-800 dark:text-gray-200", bg: "bg-gray-100/50 dark:bg-gray-800/40" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative pt-24 px-4 pb-16">
//         <div className="max-w-4xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
//               Knowledge & Skills
//             </h1>
//             <p className="text-gray-600 dark:text-gray-300">
//               Technologies I work with
//             </p>
//           </div>

//           {/* Skills Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {skills.map((skill) => (
//               <div
//                 key={skill.name}
//                 className="group relative"
//               >
//                 {/* Card */}
//                 <div className={`relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 p-6 
//                   transition-all duration-300 hover:shadow-lg hover:-translate-y-1 
//                   border border-gray-200/50 dark:border-gray-700/50`}
//                 >
//                   {/* Background Gradient */}
//                   <div className={`absolute inset-0 ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
//                   {/* Content */}
//                   <div className="relative flex flex-col items-center">
//                     <skill.icon className={`w-16 h-16 ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
//                     <span className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
//                       {skill.name}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Knowledge;










import { FC } from "react";
import { FaReact, FaJsSquare, FaNode, FaCss3Alt, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tooltip } from "@nextui-org/react";

const Knowledge: FC = () => {
  const skills = [
    { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-500", bg: "bg-yellow-100/50 dark:bg-yellow-900/20" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", bg: "bg-blue-100/50 dark:bg-blue-900/20" },
    { icon: FaReact, name: "React", color: "text-cyan-500", bg: "bg-cyan-100/50 dark:bg-cyan-900/20" },
    { icon: FaNode, name: "NodeJS", color: "text-green-600", bg: "bg-green-100/50 dark:bg-green-900/20" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-gray-800 dark:text-gray-200", bg: "bg-gray-100/50 dark:bg-gray-800/40" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500", bg: "bg-blue-100/50 dark:bg-blue-900/20" },
    { icon: FaGitAlt, name: "Git", color: "text-orange-600", bg: "bg-orange-100/50 dark:bg-orange-900/20" },
    { icon: FaLinux, name: "Linux", color: "text-gray-800 dark:text-gray-200", bg: "bg-gray-100/50 dark:bg-gray-800/40" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative pt-24 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              Knowledge & Skills
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Technologies I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative"
              >
                {/* Card */}
                <Tooltip content={skill.name} showArrow={true} color="foreground">
                <div className={`relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 p-6 
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 
                  border border-gray-200/50 dark:border-gray-700/50`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center">
                    <skill.icon className={`w-16 h-16 ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                    <span className="mt-4 font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;