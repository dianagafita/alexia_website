"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        className={`flex items-center justify-between gap-6 pt-5 pb-3 px-5 ${
          scrolled ? "md:px-10" : "md:mx-10 md:px-0"
        } border-b hairline-b border-[#ededed]/40 fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 bg-[#151515] ${
          scrolled ? "" : "md:bg-transparent"
        }`}
      >
        <div className="flex items-center gap-5 flex-shrink-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2"
            aria-label="Achip Consulting"
          >
            <Image
              src="/logo.png"
              alt="Achip Consulting"
              width={180}
              height={60}
              className="h-[3rem] w-auto object-contain nav-logo"
              priority
            />
          </Link>
        </div>

        <nav className={`${open ? "hidden" : "hidden md:flex"} gap-5 ml-auto`}>
          <Link className="link-underline nav-link" href="/">
            ACASA
          </Link>
          <Link className="link-underline nav-link" href="/about">
            DESPRE NOI
          </Link>
          <Link className="link-underline nav-link" href="/services">
            SERVICII
          </Link>
          <Link className="link-underline nav-link" href="/contact">
            CONTACT
          </Link>
        </nav>

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
          <div className="flex justify-between items-center px-5 pt-5 pb-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Achip Consulting"
            >
              <Image
                src="/logo.png"
                alt="Achip Consulting"
                width={180}
                height={60}
                className="h-[3rem] w-auto object-contain nav-logo"
                priority
              />
            </Link>
            <button
              className="inline-flex items-center justify-center"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
          <nav className="py-10 flex flex-col items-center gap-6 text-lg">
            <Link
              className="link-underline nav-link anim-menu anim-delay-1 w-fit"
              href="/"
              onClick={() => setOpen(false)}
            >
              ACASA
            </Link>
            <Link
              className="link-underline nav-link anim-menu anim-delay-2 w-fit"
              href="/about"
              onClick={() => setOpen(false)}
            >
              DESPRE NOI
            </Link>
            <Link
              className="link-underline nav-link anim-menu anim-delay-3 w-fit"
              href="/services"
              onClick={() => setOpen(false)}
            >
              SERVICII
            </Link>
            <Link
              className="link-underline nav-link anim-menu anim-delay-4 w-fit"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
