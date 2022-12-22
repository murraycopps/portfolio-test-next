import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

const AppPage = () => {
    return (
        <PageWrapper title="Pacing App" >
            <div className="px-4 py-6 bg-gray-800 text-white">
                <h1 className="text-4xl font-bold text-center sm:text-left sm:px-6">My React Native App</h1>
            </div>
            <div className="px-4 py-6 bg-gray-900">
                <div className="relative h-64 w-full overflow-auto">
                    <p className="text-lg font-medium leading-tight text-gray-400 indent-8">
                        Our React Native app is the ultimate tool for runners looking to track and improve their performance. With our app, you can easily calculate your pace and see equivalent race times using our VDOT table. Our timer feature allows you to input your splits and see what your final time will be, so you can better plan and train for future races. We also have a time speed conversion page that helps you quickly convert between different units of measurement, and a page that allows you to convert hill times to equivalent flat times.
                    </p>
                    <br />
                    <p className="text-lg font-medium leading-tight text-gray-400 indent-8">
                        In addition, our app includes a page that allows you to add together times for relay races, making it easy to track and compare team performances. And for coaches and meet organizers, we have a feature that makes it easy to score cross country and track meets. With our settings page, you can store your preferences in local storage, making it easy to customize and use our app to fit your needs.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-evenly content-center flex-wrap">
                    <div className="phone-aspect-ratio mt-4 overflow-hidden">
                        <img
                            src="/images/pacing.png"
                            alt="Pacing Page Sc"
                            className="mx-auto h-full object-cover"
                        />
                    </div>
                    <div className="phone-aspect-ratio mt-4 overflow-hidden">
                        <img
                            src="/images/unusual.png"
                            alt="Unusual Page Sc"
                            className="mx-auto h-full object-cover"
                        />
                    </div>
                    <div className="phone-aspect-ratio mt-4 overflow-hidden">
                        <img
                            src="images/timer.png"
                            alt="Timer Page Sc"
                            className="mx-auto h-full object-cover"
                        />
                    </div>
                </div>

            </div>
            <div className="px-4 py-6 bg-gray-800 text-white text-center sm:text-left mt-8" >
                <h2 className="text-4xl font-bold sm:px-6">Previous Models</h2>
            </div >
            <div className="flex flex-wrap flex-col sm:flex-row justify-between items-start w-full">
                <div className="px-4 py-6 bg-gray-900 w-full sm:w-1/3">
                    <h2 className="text-xl font-bold text-center text-gray-400">React Model</h2>
                    <div className="phone-aspect-ratio mt-6 mx-auto">
                        <iframe
                            src="https://fullapp-react.murraycopps.repl.co/"
                            title="React Model"
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="px-4 py-6 bg-gray-900 w-full sm:w-1/3">
                    <h2 className=" text-xl font-bold text-center text-gray-400">HTML Model</h2>
                    <div className="phone-aspect-ratio mt-6 mx-auto">
                        <Link href="https://pacing-app.murraycopps.repl.co/" target="_blank">
                            <img src="/images/html-app.PNG" alt="HTML Model" className="w-full h-full object-cover" />
                        </Link>
                    </div>
                    <p className="text-sm mt-4 font-medium leading-5 w-full text-gray-500">
                        Note: This website was built strictly for mobile and may not display correctly in a browser. To view the website correctly, inspect the page and click the phone icon in the top left of the inspect section.
                    </p>
                </div>
                <div className="px-4 py-6 bg-gray-900 w-full sm:w-1/3">
                    <h2 className="text-xl font-bold text-center text-gray-400">Code.org Model</h2>
                    <div className="phone-aspect-ratio mt-6 mx-auto">
                        <iframe
                            src="https://studio.code.org/projects/applab/y2_R9F_xMHW2mIpyDt65PKicie24UmjeFCbL3kfFqa0/embed"
                            title="Code.org Project"
                            className="w-full h-full"
                        />
                    </div>
                </div>

            </div>

        </PageWrapper >
    );
}

export default AppPage
