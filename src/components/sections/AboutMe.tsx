import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { professionalTitle } from "@/constants/title";

interface AboutMeProps {
  scrollToDiv: any
}

const AboutMe = ({scrollToDiv}:AboutMeProps) => {
  const [animatedYears, setAnimatedYears] = useState(0);
  const [animatedCerts, setAnimatedCerts] = useState(0);
  const [animatedLangs, setAnimatedLangs] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // Assuming experience starts in 2020, Oct 2019 for Front-End Developer role, but using 2020 for simplicity and to account for the fact that the first few months may not be full experience. Adjust as needed based on actual start date and how you want to represent it.
  const experienceYrs = new Date().getFullYear() - 2020; 

  useEffect(() => {
    setIsVisible(true);
    const yearsDuration = 2000; // 2 seconds for the animation
    const yearsFPS = 60;
    const yearsIncrement = 4 / (yearsDuration / 1000 * yearsFPS);
    const yearsInterval = setInterval(() => {
      setAnimatedYears(prev => {
        return Math.min(prev + yearsIncrement, experienceYrs);
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

  return (
    <div className="container mx-auto px-4 pb-40">
      {/* Background title */}
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className={`pt-4 w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-white text-center mb-4">  Héctor Colón Morales  </h1>
          <h1 className="text-white text-center mb-4"> <span className="text-gradient">{professionalTitle}</span>  </h1>
          <h3 className="text-white text-center mb-4">Geospatial | Healthcare | Cloud Infrastructure | Scalable UI/UX</h3>
          <div className="text-gray-300 space-y-6 mt-8 text-lg text-center">
            <p>Eager to Build, Learn, and Ship — Turning New Technologies into Scalable, Real-World Solutions Through Hands-On Full-Stack Development.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-800/30 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-6xl font-bold text-white">
                  {Math.floor(animatedYears)}<span className="text-xl">+</span>
                </h2>
                <p className="text-gradient mt-2 text-xl">Years of Experience</p>
              </div>
              <div className="text-center p-6 bg-gray-800/30 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-6xl font-bold text-white">
                  {Math.floor(animatedCerts)}
                </h2>
                <p className="text-gradient mt-2 text-xl">AWS Certification</p>
              </div>
              <div className="text-center p-6 bg-gray-800/30 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-6xl font-bold text-white">
                  {Math.floor(animatedLangs)}<span className="text-xl">+</span>
                </h2>
                <p className="text-gradient mt-2 text-xl">Programming Language Skills</p>
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
  );
};

export default AboutMe;