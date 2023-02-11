import Link from "next/link";
import { Class } from "../scripts/types";

export default function ClassList({ classes }: { classes: Class[] }) {
  return (
    <div className="py-16 mb-16 text-center snap-start">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-300">
        Class List
      </h3>
      <ul className="grid lg:grid-cols-3 gap-3 sm:grid-cols-2">
        {classes.map((cls, index) => (
          <ClassCard cls={cls} key={index} />
        ))}
      </ul>
    </div>
  );
}

const colors = [
  {
    bg: "bg-blue-500",
  },
  {
    bg: "bg-purple-600",
  },
  {
    bg: "bg-green-600",
  },
  {
    bg: "bg-orange-600",
  },
  {
    bg: "bg-yellow-600",
    opacity: "opacity-15",
  },
  {
    bg: "bg-red-600",
  }
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const ClassCard = ({ cls }: { cls: Class }) => {
  const color = randomColor();

  return (
    <Link href={`/classes/${cls.url}`} className={`${color.bg} relative z-0 rounded-lg overflow-hidden`}>
      {cls.thumbnail && (
        <img
          src={cls.thumbnail}
          alt=""
          className={`object-cover w-full h-full -z-10 absolute ${
            (cls.thumbnail && color.opacity) || "opacity-25"
          }`}
        />
      )}
      <div className="text-2xl text-white w-full h-16 flex items-center justify-center">
        {cls.name}
      </div>
    </Link>
  );
};
