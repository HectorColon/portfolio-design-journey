import { Circle, Clock, MapPin, Paperclip } from "lucide-react"
import { contactMethods } from "@/constants/contact_methods"

interface ContactMeProps {
    isMobile?: boolean
    justifyContent: string,
    buttonStyle: any,
}

const ContactMe = ({
    isMobile = false,
    justifyContent,
    buttonStyle,
}: ContactMeProps) => {
    const onButtonClick = () => {
        const pdfUrl = "src/items/HECTOR_COLON_MORALES_.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "HECTOR_COLON_MORALES.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (<div id='contact' className="min-h-screen pb-16 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
            {/* Background title */}
            <div className="absolute left-0 w-full text-center">
                <h1 className={isMobile ? "big-title-contact text-gradient" : "big-title text-gradient pb-16"}>MESSAGES</h1>
            </div>

            <div className="mb-16 text-center animate-fade-in">
                <h1 className="pb-4 pt-4 text-white">
                    Contact <span className="text-gradient">Me</span>
                </h1>
                <p className="pt-8 text-gray-400 mt-4 max-w-2xl mx-auto text-justify p-4">
                    Have a question or want to work together? Feel free to reach out to me or through any of my contact channels.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 animate-slide-up">
                {contactMethods.map((method, index) => (
                    <a
                        href={method.link}
                        className="text-gray-400 hover:text-portfolio-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
                            <div className="space-y-6">
                                <div key={index} className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                                        <method.icon size={18} className="text-portfolio-primary" />
                                    </div>

                                    <div>
                                        <h4 className="text-white font-medium">{method.title}</h4>
                                        {method.value}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
                <div className="lg:col-span-4 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
                    <div className={isMobile ? "" : "flex flex-start flex-wrap"} style={{ justifyContent: justifyContent, justifyItems: "center" }}>
                        <div className={isMobile ? "pb-8" : ""}>
                            <div className="flex items-start">
                                <div className="w-10 h-10 text-portfolio-primary"><Clock size="24" /></div>
                                <h4 className="text-white font-medium">Office Hours</h4>
                            </div>
                            <div className="text-gray-400">
                                <p>Monday - Friday</p>
                                <p>8:00 AM - 5:00 PM AST</p>
                            </div>
                        </div>
                        <div className={isMobile ? "pb-8" : ""}>
                            <div className="flex items-start">
                                <div className="w-10 h-10 text-portfolio-primary"><MapPin size="24" /></div>
                                <h4 className="text-white font-medium">Currently Based</h4>
                            </div>
                            <div className="text-gray-400">
                                <p>Open to remote opportunities globally</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 text-portfolio-primary" style={{ animation: "pulse 2s infinite" }}><Circle fill="green" strokeWidth={0} size="24" /></div>
                                <h4 className="text-white font-medium">Availability</h4>
                            </div>
                            <div className="text-gray-400">
                                <p>Open to new opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
                    <div className="flex items-start">
                        <div className="w-10 h-10 text-portfolio-primary" style={{ animation: "pulse 4s infinite" }}><Paperclip size="24" /></div>
                        <h4 className="text-white font-medium">Resume</h4>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-gradient">Updated Resume Coming Soon!</p>
                        {/* <img width={500} src="src/items/HECTOR_COLON_MORALES_PREVIEW.jpg" alt="Resume Preview" /> */}
                        {/* <embed src="src/items/HECTOR_COLON_MORALES_.pdf" width="500" height="625"></embed>
                        <div className="mt-8 text-center">
                            <Button onClick={onButtonClick} className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black"
                                style={isMobile ? buttonStyle : {}}>
                                <Download size="24" /> <p>Download Resume (PDF)</p>
                            </Button>
                        </div> */}
                    </div>
                </div>
                {/* <div className="lg:col-span-4 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 text-portfolio-primary" style={{ animation: "pulse 4s infinite" }}><GraduationCap size="24" /></div>
                <h4 className="text-white font-medium">Educational Proposals</h4>
              </div>
              <div className="text-white font-medium">Coming Soon...</div>
            </div> */}
            </div>
        </div>
    </div>)
}

export default ContactMe