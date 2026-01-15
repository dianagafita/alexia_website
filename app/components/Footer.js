"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20">
      <section className="py-16 border-t hairline-b border-[#ededed]/15">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="md:w-1/2 w-full flex flex-col gap-4">
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
                className="h-12 w-auto object-contain nav-logo"
              />
            </Link>
            <p className="opacity-80 max-w-sm text-sm">
              Consultanță completă pentru achiziții publice, cu procese 100%
              online și livrabile clare de la prima discuție.
            </p>
            <div className="flex gap-4 text-xs uppercase tracking-[0.3em] opacity-60">
              <span>LinkedIn</span>
              <span>Facebook</span>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col">
            <h4 className="opacity-70 uppercase tracking-[0.3em] text-xs">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 opacity-90">
              <li>
                Email:{" "}
                <a
                  href="mailto:contact@achipconsulting.ro"
                  className="link-underline"
                >
                  contact@achipconsulting.ro
                </a>
              </li>
              <li>Lucrăm 100% online, cu program flexibil.</li>
            </ul>
            <div className="mt-6">
              <a href="/contact" className="px-5 py-2 rounded-full btn-outline">
                Solicită ofertă
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 opacity-60 text-sm border-t hairline-b border-[#ededed]/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>
            © {new Date().getFullYear()} Achip Consulting. Toate drepturile
            rezervate.
          </span>
          <div className="space-x-4">
            <Link href="/privacy">Confidențialitate</Link>
            <Link href="/terms">Termeni</Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
