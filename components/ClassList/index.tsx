import { Class } from "../../scripts/types";
import ClassCard from "./ClassList";

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


