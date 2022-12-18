import PageWrapper from "../components/PageWrapper";

const AppPage = () => {
    return (
        <PageWrapper title="Pacing App" >
            <div className="px-4 py-6 bg-gray-800 text-white">
                <h1 className="text-4xl font-bold">My React Native App</h1>
            </div>
            <div className="px-4 py-6 bg-gray-900">
                <div className="relative h-64 w-full overflow-hidden">
                    <p className="text-lg font-medium leading-tight text-gray-400">
                        Our React Native app is the ultimate tool for runners looking to track and improve their performance. With our app, you can easily calculate your pace and see equivalent race times using our VDOT table. Our timer feature allows you to input your splits and see what your final time will be, so you can better plan and train for future races. We also have a time speed conversion page that helps you quickly convert between different units of measurement, and a page that allows you to convert hill times to equivalent flat times.
                        <br />
                        In addition, our app includes a page that allows you to add together times for relay races, making it easy to track and compare team performances. And for coaches and meet organizers, we have a feature that makes it easy to score cross country and track meets. With our settings page, you can store your preferences in local storage, making it easy to customize and use our app to fit your needs.
                    </p>
                </div>
                <div className="relative h-64 w-full overflow-hidden">
                    <img
                        src="/images/screenshot1.png"
                        alt="Screenshot 1"
                        className="absolute h-full w-full object-cover"
                    />
                </div>
                <div className="relative h-64 w-full mt-4 overflow-hidden">
                    <img
                        src="/images/screenshot2.png"
                        alt="Screenshot 2"
                        className="absolute h-full w-full object-cover"
                    />
                </div>
                <div className="relative h-64 w-full mt-4 overflow-hidden">
                    <img
                        src="images/screenshot3.png"
                        alt="Screenshot 3"
                        className="absolute h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="px-4 py-6 bg-gray-800 text-white" >
                <h2 className="text-4xl font-bold">Previous Models</h2>
            </div >
            <div className="px-4 py-6 bg-gray-900" >
                <h2 className="text-xl font-bold">React Model</h2>
                <div className="iframe-with-aspect-ratio">
                    <iframe
                        src="http:/ st:3001"
                        title="React Model"
                    />
                </div>
            </div >
            <div className="px-4 py-6 bg-gray-900" >
                <h2 className=" text-xl font-bold">HTML Model</h2>
                <div className="iframe-with-aspect-ratio" >
                    <iframe
                        src="http://localhost:3002"
                        title="HTML Model"
                    />
                </div>
            </div >
        </PageWrapper >);


    ;  
