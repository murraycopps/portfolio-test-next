import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";
import PageWrapper from "../components/PageWrapper";

const About = () => {
    const router = useRouter();
  return (
    <PageWrapper title="About Me">
      <h1 className="text-3xl font-bold leading-tight text-center text-gray-300 mb-4">
        About Me
      </h1>
      <p className="text-lg font-medium leading-tight text-center text-gray-400 mt-2">
        As a high school student with a deep-seated passion for coding and
        engineering, I have always been fascinated by the inner workings of
        computers and the endless possibilities of technology. I love to delve
        into new technologies and techniques, constantly seeking out
        opportunities to learn and grow as a programmer. In my free time, I
        enjoy building projects and experimenting with different programming
        languages and frameworks, constantly striving to improve my skills and
        knowledge. Whether it&#39;s through online tutorials or other learning
        resources, I am always eager to take on new challenges and push myself
        to new heights in the field.
        <br />
        <br />
        In my free time, I enjoy building projects and experimenting with
        different JavaScript frameworks. I have experience with frameworks such
        as React, React Native, and Next.js, and I also enjoy making computer
        games using vanilla JavaScript, CSS, and HTML. I am always looking for
        ways to improve my skills and knowledge in front-end development and
        game development.
        <br />
        <br />
        Thank you for visiting my portfolio. I hope you find it interesting and
        informative, and I look forward to hearing from you.
      </p>
      {/* <button
        className="fixed bottom-18 right-4 bg-white rounded-full p-4"
        onClick={() => {
          router.back();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
      </button> */}
    </PageWrapper>
  )
}

export default About;
