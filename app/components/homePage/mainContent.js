"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";
import { useParallax } from "../../lib/useParallax";

export default function MainContent() {
  const ref = useRevealOnScroll();
  const bgRef = useParallax(0.02);
  const router = useRouter();
  return (
    <div
      ref={ref}
      className="relative w-full flex flex-col justify-center items-start min-h-[70vh] md:px-10 py-30 md:py-40 xs:py-20"
    >
      <section className="max-w-[920px]">
        <p className="tracking-widest text-xs opacity-60 reveal">
          CONSULTANȚĂ ACHIZIȚII PUBLICE
        </p>
        <h1 className="mt-3 text-5xl leading-tight reveal reveal-delay-1">
          De la A la Z în Achiziții Publice
        </h1>
        <p className="mt-5 text-base max-w-[720px] opacity-80 reveal reveal-delay-2">
          Oferim suport strategic operatorilor economici pentru participarea la
          licitații publice, de la planificare la finalizarea procedurii – totul
          online și orientat spre rezultate.
        </p>
        <p className="mt-4 text-base max-w-[720px] opacity-70 reveal reveal-delay-2">
          Îți duci businessul la nivelul următor, iar noi suntem alături de
          tine, pas cu pas. Economisești timp, reduci riscul și îți crești
          șansele de câștig.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 reveal reveal-delay-3">
          <button
            type="button"
            className="px-5 py-2 rounded-full btn-outline"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el && el.scrollIntoView) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.location.hash = "#contact";
              }
            }}
          >
            Programează o discuție
          </button>
          <button
            type="button"
            className="px-5 py-2 rounded-full btn-outline"
            onClick={() => {
              router.push("/#pachete");
            }}
          >
            Vezi pachetele
          </button>
        </div>
      </section>
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 opacity-30 will-change-transform"
      >
        {/* Mobile image */}
        <Image
          src="/images/main-image-small.jpeg"
          alt="Hero background"
          className="w-full h-full object-cover block md:hidden"
          width={800}
          height={600}
          priority
        />
        {/* Desktop image */}
        <Image
          src="/images/office-modern-brown.jpg"
          alt="Hero background"
          className="w-full h-full object-cover hidden md:block"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="absolute bottom-0 left-10 right-10 border-b hairline-b border-[#ededed]/20" />
    </div>
  );
}
