import { skills } from "@/constants/skills"
import { Button } from "../ui/button"
import SkillBar from "../ui/skill-bar/SkillBar"

interface SkillsProps  {
    isMobile?: boolean
    scrollToDiv: any,
    justifyContent: string
}

const Skills = ({ 
  isMobile = false,
  justifyContent,
  scrollToDiv
}: SkillsProps) => {
    return (<div id="skills" className="min-h-screen pb-16 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          {/* Background title */}
          <div className="absolute left-0 w-full text-center">
            <h1 className={isMobile ? "big-title-certification text-gradient" : "big-title text-gradient pb-16"}>CERTIFICATIONS</h1>
          </div>


          <div className="pt-4 text-center animate-fade-in">
            <h1 className="text-white">
              <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto pb-4 pt-4 text-justify">
              I've developed expertise in various technologies and tools throughout my career.
              Here's a comprehensive overview of my technical skills and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-slide-up">
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <div className="space-y-10">
                {skills.filter(item => item.category != 'Tools' && item.category != 'Cloud').map((skill, index) => (
                  <div key={index}> {/* Key for the outer element */}
                    <h3 className="text-xl text-white font-semibold mb-6">{skill.category}</h3>
                    <ul>
                      {skill.items.map((item, itemIndex) => (
                        <SkillBar
                          key={itemIndex}
                          name={item.name}
                          percentage={item.percentage}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <div className="space-y-10">
                {skills.filter(item => item.category == 'Tools' || item.category == 'Cloud').map((skill, index) => (
                  <div key={index}> {/* Key for the outer element */}
                    <h3 className="text-xl text-white font-semibold mb-6">{skill.category}</h3>
                    <ul>
                      {skill.items.map((item, itemIndex) => (
                        <SkillBar
                          key={itemIndex}
                          name={item.name}
                          percentage={item.percentage}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8">
            {/* Certifications Section */}
            <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-white font-semibold mb-6">Certifications</h3>
              <div className="flex flex-start flex-wrap items-center" style={{ justifyContent: justifyContent, justifyItems: "center" }}>
                <div className="flex flex-row items-center p-2" style={{ justifyItems: "center", width: "400px" }}>
                  <div className="w-48 h-48">
                    <img
                      src="src/items/aws-cloud-quest-cloud-practitioner.png"
                      alt="AWS Cloud Quest: Cloud Practitioner"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center mt-4" style={{ width: "192px" }}>
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
                <div className="flex flex-row items-center p-2" style={{ justifyItems: "center", width: "400px" }}>
                  <div className="w-48 h-48">
                    <img
                      width="192px"
                      src="src/items/aws-certified-cloud-practitioner.png"
                      alt="AWS Certified Cloud Practitioner"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center mt-4" style={{ width: "192px" }}>
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
                <div className="flex flex-row items-center p-2" style={{ justifyItems: "center", width: "400px" }}>
                  <div className="w-48 h-48">
                    <img
                      width="192px"
                      src="src/items/aws-certified-developer-associate.png"
                      alt="AWS Certified Developer - Associate"
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center mt-4 pr-4" style={{ width: "192px" }}>
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
            <Button onClick={() => scrollToDiv('contact')} className="bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
              Contact Me
            </Button>
          </div>
        </div>
      </div>)
}

export default Skills