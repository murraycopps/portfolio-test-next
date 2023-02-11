import Link from "next/link";
import { useState, useEffect } from "react";
import { Project } from "./projects";

const ProjectCard = ({ project }: { project: Project }) => {
  const [color, setColor] = useState<string>();

  useEffect(() => {
    setColor(randomColor());
  });
  return (
    <Link href={project.href}>
      <li className={`p-4 ${color} snap-start rounded-lg h-full`}>
        <h3 className="text-2xl font-bold leading-tight text-white">
          {project.title}
        </h3>
        <p className="mt-2 mb-4 text-md font-medium leading-tight text-gray-100">
          {project.description}
        </p>
      </li>
    </Link>
  );
};

export default ProjectCard;

const colors = [
  "bg-blue-400",
  "bg-purple-400",
  "bg-green-400",
  "bg-orange-400",
  "bg-yellow-500",
  "bg-red-400",
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];