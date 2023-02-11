import Link from "next/link";

export default function ProjectList(){
    return(
      <section className="py-16 mb-16 snap-start">
        <h2 className="mb-4 text-2xl font-bold leading-tight text-center text-gray-300">
          Projects
        </h2>
        <ul className="list-none">
          <li className="pt-4 snap-start">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              My Next.js Run Tracker App
            </h3>
            <p className="mt-2 mb-4 text-sm font-medium leading-tight text-gray-400">
              A Next.js app that allows users to track their runs and store the
              data in a MongoDB database. The app allows users to add, remove,
              or edit their runs and also provides login functionality to store
              runs for separate users in the same database.
            </p>
            <Link
              href="https://run-tracker-next.vercel.app/"
              target="_blank"
              className="inline-block px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="pt-4 snap-start">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              My React Native App and Previous Models
            </h3>
            <p className="mt-2 mb-4 text-sm font-medium leading-tight text-gray-400">
              A page featuring my React Native app and previous models built
              with React, HTML, and code.org.
            </p>
            <Link
              href="/pacingapp"
              className="inline-block px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="pt-4 snap-start">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              My Next.js Pacing App Website
            </h3>
            <p className="mt-2 mb-4 text-sm font-medium leading-tight text-gray-400">
              A website version of my React Native pacing app built with
              Next.js.
            </p>
            <Link
              href="https://pacing-website-next.vercel.app/"
              target="_blank"
              className="inline-block px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="pt-4 snap-start">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              My Balsa Crane Engineering Project
            </h3>
            <p className="mt-2 mb-4 text-sm font-medium leading-tight text-gray-400">
              A page featuring my Balsa Crane engineering project that tripled
              the school record.
            </p>
            <Link
              href="/crane"
              className="inline-block px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="pt-4 snap-start">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              Training Plan Generator
            </h3>
            <p className="mt-2 mb-4 text-sm font-medium leading-tight text-gray-400">
              A Next.js website that allows users to generate personalized
              training plans using OpenAI&#39;s GPT-3 API.
            </p>
            <Link
              href="https://training-plan-next.vercel.app/"
              target="_blank"
              className="inline-block px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
          <li className="pt-4 snap-start">
            <h3 className="text-xl font-bold leading-tight text-gray-300">
              Games and Other JS projects
            </h3>
            <p className="mt-2 mb-4 text-sm font-medium leading-tight text-gray-400">
              A variety of html css and js games/projects created using
              JavaScript classes.
            </p>
            <Link
              href="/games"
              className="inline-block px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              View Demo
            </Link>
          </li>
        </ul>
      </section>
    )
}