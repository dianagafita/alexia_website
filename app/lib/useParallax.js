"use client";
import { useEffect, useRef } from "react";

export function useParallax(speed = 0.25) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      el.style.transform = "none";
      return;
    }

    let rafId = 0;
    const update = () => {
      const y = window.scrollY * speed;
      el.style.transform = `translateY(${y}px)`;
      rafId = 0;
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return ref;
}
