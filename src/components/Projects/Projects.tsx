import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/projectType";
import { FaCode } from "react-icons/fa";

const typedProjects: Project[] = projects;

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            What I Have Built
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base">
            Explore some of my projects, the technologies I have worked with,
            and the solutions I have built while learning and growing as a
            developer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {typedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="group relative mx-auto mt-8 flex w-full max-w-2xl flex-col items-center overflow-hidden rounded-2xl border border-base-300 bg-base-200/60 px-4 py-8 text-center shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-lg sm:px-8 sm:py-10">
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

        <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
          <FaCode size={30} />
        </div>

        <p className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
          Always Learning,
          <span className="mt-1 block text-primary">Always Building</span>
        </p>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-base-content/70">
          I'm continuously exploring new technologies and building projects to
          turn ideas into practical solutions.
        </p>

        <div className="mt-5 flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-3 py-1.5 text-xs font-medium text-base-content/70 sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
          More projects in progress
        </div>
      </div>
    </section>
  );
};

export default Projects;
