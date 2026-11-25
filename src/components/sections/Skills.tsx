import { skills } from "@/constants/skills"
import { Button } from "../ui/button"
import SkillBar from "../ui/skill-bar/SkillBar"
import Reveal from "../motion/Reveal"
import Spotlight from "../motion/Spotlight"
import Parallax from "../motion/Parallax"

interface SkillsProps {
    isMobile?: boolean
    scrollToDiv: any,
    justifyContent: string
}

const certifications = [
  {
    src: "src/items/aws-cloud-quest-cloud-practitioner.png",
    alt: "AWS Cloud Quest: Cloud Practitioner",
    title: "AWS Cloud Quest",
    subtitle: "Cloud Practitioner",
    href: "https://www.credly.com/badges/d1e40f38-44bf-4685-ba11-6735bb251cd8/public_url",
  },
  {
    src: "src/items/aws-cloud-quest-generative-ai-practitioner-training.png",
    alt: "AWS Cloud Quest: Generative AI Practitioner",
    title: "AWS Cloud Quest",
    subtitle: "Generative AI Practitioner Trained",
    href: "https://www.credly.com/badges/74421a28-7793-4be5-a5ce-eeca347411d5/public_url",
  },
  {
    src: "src/items/aws-certified-cloud-practitioner.png",
    alt: "AWS Certified Cloud Practitioner",
    title: "AWS Cloud Practitioner",
    subtitle: "Foundational",
    href: "https://www.credly.com/badges/02edb229-1d77-4dd1-8fc6-9c46763d47b0/public_url",
  },
  {
    src: "src/items/aws-certified-developer-associate.png",
    alt: "AWS Certified Developer - Associate",
    title: "AWS Certified Developer",
    subtitle: "Associate",
    href: "https://www.credly.com/badges/7dd42138-a039-4ea0-ae9e-1b3d90ddc32b/public_url",
  }
]

const SkillPanel = ({ categories, delay }: { categories: typeof skills, delay: number }) => (
  <Reveal delay={delay}>
    <Spotlight className="h-full bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
      <div className="space-y-10">
        {categories.map((skill) => (
          <div key={skill.category}>
            <h3 className="text-xl text-white font-semibold mb-6">{skill.category}</h3>
            <ul>
              {skill.items.map((item, itemIndex) => (
                <SkillBar
                  key={item.name}
                  name={item.name}
                  percentage={item.percentage}
                  delay={itemIndex * 70}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Spotlight>
  </Reveal>
)

const Skills = ({
  isMobile = false,
  justifyContent,
  scrollToDiv
}: SkillsProps) => {
    const isRightColumn = (category: string) => category == 'Tools' || category == 'Cloud'

    return (<div id="skills" className="min-h-screen pb-16 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          {/* Background title */}
          <div className="absolute left-0 w-full text-center">
            <Parallax speed={0.14}>
              <div aria-hidden className={isMobile ? "big-title-certification text-gradient" : "big-title text-gradient pb-16"}>CERTIFICATIONS</div>
            </Parallax>
          </div>

          <div className="pt-4 text-center">
            <h1 className="text-white">
              <Reveal as="span" variant="mask"><span className="text-gradient">Skills</span></Reveal>
            </h1>
            <Reveal as="p" variant="fade" delay={200} className="text-gray-400 mt-4 max-w-2xl mx-auto pb-4 pt-4">
              I've developed expertise in various technologies and tools throughout my career.
              Here's a comprehensive overview of my technical skills and certifications.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <SkillPanel categories={skills.filter(item => !isRightColumn(item.category))} delay={0} />
            <SkillPanel categories={skills.filter(item => isRightColumn(item.category))} delay={140} />
          </div>

          <div className="pt-8">
            {/* Certifications Section */}
            <Reveal>
              <Spotlight className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl text-white font-semibold mb-6">Certifications</h3>
                <div className="flex flex-start flex-wrap items-center" style={{ justifyContent: justifyContent, justifyItems: "center" }}>
                  {certifications.map((cert, i) => (
                    <Reveal key={cert.title} delay={i * 120} className="group flex flex-row items-center p-2" style={{ justifyItems: "center", width: "400px", maxWidth: "100%" }}>
                      <div className="w-48 h-48 shrink-0">
                        <img
                          src={cert.src}
                          alt={cert.alt}
                          loading="lazy"
                          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="text-center mt-4 pr-4" style={{ width: "192px" }}>
                        <h4 className="text-lg text-white font-medium">{cert.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">{cert.subtitle}</p>
                        <div className="mt-8">
                          <a
                            href={cert.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display text-portfolio-primary hover:underline underline-offset-4 text-sm"
                          >
                            View Credential
                          </a>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          </div>
          <Reveal className="mt-16 text-center">
            <Button onClick={() => scrollToDiv('contact')} className="btn-shine bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
              Contact Me
            </Button>
          </Reveal>
        </div>
      </div>)
}

export default Skills
