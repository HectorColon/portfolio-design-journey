
import React, { useEffect, useState } from 'react';
import SkillBar from '@/components/ui/skill-bar/SkillBar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Skills = () => {
  const frameworks = [
    { name: 'Angular', percentage: 100 },
    { name: 'React', percentage: 25 },
    { name: 'Bootstrap', percentage: 75 },
  ];
  
  const languages = [
    { name: 'Python', percentage: 75 },
    { name: 'TypeScript', percentage: 100 },
    { name: 'JavaScript', percentage: 100 },
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 100 },
    { name: 'Bash', percentage: 25 },
    { name: 'Shell', percentage: 25 },
  ];
  
  const tools = [
    { name: 'Adobe XD', percentage: 75 },
    { name: 'GitKraken', percentage: 100 },
    { name: 'GitHub', percentage: 100 },
    { name: 'Docker', percentage: 50 },
    { name: 'Kubernetes', percentage: 50 },
    { name: 'Firebase', percentage: 50 },
    { name: 'Amazon Web Services', percentage: 75 },
    { name: 'Jenkins CI/CD', percentage: 25 },
    { name: 'Postman', percentage: 75 },
    { name: 'PyCharm', percentage: 75 },
    { name: 'Bootstrap Studio', percentage: 50 },
    { name: 'Firebase Studio', percentage: 25 },
  ];

  const databases = [
    { name: 'AWS - DynamoDB', percentage: 100 },
  ]

  const softskills = [
    { name: 'Team Collaboration', percentage: 100 },
    { name: 'Problem Solving', percentage: 100 },
    { name: 'Agile Methodologies', percentage: 100 },
    { name: 'Team Leading', percentage: 100 },
  ]

  const cloud = [
    { name: 'AWS - IAM', percentage: 100 },
    { name: 'AWS - Lambda', percentage: 100 },
    { name: 'AWS - SNS', percentage: 100 },
    { name: 'AWS - SQS', percentage: 100 },
    { name: 'AWS - CloudWatch', percentage: 100 },
    { name: 'AWS - Event Bridge', percentage: 100 },
    { name: 'AWS - API Gateway', percentage: 100 },
    { name: 'AWS - S3', percentage: 100 },
    { name: 'AWS - EC2', percentage: 75 },
  ]

  const devops = [
    { name: 'CI/CD', percentage: 75 },
    { name: 'Jenkins', percentage: 75 },
  ]

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
    if (windowSize < 900) {
      setJustifyContent("center");
    } else  {
      setJustifyContent("space-between");
    }
  }, [windowSize]);


  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-24 left-0 w-full text-center">
          <h1 className={windowSize < 1200 ? "big-title-certification text-gradient" : "big-title text-gradient pb-16"}>CERTIFICATIONS</h1>
        </div>
        
        
        <div className="pt-4 text-center animate-fade-in">
          <h1 className="text-white">
            <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto pb-4 pt-4">
            I've developed expertise in various technologies and tools throughout my career.
            Here's a comprehensive overview of my technical skills and certifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-slide-up">
          {/* Frameworks Section */}
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl text-white font-semibold mb-6">Frameworks</h3>
            <div className="space-y-4">
              {frameworks.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            
            <h3 className="text-xl text-white font-semibold mt-8 mb-6">Languages</h3>
            <div className="space-y-4">
              {languages.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            <h3 className="text-xl text-white font-semibold mt-8 mb-6">Databases</h3>
            <div className="space-y-4">
              {databases.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            <h3 className="text-xl text-white font-semibold mt-8 mb-6">Soft Skills</h3>
            <div className="space-y-4">
              {softskills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
             <h3 className="text-xl text-white font-semibold mt-8 mb-6">DevOps</h3>
            <div className="space-y-4">
              {devops.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
          
          {/* Tools Section */}
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl text-white font-semibold mb-6">Tools</h3>
            <div className="space-y-4">
              {tools.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            <h3 className="text-xl text-white font-semibold mt-8 mb-6">Cloud</h3>
            <div className="space-y-4">
              {cloud.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8">
          {/* Certifications Section */}
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl text-white font-semibold mb-6">Certifications</h3>
            <div className="flex flex-start flex-wrap items-center"  style={{justifyContent: justifyContent, justifyItems:"center"}}>
              <div className="flex flex-row items-center p-2" style={{justifyItems:"center", width: "400px"}}>
                <div className="w-48 h-48">
                <img 
                  src="src/items/aws-cloud-quest-cloud-practitioner.png" 
                  alt="AWS Cloud Quest: Cloud Practitioner"
                  className="w-full h-full object-contain"
                />
                </div>
                <div className="text-center mt-4" style={{width:"192px"}}>
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
              <div className="flex flex-row items-center p-2" style={{justifyItems:"center", width: "400px"}}>
                <div className="w-48 h-48">
                <img 
                  width="192px"
                  src="src/items/aws-certified-cloud-practitioner.png" 
                  alt="AWS Certified Cloud Practitioner"
                  className="object-contain"
                />
                </div>
                <div className="text-center mt-4" style={{width:"192px"}}>
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
              <div className="flex flex-row items-center p-2" style={{justifyItems:"center", width: "400px"}}>
                <div className="w-48 h-48">
                <img 
                  width="192px"
                  src="src/items/aws-certified-developer-associate.png" 
                  alt="AWS Certified Developer - Associate"
                  className="object-contain"
                />
                </div>
                <div className="text-center mt-4 pr-4" style={{width:"192px"}}>
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
            <Link to="/contact">
              <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
                Contact Me
              </Button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Skills;
