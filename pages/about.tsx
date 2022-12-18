import React from 'react';
import PageWrapper from '../components/PageWrapper';

const About = () => (
    <PageWrapper title="About Me">
        <h1 className="text-3xl font-bold leading-tight text-center text-gray-300 mb-4">About Me</h1>
        <p className="text-lg font-medium leading-tight text-center text-gray-400 mt-2">
            I am a high school student with a passion for coding and engineering. I have always been fascinated by the way computers work, and I love to explore new technologies and techniques. I have participated in several hackathons and science fairs, and I am always looking for new opportunities to learn and grow.
            <br />
            <br />
            In my free time, I enjoy building projects and experimenting with different programming languages and frameworks. I have experience with languages such as JavaScript, Python, and C++, and I am always looking for ways to improve my skills and knowledge.
            <br />
            <br />
            Thank you for visiting my portfolio. I hope you find it interesting and informative, and I look forward to hearing from you.
        </p>
    </PageWrapper>
);

export default About;
