// import { Card } from "@/components/ui/card"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
// import {Link} from "react-router-dom"
// import { Star, Hourglass, ExternalLink } from "lucide-react"

// interface Project {
//   title: string
//   description: string
//   technologies: string[]
//   isImportant?: boolean
//   isUnderDevelopment?: boolean
//   liveUrl?: string
//   viewProjectLink?: string
// }

// interface ProjectCardProps {
//   project: Project
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <TooltipProvider>
//       <Card className="relative overflow-hidden bg-[#fefaf5] dark:bg-[#352c27] border-2 border-[#832c12] dark:border-[#e6d5c3]">
//         {/* Vintage paper texture */}
//         <div
//           className="absolute inset-0 opacity-10 pointer-events-none"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23832c12' fill-opacity='0.1'%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='75' cy='75' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundSize: "20px 20px",
//           }}
//         ></div>

//         {/* Card Content */}
//         <div className="relative p-6 space-y-6">
//           {/* Header */}
//           <div className="flex items-center justify-between">
//             <Tooltip>
//               <TooltipTrigger>
//                 <h3 className="font-serif text-xl font-bold text-[#832c12] dark:text-[#e6d5c3]">{project.title}</h3>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Project name</p>
//               </TooltipContent>
//             </Tooltip>

//             <div className="flex items-center gap-2">
//               {project.isUnderDevelopment && (
//                 <Tooltip>
//                   <TooltipTrigger>
//                     <Hourglass className="w-5 h-5 text-[#832c12] dark:text-[#e6d5c3]" />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Under development</p>
//                   </TooltipContent>
//                 </Tooltip>
//               )}
//               {project.isImportant && (
//                 <Tooltip>
//                   <TooltipTrigger>
//                     <Star className="w-5 h-5 text-[#832c12] dark:text-[#e6d5c3]" />
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Primary project</p>
//                   </TooltipContent>
//                 </Tooltip>
//               )}
//             </div>
//           </div>

//           <Separator className="border-[#832c12] dark:border-[#e6d5c3] opacity-20" />

//           {/* Description */}
//           <p className="text-[#8B4513] dark:text-[#e6d5c3]/80 font-serif">{project.description}</p>

//           {/* Technologies */}
//           <div className="flex flex-wrap gap-2">
//             {project.technologies.map((tech) => (
//               <Badge
//                 key={tech}
//                 variant="outline"
//                 className="font-serif border-[#832c12] dark:border-[#e6d5c3] text-[#832c12] dark:text-[#e6d5c3]"
//               >
//                 {tech}
//               </Badge>
//             ))}
//           </div>

//           <Separator className="border-[#832c12] dark:border-[#e6d5c3] opacity-20" />

//           {/* Footer */}
//           <div className="flex gap-4">
//             {project.liveUrl && (
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Link
//                     to={project.liveUrl}
//                     target="_blank"
//                     className="inline-flex items-center gap-2 text-[#832c12] dark:text-[#e6d5c3] hover:underline underline-offset-4 font-serif"
//                   >
//                     View live
//                     <ExternalLink className="w-4 h-4" />
//                   </Link>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>View this project live</p>
//                 </TooltipContent>
//               </Tooltip>
//             )}
//             {project.viewProjectLink && (
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Link
//                     to={project.viewProjectLink}
//                     target="_blank"
//                     className="inline-flex items-center gap-2 text-[#832c12] dark:text-[#e6d5c3] hover:underline underline-offset-4 font-serif"
//                   >
//                     View project
//                     <ExternalLink className="w-4 h-4" />
//                   </Link>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>View project source</p>
//                 </TooltipContent>
//               </Tooltip>
//             )}
//           </div>
//         </div>
//       </Card>
//     </TooltipProvider>
//   )
// }

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom"; // Assuming you use react-router-dom
import { Star, Hourglass, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

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

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TooltipProvider>
      {/* Use standard Shadcn Card */}
      <Card className="flex flex-col h-full shadow-xl">
        {" "}
        {/* Added flex flex-col h-full for consistent height if needed */}
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            {" "}
            {/* Use items-start for better alignment if title wraps */}
            <Tooltip>
              <TooltipTrigger asChild>
                {/* Standard Shadcn title styling */}
                <CardTitle className="text-lg font-semibold">
                  {project.title}
                </CardTitle>
              </TooltipTrigger>
              <TooltipContent>
                <p>Project name</p>
              </TooltipContent>
            </Tooltip>
            {/* Icons with default/muted color */}
            <div className="flex items-center gap-2 flex-shrink-0 mt-1">
              {" "}
              {/* Added flex-shrink-0 and mt-1 */}
              {project.isUnderDevelopment && (
                <Tooltip>
                  <TooltipTrigger>
                    <Hourglass className="w-4 h-4 text-muted-foreground" />{" "}
                    {/* Smaller icon, muted color */}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Under development</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {project.isImportant && (
                <Tooltip>
                  <TooltipTrigger>
                    <Star className="w-4 h-4 text-muted-foreground" />{" "}
                    {/* Smaller icon, muted color */}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Primary project</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
        </CardHeader>
        {/* Separator moved inside CardContent if desired, or removed if CardHeader provides enough separation */}
        {/* <Separator className="my-4" /> */}
        <CardContent className="flex-grow space-y-4">
          {" "}
          {/* Added flex-grow to push footer down */}
          {/* Standard text styling */}
          <p className="text-sm text-muted-foreground">{project.description}</p>
          {/* Technologies with standard Badge */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary" // Using "secondary" or "outline" for default look
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        {/* Optional separator before footer */}
        {(project.liveUrl || project.viewProjectLink) && (
          <Separator className="mt-auto" />
        )}
        <CardFooter className="pt-4">
          {" "}
          {/* Add padding-top if separator is removed */}
          <div className="flex items-center gap-4 text-sm">
            {project.liveUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  {/* Standard link styling */}
                  <Link
                    to={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer" // Added rel for security
                  >
                 <Button variant="secondary">
                      {" "}
                      View live
                      <ExternalLink className="w-3.5 h-3.5" />{" "}
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View this project live</p>
                </TooltipContent>
              </Tooltip>
            )}
         {project.viewProjectLink ? (
  <Tooltip>
    <TooltipTrigger asChild>
      {/* Standard link styling */}
      <Link
        to={project.viewProjectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline">
          {" "}
          View project
          <ExternalLink className="w-3.5 h-3.5" />{" "}
        </Button>
      </Link>
    </TooltipTrigger>
    <TooltipContent>
      <p>View project source</p>
    </TooltipContent>
  </Tooltip>
) : (
  <p className="text-yellow-700" >Source is private</p>
)}
          </div>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}
