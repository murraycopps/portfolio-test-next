import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import NodeCache from "node-cache";
import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { server } from "../../config";

const TextWithLinks = ({ text }: { text: string }) => {
  const pattern = /\[(.*?)\{(.*?)\}\]/g;
  const elements = [];

  let index = 0;
  let match;
  while ((match = pattern.exec(text))) {
    const linkText = match[1];
    const linkHref = match[2];
    const link = (
      <Link href={linkHref} className="text-blue-500">
        {linkText}
      </Link>
    );

    // Push the text before the match to the elements array
    if (index !== match.index) {
      elements.push(text.slice(index, match.index));
    }

    // Push the link element to the elements array
    elements.push(link);

    // Update the index to the end of the match
    index = match.index + match[0].length;
  }

  // Push the remaining text to the elements array
  if (index !== text.length) {
    elements.push(text.slice(index));
  }

  return (
    <p className="mt-4 text-gray-700 whitespace-pre-wrap">
      {elements.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))}
    </p>
  );
};

interface Class {
  _id: string;
  name: string;
  url: string;
  description: string;
  images: string[];
  videos: string[];
}

type Props = {
  class: Class;
};

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export default function ClassPage({ class: currentClass }: Props) {
  const router = useRouter();

  // Save the props.classes object in cache
  cache.set("classes", currentClass);

  // Retrieve the props.classes object from cache
  const thisClass = cache.get("classes") as Class;

  if (!thisClass) {
    return (
      <div className="p-4 text-2xl font-bold text-white bg-red-500">
        <Head>
          <title>Class not Found</title>
        </Head>
        <Link href="/" className="mx-4 font-bold text-blue-500">
          &larr; Back
        </Link>
        Error: Class not found
      </div>
    );
  }
  return (
    <PageWrapper title={thisClass.name}>
      <div className="p-4 bg-gray-200 rounded-lg snap-start">
        <h1 className="text-2xl font-bold text-gray-700">{thisClass.name}</h1>
        <TextWithLinks text={thisClass.description} />
        {thisClass.images.length > 0 && (
          <div>
            <h2 className="mt-4 text-xl font-bold text-gray-700">Images</h2>
            <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
              {thisClass.images.map((image, index) => (
                <Image
                  key={index.toString()}
                  src={image}
                  alt={thisClass.name}
                  className="object-cover w-full h-full rounded-lg max-h-96 snap-start"
                />
              ))}
            </div>
          </div>
        )}
        {thisClass.videos.length > 0 && (
          <div>
            <h2 className="mt-4 text-xl font-bold text-gray-700">Videos</h2>
            <div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2">
              {thisClass.videos.map((video, index) => (
                <video
                  key={index.toString()}
                  src={video}
                  className="object-cover w-full h-full rounded-lg max-h-96 snap-start"
                  controls
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {/* <button
        className="fixed p-4 bg-white rounded-full bottom-18 right-4"
        onClick={() => {
          router.back();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
      </button> */}
    </PageWrapper>
  );
}

export async function getServerSideProps(context: any) {
  const host = context.req.headers.host;
  const response = await fetch(`${server}${host}/api/classes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const classes = await response.json();

  // Check if the classes data is present
  if (!classes || !classes.data) {
    // Return an empty object if the classes data is not present
    return { props: {} };
  }

  // Find the class with the specified PID
  const classById = (url: string) =>
    classes.data.find((c: Class) => c.url === url);
  const currentClass = classById(context.params.pid);

  // Check if the currentClass object is present
  if (!currentClass) {
    // Return an empty object if the currentClass object is not present
    return { props: {} };
  }

  return {
    props: {
      class: currentClass,
    },
  };
}
