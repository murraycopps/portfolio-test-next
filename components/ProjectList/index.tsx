import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function ProjectList() {
  return (
    <section className="py-16 mb-16 snap-start">
      <h2 className="mb-4 text-2xl font-bold leading-tight text-center text-gray-300">
        Projects
      </h2>
      <ul className="list-none">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </ul>
    </section>
  );
}
