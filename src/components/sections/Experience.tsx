import { workExperience } from "@/constants/work_experience"
import TimelineItem from "../ui/experience-timeline/TimelineItem"

interface ExpereinceProps {
    isMobile?: boolean
}

const Experience = ({ 
  isMobile = false,
}: ExpereinceProps) => {
    return (<div id='experience' className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
            <div className="container mx-auto px-4">
              {/* Background title */}
              <div className="absolute top-24 left-0 w-full text-center">
                <h1 className="big-title text-gradient pb-16">WORK</h1>
              </div>
    
              <div className="pt-4 text-center animate-fade-in">
                <h1 className="text-white">
                  <span className="text-gradient">Experience</span>
                </h1>
                <p className={isMobile ? "pt-8 p-4 text-gray-400 mt-4 max-w-2xl mx-auto text-justify" : "pt-4 text-gray-400 mt-4 max-w-2xl mx-auto text-justify"}>
                  My professional journey has equipped me with diverse experience in software development—from building user interfaces to developing complex backend systems—as well as teaching STEM concepts to high school students through hands-on programming, electronics, and robotics projects.
                </p>
              </div>
    
              <div className="relative max-w-3xl mx-auto animate-slide-up">
                {/* Network pattern background */}
                <div className="absolute inset-0 bg-network-pattern opacity-10 z-0"></div>
    
                {/* Timeline */}
                <div className={isMobile ? "relative z-10 py-8 p-4" : "relative z-10 py-8"}>
                  {workExperience.map((exp, index) => (
                    <TimelineItem
                      key={index}
                      title={exp.title}
                      type={exp.type}
                      company={exp.company}
                      period={exp.period}
                      description={exp.description}
                      isLast={index === workExperience.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>)
}

export default Experience