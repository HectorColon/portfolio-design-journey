
import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, Clock,  MapPin,  Circle,  Paperclip, PhoneCallIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react'; // Example using react-icons

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hcolonsoftdev@gmail.com',
      link: 'mailto:hcolonsoftdev@gmail.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/hectorcolonmorales/'
    },
    // {
    //   icon: Github,
    //   title: 'GitHub',
    //   value: 'Check my repositories',
    //   link: 'https://github.com/HectorColon'
    // },
    {
      icon: PhoneCallIcon,
      title: 'WhatsApp',
      value: `Let's Talk`,
      link: 'https://wa.me/7872430820'
    },
  ];

  const onButtonClick = () => {
      const pdfUrl = "src/items/HECTOR_COLON_MORALES_.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "HECTOR_COLON_MORALES.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };
// TODO NEED IMPROVEMENT TO AVOID DUPLICATED CODE
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [justifyContent, setJustifyContent] = useState("Default Text");

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize < 1200) {  
      setJustifyContent("start");
    } else  {
      setJustifyContent("space-between");
    }
  }, [windowSize]);

  const buttonStyle = {
    width: "275px"
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-24 left-0 w-full text-center">
          <h1 className={windowSize < 1200 ? "big-title-contact text-gradient" : "big-title text-gradient pb-16"}>MESSAGES</h1>
        </div>
        
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="pb-4 pt-4 text-white">
            Contact <span className="text-gradient">Me</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me or through any of my contact channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
          {/* <div className="lg:col-span-2 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl text-white font-semibold mb-6">Send Me a Message</h3>
            <ContactForm />
          </div> */}
           {contactMethods.map((method, index) => (
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            {/* <h3 className="text-xl text-white font-semibold mb-6">Contact Information</h3> */}
            <div className="space-y-6">
             <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                    <method.icon size={18} className="text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{method.title}</h4>
                    <a 
                      href={method.link}
                      className="text-gray-400 hover:text-portfolio-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
            </div>
            {/* <div className="mt-10">
             
            </div> */}
          </div>
              ))}
          <div className="lg:col-span-3 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <div className={windowSize < 1200 ? "" : "flex flex-start flex-wrap"}  style={{justifyContent: justifyContent, justifyItems:"center"}}>
              <div className={windowSize < 1200 ? "pb-8" : ""}>
                <div className="flex items-start">
                  <div className="w-10 h-10 text-portfolio-primary"><Clock size="24"/></div>
                  <h4 className="text-white font-medium">Office Hours</h4>
                </div>
              <div className="text-gray-400">
                <p>Monday - Friday</p>
                <p>8:00 AM - 5:00 PM AST</p>
              </div>
            </div>
            <div className={windowSize < 1200 ? "pb-8" : ""}>
              <div className="flex items-start">
                <div className="w-10 h-10 text-portfolio-primary"><MapPin size="24"/></div>
              <h4 className="text-white font-medium">Currently Based</h4>
              </div>
              <div className="text-gray-400">
                <p>Open to remote opportunities globally</p>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <div className="w-10 h-10 text-portfolio-primary" style={{animation: "pulse 4s infinite"}}><Circle fill="green" strokeWidth={0} size="24"/></div>
                <h4 className="text-white font-medium">Availability</h4>
              </div>
              <div className="text-gray-400">
                <p>Open to new opportunities</p>
              </div>
            </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 text-portfolio-primary" style={{animation: "pulse 4s infinite"}}><Paperclip size="24"/></div>
                <h4 className="text-white font-medium">Resume</h4>
              </div>
              <div className="flex flex-col items-center">
              <img width={500}  src="src/items/HECTOR_COLON_MORALES_PREVIEW.jpg" alt="Resume Preview" />
              <div className="mt-16 text-center">
              <Button onClick={onButtonClick} className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black"
                style={windowSize < 1200 ? buttonStyle: {}}>
                <Download size="24"/> <p>Download Resume (PDF)</p>
              </Button>
            </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Contact;
