import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import PageWrapper from "../components/PageWrapper";
import Image from "next/image";

const BalsaCrane: React.FC = () => {
  const router = useRouter();
  return (
    <PageWrapper title="Balsa Crane">
      <h1 className="mt-10 text-3xl font-bold leading-tight text-center text-gray-300">
        Balsa Crane Engineering Project
      </h1>
      <p className="mt-8 text-lg font-medium leading-tight text-gray-400">
        Our Balsa Crane engineering project achieved an impressive feat by
        lifting 3600 grams, breaking the previous school record of 1200 grams.
        This was made possible through our innovative design approach, which
        utilized the angles of the arms and string to evenly distribute the load
        and prevent bending forces on the crane. As a result, we were able to
        lift more than triple the previous record while using fewer materials.
        Additionally, we incorporated a gear system and pulley system to
        increase the torque of the small DC motor and allow it to handle the
        load more effectively
      </p>
      <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-2">
        <Image
          src="/images/crane-front.jpeg"
          alt="Balsa crane in action"
          className="object-cover w-full h-64 rounded-lg sm:h-96"
          width={500}
          height={500}
        />
        <Image
          src="/images/crane-side.jpeg"
          alt="Balsa crane design"
          className="object-cover w-full h-64 rounded-lg sm:h-96"
          width={500}
          height={500}
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-4 lg:grid-rows-1 lg:grid-cols-2">
        <Link href="/files/crane-drawing.pdf" target="_blank">
          <Image
            src="/images/crane-drawing-image.png"
            alt="Balsa crane in action"
            className="object-cover w-full mx-auto rounded-lg lg:w-auto"
            width={500}
            height={500}
          />
        </Link>
        <video controls className="object-cover w-full h-full rounded-lg">
          <source src="/files/crane-video.mp4" type="video/mp4" />
        </video>
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

export default BalsaCrane;
