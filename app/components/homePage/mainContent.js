"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";
import { useParallax } from "../../lib/useParallax";

export default function MainContent() {
  const ref = useRevealOnScroll();
  const bgRef = useParallax(0.15);
  const router = useRouter();
  return (
    <div
      ref={ref}
      className="relative w-full flex flex-col justify-center items-start min-h-[70vh] px-10 py-20"
    >
      <section className="max-w-[900px]">
        <p className="tracking-widest text-xs opacity-60 reveal">
          CONSULTANȚĂ ACHIZIȚII PUBLICE
        </p>
        <h1 className="mt-3 text-5xl leading-tight reveal reveal-delay-1">
          Expertiză în Achiziții Publice
        </h1>
        <p className="mt-5 text-base max-w-[560px] opacity-70 reveal reveal-delay-2">
          Proceduri realizate impecabil, de la planificare la evaluare.
          Economisești timp, reduci riscul și crești șansele de succes.
        </p>
        <div className="mt-8 flex gap-4 reveal reveal-delay-3">
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
            Solicită ofertă
          </button>
          <button
            type="button"
            className="px-5 py-2 rounded-full btn-outline"
            onClick={() => router.push("/services")}
          >
            Vezi toate serviciile
          </button>
        </div>
      </section>
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 opacity-20 will-change-transform"
      >
        <Image
          src="/images/img1.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="absolute bottom-0 left-10 right-10 border-b hairline-b border-[#ededed]/20" />
    </div>
  );
}
