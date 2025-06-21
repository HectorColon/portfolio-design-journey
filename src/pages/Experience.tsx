
import React from 'react';
import TimelineItem from '@/components/ui/experience-timeline/TimelineItem';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer II",
      company: "Maxar Intelligence",
      period: "Dec 2023 - Present",
      description: ""
    },
    {
      title: "Software Developer I",
      company: "Maxar Intelligence",
      period: "Dec 2022 - Dec 2023",
      description: ""
    },
    {
      title: "Front-End Lead",
      company: "NeoDeck Holdings Corp.",
      period: "Jan 2022 - Nov 2022",
      description: ""
    },
    {
      title: "Front-End Developer",
      company: "NeoDeck Holdings Corp.",
      period: "Oct 2019 - Jan 2022",
      description: ""
    },
    {
      title: "S.T.E.M Instructor",
      company: "Upward Bound Program - Pontifical Catholic University of Puerto Rico",
      period: "2016 - 2020",
      description: ""
    },
    {
      title: "Computer Engineering Graduate",
      company: "Polytechnic University of Puerto Rico",
      period: "2018",
      description: "Completed Bachelor's Degree in Computer Engineering."
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
