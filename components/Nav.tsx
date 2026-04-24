"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLogoEasterEgg } from "./LogoEasterEgg";
import ThemeToggle from "./ThemeToggle";

type NavItem = {
  href: string;
  label: string;
  match: (pathname: string) => boolean;
};

const items: NavItem[] = [
  {
    href: "/",
    label: "Work",
    match: (p) => p === "/",
  },
  {
    href: "/about",
    label: "About",
    match: (p) => p.startsWith("/about"),
  },
  {
    href: "/hire",
    label: "Hire me",
    match: (p) => p.startsWith("/hire"),
  },
];

export default function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolledPast, setScrolledPast] = useState(false);
  const { onLogoClick, overlay: logoEggOverlay } = useLogoEasterEgg();
  const isPastHero = !isHomePage || scrolledPast;

  useEffect(() => {
    if (!isHomePage) return;

    const onScroll = () => {
      const y = window.scrollY;
      const threshold = Math.max(window.innerHeight * 0.6, 400);
      setScrolledPast(y > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHomePage]);

  const handleLogoClick = () => {
    onLogoClick();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {pathname === "/" ? (
        <button
          type="button"
          onClick={handleLogoClick}
          aria-label="Scroll to top"
          className="group fixed top-5 left-6 z-50 cursor-pointer font-mono text-base text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
        >
          <span className="text-secondary/70 transition-colors group-hover:text-secondary">[</span>
          <span className="tracking-tight">LM</span>
          <span className="text-secondary/70 transition-colors group-hover:text-secondary">]</span>
          <span aria-hidden="true" className="ml-0.5 text-accent">·</span>
        </button>
      ) : (
        <Link
          href="/"
          onClick={onLogoClick}
          aria-label="Home"
          className="group fixed top-5 left-6 z-50 font-mono text-base text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
        >
          <span className="text-secondary/70 transition-colors group-hover:text-secondary">[</span>
          <span className="tracking-tight">LM</span>
          <span className="text-secondary/70 transition-colors group-hover:text-secondary">]</span>
          <span aria-hidden="true" className="ml-0.5 text-accent">·</span>
        </Link>
      )}

      <nav
        aria-label="Primary"
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
      >
        <div
          className={`flex items-center gap-1 rounded-full border px-2 py-1.5 text-primary transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out ${
            isPastHero
              ? "border-edge bg-body/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)] backdrop-blur-md"
              : "border-transparent bg-transparent shadow-none backdrop-blur-none"
          }`}
        >
          {items.map((item) => {
            const isActive = item.match(pathname);
            const showActive = isActive && isPastHero;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-3 py-1.5 text-[11px] font-light uppercase tracking-[0.18em] transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current focus:outline-none sm:px-4 sm:text-xs ${
                  showActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {showActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
          <div
            className={`mx-1 h-5 w-px bg-edge transition-opacity duration-300 ease-out ${
              isPastHero ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
          <ThemeToggle />
        </div>
      </nav>
      {logoEggOverlay}
    </>
  );
}
