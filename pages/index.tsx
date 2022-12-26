import React, { FC } from 'react'

import PageWrapper from '../components/PageWrapper'
import ContactForm from '../components/ContactForm'
import { server } from "../config";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const Skills: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold leading-tight text-center text-gray-300 mb-4">Skills</h2>
      <ul className="flex flex-wrap justify-center relative">
        <li className="mx-2 my-2 w-16 h-16 px-2 py-2.5 rounded-full text-white font-medium bg-blue-500 skill relative">
          <FontAwesomeIcon icon={faHtml5} className="text-white font-large w-12 h-12" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-blue-500 text-white rounded-b-lg z-10">HTML</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 px-2 py-2.5 rounded-full text-white font-medium bg-purple-500 skill relative">
          <FontAwesomeIcon icon={faCss3Alt} className="text-white font-large w-12 h-12" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-purple-500 text-white rounded-b-lg z-10">CSS</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 px-3 py-3 rounded-full text-white font-medium bg-yellow-500 skill relative">
          <FontAwesomeIcon icon={faJs} className="text-white font-large w-10 h-10" />
          <span className="hidden font-semibold text-2xs text-center mt-2 absolute top-full left-0 w-full px-1 py-1 bg-yellow-500 text-white rounded-b-lg z-10">JavaScript</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 p-3 rounded-full text-white font-medium bg-blue-500 skill relative">
          <img src="/icons/typescript-icon.svg" className="w-10 h-10" alt="tsIcon" />
          <span className="hidden font-semibold text-2xs text-center mt-2 absolute top-full left-0 w-full px-1 py-1 bg-blue-500 text-white rounded-b-lg z-10">TypeScript</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 p-1 rounded-full text-white font-medium bg-green-500 skill relative">
          <FontAwesomeIcon icon={faReact} className="text-white font-large w-14 h-14" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-green-500 text-white rounded-b-lg z-10">React</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 p-1 rounded-full text-white font-medium bg-orange-500 skill relative">
          <FontAwesomeIcon icon={faReact} className="text-white font-large w-14 h-14" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-orange-500 text-white rounded-b-lg z-10">React Native</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 rounded-full text-white font-medium bg-gray-100 skill relative border-2 border-black">
          <img src="/icons/next-js.svg" className="w-16 h-16 object-fit-cover left-0 next-icon" alt="tsIcon" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-white text-gray-800 rounded-b-lg z-10">Next.js</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 rounded-full text-white font-medium bg-gray-800 skill relative">
          <FontAwesomeIcon icon={faGithub} className="text-white font-large w-16 h-16" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-white text-gray-800 rounded-b-lg z-10">GitHub</span>
        </li>
      </ul>
    </section>
  )
}

function ClassList({ classes }: { classes: Class[] }) {
  // Save the props.classes object in cache
  cache.set('classes', classes);

  // Retrieve the props.classes object from cache
  const classList = cache.get('classes') as Class[];

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold leading-tight text-gray-300 mb-4">Class List</h3>
      <ul className="flex flex-wrap flex-col justify-center list-disc content-center text-left">
        {classList.map((cls, index) => (
          <li key={index} className="my-2 text-white font-medium">
            <Link href={`/classes/${cls.url}`}>
              {cls.name}
            </Link>
          </li>
        ))}
      </ul>
    </div >
  )
}

const iconsUsed = [
  { name: "Font Awesome", url: "https://fontawesome.com/" },
  { name: "icons8", url: "https://icons8.com/" },
  { name: "iconduck", url: "https://iconduck.com/" }
]

interface Class {
  _id: string,
  name: string,
  url: string,
  description: string,
  images: string[],
  videos: string[]
}

export default function Home(props: { host: string, classes: Class[]; }) {
  return (
    <PageWrapper title="Copps Portfolio" iconsUsed={iconsUsed}>
      <header className="py-8">
        <h1 className="text-4xl font-bold leading-tight text-center text-gray-300">My Coding and Engineering Portfolio</h1>
        <p className="text-xl font-medium leading-tight text-center text-gray-400 mt-2">I am a high school student with a passion for coding and engineering. Here are some of my skills and achievements:</p>
      </header>
      <Skills />


      <ClassList classes={props.classes} />
      <section className="py-8">
        <h2 className="text-2xl font-bold leading-tight text-center text-gray-300 mb-4">Projects</h2>
        <ul className="list-none">
          <li className="mb-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">My Next.js Run Tracker App</h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">A Next.js app that allows users to track their runs and store the data in a MongoDB database. The app allows users to add, remove, or edit their runs and also provides login functionality to store runs for separate users in the same database.</p>
            <Link href="https://run-tracker-next.vercel.app/" target="_blank" className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500">View Demo</Link>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">My React Native App and Previous Models</h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">A page featuring my React Native app and previous models built with React, HTML, and code.org.</p>
            <Link href="/pacingapp" className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500">View Demo</Link>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">My Next.js Pacing App Website</h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">A website version of my React Native pacing app built with Next.js.</p>
            <Link href="https://pacing-website-next.vercel.app/" target="_blank" className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500">View Demo</Link>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">My Balsa Crane Engineering Project</h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">A page featuring my Balsa Crane engineering project that tripled the school record.</p>
            <Link href="/crane" className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500">View Demo</Link>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">Training Plan Generator</h3>
            <p className="text-sm font-medium leading-tight text-gray-400 mt-2 mb-4">Generate personalized training plans using OpenAI&#39;s GPT-3 API.</p>
            <Link href="https://training-plan-next.vercel.app/" target="_blank" className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500">View Demo</Link>
          </li>
        </ul>
      </section>
      <footer className="py-8">
        <h2 className="text-2xl font-bold leading-tight text-center text-gray-300 mb-4">Contact Me</h2>
        <ContactForm />
      </footer>
    </PageWrapper>
  )
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
  }
  catch (err) {
    console.log(err)
    return {
      props: { host, classes: [] },
    };
  }
}