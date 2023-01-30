import React, { FC } from "react";
import PageWrapper from "../components/PageWrapper";
import ContactForm from "../components/ContactForm";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Contact: FC = () => {
  const router = useRouter();
  return (
    <PageWrapper title="Contact Me">
      <h1 className="text-3xl font-bold leading-tight text-center text-gray-300 mb-4">
        Contact Me
      </h1>
      <ContactForm />
      <div className="text-center mt-8">
        <p className="text-lg font-medium leading-tight text-gray-600">
          You can also reach me at{" "}
          <a
            href="mailto:murraycopps@gmail.com"
            className="font-bold text-blue-600 hover:text-blue-800"
          >
            murraycopps@gmail.com
          </a>
        </p>
      </div>
      <button
        className="fixed bottom-4 right-4 bg-white rounded-full p-4"
        onClick={() => {
          router.back();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
      </button>
    </PageWrapper>
  );
};
export default Contact;
