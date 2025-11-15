"use client";
import { useEffect } from "react";

export default function EnableReveal() {
  useEffect(() => {
    document.documentElement.classList.add("has-reveal");
    return () => {
      document.documentElement.classList.remove("has-reveal");
    };
  }, []);
  return null;
}


