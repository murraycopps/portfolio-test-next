import Link from "next/link";
import { Project } from "./projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <li className="pt-4 snap-start">
    <h3 className="text-xl font-bold leading-tight text-gray-300">
      {project.title}
    </h3>
    <p className="mt-2 mb-4 text-sm font-medium leading-tight text-gray-400">
      {project.description}
    </p>
    <Link
      href={project.href}
      className="inline-block px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
    >
      View Demo
    </Link>
  </li>
);

export default ProjectCard;
