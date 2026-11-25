import { Clock, MapPin } from "lucide-react"
import { contactMethods } from "@/constants/contact_methods"
import Reveal from "../motion/Reveal"
import Spotlight from "../motion/Spotlight"
import Parallax from "../motion/Parallax"

interface ContactMeProps {
    isMobile?: boolean
    justifyContent: string,
    buttonStyle: any,
}

const ContactMe = ({
    isMobile = false,
    justifyContent,
}: ContactMeProps) => {
    return (<div id='contact' className="min-h-screen pb-16 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
            {/* Background title */}
            <div className="absolute left-0 w-full text-center">
                <Parallax speed={0.14}>
                    <div aria-hidden className={isMobile ? "big-title-contact text-gradient" : "big-title text-gradient pb-16"}>MESSAGES</div>
                </Parallax>
            </div>

            <div className="mb-16 text-center">
                <h1 className="pb-4 pt-4 text-white">
                    <Reveal as="span" variant="mask">
                        Contact <span className="text-gradient">Me</span>
                    </Reveal>
                </h1>
                <Reveal as="p" variant="fade" delay={200} className="pt-8 text-gray-400 mt-4 max-w-2xl mx-auto p-4">
                    Have a question or want to work together? Feel free to reach out to me or through any of my contact channels.
                </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {contactMethods.map((method, index) => (
                    <Reveal key={method.title} delay={index * 90}>
                        <a
                            href={method.link}
                            className="group block h-full rounded-lg text-gray-400 transition-colors hover:text-portfolio-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Spotlight className="h-full bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center mr-4 transition-transform duration-500 ease-out group-hover:scale-110">
                                        <method.icon size={18} className="text-portfolio-primary" />
                                    </div>

                                    <div className="min-w-0 break-words">
                                        <h4 className="text-white font-medium">{method.title}</h4>
                                        {method.value}
                                    </div>
                                </div>
                            </Spotlight>
                        </a>
                    </Reveal>
                ))}
                <Reveal className="lg:col-span-4" delay={360}>
                    <Spotlight className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
                        <div className={isMobile ? "" : "flex flex-start flex-wrap"} style={{ justifyContent: justifyContent, justifyItems: "center" }}>
                            <div className={isMobile ? "pb-8" : ""}>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 text-portfolio-primary"><Clock size="24" /></div>
                                    <h4 className="text-white font-medium">Office Hours</h4>
                                </div>
                                <div className="text-gray-400">
                                    <p>Monday - Friday</p>
                                    <p>8:00AM - 5:00PM PDT</p>
                                </div>
                            </div>
                            <div className={isMobile ? "pb-8" : ""}>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 text-portfolio-primary"><MapPin size="24" /></div>
                                    <h4 className="text-white font-medium">Currently Based</h4>
                                </div>
                                <div className="text-gray-400">
                                    <p>San Diego, CA & Open to remote opportunities globally</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 flex items-start pt-1">
                                        <span className="relative flex h-4 w-4 mt-0.5 ml-1">
                                            <span className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping" style={{ background: "green" }} />
                                            <span className="relative inline-flex h-4 w-4 rounded-full" style={{ background: "green" }} />
                                        </span>
                                    </div>
                                    <h4 className="text-white font-medium">Availability</h4>
                                </div>
                                <div className="text-gray-400">
                                    <p>Open to new opportunities</p>
                                </div>
                            </div>
                        </div>
                    </Spotlight>
                </Reveal>
            </div>
        </div>
    </div>)
}

export default ContactMe
