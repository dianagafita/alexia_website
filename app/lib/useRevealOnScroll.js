"use client";
import { useEffect, useRef } from "react";

export function useRevealOnScroll() {
  const rootRef = useRef(null);

  useEffect(() => {
    const rootEl = rootRef.current;
    const scope = rootEl || document;
    const elements = scope.querySelectorAll
      ? scope.querySelectorAll(".reveal")
      : [];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return rootRef;
}



