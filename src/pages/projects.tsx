
// import { Suspense } from "react"
// import { Loader2 } from "lucide-react"
// import ProjectCard from "../components/ProjectCard"
// import projects from "@/config/projects_config"



// export default function Projects() {
//   return (
//     <div className="min-h-screen bg-[#fefaf5] dark:bg-[#2a2420]">
//       {/* Vintage texture overlay */}
//       <div
//         className="absolute inset-0 opacity-5 pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: "24px 24px",
//         }}
//       ></div>

//       {/* Decorative borders */}
//       <div
//         className="absolute inset-x-0 top-0 h-4 bg-repeat-x"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23832c12' fill-opacity='0.1'/%3E%3C/svg%3E")`,
//           backgroundSize: "40px 12px",
//         }}
//       ></div>

//       <div className="relative pt-24 px-4 pb-16">
//         <div className="max-w-7xl mx-auto">
//           {/* Header with vintage ornaments */}
//           <div className="text-center mb-16 relative">
//             {/* Decorative lines */}
//             <div className="absolute left-0 right-0 top-1/2 h-px bg-[#832c12] dark:bg-[#e6d5c3] opacity-20"></div>
//             <div className="relative inline-block bg-[#fefaf5] dark:bg-[#2a2420] px-8">
//               <h1 className="font-serif text-4xl font-bold text-[#832c12] dark:text-[#e6d5c3] mb-4">Projects</h1>
//               <p className="text-[#8B4513] dark:text-[#e6d5c3]/80 font-serif">Explore some of my recent work</p>
//             </div>

//             {/* Vintage ornaments */}
//             <div className="absolute left-1/2 -translate-x-1/2 top-0 -mt-6">
//               <div className="w-24 h-1 bg-[#832c12] dark:bg-[#e6d5c3] opacity-20"></div>
//             </div>
//             <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -mb-6">
//               <div className="w-24 h-1 bg-[#832c12] dark:bg-[#e6d5c3] opacity-20"></div>
//             </div>
//           </div>

//           {/* Projects Grid */}
//           <Suspense
//             fallback={
//               <div className="flex items-center justify-center min-h-[200px]">
//                 <Loader2 className="w-8 h-8 text-[#832c12] dark:text-[#e6d5c3] animate-spin" />
//               </div>
//             }
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {projects.map((project, index) => (
//                 <ProjectCard key={index} project={project} />
//               ))}
//             </div>
//           </Suspense>
//         </div>
//       </div>

//       {/* Bottom decorative border */}
//       <div
//         className="absolute inset-x-0 bottom-0 h-4 bg-repeat-x transform rotate-180"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6 L10 0 L20 6 L30 0 L40 6 L40 12 L0 12 Z' fill='%23832c12' fill-opacity='0.1'/%3E%3C/svg%3E")`,
//           backgroundSize: "40px 12px",
//         }}
//       ></div>
//     </div>
//   )
// }




import { Suspense } from "react"
import { Loader2 } from "lucide-react"
import ProjectCard from "../components/ProjectCard" // Adjust path if needed
import projects from "@/config/projects_config" // Adjust path if needed

export default function Projects() {
  return (
    // Use standard background color from theme (likely bg-background)
    <div className=" bg-background text-foreground">
      {/* Removed texture overlay and decorative borders */}

      {/* Standard padding and max-width container */}
      <div className="container mx-auto px-4  lg:px-8">
        {/* Simplified Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Standard heading styles */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-3">
            Projects
          </h1>
          {/* Standard paragraph styles */}
          <p className="text-lg text-muted-foreground">
            Explore some of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[300px]">
              {/* Loader using muted foreground color */}
              <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Suspense>
      </div>
      {/* Removed bottom decorative border */}
    </div>
  )
}