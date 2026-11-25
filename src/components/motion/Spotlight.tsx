import { HTMLAttributes, PointerEvent } from "react";
import { cn } from "@/lib/utils";

/** A panel whose edge and surface are lit by the pointer (styles: .spotlight in index.css). */
const Spotlight = ({ className, onPointerMove, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    onPointerMove?.(e);
  };
  return <div className={cn("spotlight", className)} onPointerMove={handleMove} {...rest} />;
};

export default Spotlight;
