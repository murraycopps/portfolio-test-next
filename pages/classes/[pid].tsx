import Head from 'next/head';
import Link from 'next/link'
import React from 'react';
import PageWrapper from '../../components/PageWrapper'
import { server } from '../../config'

const TextWithLinks = ({ text }: {text: string}) => {
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
      <p className="text-gray-700 mt-4 whitespace-pre-wrap">
        {elements.map((element, index) => (
          <React.Fragment key={index}>
            {element}
          </React.Fragment>
        ))}
      </p>
    );
  };

interface Class {
    _id: string,
    name: string,
    url: string,
    description: string,
    images: string[],
    videos: string[]
}

type Props = {
    class: Class
}

export default function ClassPage({ class: currentClass }: Props) {
    if (!currentClass) {
        return (
            <div className="bg-red-500 p-4 text-white text-2xl font-bold">
                <Head>
                    <title>Class not Found</title>
                </Head>
                <Link href="/" className="text-blue-500 font-bold mx-4">
                    &larr; Back
                </Link>
                Error: Class not found
            </div>
        )
    }
    return (
        <PageWrapper title={currentClass.name}>
            <div className="bg-gray-200 p-4 rounded-lg">
                <h1 className="text-2xl font-bold text-gray-700">{currentClass.name}</h1>
                <TextWithLinks text={currentClass.description} />
                {currentClass.images.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold text-gray-700 mt-4">Images</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            {currentClass.images.map((image, index) => (
                                <img key={index.toString()} src={image} alt={currentClass.name} className="w-full rounded-lg max-h-96 h-full object-cover" />
                            ))}
                        </div>
                    </div>
                )}
                {currentClass.videos.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold text-gray-700 mt-4">Videos</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
                            {currentClass.videos.map((video, index) => (
                                <video key={index.toString()} src={video} className="w-full rounded-lg max-h-96 h-full object-cover" controls />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </PageWrapper>
    )
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
    const classById = (url: string) => classes.data.find((c: Class) => c.url === url);
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
