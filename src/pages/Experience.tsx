
import React from 'react';
import TimelineItem from '@/components/ui/experience-timeline/TimelineItem';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Wovenware",
      period: "2023 - Present",
      description: "Leading development of enterprise applications, mentoring junior developers, and implementing best practices for code quality and architecture."
    },
    {
      title: "Software Developer II",
      company: "Wovenware",
      period: "2021 - 2023",
      description: "Developed full-stack applications using Angular and .NET Core, collaborated with cross-functional teams, and participated in code reviews and technical planning sessions."
    },
    {
      title: "Software Developer I",
      company: "Wovenware",
      period: "2019 - 2021",
      description: "Implemented UI features using Angular, built RESTful APIs, and worked with SQL databases to deliver client solutions."
    },
    {
      title: "Computer Engineering Graduate",
      company: "University of Puerto Rico",
      period: "2019",
      description: "Completed bachelor's degree in Computer Engineering with focus on software development and system architecture."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-24 left-0 w-full">
          <h1 className="big-title">WORK</h1>
        </div>
        
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-white">
            <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey has equipped me with diverse experience in software development,
            from building user interfaces to developing complex backend systems.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto animate-slide-up">
          {/* Network pattern background */}
          <div className="absolute inset-0 bg-network-pattern opacity-10 z-0"></div>
          
          {/* Timeline */}
          <div className="relative z-10 py-8">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
