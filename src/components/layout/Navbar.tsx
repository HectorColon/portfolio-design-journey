
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { text: "About Me", href: "/" },
    { text: "Skills/Certifications", href: "/skills" },
    { text: "Experience", href: "/experience" },
    { text: "Blog", href: "/blog" },
    { text: "Contact Me", href: "/contact" },
  ];

  return (
    <nav className="py-6 px-4 md:px-8 w-full fixed top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white hover:text-portfolio-primary transition-colors">
          Héctor Colón Morales
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={cn(
            "w-6 h-0.5 bg-white mb-1.5 transition-all",
            isMenuOpen && "translate-y-2 rotate-45"
          )} />
          <div className={cn(
            "w-6 h-0.5 bg-white mb-1.5 transition-all",
            isMenuOpen && "opacity-0"
          )} />
          <div className={cn(
            "w-6 h-0.5 bg-white transition-all",
            isMenuOpen && "-translate-y-2 -rotate-45"
          )} />
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <Link 
              key={index}
              to={link.href} 
              className="text-white hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary px-4 py-2 rounded-md transition-all duration-300"
            >
              {link.text}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-95 py-4 md:hidden">
            <div className="flex flex-col space-y-4 items-center">
              {links.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className="text-white hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary px-4 py-2 rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
