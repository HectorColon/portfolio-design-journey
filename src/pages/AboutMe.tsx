
import React from 'react';
import Blob from '@/components/ui/blob/Blob';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-24 left-0 w-full">
          <h1 className="big-title">PROFILE</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h1 className="text-white mb-2">
              About <span className="text-gradient">Me</span>
            </h1>
            
            <div className="text-gray-300 space-y-4 mt-6">
              <p>
                I'm Hector Colon Morales, a Computer Engineer Graduate and a Software Developer 
                I at Wovenware a Maxar Company, a passionate about using technology to solve 
                real-world problems and create exceptional user experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h2 className="text-5xl font-bold text-portfolio-primary">4<span className="text-xl text-portfolio-blue">+</span></h2>
                  <p className="text-white">Years of Experience</p>
                </div>
                <div className="text-center">
                  <h2 className="text-5xl font-bold text-portfolio-primary">1</h2>
                  <p className="text-white">AWS Certification</p>
                </div>
                <div className="text-center">
                  <h2 className="text-5xl font-bold text-portfolio-primary">5<span className="text-xl text-portfolio-blue">+</span></h2>
                  <p className="text-white">Programming Language Skills</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-8">
                <a 
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-portfolio-primary transition-colors"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-portfolio-primary transition-colors"
                >
                  <Github size={20} className="text-white" />
                </a>
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="border-portfolio-primary text-white hover:bg-portfolio-primary">
                  Download CV
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <Blob 
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              className="animate-slide-up"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/skills">
            <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white">
              Explore My Skills
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
