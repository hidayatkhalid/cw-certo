import Button from "../components/Button"

const Features = () => {
    return (
        <section className=" flex bg-gradient-to-b from-[#F3F8FF] to-[#E7EFFA] min-h-screen p-[100px] justify-center">
            <div className="w-[840px] lg:w-[70vw] flex-col justify-center">
                <h2 className="font-inter font-extrabold text-4xl text-center mb-10">Get your freedom back, stop mobile spyware today</h2>

                <div className=" w-auto bg-white shadow-md rounded-[50px] ">
                    <div className="grid lg:grid-cols-3 grid-cols-1 p-10">

                        <div className="flex flex-col items-center p-6">

                            <div className="w-[77px] h-[72px] overflow-hidden">
                                <img src="https://www.certosoftware.com/images/tmp/sprites/spyware-detection-hover.png" alt="sprite 1" width={2310} height={72} className="sprite__hover" />
                            </div>

                            <div className="flex flex-col items-center text-center gap-4 mt-4">
                                <h4 className="font-extrabold">Spyware detection</h4>
                                <p className="text-sm text-pretty font-medium">Our advanced spyware detection engine can identify if a device contains spyware or bugging software.</p>
                            </div>

                        </div>

                        <div className="flex flex-col items-center p-6">
                            <div className="w-[77px] h-[72px] overflow-hidden">
                                <img src="https://www.certosoftware.com/images/tmp/sprites/keylogger-detection-hover.png" alt="sprite2" width={2310} height={72} className="sprite__hover" />
                            </div>
                            <div className="flex flex-col items-center text-center gap-4 mt-4">
                                <h4 className="font-extrabold">Keylogger detection</h4>
                                <p className="text-sm text-pretty font-medium">Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6">
                            <div className="w-[77px] h-[72px] overflow-hidden">
                                <img src="https://www.certosoftware.com/images/tmp/sprites/find-tracking-apps-hover.png" alt="sprite2" width={2310} height={72} className="sprite__hover" />
                            </div>
                            <div className="flex flex-col items-center text-center gap-4 mt-4">
                                <h4 className="font-extrabold">Find tracking apps</h4>
                                <p className="text-sm text-pretty font-medium">Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6">
                            <div className="w-[77px] h-[72px] overflow-hidden">
                                <img src="https://www.certosoftware.com/images/tmp/sprites/os-integrity-check-hover.png" alt="sprite2" width={2310} height={72} className="sprite__hover" />
                            </div>
                            <div className="flex flex-col items-center text-center gap-4 mt-4">
                                <h4 className="font-extrabold">OS integrity check</h4>
                                <p className="text-sm text-pretty font-medium">Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6">
                            <div className="w-[77px] h-[72px] overflow-hidden">
                                <img src="https://www.certosoftware.com/images/tmp/sprites/threat-removal-hover.png" alt="sprite2" width={2310} height={72} className="sprite__hover" />
                            </div>
                            <div className="flex flex-col items-center text-center gap-4 mt-4">
                                <h4 className="font-extrabold">Threat removal</h4>
                                <p className="text-sm text-pretty font-medium">Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-6">
                            <div className="w-[77px] h-[72px] overflow-hidden">
                                <img src="https://www.certosoftware.com/images/tmp/sprites/easy-to-use-hover.png" alt="sprite2" width={2310} height={72} className="sprite__hover" />
                            </div>
                            <div className="flex flex-col items-center text-center px-4 gap-4 mt-4">
                                <h4 className="font-extrabold">Easy to use</h4>
                                <p className="text-sm text-pretty font-medium">We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-10 pb-10">
                        <Button text="Get Certo for iPhone" bgColor="bg-yellow-custom" textColor="text-black" borderColor="" />
                        <Button text="Get Certo for Android" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
