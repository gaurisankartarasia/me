

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










// import { FC } from "react";
// import { FaReact, FaJsSquare, FaNode, FaCss3Alt, FaGitAlt, FaLinux } from "react-icons/fa";
// import { SiNextdotjs, SiTypescript } from "react-icons/si";
// import { Tooltip } from "@nextui-org/react";

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
//                 <Tooltip content={skill.name} showArrow={true} color="foreground">
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
//                 </Tooltip>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Knowledge;





import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { GitBranch } from "lucide-react"
import { RiJavascriptLine, RiReactjsLine, RiNodejsLine, RiNextjsLine, RiCss3Line } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaLinux } from "react-icons/fa";





export default function Knowledge() {
  const skills = [
    { icon: RiJavascriptLine, name: "JavaScript", color: "text-[#8B4513]" },
    { icon: TbBrandTypescript, name: "TypeScript", color: "text-[#8B4513]" },
    { icon: RiReactjsLine, name: "React", color: "text-[#8B4513]" },
    { icon: RiNodejsLine, name: "NodeJS", color: "text-[#8B4513]" },
    { icon: RiNextjsLine, name: "Next.js", color: "text-[#8B4513]" },
    { icon: RiCss3Line  , name: "CSS3", color: "text-[#8B4513]" },
    { icon: GitBranch, name: "Git", color: "text-[#8B4513]" },
    { icon: FaLinux, name: "Linux", color: "text-[#8B4513]" },
  ]

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
        <div className="max-w-4xl mx-auto">
          {/* Header with vintage ornaments */}
          <div className="text-center mb-16 relative">
            {/* Decorative lines */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-[#832c12] dark:bg-[#e6d5c3] opacity-20"></div>
            <div className="relative inline-block bg-[#fefaf5] dark:bg-[#2a2420] px-8">
              <h1 className="font-serif text-4xl font-bold text-[#832c12] dark:text-[#e6d5c3] mb-4">
                Knowledge & Skills
              </h1>
              <p className="text-[#8B4513] dark:text-[#e6d5c3]/80 font-serif">Technologies I work with</p>
            </div>

            {/* Vintage ornaments */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-6">
              <div className="w-24 h-1 bg-[#832c12] dark:bg-[#e6d5c3] opacity-20"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -mb-6">
              <div className="w-24 h-1 bg-[#832c12] dark:bg-[#e6d5c3] opacity-20"></div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TooltipProvider>
              {skills.map((skill) => (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div className="group relative">
                      {/* Vintage frame effect */}
                      <div className="absolute inset-0 border-2 border-[#832c12] dark:border-[#e6d5c3] rounded-lg opacity-20 transform rotate-1"></div>

                      <div
                        className="relative overflow-hidden rounded-lg  dark:bg-[#352c27] p-6 
                        transition-all duration-300 hover:-translate-y-1 
                        border-2 border-[#832c12] dark:border-[#e6d5c3] transform -rotate-1 hover:rotate-0"
                      >
                        {/* Vintage paper texture */}
                        <div
                          className="absolute inset-0 opacity-10 pointer-events-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23832c12' fill-opacity='0.1'%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='75' cy='75' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: "20px 20px",
                          }}
                        ></div>

                        {/* Content */}
                        <div className="relative flex flex-col items-center">
                          <skill.icon
                            className={`w-12 h-12 ${skill.color} dark:text-[#e6d5c3] transition-transform duration-300 group-hover:scale-110`}
                          />
                          <span className="mt-4 font-serif font-medium text-[#832c12] dark:text-[#e6d5c3]">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p> {skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
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

