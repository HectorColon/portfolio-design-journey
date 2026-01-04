
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import AboutMe from '@/components/sections/AboutMe';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import ContactMe from '@/components/sections/ContactMe';

const Home = () => {
  const isMobile = useIsMobile()
  const [justifyContent, setJustifyContent] = useState("center");

  useEffect(() => {
    if (isMobile) {
      setJustifyContent("center");
    } else {
      setJustifyContent("space-between");
    }
  }, [isMobile]);


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
      {/* ABOUT ME */}
      <AboutMe scrollToDiv={scrollToDiv}></AboutMe>
      {/* SKILLS */}
      <Skills isMobile={isMobile} scrollToDiv={scrollToDiv} justifyContent={justifyContent}></Skills>
      {/* WORK EXPERIENCE */}
      <Experience isMobile={isMobile}></Experience>
      {/* CONTACT */}
      <ContactMe isMobile={isMobile} justifyContent={justifyContent} buttonStyle={buttonStyle}></ContactMe>
    </div>
  );
};

export default Home;
