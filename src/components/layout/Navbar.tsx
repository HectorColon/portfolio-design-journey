
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = useIsMobile()
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const links = [
    { text: "About Me", href: "about" },
    { text: "Skills/Certifications", href: "skills" },
    { text: "Experience", href: "experience" },
    { text: "Blog", href: "/blog" },
    { text: "BlogList", href: "/list", hidden: true },
    { text: "Article", href: "/article", hidden: true },
    { text: "Contact Me", href: "contact" },
  ];

  const customLink = [
    { text: "Home", href: "/" },
    { text: "Blog Admin", href: "/admin/login" },
  ]

  const location = useLocation();

  // The 'location' object contains properties related to the current URL
  const { pathname, search, hash } = location;

  // Matches any "/admin/*" route
  const isAdminRoute = pathname.startsWith("/admin/");
  const isBlogList = pathname.startsWith("/list");
  const isArticle = pathname.startsWith("/article");

  return (
    <nav className="py-6 px-4 md:px-8 w-full fixed top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-xl font-bold text-white text-gradient"> Héctor Colón Morales </p>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={isMobile ? "focus:outline-none" : "hidden focus:outline-none"}
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
        <div className={isMobile ? "hidden space-x-8" : "md:flex space-x-8"}>
          {
            pathname === '/admin/login' && (
              <Link to="/blog"
                className="text-white hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary px-4 py-2 rounded-md transition-all duration-300"
                onClick={() => { setIsMenuOpen(false) }}>{"Blog"}</Link>
            )
          }
          {pathname === '/blog' && ( // Show button only on /blog path
            customLink.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-white hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary px-4 py-2 rounded-md transition-all duration-300"
                onClick={() => { scrollToDiv(link.href), setIsMenuOpen(false) }}
              >
                {link.text}
              </Link>
            ))
          )}
          {(pathname != '/blog' && !isAdminRoute && !isBlogList && !isArticle) && (
            links.map((link, index) => (
              !link.hidden ? <Link
                key={index}
                to={link.text == 'Blog' ? link.href : pathname == '/notfound' ? "/" : ""}
                className="text-white hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary px-4 py-2 rounded-md transition-all duration-300"
                onClick={() => { scrollToDiv(link.href), setIsMenuOpen(false) }}
              >
                {link.text}
              </Link> : ""
            ))
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-95 py-4">
            <div className="flex flex-col space-y-4 items-center">
              {
                pathname === '/admin/login' && (
                  <Link to="/blog"
                    className="text-white hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary px-4 py-2 rounded-md transition-all duration-300"
                    onClick={() => { setIsMenuOpen(false) }}>{"Blog"}</Link>
                )
              }
              {pathname === '/blog' && ( // Show button only on /blog path
                customLink.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-white hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary px-4 py-2 rounded-md transition-all duration-300"
                    onClick={() => { scrollToDiv(link.href), setIsMenuOpen(false) }}
                  >
                    {link.text}
                  </Link>
                ))
              )}
              {(pathname != '/blog' && !isAdminRoute && !isBlogList && !isArticle) && (
                links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.text == 'Blog' ? link.href : pathname == '/notfound' ? "/" : ""}
                    className="text-white hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary px-4 py-2 rounded-md transition-all duration-300"
                    onClick={() => { scrollToDiv(link.href), setIsMenuOpen(false) }}
                  >
                    {link.text}
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
