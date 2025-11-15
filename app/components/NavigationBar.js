"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent background scroll when the mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`flex justify-between items-center pt-5 pb-3 ${scrolled ? "px-10" : "mx-10"} border-b hairline-b border-[#ededed]/40 fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
          scrolled ? "bg-[#151515]/100" : ""
        }`}
      >
        <div className="flex gap-5 items-center">
          <div>LOGO HERE</div>
          <nav className={`${open ? "hidden" : "hidden md:flex"} gap-5`}>
            <Link className="link-underline" href="/">
              ACASA
            </Link>
            <Link className="link-underline" href="/about">
              DESPRE NOI
            </Link>
            <Link className="link-underline" href="/services">
              SERVICII
            </Link>
            <Link className="link-underline" href="/contact">
              CONTACT
            </Link>
          </nav>
        </div>

        <div className={`${open ? "hidden" : "hidden md:block"}`}>
          +(07) 852 639 214
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded border border-[#ededed]/30"
          aria-label="Toggle menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          MENIU
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-[200] w-svw h-svh bg-[rgba(21,21,21,0.98)] overflow-y-auto">
          <div className="flex justify-between items-center px-10 pt-5 pb-3 border-b hairline-b border-[#ededed]/15">
            <div>LOGO HERE</div>
            <button
              className="inline-flex items-center justify-center "
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
          <nav className="px-10 py-6 flex flex-col gap-6 text-lg">
            <a
              className="link-underline anim-menu anim-delay-1"
              href="/"
              onClick={() => setOpen(false)}
            >
              HOME PAGE
            </a>
            <a
              className="link-underline anim-menu anim-delay-2"
              href="/about"
              onClick={() => setOpen(false)}
            >
              ABOUT
            </a>
            <a
              className="link-underline anim-menu anim-delay-3"
              href="/services"
              onClick={() => setOpen(false)}
            >
              SERVICES
            </a>
            <a
              className="link-underline anim-menu anim-delay-4"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              CONTACT
            </a>
            <span className="opacity-70 pt-2">+(07) 852 639 214</span>
          </nav>
        </div>
      )}
    </>
  );
}
