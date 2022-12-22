import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

const BalsaCrane: React.FC = () => {
    return (
        <PageWrapper title="Balsa Crane">
            <h1 className="text-3xl font-bold leading-tight text-center text-gray-300 mt-10">Balsa Crane Engineering Project</h1>
            <p className="text-lg font-medium leading-tight text-gray-400 mt-8">
                Our Balsa Crane engineering project achieved an impressive feat by lifting 3600 grams, breaking the previous school record of 1200 grams. This was made possible through our innovative design approach, which utilized the angles of the arms and string to evenly distribute the load and prevent bending forces on the crane. As a result, we were able to lift more than triple the previous record while using fewer materials. Additionally, we incorporated a gear system and pulley system to increase the torque of the small DC motor and allow it to handle the load more effectively
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                <img src="/images/crane-front.jpeg" alt="Balsa crane in action" className="w-full h-64 sm:h-96 object-cover rounded-lg" />
                <img src="/images/crane-side.jpeg" alt="Balsa crane design" className="w-full h-64 sm:h-96 object-cover rounded-lg" />
            </div>
            <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4 mt-4">
                <Link href="/files/crane-drawing.pdf" target="_blank">
                    <img src="/images/crane-drawing-image.png" alt="Balsa crane in action" className=" w-full lg:w-auto object-cover rounded-lg mx-auto" />
                </Link>
                <video controls className="w-full h-full object-cover rounded-lg">
                    <source src="/files/crane-video.mp4" type="video/mp4" />
                </video>
            </div>
        </PageWrapper>
    );
};

export default BalsaCrane;
