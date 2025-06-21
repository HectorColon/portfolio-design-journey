
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutMe = () => {
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
        if (prev >= 4) {
          clearInterval(yearsInterval);
          return 4;
        }
        return Math.min(prev + yearsIncrement, 4);
      });
    }, 1000 / yearsFPS);
    
    const certsDuration = 1500;
    const certsFPS = 60;
    const certsIncrement = 1 / (certsDuration / 1000 * certsFPS);
    const certsInterval = setInterval(() => {
      setAnimatedCerts(prev => {
        if (prev >= 1) {
          clearInterval(certsInterval);
          return 1;
        }
        return Math.min(prev + certsIncrement, 1);
      });
    }, 1000 / certsFPS);
    
    const langsDuration = 2500;
    const langsFPS = 60;
    const langsIncrement = 5 / (langsDuration / 1000 * langsFPS);
    const langsInterval = setInterval(() => {
      setAnimatedLangs(prev => {
        if (prev >= 5) {
          clearInterval(langsInterval);
          return 5;
        }
        return Math.min(prev + langsIncrement, 5);
      });
    }, 1000 / langsFPS);
    
    return () => {
      clearInterval(yearsInterval);
      clearInterval(certsInterval);
      clearInterval(langsInterval);
    };
  }, []);
  
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-24 left-0 w-full">
          <h1 className="big-title">PROFILE</h1>
        </div>
        
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-white text-center mb-4">
              About <span className="text-gradient">Me</span>
            </h1>
            
            <div className="text-gray-300 space-y-6 mt-8 text-lg text-center">
              <p className="max-w-3xl mx-auto">
                I'm Hector Colon Morales, a Computer Engineer Graduate and a Software Developer 
                I at Wovenware a Maxar Company, a passionate about using technology to solve 
                real-world problems and create exceptional user experiences.
              </p>
              
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
              
              {/* <div className="flex items-center justify-center space-x-6 mt-12">
                <a 
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-portfolio-primary transition-colors relative after:absolute after:inset-0 after:rounded-full after:border-2 after:border-transparent hover:after:border-portfolio-primary after:transition-all"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a 
                  href="#"
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-portfolio-primary transition-colors relative after:absolute after:inset-0 after:rounded-full after:border-2 after:border-transparent hover:after:border-portfolio-primary after:transition-all"
                >
                  <Github size={24} className="text-white" />
                </a>
              </div> */}
              
              {/* <div className="mt-12 text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-800 text-gray-400 hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary rounded-md p-3 transition-colors"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </a>
              </div> */}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/skills">
              <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
                Explore My Skills
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
