
import React from 'react';
import SkillBar from '@/components/ui/skill-bar/SkillBar';

const Skills = () => {
  const frameworks = [
    { name: 'Angular', percentage: 75 },
    { name: 'React', percentage: 100 }
  ];
  
  const languages = [
    { name: 'Python', percentage: 75 },
    { name: 'TypeScript', percentage: 100 },
    { name: 'JavaScript', percentage: 100 },
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 100 }
  ];
  
  const tools = [
    { name: 'Adobe XD', percentage: 75 },
    { name: 'GitKraken', percentage: 100 },
    { name: 'GitHub', percentage: 100 },
    { name: 'Docker', percentage: 100 },
    { name: 'Kubernetes', percentage: 75 },
    { name: 'Firebase', percentage: 50 },
    { name: 'Amazon Web Services', percentage: 100 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-24 left-0 w-full">
          <h1 className="big-title">CERTIFICATIONS</h1>
        </div>
        
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-white">
            <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I've developed expertise in various technologies and tools throughout my career.
            Here's a comprehensive overview of my technical skills and certifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
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
          </div>
          
          {/* Certifications Section */}
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl text-white font-semibold mb-6">Certifications</h3>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48">
                <img 
                  src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png" 
                  alt="AWS Certified Cloud Practitioner"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-lg text-white font-medium">AWS Cloud Practitioner</h4>
                <p className="text-gray-400 text-sm mt-1">Foundational</p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#" 
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
  );
};

export default Skills;
