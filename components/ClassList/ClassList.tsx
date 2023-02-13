import Link from "next/link";
import { useEffect, useState } from "react";
import { Class } from "../../scripts/types";
import Image from "next/image";

const ClassCard = ({ cls }: { cls: Class }) => {
  const [color, setColor] = useState<Color>();

  useEffect(() =>{
    setColor(randomColor())
  },[])

  return (
    <Link
      href={`/classes/${cls.url}`}
      className={`${color?.bg} relative z-0 rounded-lg overflow-hidden snap-start`}
    >
      {cls.thumbnail && (
        <Image
          src={cls.thumbnail}
          alt=""
          className={`object-cover w-full h-full -z-10 absolute ${
            (cls.thumbnail && color?.opacity) || "opacity-25"
          }`}
          width={500}
          height={500}
        />
      )}
      <div className="flex items-center justify-center w-full h-16 text-2xl text-white">
        {cls.name}
      </div>
    </Link>
  );
};

export default ClassCard;

const colors = [
  {
    bg: "bg-blue-500 hover:bg-blue-600",
  },
  {
    bg: "bg-purple-600 hover:bg-purple-700",
  },
  {
    bg: "bg-green-600 hover:bg-green-700",
  },
  {
    bg: "bg-orange-600 hover:bg-orange-700",
  },
  {
    bg: "bg-yellow-600 hover:bg-yellow-700",
    opacity: "opacity-15",
  },
  {
    bg: "bg-red-600 hover:bg-red-700",
  },
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

type Color = {
    bg: string;
    opacity?: string;
}
