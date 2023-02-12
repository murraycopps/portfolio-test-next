import { faHtml5, faCss3Alt, faReact, faJs, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Skills() {
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
      <section className="flex flex-col items-center justify-center py-16 snap-start">
        <h2 className="mb-4 text-2xl font-bold leading-tight text-center text-gray-300">
          Skills
        </h2>
        <ul
          ref={containerRef}
          className="relative flex flex-wrap items-center justify-center my-8 rounded-full hover:h-96 a hover:w-96 h-80 w-80 circle hover:my-0"
          onMouseEnter={() => setRadius(150)}
          onMouseLeave={() => setRadius(120)}
        >
          <li
            className="relative w-16 h-16 mx-2 my-2 font-medium text-white transition-transform bg-blue-500 rounded-full scale-on-hover hover:scale-110 skill"
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
                className="w-12 h-12 text-white font-large"
              />
              <span className="absolute left-0 z-10 w-full px-2 py-1 mt-2 text-xs font-semibold text-center text-white bg-blue-500 rounded-b-lg top-full">
                HTML
              </span>
            </div>
          </li>
          <li
            className="relative w-16 h-16 mx-2 my-2 font-medium text-white transition-transform bg-purple-500 rounded-full scale-on-hover hover:scale-110 skill"
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
                className="w-12 h-12 text-white font-large"
              />
              <span className="absolute left-0 z-10 w-full px-2 py-1 mt-2 text-xs font-semibold text-center text-white bg-purple-500 rounded-b-lg top-full">
                CSS
              </span>
            </div>
          </li>
          <li
            className="relative w-16 h-16 mx-2 my-2 font-medium text-white transition-transform bg-green-500 rounded-full scale-on-hover hover:scale-110 skill"
            onMouseEnter={() => {
              setClassList("bg-green-500 text-white");
              setVisible(true);
              setContent("React");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <div className="w-full h-full p-1 rounded-full rotate-center bg-inherit">
              <FontAwesomeIcon
                icon={faReact}
                className="text-white font-large w-14 h-14"
              />
              <span className="absolute left-0 z-10 w-full px-2 py-1 mt-2 text-xs font-semibold text-center text-white bg-green-500 rounded-b-lg top-full">
                React
              </span>
            </div>
          </li>
          <li
            className="relative w-16 h-16 mx-2 my-2 font-medium text-white transition-transform bg-orange-500 rounded-full scale-on-hover hover:scale-110 skill"
            onMouseEnter={() => {
              setClassList("bg-orange-500 text-white");
              setVisible(true);
              setContent("React Native");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <div className="w-full h-full p-1 rounded-full rotate-center bg-inherit">
              <FontAwesomeIcon
                icon={faReact}
                className="text-white font-large w-14 h-14"
              />
              <span className="absolute left-0 z-10 w-full px-2 py-1 mt-2 text-xs font-semibold text-center text-white bg-orange-500 rounded-b-lg top-full">
                React Native
              </span>
            </div>
          </li>
          <li
            className="relative w-16 h-16 mx-2 my-2 font-medium text-white transition-transform bg-yellow-500 rounded-full scale-on-hover hover:scale-110 skill"
            onMouseEnter={() => {
              setClassList("bg-yellow-500 text-white");
              setVisible(true);
              setContent("JavaScript");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <div className="w-full h-full p-3 rounded-full rotate-center bg-inherit">
              <FontAwesomeIcon
                icon={faJs}
                className="w-10 h-10 text-white font-large"
              />
              <span className="absolute left-0 z-10 w-full px-1 py-1 mt-2 font-semibold text-center text-white bg-yellow-500 rounded-b-lg text-2xs top-full">
                JavaScript
              </span>
            </div>
          </li>
          <li className="relative w-16 h-16 mx-2 my-2 font-medium text-white transition-transform bg-gray-800 rounded-full scale-on-hover hover:scale-110 skill"
            onMouseEnter={() => {
              setClassList("bg-white text-gray-800");
              setVisible(true);
              setContent("GitHub");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <div className="w-full h-full rounded-full rotate-center bg-inherit">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-16 h-16 text-white font-large"
              />
              <span className="absolute left-0 z-10 w-full px-2 py-1 mt-2 text-xs font-semibold text-center text-gray-800 bg-white rounded-b-lg top-full">
                GitHub
              </span>
            </div>
          </li>
          <li 
          className="relative w-16 h-16 mx-2 my-2 font-medium text-white transition-transform bg-blue-500 rounded-full scale-on-hover hover:scale-110 skill"
          onMouseEnter={() => {
            setClassList("bg-blue-500 text-white");
              setVisible(true);
              setContent("TypeScript");
          }}
          onMouseLeave={() => setVisible(false)}
          >
            <div className="w-full h-full p-3 rounded-full rotate-center bg-inherit">
              <Image
                src="/icons/typescript-icon.svg"
                className="w-10 h-10"
                alt="tsIcon"
                width={40}
                height={40}
              />
              <span className="absolute left-0 z-10 w-full px-1 py-1 mt-2 font-semibold text-center text-white bg-blue-500 rounded-b-lg text-2xs top-full">
                TypeScript
              </span>
            </div>
          </li>
          <li className="relative flex items-center justify-center w-16 h-16 mx-2 my-2 font-medium text-white transition-transform bg-gray-100 border-2 border-black rounded-full scale-on-hover hover:scale-110 skill"
            onMouseEnter={() => {
              setClassList("bg-white text-gray-800");
              setVisible(true);
              setContent("Next.js");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <div className="w-full h-full rounded-full rotate-center bg-inherit">
              <Image
                src="/icons/next-js.svg"
                className="left-0 w-16 h-16 object-fit-cover next-icon"
                alt="tsIcon"
                width={40}
                height={40}
              />
              <span className="absolute left-0 z-10 w-full px-2 py-1 mt-2 text-xs font-semibold text-center text-gray-800 bg-white rounded-b-lg top-full">
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