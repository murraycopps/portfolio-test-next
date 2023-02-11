import React, { FC, useEffect, useRef, useState } from "react";

import PageWrapper from "../components/PageWrapper";
import ContactForm from "../components/ContactForm";
import { server } from "../config";

import ClassList from "../components/ClassList";
import { Class } from "../scripts/types";
import SkillList from "../components/SkillList";
import ProjectList from "../components/ProjectList";



const iconsUsed = [
  { name: "Font Awesome", url: "https://fontawesome.com/" },
  { name: "icons8", url: "https://icons8.com/" },
  { name: "iconduck", url: "https://iconduck.com/" },
];

export default function Home(props: { host: string; classes: Class[] }) {
  return (
    <PageWrapper title="Copps Portfolio" iconsUsed={iconsUsed}>
      <header className="py-8 mt-8 mb-16 snap-start">
        <h1 className="text-4xl font-bold leading-tight text-center text-gray-300">
          My Coding and Engineering Portfolio
        </h1>
        <p className="mt-2 text-xl font-medium leading-tight text-center text-gray-400">
          I am a high school student with a passion for coding and engineering.
          Here are some of my skills and achievements:
        </p>
      </header>

      <SkillList />
      <ClassList classes={props.classes} />
      <ProjectList />
      
      <footer className="py-16 mb-16 snap-start">
        <h2 className="mb-4 text-2xl font-bold leading-tight text-center text-gray-300">
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
