import { CSSProperties, useEffect, useRef, useState } from "react";
import { nameTitle, professionalTitle } from "@/constants/title";

interface LoadingScreenProps {
  /** Shortest time the screen stays up, in ms. It never leaves before the page and fonts are ready. */
  minDuration?: number;
  /**
   * Hold the screen until this is true (e.g. a lazy-loaded page has mounted).
   * Leave it undefined to wait only for the window load event and fonts.
   */
  ready?: boolean;
  /** Fires the moment the curtain starts lifting. Mount the page here so its entrance plays as the curtain rises. */
  onExitStart?: () => void;
  /** Fires once the curtain is gone and the component has unmounted itself. */
  onComplete?: () => void;
}

const EXIT_MS = 900;
const MAX_WAIT_MS = 6000;

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const LoadingScreen = ({ minDuration = 2200, ready, onExitStart, onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const pageReady = useRef(false);
  const gate = useRef(ready);
  gate.current = ready;
  const exitStart = useRef(onExitStart);
  const complete = useRef(onComplete);
  exitStart.current = onExitStart;
  complete.current = onComplete;

  // "Héctor Raúl" / "Colón Morales"
  const words = nameTitle.split(" ");
  const mid = Math.ceil(words.length / 2);
  const nameLines = [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];

  // Wait for the window load event and the web fonts, with a safety timeout.
  useEffect(() => {
    const done = () => { pageReady.current = true; };
    const loaded = new Promise<void>((res) => {
      if (document.readyState === "complete") res();
      else window.addEventListener("load", () => res(), { once: true });
    });
    const fonts = (document as any).fonts?.ready ?? Promise.resolve();
    Promise.all([loaded, fonts]).then(done, done);
    const t = window.setTimeout(done, MAX_WAIT_MS);
    return () => window.clearTimeout(t);
  }, []);

  // Start the entrance after first paint so the hidden state is actually rendered.
  useEffect(() => {
    let r2 = 0;
    const r1 = requestAnimationFrame(() => { r2 = requestAnimationFrame(() => setEntered(true)); });
    return () => { cancelAnimationFrame(r1); cancelAnimationFrame(r2); };
  }, []);

  // Eased progress: runs on its own, but holds at 90% until the page and fonts are ready.
  useEffect(() => {
    const duration = reducedMotion() ? 400 : minDuration;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      // Holds at 90% while the page, fonts or lazy chunk are still loading, then lands smoothly on 100.
      const loaded = pageReady.current && gate.current !== false;
      const value = loaded ? eased * 100 : Math.min(eased * 100, 90);
      setProgress(Math.round(value));
      if (value >= 100) setExiting(true);
      else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [minDuration]);

  // Lift the curtain, then unmount.
  useEffect(() => {
    if (!exiting) return;
    exitStart.current?.();
    // Lets the page start its own entrance animations exactly as the curtain lifts.
    document.documentElement.setAttribute("data-revealed", "");
    window.dispatchEvent(new Event("app:revealed"));
    const t = window.setTimeout(() => { setGone(true); complete.current?.(); }, reducedMotion() ? 0 : EXIT_MS);
    return () => window.clearTimeout(t);
  }, [exiting]);

  // Lock scrolling while the screen is up.
  useEffect(() => {
    if (gone) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = prev; };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      data-loading-screen=""
      data-entered={entered ? "" : undefined}
      className="ls-root fixed inset-0 z-[100] overflow-hidden bg-black"
      style={{
        transform: exiting ? "translate3d(0,-100%,0)" : "none",
        transition: `transform ${EXIT_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
      }}
    >
      <style>{`
        .ls-line{display:block;overflow:hidden;padding-block:.1em;margin-block:-.1em}
        .ls-line>span{display:block;transform:translate3d(0,108%,0);transition:transform 1.1s cubic-bezier(.16,1,.3,1);transition-delay:var(--d,0ms)}
        [data-entered] .ls-line>span{transform:none}
        .ls-fade{opacity:0;transform:translate3d(0,12px,0);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);transition-delay:var(--d,0ms)}
        [data-entered] .ls-fade{opacity:1;transform:none}
        .ls-exit-fade{transition:opacity .5s ease}
        @keyframes ls-drift-a{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(-6%,8%,0) scale(1.12)}}
        @keyframes ls-drift-b{0%{transform:translate3d(0,0,0) scale(1.05)}100%{transform:translate3d(8%,-6%,0) scale(.95)}}
        @media (prefers-reduced-motion: reduce){
          .ls-root *{animation:none!important;transition-duration:.01ms!important;transition-delay:0ms!important}
        }
      `}</style>

      {/* Colour, all from the portfolio palette */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 right-[-12%] h-[38rem] w-[38rem] rounded-full bg-portfolio-primary/20 blur-[120px]" style={{ animation: "ls-drift-a 14s ease-in-out infinite alternate" }} />
        <div className="absolute bottom-[-10%] left-[-14%] h-[30rem] w-[30rem] rounded-full bg-portfolio-blue/10 blur-[120px]" style={{ animation: "ls-drift-b 18s ease-in-out infinite alternate" }} />
      </div>

      <div className="ls-exit-fade relative flex h-full flex-col justify-between px-6 py-8 md:px-12 md:py-12" style={{ opacity: exiting ? 0 : 1 }}>
        <p className="ls-fade font-display text-sm tracking-tight text-gray-400" style={{ "--d": "100ms" } as CSSProperties}>
          Portfolio
        </p>

        <div>
          <h1
            aria-label={nameTitle}
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(2.4rem, 9vw, 7rem)", lineHeight: 1, letterSpacing: "-0.045em" }}
          >
            {nameLines.map((line, i) => (
              <span key={line} className="ls-line" aria-hidden>
                <span style={{ "--d": `${150 + i * 130}ms` } as CSSProperties}>{line}</span>
              </span>
            ))}
          </h1>
          <p
            className="ls-fade mt-6 w-fit max-w-full bg-gradient-to-r from-portfolio-primary to-portfolio-blue bg-clip-text font-display text-xl font-medium tracking-tight text-transparent md:text-3xl"
            style={{ "--d": "560ms" } as CSSProperties}
          >
            {professionalTitle}
          </p>
        </div>

        <div className="ls-fade" style={{ "--d": "700ms" } as CSSProperties}>
          <div className="mb-4 flex items-end justify-between">
            <span className="font-display text-sm tracking-tight text-gray-400">Loading</span>
            <span
              className="font-display text-6xl font-semibold leading-none tracking-tight text-white md:text-8xl"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {progress}
              <span className="ml-1 align-top text-2xl text-portfolio-primary md:text-4xl">%</span>
            </span>
          </div>
          <div className="h-px w-full bg-gray-800">
            <div
              className="h-full w-full origin-left bg-gradient-to-r from-portfolio-primary to-portfolio-blue"
              style={{ transform: `scaleX(${progress / 100})`, transition: "transform 200ms linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Render this inside <Suspense>, next to the lazy content. React only mounts it once
 * everything in the boundary has loaded, so it is the "chunk arrived" signal.
 */
export const ReadySignal = ({ onReady }: { onReady: () => void }) => {
  useEffect(() => { onReady(); }, []);
  return null;
};

export default LoadingScreen;