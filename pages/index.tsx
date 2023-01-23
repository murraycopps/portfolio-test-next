import React, { FC, useEffect, useRef, useState } from "react";

import PageWrapper from "../components/PageWrapper";
import ContactForm from "../components/ContactForm";
import { server } from "../config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const Skills: FC = () => {
  const containerRef = useRef<HTMLUListElement>(null);

  const [radius, setRadius] = useState(120);

  const [classList, setClassList] = useState("");
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("Next.js");

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll("li");
    const angle = 360 / items.length;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const rad = angle * i * (Math.PI / 180);
      item.style.transform = `translateX(${
        radius * Math.cos(rad)
      }px) translateY(${radius * Math.sin(rad)}px)`;
      item.style.position = "absolute";
    }
  }, [radius]);


  return (
    <section className="py-16  snap-start flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold leading-tight text-center text-gray-300 mb-4">
        Skills
      </h2>
      <ul
        ref={containerRef}
        className="flex flex-wrap justify-center relative hover:h-96 hover:w-96 h-80 w-80 items-center circle rounded-full my-8 hover:my-0"
        onMouseEnter={() => setRadius(150)}
        onMouseLeave={() => setRadius(120)}
      >
        <li
          className="mx-2 my-2 w-16 h-16 scale-on-hover rounded-full hover:scale-110 transition-transform text-white font-medium bg-blue-500 skill relative"
          onMouseEnter={() => {
            setClassList("bg-blue-500 text-white");
            setVisible(true);
            setContent("HTML");
          }}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="rotate-center px-2 py-2.5 w-full h-full bg-inherit rounded-full">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-white font-large w-12 h-12"
            />
            <span className="font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-blue-500 text-white rounded-b-lg z-10">
              HTML
            </span>
          </div>
        </li>
        <li
          className="mx-2 my-2 w-16 h-16 scale-on-hover rounded-full hover:scale-110 transition-transform text-white font-medium bg-purple-500 skill relative"
          onMouseEnter={() => {
            setClassList("bg-purple-500 text-white");
            setVisible(true);
            setContent("CSS");
          }}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="rotate-center px-2 py-2.5 w-full h-full bg-inherit rounded-full">
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-white font-large w-12 h-12"
            />
            <span className="font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-purple-500 text-white rounded-b-lg z-10">
              CSS
            </span>
          </div>
        </li>
        <li
          className="mx-2 my-2 w-16 h-16 scale-on-hover rounded-full hover:scale-110 transition-transform text-white font-medium bg-green-500 skill relative"
          onMouseEnter={() => {
            setClassList("bg-green-500 text-white");
            setVisible(true);
            setContent("React");
          }}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="rotate-center p-1 w-full h-full bg-inherit rounded-full">
            <FontAwesomeIcon
              icon={faReact}
              className="text-white font-large w-14 h-14"
            />
            <span className="font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-green-500 text-white rounded-b-lg z-10">
              React
            </span>
          </div>
        </li>
        <li
          className="mx-2 my-2 w-16 h-16 scale-on-hover rounded-full hover:scale-110 transition-transform text-white font-medium bg-orange-500 skill relative"
          onMouseEnter={() => {
            setClassList("bg-orange-500 text-white");
            setVisible(true);
            setContent("React Native");
          }}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="rotate-center p-1 w-full h-full bg-inherit rounded-full">
            <FontAwesomeIcon
              icon={faReact}
              className="text-white font-large w-14 h-14"
            />
            <span className="font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-orange-500 text-white rounded-b-lg z-10">
              React Native
            </span>
          </div>
        </li>
        <li
          className="mx-2 my-2 w-16 h-16 scale-on-hover rounded-full hover:scale-110 transition-transform text-white font-medium bg-yellow-500 skill relative"
          onMouseEnter={() => {
            setClassList("bg-yellow-500 text-white");
            setVisible(true);
            setContent("JavaScript");
          }}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="rotate-center p-3 w-full h-full bg-inherit rounded-full">
            <FontAwesomeIcon
              icon={faJs}
              className="text-white font-large w-10 h-10"
            />
            <span className="font-semibold text-2xs text-center mt-2 absolute top-full left-0 w-full px-1 py-1 bg-yellow-500 text-white rounded-b-lg z-10">
              JavaScript
            </span>
          </div>
        </li>
        <li className="mx-2 my-2 w-16 h-16 scale-on-hover rounded-full hover:scale-110 transition-transform text-white font-medium bg-gray-800 skill relative"
          onMouseEnter={() => {
            setClassList("bg-white text-gray-800");
            setVisible(true);
            setContent("GitHub");
          }}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="rotate-center w-full h-full bg-inherit rounded-full">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white font-large w-16 h-16"
            />
            <span className="font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-white text-gray-800 rounded-b-lg z-10">
              GitHub
            </span>
          </div>
        </li>
        <li 
        className="mx-2 my-2 w-16 h-16 scale-on-hover rounded-full hover:scale-110 transition-transform bg-blue-500 text-white font-medium skill relative"
        onMouseEnter={() => {
          setClassList("bg-blue-500 text-white");
            setVisible(true);
            setContent("TypeScript");
        }}
        onMouseLeave={() => setVisible(false)}
        >
          <div className="rotate-center p-3 w-full h-full bg-inherit rounded-full">
            <img
              src="/icons/typescript-icon.svg"
              className="w-10 h-10"
              alt="tsIcon"
            />
            <span className="font-semibold text-2xs text-center mt-2 absolute top-full left-0 w-full px-1 py-1 bg-blue-500 text-white rounded-b-lg z-10">
              TypeScript
            </span>
          </div>
        </li>
        <li className="mx-2 my-2 w-16 h-16 scale-on-hover rounded-full hover:scale-110 transition-transform text-white font-medium bg-gray-100 skill relative border-2 border-black flex items-center justify-center"
          onMouseEnter={() => {
            setClassList("bg-white text-gray-800");
            setVisible(true);
            setContent("Next.js");
          }}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="rotate-center w-full h-full bg-inherit rounded-full">
            <img
              src="/icons/next-js.svg"
              className="w-16 h-16 object-fit-cover left-0 next-icon"
              alt="tsIcon"
            />
            <span className="font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-white text-gray-800 rounded-b-lg z-10">
              Next.js
            </span>
          </div>
        </li>
        <div
          className={`${classList} ${visible? 'full-circle-clip' : 'empty-circle-clip'} rounded-full flex items-center rotate-center justify-center p-4 aspect-square w-48 overflow-hidden`}
        >
          <h3 className="text-2xl font-bold leading-tight">{content}</h3>
        </div>
      </ul>
    </section>
  );
};

