type Project = {
    title: string;
    description: string;
    href: string;
};

export type { Project }

const projects: Project[] = [
    {
        title: "My Next.js Run Tracker App",
        description:
            "A Next.js app that allows users to track their runs and store the data in a MongoDB database. The app allows users to add, remove, or edit their runs and also provides login functionality to store runs for separate users in the same database.",
        href: "https://run-tracker-next.vercel.app/",
    },
    {
        title: "My React Native App and Previous Models",
        description:
            "A page featuring my React Native app and previous models built with React, HTML, and code.org.",
        href: "/pacingapp",
    },
    {
        title: "My Next.js Pacing App Website",
        description:
            "A website version of my React Native pacing app built with Next.js.",
        href: "https://pacing-website-next.vercel.app/",
    },
    {
        title: "My Balsa Crane Engineering Project",
        description:
            "A page featuring my Balsa Crane engineering project that tripled the school record.",
        href: "/crane",
    },
    {
        title: "Training Plan Generator",
        description:
            "A Next.js website that allows users to generate personalized training plans using OpenAI's GPT-3 API.",
        href: "https://training-plan-next.vercel.app/",
    },
    {
        title: "Games and Other JS projects",
        description:
            "A variety of html css and js games/projects created using JavaScript classes.",
        href: "/games",
    },
];



export { projects }