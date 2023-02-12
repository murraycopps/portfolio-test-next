import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import PageWrapper from "../components/PageWrapper";
import Image from "next/image";

const AppPage = () => {
  const router = useRouter();
  return (
    <PageWrapper title="Pacing App">
      <div className="px-4 py-6 text-white bg-gray-800">
        <h1 className="text-4xl font-bold text-center sm:text-left sm:px-6">
          My React Native App
        </h1>
      </div>
      <div className="px-4 py-6 bg-gray-900">
        <div className="relative w-full h-64 overflow-auto">
          <p className="text-lg font-medium leading-tight text-gray-400 indent-8">
            Our React Native app is the ultimate tool for runners looking to
            track and improve their performance. With our app, you can easily
            calculate your pace and see equivalent race times using our VDOT
            table. Our timer feature allows you to input your splits and see
            what your final time will be, so you can better plan and train for
            future races. We also have a time speed conversion page that helps
            you quickly convert between different units of measurement, and a
            page that allows you to convert hill times to equivalent flat times.
          </p>
          <br />
          <p className="text-lg font-medium leading-tight text-gray-400 indent-8">
            In addition, our app includes a page that allows you to add together
            times for relay races, making it easy to track and compare team
            performances. And for coaches and meet organizers, we have a feature
            that makes it easy to score cross country and track meets. With our
            settings page, you can store your preferences in local storage,
            making it easy to customize and use our app to fit your needs.
          </p>
          <br />
          <p className="w-full text-lg font-medium text-center text-gray-400 indent-8">
            I made a desktop and mobile friendly website using next.js that you
            can demo
            <Link
              href="https://pacing-website-next.vercel.app/"
              target="_blank"
              className="font-bold text-blue-500"
            >
              {" "}
              here.
            </Link>
          </p>
        </div>
        <div className="flex flex-col flex-wrap content-center sm:flex-row justify-evenly">
          <div className="mt-4 overflow-hidden phone-aspect-ratio">
            <Image
              src="/images/pacing.PNG"
              alt="Pacing Page Sc"
              className="object-cover h-full mx-auto"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-4 overflow-hidden phone-aspect-ratio">
            <Image
              src="/images/unusual.PNG"
              alt="Unusual Page Sc"
              className="object-cover h-full mx-auto"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-4 overflow-hidden phone-aspect-ratio">
            <Image
              src="/images/timer.PNG"
              alt="Timer Page Sc"
              className="object-cover h-full mx-auto"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-6 mt-8 text-center text-white bg-gray-800 sm:text-left">
        <h2 className="text-4xl font-bold sm:px-6">Previous Models</h2>
      </div>
      <div className="flex flex-col flex-wrap items-start justify-between w-full sm:flex-row">
        <div className="w-full px-4 py-6 bg-gray-900 sm:w-1/3">
          <h2 className="text-xl font-bold text-center text-gray-400">
            React Model
          </h2>
          <div className="mx-auto mt-6 phone-aspect-ratio">
            <iframe
              src="https://fullapp-react.murraycopps.repl.co/"
              title="React Model"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full px-4 py-6 bg-gray-900 sm:w-1/3">
          <h2 className="text-xl font-bold text-center text-gray-400 ">
            HTML Model
          </h2>
          <div className="mx-auto mt-6 phone-aspect-ratio">
            <Link
              href="https://pacing-app.murraycopps.repl.co/"
              target="_blank"
            >
              <Image
                src="/images/html-app.PNG"
                alt="HTML Model"
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <p className="w-full mt-4 text-sm font-medium leading-5 text-gray-500">
            Note: This website was built strictly for mobile and may not display
            correctly in a browser. To view the website correctly, inspect the
            page and click the phone icon in the top left of the inspect
            section.
          </p>
        </div>
        <div className="w-full px-4 py-6 bg-gray-900 sm:w-1/3">
          <h2 className="text-xl font-bold text-center text-gray-400">
            Code.org Model
          </h2>
          <div className="mx-auto mt-6 phone-aspect-ratio">
            <iframe
              src="https://studio.code.org/projects/applab/y2_R9F_xMHW2mIpyDt65PKicie24UmjeFCbL3kfFqa0/embed"
              title="Code.org Project"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* <button
        className="fixed p-4 bg-white rounded-full bottom-4 right-4"
        onClick={() => {
          router.back();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
      </button> */}
    </PageWrapper>
  );
};

export default AppPage;