function ClassList({ classes }: { classes: Class[] }) {
  // Save the props.classes object in cache
  cache.set("classes", classes);

  // Retrieve the props.classes object from cache
  const classList = cache.get("classes") as Class[];

  return (
    <div className="text-center mb-16 py-16 snap-start">
      <h3 className="text-2xl font-bold leading-tight text-gray-300 mb-4">
        Class List
      </h3>
      <ul className="flex flex-wrap flex-col justify-center list-disc content-center text-left">
        {classList.map((cls, index) => (
          <li key={index} className="my-2 text-white font-medium">
            <Link href={`/classes/${cls.url}`}>{cls.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const iconsUsed = [
  { name: "Font Awesome", url: "https://fontawesome.com/" },
  { name: "icons8", url: "https://icons8.com/" },
  { name: "iconduck", url: "https://iconduck.com/" },
];

interface Class {
  _id: string;
  name: string;
  url: string;
  description: string;
  images: string[];
  videos: string[];
}

export default function Home(props: { host: string; classes: Class[] }) {
  return (
    <PageWrapper title="Copps Portfolio" iconsUsed={iconsUsed} snap={true}>
      <header className="py-8 snap-start mb-16 mt-8">
        <h1 className="text-4xl font-bold leading-tight text-center text-gray-300">
          My Coding and Engineering Portfolio
        </h1>
        <p className="text-xl font-medium leading-tight text-center text-gray-400 mt-2">
          I am a high school student with a passion for coding and engineering.
          Here are some of my skills and achievements:
        </p>
      </header>

      <Skills />
      <ClassList classes={props.classes} />
      <section className="py-16 mb-16 snap-start">
        <h2 className="text-2xl font-bold leading-tight text-center text-gray-300 mb-4">
          Projects
        </h2>
        <ul className="list-none">
          <li className="snap-start pt-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              My Next.js Run Tracker App
            </h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">
              A Next.js app that allows users to track their runs and store the
              data in a MongoDB database. The app allows users to add, remove,
              or edit their runs and also provides login functionality to store
              runs for separate users in the same database.
            </p>
            <Link
              href="https://run-tracker-next.vercel.app/"
              target="_blank"
              className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500 hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="snap-start pt-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              My React Native App and Previous Models
            </h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">
              A page featuring my React Native app and previous models built
              with React, HTML, and code.org.
            </p>
            <Link
              href="/pacingapp"
              className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500 hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="snap-start pt-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              My Next.js Pacing App Website
            </h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">
              A website version of my React Native pacing app built with
              Next.js.
            </p>
            <Link
              href="https://pacing-website-next.vercel.app/"
              target="_blank"
              className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500 hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="snap-start pt-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              My Balsa Crane Engineering Project
            </h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">
              A page featuring my Balsa Crane engineering project that tripled
              the school record.
            </p>
            <Link
              href="/crane"
              className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500 hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="snap-start pt-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              Training Plan Generator
            </h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">
              A Next.js website that allows users to generate personalized
              training plans using OpenAI&#39;s GPT-3 API.
            </p>
            <Link
              href="https://training-plan-next.vercel.app/"
              target="_blank"
              className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500 hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="snap-start pt-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              Games and Other JS projects
            </h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">
              A variety of html css and js games/projects created using
              JavaScript classes.
            </p>
            <Link
              href="/games"
              className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500 hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
        </ul>
      </section>
      <footer className="py-16 snap-start mb-16">
        <h2 className="text-2xl font-bold leading-tight text-center text-gray-300 mb-4">
          Contact Me
        </h2>
        <ContactForm />
      </footer>
    </PageWrapper>
  );
}

export async function getServerSideProps(context: any) {
  let host = context.req.headers.host;
  try {
    let res = await fetch(`${server}${host}/api/classes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let allClasses = await res.json();
    let classes = allClasses.data;
    return {
      props: { host, classes },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { host, classes: [] },
    };
  }
}
