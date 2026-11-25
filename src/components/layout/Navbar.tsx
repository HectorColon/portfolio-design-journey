import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';
import { prefersReducedMotion } from '@/hooks/use-in-view';
import { nameTitle } from '@/constants/title';

const links = [
  { text: "About Me", href: "about" },
  { text: "Skills/Certifications", href: "skills" },
  { text: "Experience", href: "experience" },
  // { text: "Blog", href: "/blog" },
  { text: "Contact Me", href: "contact" },
];

const linkClass = (active: boolean) =>
  cn(
    "relative px-1 py-2 text-base font-medium tracking-tight transition-colors duration-300",
    "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-gradient-to-r after:from-portfolio-primary after:to-portfolio-blue",
    "after:transition-transform after:duration-500 after:ease-out hover:text-white hover:after:scale-x-100",
    active ? "text-white after:scale-x-100" : "text-gray-400 after:scale-x-0"
  );

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');
  const isMobile = useIsMobile();
  const { pathname } = useLocation();

  const scrollToDiv = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
  };

  // Shrink the bar after the first scroll and track which section is in view.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 24);
      const line = window.innerHeight * 0.35;
      let current = 'about';
      for (const l of links) {
        const el = document.getElementById(l.href);
        if (el && el.getBoundingClientRect().top <= line) current = l.href;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const renderLinks = (mobile: boolean) =>
    pathname === '/blog' ? (
      <Link to="/" className={linkClass(false)} onClick={() => setIsMenuOpen(false)}>
        Home
      </Link>
    ) : (
      links.map((link, index) => (
        <Link
          key={link.href}
          to={link.text == 'Blog' ? link.href : pathname == '/notfound' ? "/" : ""}
          className={cn(linkClass(active === link.href), mobile && "text-lg")}
          style={mobile ? { transitionDelay: isMenuOpen ? `${index * 60 + 80}ms` : '0ms' } : undefined}
          aria-current={active === link.href ? 'true' : undefined}
          onClick={() => { scrollToDiv(link.href); setIsMenuOpen(false); }}
        >
          {link.text}
        </Link>
      ))
    );

  return (
    <nav
      className={cn(
        "w-full fixed top-0 left-0 z-50 backdrop-blur-md transition-all duration-500 border-b",
        scrolled ? "py-3 bg-black/85 border-white/10" : "py-6 bg-black/60 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button
          type="button"
          onClick={() => scrollToDiv('about')}
          className="text-xl font-bold tracking-tight text-gradient"
        >
          {nameTitle}
        </button>

        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className={cn("w-6 h-0.5 bg-white mb-1.5 transition-all duration-300", isMenuOpen && "translate-y-2 rotate-45")} />
            <div className={cn("w-6 h-0.5 bg-white mb-1.5 transition-all duration-300", isMenuOpen && "opacity-0")} />
            <div className={cn("w-6 h-0.5 bg-white transition-all duration-300", isMenuOpen && "-translate-y-2 -rotate-45")} />
          </button>
        ) : (
          <div className="flex gap-8">{renderLinks(false)}</div>
        )}
      </div>

      {/* Mobile menu: always mounted so it can animate open and closed */}
      {isMobile && (
        <div
          className={cn(
            "absolute top-full left-0 w-full overflow-hidden bg-black/95 border-b border-white/10 transition-[max-height,opacity] duration-500 ease-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-2 py-6">{renderLinks(true)}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
