
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Héctor Colón Morales | Full Stack Engineer
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/HectorColon" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-primary transition-colors border border-transparent hover:border-portfolio-primary rounded-md p-2"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hectorcolonmorales/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-primary transition-colors border border-transparent hover:border-portfolio-primary rounded-md p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:hcolonsoftdev@gmail.com" 
              className="text-gray-400 hover:text-portfolio-primary transition-colors border border-transparent hover:border-portfolio-primary rounded-md p-2"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Built with <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-portfolio-primary hover:underline relative">lovable.dev</a> & Modified by Me
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
