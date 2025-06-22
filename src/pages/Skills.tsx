
import React from 'react';
import SkillBar from '@/components/ui/skill-bar/SkillBar';

const Skills = () => {
  const frameworks = [
    { name: 'Angular', percentage: 75 },
    { name: 'React', percentage: 25 },
    { name: 'Bootstrap', percentage: 75 },
  ];
  
  const languages = [
    { name: 'Python', percentage: 75 },
    { name: 'TypeScript', percentage: 75 },
    { name: 'JavaScript', percentage: 50 },
    { name: 'HTML', percentage: 75 },
    { name: 'CSS', percentage: 75 },
    { name: 'Bash', percentage: 25 },
    { name: 'Shell', percentage: 25 },
  ];
  
  const tools = [
    { name: 'Adobe XD', percentage: 75 },
    { name: 'GitKraken', percentage: 100 },
    { name: 'GitHub', percentage: 100 },
    { name: 'Docker', percentage: 25 },
    { name: 'Kubernetes', percentage: 25 },
    { name: 'Firebase', percentage: 25 },
    { name: 'Amazon Web Services', percentage: 75 },
    { name: 'Jenkins CI/CD', percentage: 25 },
    { name: 'Postman', percentage: 75 },
    { name: 'PyCharm', percentage: 50 },
    { name: 'Bootstrap Studio', percentage: 50 },
    { name: 'Firebase Studio', percentage: 25 },
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
                  src="src/items/aws-cloud-quest-cloud-practitioner.png" 
                  alt="AWS Cloud Quest: Cloud Practitioner"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-lg text-white font-medium">AWS Cloud Quest</h4>
                <p className="text-gray-400 text-sm mt-1">Cloud Practitioner</p>
              </div>
              <div className="mt-8">
                <a 
                  href="https://www.credly.com/badges/d1e40f38-44bf-4685-ba11-6735bb251cd8/public_url" 
                  target="_blank"
                  className="text-portfolio-primary hover:underline text-sm"
                >
                  View Credential
                </a>
              </div>
              <br></br>
              <div className="w-48 h-48">
                <img 
                  src="src/items/aws-certified-cloud-practitioner.png" 
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
                  href="https://www.credly.com/badges/02edb229-1d77-4dd1-8fc6-9c46763d47b0/public_url" 
                  target="_blank"
                  className="text-portfolio-primary hover:underline text-sm"
                >
                  View Credential
                </a>
              </div>
              <br></br>
              <div className="w-48 h-48">
                <img 
                  src="src/items/aws-certified-developer-associate.png" 
                  alt="AWS Certified Developer - Associate"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-lg text-white font-medium">AWS Certified Developer</h4>
                <p className="text-gray-400 text-sm mt-1">Associate</p>
              </div>
              
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
  );
};

export default Skills;
