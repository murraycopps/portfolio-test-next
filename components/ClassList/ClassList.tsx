import Link from "next/link";
import { Class } from "../../scripts/types";

const ClassCard = ({ cls }: { cls: Class }) => {
  const color = randomColor();

  return (
    <Link
      href={`/classes/${cls.url}`}
      className={`${color.bg} relative z-0 rounded-lg overflow-hidden snap-start`}
    >
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

export default ClassCard;

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
  },
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
