import { useEffect, useState } from "react";
import { useInView, prefersReducedMotion } from "@/hooks/use-in-view";

interface CountUpProps {
  to: number;
  duration?: number;
  className?: string;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Counts up once, when it scrolls into view. */
const CountUp = ({ to, duration = 1800, className }: CountUpProps) => {
  const [ref, inView] = useInView<HTMLSpanElement>({ rootMargin: "0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * easeOutExpo(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {value}
    </span>
  );
};

export default CountUp;
