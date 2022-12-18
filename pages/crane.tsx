import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

const BalsaCrane: React.FC = () => {
    return (
        <PageWrapper title="Balsa Crane">
                <h1 className="text-3xl font-bold leading-tight text-center text-gray-300 mt-10mb-4">Balsa Crane Engineering Project</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <img src="/images/crane-front.jpeg" alt="Balsa crane in action" className="w-full h-96 object-cover rounded-lg" />
                    <img src="/images/crane-side.jpeg" alt="Balsa crane design" className="w-full h-96 object-cover rounded-lg" />
                </div>
                <p className="text-lg font-medium leading-tight text-gray-400 mb-4">
                    Our Balsa Crane engineering project achieved an impressive feat by lifting 3600 grams, breaking the previous school record of 1200 grams. This was made possible through our innovative design approach, which utilized the angles of the arms and string to evenly distribute the load and prevent bending forces on the crane. As a result, we were able to lift more than triple the previous record while using fewer materials.                </p>
                <div className="mb-4">
                    <Link href="/files/crane-drawing.pdf" target="_blank" className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500">View Design PDF</Link>
                    <Link href="/files/crane-video.MOV" target="_blank" className="inline-block py-2 px-4 rounded-full text-white font-medium bg-blue-500 ml-2">Watch Video</Link>
                </div>
                <div className="mt-4">
                    <Link href="/files/crane-drawing.pdf" target="_blank">
                        <img src="/images/crane-drawing-image.png" alt="Balsa crane in action" className="lg:h-96 w-full lg:w-auto object-cover rounded-lg mx-auto" />
                    </Link>
                </div>
        </PageWrapper>
    );
};

export default BalsaCrane;