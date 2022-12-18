import React, { FC } from 'react'

import PageWrapper from '../components/PageWrapper'
import ContactForm from '../components/ContactForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faNodeJs, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Skills: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold leading-tight text-center text-gray-300 mb-4">Skills</h2>
      <ul className="flex flex-wrap justify-center relative">
        <li className="mx-2 my-2 w-16 h-16 px-2 py-2.5 rounded-full text-white font-medium bg-blue-500 skill relative">
          <FontAwesomeIcon icon={faHtml5} className="text-white font-large w-12 h-12" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-blue-800 text-white rounded-b-lg">HTML</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 px-2 py-2.5 rounded-full text-white font-medium bg-purple-500 skill relative">
          <FontAwesomeIcon icon={faCss3Alt} className="text-white font-large w-12 h-12" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-purple-800 text-white rounded-b-lg">CSS</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 p-1 rounded-full text-white font-medium bg-green-500 skill relative">
          <FontAwesomeIcon icon={faReact} className="text-white font-large w-14 h-14" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-green-800 text-white rounded-b-lg">React</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 p-1 rounded-full text-white font-medium bg-orange-500 skill relative">
          <FontAwesomeIcon icon={faReact} className="text-white font-large w-14 h-14" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-orange-800 text-white rounded-b-lg">React Native</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 px-3 py-3 rounded-full text-white font-medium bg-yellow-500 skill relative">
          <FontAwesomeIcon icon={faJs} className="text-white font-large w-10 h-10" />
          <span className="hidden font-semibold text-2xs text-center mt-2 absolute top-full left-0 w-full px-1 py-1 bg-yellow-800 text-white rounded-b-lg">JavaScript</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 rounded-full text-white font-medium bg-gray-800 skill relative">
          <FontAwesomeIcon icon={faGithub} className="text-white font-large w-16 h-16" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-white text-gray-800 rounded-b-lg">GitHub</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 p-3 rounded-full text-white font-medium bg-blue-500 skill relative">
          <img src="/typescript-icon.svg" className="w-10 h-10" />
          <span className="hidden font-semibold text-2xs text-center mt-2 absolute top-full left-0 w-full px-1 py-1 bg-blue-800 text-white rounded-b-lg">TypeScript</span>
        </li>
        <li className="mx-2 my-2 w-16 h-16 rounded-full text-white font-medium bg-gray-100 skill relative border-2 border-black">
          <img src="/next-js.svg" className="w-16 h-16 object-fit-cover left-0 next-icon" />
          <span className="hidden font-semibold text-xs text-center mt-2 absolute top-full left-0 w-full px-2 py-1 bg-white text-gray-800 rounded-b-lg">Next.js</span>
        </li>
      </ul>
    </section>
  )
}


const Home: FC = () => {

  return (
    <PageWrapper title="My Portfolio" iconsUsed={[{ name: "Font Awesome", url: "https://fontawesome.com/" }, { name: "icons8", url: "https://icons8.com/" }, { name: "iconduck", url: "https://iconduck.com/" }]}>
      <header className="py-8">
        <h1 className="text-4xl font-bold leading-tight text-center text-gray-300">My Coding and Engineering Portfolio</h1>
        <p className="text-xl font-medium leading-tight text-center text-gray-400 mt-2">I am a high school student with a passion for coding and engineering. Here are some of my skills and achievements:</p>
      </header>
      <Skills />
      <section className="py-8">
        <h2 className="text-2xl font-bold leading-tight text-center text-gray-300 mb-4">Projects</h2>
        <ul className="list-none">
          <li className="mb-4">
            <h3 className="text-xl font-bold leading-tight text-gray-300">My React Native App and Previous Models</h3>
            <p className="text-sm font-medium leading-tight text-gray-400">A page featuring my React Native app and previous models built with React, HTML, and code.org.</p>
            <Link href="/pacingapp" className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500">View Demo</Link>
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

export default Home
