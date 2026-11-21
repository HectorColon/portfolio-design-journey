import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { professionalTitle, nameTitle } from "@/constants/title";
import CountUp from "../motion/CountUp";
import { prefersReducedMotion } from "@/hooks/use-in-view";

interface AboutMeProps {
  scrollToDiv: any
}

const specialties = "Geospatial | Healthcare | Cloud Infrastructure | Scalable UI/UX".split("|").map(s => s.trim());

const AboutMe = ({ scrollToDiv }: AboutMeProps) => {
  const [ready, setReady] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  // Assuming experience starts in 2020, Oct 2019 for Front-End Developer role, but using 2020 for simplicity and to account for the fact that the first few months may not be full experience. Adjust as needed based on actual start date and how you want to represent it.
  const experienceYrs = new Date().getFullYear() - 2019;

  const stats = [
    { value: experienceYrs, suffix: "+", label: "Years of Experience" },
    { value: 2, suffix: "", label: "AWS Certification" },
    { value: 5, suffix: "+", label: "Programming Language Skills" },
  ];

  // Name split over two lines, e.g. "Héctor Raúl" / "Colón Morales"
  const words = nameTitle.split(" ");
  const mid = Math.ceil(words.length / 2);
  const nameLines = [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];

  // Start the entrance after first paint so the hidden state is actually rendered.
  useEffect(() => {
    let r2 = 0;
    const r1 = requestAnimationFrame(() => { r2 = requestAnimationFrame(() => setReady(true)); });
    return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2); };
  }, []);

  // A soft light that trails the pointer across the hero.
  useEffect(() => {
    const el = heroRef.current;
    if (!el || prefersReducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;
    let tx = el.clientWidth * 0.7, ty = el.clientHeight * 0.3;
    let cx = tx, cy = ty, raf = 0;
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.setProperty("--hx", `${cx}px`);
      el.style.setProperty("--hy", `${cy}px`);
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    el.addEventListener("pointermove", onMove);
    loop();
    return () => { el.removeEventListener("pointermove", onMove); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={heroRef} data-ready={ready ? "" : undefined} className="relative">
      {/* Light and colour, all from the existing palette */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 bottom-0 overflow-hidden">
        <div className="absolute -top-10 right-[-12%] h-[38rem] w-[38rem] rounded-full bg-portfolio-primary/20 blur-[120px] animate-drift" />
        <div className="absolute top-[35%] left-[-14%] h-[30rem] w-[30rem] rounded-full bg-portfolio-blue/10 blur-[120px] animate-drift-slow" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(640px circle at var(--hx, 70%) var(--hy, 30%), rgba(155,135,245,0.14), transparent 65%)" }}
        />
      </div>

      <div className="container relative mx-auto px-4 pb-32 md:pb-40">
        <div>
          <h1 aria-label={nameTitle} className="font-bold text-white" style={{ fontSize: "clamp(2.6rem, 10.5vw, 8.5rem)", lineHeight: 1, letterSpacing: "-0.045em" }}>
            {nameLines.map((line, i) => (
              <span key={line} className="mask-line" aria-hidden>
                <span style={{ "--d": `${120 + i * 130}ms` } as React.CSSProperties}>{line}</span>
              </span>
            ))}
          </h1>

          <p className="seq mt-8 md:mt-10 font-display text-2xl md:text-4xl font-medium tracking-tight text-gradient w-fit max-w-full" style={{ "--d": "520ms" } as React.CSSProperties}>
            {professionalTitle}
          </p>

          <ul className="seq mt-6 flex flex-wrap gap-y-2 font-display text-base md:text-lg text-gray-400" style={{ "--d": "680ms" } as React.CSSProperties}>
            {specialties.map((s) => (
              <li key={s} className="pr-4 mr-4 border-r border-gray-700 last:border-r-0 last:mr-0 last:pr-0">{s}</li>
            ))}
          </ul>

          <p className="seq mt-10 max-w-[34rem] text-xl md:text-2xl leading-[1.55] text-gray-300" style={{ "--d": "820ms" } as React.CSSProperties}>
            Eager to Build, Learn, and Ship — Turning New Technologies into Scalable, Real-World Solutions Through Hands-On Full-Stack Development.
          </p>

          <div className="seq mt-10" style={{ "--d": "960ms" } as React.CSSProperties}>
            <Button onClick={() => scrollToDiv('skills')} className="btn-shine bg-portfolio-primary hover:bg-portfolio-secondary text-white text-lg px-8 py-6 transition-all duration-300 hover:ring-2 hover:ring-portfolio-primary hover:ring-offset-2 hover:ring-offset-black">
              Explore My Skills
            </Button>
          </div>

          <div className="seq mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-3 border-t border-gray-800" style={{ "--d": "1100ms" } as React.CSSProperties}>
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 sm:px-8 sm:first:pl-0 sm:border-l sm:first:border-l-0 border-gray-800">
                <div className="font-display font-semibold text-white text-6xl md:text-7xl tracking-tight leading-none">
                  <CountUp to={stat.value} />
                  {stat.suffix && <span className="ml-1 inline-block align-top mt-1 md:mt-2 text-3xl md:text-4xl leading-none text-portfolio-primary">{stat.suffix}</span>}
                </div>
                <p className="mt-3 font-display text-base md:text-lg text-gradient w-fit">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
