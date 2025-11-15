"use client";
import { useRevealOnScroll } from "../../lib/useRevealOnScroll";
import { useRouter } from "next/navigation";

export default function ServicesPreview() {
  const ref = useRevealOnScroll();
  const router = useRouter();
  const services = [
    {
      title: "Analiză preliminară & consultanță normativă",
      desc: "Interpretare legislativă, strategie și eligibilitate. Clarificăm pașii și riscurile.",
    },
    {
      title: "Elaborare documentație de atribuire",
      desc: "Caiet de sarcini, fișă de date, criterii, proiect de contract, clarificări.",
    },
    {
      title: "Managementul procesului de licitație",
      desc: "Planificare, publicare, primire oferte, comunicare, raportare, arhivare.",
    },
  ];
  return (
    <section ref={ref} className="px-10 py-16 max-w-[1200px] m-auto">
      <h2 className="text-3xl reveal">SERVICII</h2>

      <div className="flex flex-col md:flex-row mt-10 space-y-8 gap-8 border-b hairline-b border-[#ededed]/15 justify-between w-full xs:flex-wrap md:flex-nowrap">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col pb-6 xs:w-full md:w-[300px] reveal card-hover"
          >
            <h3 className="text-xl">{s.title}</h3>
            <p className="opacity-60 mt-2 ">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 reveal reveal-delay-2">
        <button
          type="button"
          className="px-5 py-2 rounded-full btn-outline"
          onClick={() => router.push("/services")}
        >
          Vezi toate serviciile
        </button>
      </div>
    </section>
  );
}
