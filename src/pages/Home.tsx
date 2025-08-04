
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import TimelineItem from '@/components/ui/experience-timeline/TimelineItem';
import SkillBar from '@/components/ui/skill-bar/SkillBar';
import { Circle, Clock, Download, GraduationCap, MapPin, Paperclip } from 'lucide-react';
import { contactMethods } from '@/constants/contact_methods';
import { workExperience } from '@/constants/work_experience';
import { skills } from '@/constants/skills';

const Home = () => {
  const [animatedYears, setAnimatedYears] = useState(0);
  const [animatedCerts, setAnimatedCerts] = useState(0);
  const [animatedLangs, setAnimatedLangs] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const yearsDuration = 2000; // 2 seconds for the animation
    const yearsFPS = 60;
    const yearsIncrement = 4 / (yearsDuration / 1000 * yearsFPS);
    const yearsInterval = setInterval(() => {
      setAnimatedYears(prev => {
        return Math.min(prev + yearsIncrement, 5);
      });
    }, 1000 / yearsFPS);

    const certsDuration = 1500;
    const certsFPS = 60;
    const certsIncrement = 1 / (certsDuration / 1000 * certsFPS);
    const certsInterval = setInterval(() => {
      setAnimatedCerts(prev => {
        return Math.min(prev + certsIncrement, 2);
      });
    }, 1000 / certsFPS);

    const langsDuration = 2500;
    const langsFPS = 60;
    const langsIncrement = 5 / (langsDuration / 1000 * langsFPS);
    const langsInterval = setInterval(() => {
      setAnimatedLangs(prev => {
        return Math.min(prev + langsIncrement, 5);
      });
    }, 1000 / langsFPS);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(certsInterval);
      clearInterval(langsInterval);
    };


  }, []);

  const isMobile = useIsMobile()
  const [justifyContent, setJustifyContent] = useState("center");

  useEffect(() => {
    if (isMobile) {
      setJustifyContent("center");
    } else {
      setJustifyContent("space-between");
    }
  }, [isMobile]);

  const onButtonClick = () => {
    const pdfUrl = "src/items/HECTOR_COLON_MORALES_.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "HECTOR_COLON_MORALES.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const buttonStyle = {
    width: "275px"
  }

  return (
    <div id='about' className="min-h-screen pt-40 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 pb-40">
        {/* Background title */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className={`pt-4 w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-white text-center mb-4">  Héctor Colón Morales  </h1>
            <h1 className="text-white text-center mb-4"> <span className="text-gradient">Full-Stack Engineer</span>  </h1>
            <h3 className="text-white text-center mb-4">Geospatial | Healthcare | Cloud Infrastructure | Scalable UI/UX</h3>
            <div className="text-gray-300 space-y-6 mt-8 text-lg text-center">
              <p>Eager to Build, Learn, and Ship — Turning New Technologies into Scalable, Real-World Solutions Through Hands-On Full-Stack Development.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-6 bg-gray-800/30 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h2 className="text-6xl font-bold text-portfolio-primary">
                    {Math.floor(animatedYears)}<span className="text-xl text-portfolio-blue">+</span>
                  </h2>
                  <p className="text-white mt-2 text-xl">Years of Experience</p>
                </div>
                <div className="text-center p-6 bg-gray-800/30 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h2 className="text-6xl font-bold text-portfolio-primary">
                    {Math.floor(animatedCerts)}
                  </h2>
                  <p className="text-white mt-2 text-xl">AWS Certification</p>
                </div>
                <div className="text-center p-6 bg-gray-800/30 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h2 className="text-6xl font-bold text-portfolio-primary">
                    {Math.floor(animatedLangs)}<span className="text-xl text-portfolio-blue">+</span>
                  </h2>
                  <p className="text-white mt-2 text-xl">Programming Language Skills</p>
                </div>
              </div>

            </div>
          </div>
          <div className="mt-16 text-center pt-12 pb-12">
            <Button onClick={() => scrollToDiv('skills')} className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
              Explore My Skills
            </Button>
          </div>
        </div>
      </div>
      {/* SKILLS */}
      <div id="skills" className="min-h-screen pb-16 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          {/* Background title */}
          <div className="absolute left-0 w-full text-center">
            <h1 className={isMobile ? "big-title-certification text-gradient" : "big-title text-gradient pb-16"}>CERTIFICATIONS</h1>
          </div>


          <div className="pt-4 text-center animate-fade-in">
            <h1 className="text-white">
              <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto pb-4 pt-4 text-justify">
              I've developed expertise in various technologies and tools throughout my career.
              Here's a comprehensive overview of my technical skills and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-slide-up">
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <div className="space-y-10">
                {skills.filter(item => item.category != 'Tools' && item.category != 'Cloud').map((skill, index) => (
                  <div key={index}> {/* Key for the outer element */}
                    <h3 className="text-xl text-white font-semibold mb-6">{skill.category}</h3>
                    <ul>
                      {skill.items.map((item, itemIndex) => (
                        <SkillBar
                          key={itemIndex}
                          name={item.name}
                          percentage={item.percentage}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <div className="space-y-10">
                {skills.filter(item => item.category == 'Tools' || item.category == 'Cloud').map((skill, index) => (
                  <div key={index}> {/* Key for the outer element */}
                    <h3 className="text-xl text-white font-semibold mb-6">{skill.category}</h3>
                    <ul>
                      {skill.items.map((item, itemIndex) => (
                        <SkillBar
                          key={itemIndex}
                          name={item.name}
                          percentage={item.percentage}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8">
            {/* Certifications Section */}
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-white font-semibold mb-6">Certifications</h3>
              <div className="flex flex-start flex-wrap items-center" style={{ justifyContent: justifyContent, justifyItems: "center" }}>
                <div className="flex flex-row items-center p-2" style={{ justifyItems: "center", width: "400px" }}>
                  <div className="w-48 h-48">
                    <img
                      src="src/items/aws-cloud-quest-cloud-practitioner.png"
                      alt="AWS Cloud Quest: Cloud Practitioner"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center mt-4" style={{ width: "192px" }}>
                    <h4 className="text-lg text-white font-medium">AWS Cloud Quest</h4>
                    <p className="text-gray-400 text-sm mt-1">Cloud Practitioner</p>
                    <div className="mt-8">
                      <a
                        href="https://www.credly.com/badges/d1e40f38-44bf-4685-ba11-6735bb251cd8/public_url"
                        target="_blank"
                        className="text-portfolio-primary hover:underline text-sm"
                      >
                        View Credential
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-2" style={{ justifyItems: "center", width: "400px" }}>
                  <div className="w-48 h-48">
                    <img
                      width="192px"
                      src="src/items/aws-certified-cloud-practitioner.png"
                      alt="AWS Certified Cloud Practitioner"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center mt-4" style={{ width: "192px" }}>
                    <h4 className="text-lg text-white font-medium">AWS Cloud Practitioner</h4>
                    <p className="text-gray-400 text-sm mt-1">Foundational</p>
                    <div className="mt-8">
                      <a
                        href="https://www.credly.com/badges/02edb229-1d77-4dd1-8fc6-9c46763d47b0/public_url"
                        target="_blank"
                        className="text-portfolio-primary hover:underline text-sm"
                      >
                        View Credential
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-2" style={{ justifyItems: "center", width: "400px" }}>
                  <div className="w-48 h-48">
                    <img
                      width="192px"
                      src="src/items/aws-certified-developer-associate.png"
                      alt="AWS Certified Developer - Associate"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center mt-4 pr-4" style={{ width: "192px" }}>
                    <h4 className="text-lg text-white font-medium">AWS Certified Developer</h4>
                    <p className="text-gray-400 text-sm mt-1">Associate</p>
                    <div className="mt-8">
                      <a
                        href="https://www.credly.com/badges/7dd42138-a039-4ea0-ae9e-1b3d90ddc32b/public_url"
                        target="_blank"
                        className="text-portfolio-primary hover:underline text-sm"
                      >
                        View Credential
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button onClick={() => scrollToDiv('contact')} className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      {/* WORK EXPERIENCE */}
      <div id='experience' className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          {/* Background title */}
          <div className="absolute top-24 left-0 w-full text-center">
            <h1 className="big-title text-gradient pb-16">WORK</h1>
          </div>

          <div className="pt-4 text-center animate-fade-in">
            <h1 className="text-white">
              <span className="text-gradient">Experience</span>
            </h1>
            <p className={isMobile ? "pt-8 p-4 text-gray-400 mt-4 max-w-2xl mx-auto text-justify" : "pt-4 text-gray-400 mt-4 max-w-2xl mx-auto text-justify"}>
              My professional journey has equipped me with diverse experience in software development—from building user interfaces to developing complex backend systems—as well as teaching STEM concepts to high school students through hands-on programming, electronics, and robotics projects.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto animate-slide-up">
            {/* Network pattern background */}
            <div className="absolute inset-0 bg-network-pattern opacity-10 z-0"></div>

            {/* Timeline */}
            <div className={isMobile ? "relative z-10 py-8 p-4" : "relative z-10 py-8"}>
              {workExperience.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.title}
                  type={exp.type}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT */}
      <div id='contact' className="min-h-screen pb-16 relative overflow-hidden bg-black">
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
                <img width={500} src="src/items/HECTOR_COLON_MORALES_PREVIEW.jpg" alt="Resume Preview" />
                <div className="mt-16 text-center">
                  <Button onClick={onButtonClick} className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black"
                    style={isMobile ? buttonStyle : {}}>
                    <Download size="24" /> <p>Download Resume (PDF)</p>
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 text-portfolio-primary" style={{ animation: "pulse 4s infinite" }}><GraduationCap size="24" /></div>
                <h4 className="text-white font-medium">Educational Proposals</h4>
              </div>
              <div className="text-white font-medium">Coming Soon...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
