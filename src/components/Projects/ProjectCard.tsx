import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/types/projectType";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group h-full">
      <div className="card h-full overflow-hidden border border-base-300 bg-base-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
        <figure className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="card-body gap-4 p-5 sm:p-6">
          <h3 className="card-title text-xl">{project.title}</h3>

          <p className="text-sm leading-7 text-base-content/70">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="badge badge-outline border-primary/40 px-3 py-3 text-xs"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="card-actions mt-auto border-t border-base-300 pt-4">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm w-full gap-2 sm:btn-md"
            >
              Live Demo
              <FaExternalLinkAlt size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;