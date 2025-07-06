
import React from 'react';
import TimelineItem from '@/components/ui/experience-timeline/TimelineItem';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer II",
      company: "Maxar",
      period: "Dec 2023 - Present",
      type: "work",
      description: "Led code reviews, design sessions, and team meetings to foster a collaborative, high-performing development environment. Partnered with cross-functional teams to resolve complex technical issues and ensure application reliability. Conducted rigorous testing and debugging for timely, high-quality project delivery. Monitored system performance bi-weekly, identifying improvements and mitigating risks. Oversaw junior developers through mentorship, pair programming, and code guidance. Also monitored and supported ETL workflows, ensuring data accuracy and optimal processing efficiency."
    },
    {
      title: "Software Developer I",
      company: "Maxar",
      period: "Dec 2022 - Dec 2023",
      type: "work",
      description: "Developed and integrated RESTful APIs to enhance system communication and application performance. Supported CI/CD workflows to ensure code quality and reliable deployments. Implemented a serverless AWS Lambda architecture to efficiently process over 44,000 data entries via ETL."
    },
    {
      title: "Front-End Lead",
      company: "NeoDeck Holdings Corp.",
      period: "Jan 2022 - Nov 2022",
      type: "work",
      description: "Led a team of 6 developers, delivering key features on time and boosting productivity by 20%. Improved deployment reliability by reducing bugs 40% through a release candidate process. Mentored team members to strengthen technical skills and foster growth. Managed microservices using Kubernetes (Lens IDE) and Docker with YAML templates."
    },
    {
      title: "Front-End Developer",
      company: "NeoDeck Holdings Corp.",
      period: "Oct 2019 - Jan 2022",
      type: "work",
      description: "Built interactive, scalable web applications with Angular, HTML, CSS, and TypeScript, improving user experience and front-end efficiency through clean, optimized code."
    },
    {
      title: "Computer Engineering Graduate",
      company: "Polytechnic University of Puerto Rico",
      period: "May 2018",
      type: "college",
      description: "Completed Bachelor's Degree in Computer Engineering."
    },
    {
      title: "S.T.E.M Instructor",
      company: "Upward Bound Program - Pontifical Catholic University of Puerto Rico",
      period: "Jun 2014 - feb 2020",
      type: "school",
      description: "Delivered STEM-focused instruction to high school students, emphasizing programming and engineering principles. Integrated hands-on activities using Basic Electricity, Arduino UNO (C/C++), PBASIC programming, and LEGO Mindstorms to develop problem-solving skills and computational thinking. Aimed to foster interest and prepare students for future careers in technology and engineering fields."
    },
    {
      title: "Capstone: Leader Standard Work",
      company: "Boston Scientific",
      period: "Aug 2017 - May 2018",
      type: "school",
      description: "Led a cross-functional team in the design and implementation of a web-based system enabling company directors to securely access their accounts and monitor tasks across multiple departments. Oversaw daily and weekly status reporting, ensured adherence to client testing protocols, and maintained compliance with established processes and documentation standards."
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-24 left-0 w-full text-center">
          <h1 className="big-title text-gradient pb-16">WORK</h1>
        </div>
        
        <div className="pt-4 text-center animate-fade-in">
          <h1 className="text-white">
            <span className="text-gradient">Experience</span>
          </h1>
          <p className="pt-4 text-gray-400 mt-4 max-w-2xl mx-auto">
          My professional journey has equipped me with diverse experience in software development—from building user interfaces to developing complex backend systems—as well as teaching STEM concepts to high school students through hands-on programming, electronics, and robotics projects.
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
                type={exp.type}
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
