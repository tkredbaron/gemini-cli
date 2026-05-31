"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  /** Render element, defaults to a div. */
  as?: ElementType;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** "up" = subtle fade/rise (body), "clip" = top-down wipe (headlines). */
  variant?: "up" | "clip";
  className?: string;
};

/**
 * Minimal, dependency-free scroll reveal. Adds `.is-visible` once the element
 * enters the viewport (then disconnects — one-shot, cheap). All motion is
 * defined in CSS and fully disabled under prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  as,
  delay = 0,
  variant = "up",
  className = "",
}: ScrollRevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const base = variant === "clip" ? "reveal-clip" : "reveal";
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Honour reduced motion: reveal immediately, skip the observer entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
