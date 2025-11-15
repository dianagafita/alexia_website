 "use client";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";

export default function CaseStudies() {
  const ref = useRevealOnScroll();
  const items = [
    {
      title: "Echipamente medicale",
      result: "licitație câștigată",
    },
    {
      title: "Servicii IT pentru instituții",
      result: "proces optimizat",
    },
    {
      title: "Lucrări reabilitare",
      result: "documentație conformă",
    },
  ];
  return (
    <section ref={ref} className="px-10 py-16">
      <h2 className="text-3xl reveal">Studii de caz</h2>
      <div className="mt-8 space-y-8">
        {items.map((item, i) => (
          <div key={i} className="pb-6 border-b hairline-b border-[#ededed]/15 reveal">
            <div className="flex items-center justify-between card-hover">
              <h3 className="text-xl">{item.title}</h3>
              <span className="opacity-60 text-sm">{item.result}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

