import Link from "next/link";
import { FC } from "react";

const Footer = ({
  iconsUsed = [],
}: {
  iconsUsed?: { name: string; url: string }[];
}) => (
  <footer className="bg-gray-800 py-4 shadow-md text-center text-white snap-start">
    <p>
      Made with <Link href="https://nextjs.org/">Next.js</Link>
      {iconsUsed.length > 0 && " | Icons by"}{" "}
      {iconsUsed.map((icon, index) => {
        return (
          <span key={index}>
            {index > 0 && ","} {index === iconsUsed.length - 1 && "and "}
            <Link href={icon ? icon.url : ""}>{icon ? icon.name : ""}</Link>
          </span>
        );
      })}
    </p>
  </footer>
);

export default Footer;
