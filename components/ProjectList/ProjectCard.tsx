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
  "bg-blue-400 hover:bg-blue-500",
  "bg-purple-400 hover:bg-purple-500",
  "bg-green-400 hover:bg-green-500",
  "bg-orange-400 hover:bg-orange-500",
  "bg-yellow-500 hover:bg-yellow-600",
  "bg-red-400 hover:bg-red-500",
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
