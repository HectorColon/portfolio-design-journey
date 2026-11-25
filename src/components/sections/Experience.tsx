import { useEffect, useRef } from "react"
import { workExperience } from "@/constants/work_experience"
import TimelineItem from "../ui/experience-timeline/TimelineItem"
import Reveal from "../motion/Reveal"
import Parallax from "../motion/Parallax"
import { prefersReducedMotion } from "@/hooks/use-in-view"

interface ExpereinceProps {
    isMobile?: boolean
}

const Experience = ({
  isMobile = false,
}: ExpereinceProps) => {
    const trackRef = useRef<HTMLDivElement>(null)

    // The timeline line fills as you scroll through it.
    useEffect(() => {
      const el = trackRef.current
      if (!el) return
      if (prefersReducedMotion()) {
        el.style.setProperty("--tl", "1")
        return
      }
      let raf = 0
      const update = () => {
        raf = 0
        const r = el.getBoundingClientRect()
        const p = (window.innerHeight * 0.6 - r.top) / r.height
        el.style.setProperty("--tl", String(Math.min(1, Math.max(0, p))))
      }
      const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
      update()
      window.addEventListener("scroll", onScroll, { passive: true })
      window.addEventListener("resize", onScroll)
      return () => {
        window.removeEventListener("scroll", onScroll)
        window.removeEventListener("resize", onScroll)
        if (raf) cancelAnimationFrame(raf)
      }
    }, [])

    return (<div id='experience' className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
            <div className="container mx-auto px-4">
              {/* Background title */}
              <div className="absolute top-24 left-0 w-full text-center">
                <Parallax speed={0.14}>
                  <div aria-hidden className="big-title text-gradient pb-16">WORK</div>
                </Parallax>
              </div>
    
              <div className="pt-4 text-center">
                <h1 className="text-white">
                  <Reveal as="span" variant="mask"><span className="text-gradient">Experience</span></Reveal>
                </h1>
                <Reveal as="p" variant="fade" delay={200} className={isMobile ? "pt-8 p-4 text-gray-400 mt-4 max-w-2xl mx-auto" : "pt-4 text-gray-400 mt-4 max-w-2xl mx-auto"}>
                  My professional journey has equipped me with diverse experience in software development—from building user interfaces to developing complex backend systems—as well as teaching STEM concepts to high school students through hands-on programming, electronics, and robotics projects.
                </Reveal>
              </div>
    
              <div className="relative max-w-3xl mx-auto">
                {/* Network pattern background */}
                <div className="absolute inset-0 bg-network-pattern opacity-10 z-0"></div>
    
                {/* Timeline */}
                <div className={isMobile ? "relative z-10 py-8 p-4" : "relative z-10 py-8"}>
                  <div ref={trackRef} className="relative">
                    <div
                      aria-hidden
                      className="absolute left-5 top-5 bottom-0 w-px -translate-x-1/2 bg-gray-800"
                      style={{ maskImage: "linear-gradient(to bottom, #000 calc(100% - 5rem), transparent)", WebkitMaskImage: "linear-gradient(to bottom, #000 calc(100% - 5rem), transparent)" }}
                    />
                    <div
                      aria-hidden
                      className="tl-fill absolute left-5 top-5 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-portfolio-primary to-portfolio-blue"
                      style={{ maskImage: "linear-gradient(to bottom, #000 calc(100% - 5rem), transparent)", WebkitMaskImage: "linear-gradient(to bottom, #000 calc(100% - 5rem), transparent)" }}
                    />
                    {workExperience.map((exp, index) => (
                      <Reveal key={exp.company} delay={0}>
                        <TimelineItem
                          company={exp.company}
                          type={exp.type}
                          items={exp.items}
                          isLast={index === workExperience.length - 1}
                        />
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>)
}

export default Experience
