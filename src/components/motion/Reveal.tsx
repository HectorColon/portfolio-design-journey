import { createElement, CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

type Variant = "rise" | "fade" | "mask" | "wipe";

interface RevealProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/** Scroll-triggered entrance. The visual states live in index.css ([data-reveal]). */
const Reveal = ({
  as = "div",
  variant = "rise",
  delay = 0,
  className,
  style,
  children,
}: RevealProps) => {
  const [ref, inView] = useInView<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className,
      "data-reveal": variant,
      "data-in": inView ? "" : undefined,
      style: { ...style, "--d": `${delay}ms` } as CSSProperties,
    },
    variant === "mask" ? <span className="reveal-inner">{children}</span> : children
  );
};

export default Reveal;
