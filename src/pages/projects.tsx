import { Suspense } from "react";
import ProjectCard from "../components/project/ProjectCard"; // Adjust path if needed
import projects from "@/config/projects_config";
import { CircularProgress, Typography } from "@mui/material";

export default function Projects() {
  return (
    <div className="  bg-background text-foreground">
      <div className="container mx-auto px-4  lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <Typography variant="h5" component="h1" gutterBottom>
               Projects
             </Typography>
          <p className="text-lg text-muted-foreground">
            Explore some of my recent work
          </p>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[300px]">
              <CircularProgress />
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
    </div>
  );
}
