"use client";
import { useRevealOnScroll } from "../lib/useRevealOnScroll";

export default function ServicesPage() {
  const ref = useRevealOnScroll();

  const services = [
    {
      title: "Analiză preliminară & consultanță normativă",
      desc:
        "Context, eligibilitate, strategie de achiziție, evaluare riscuri și calendar propus.",
    },
    {
      title: "Elaborare documentație de atribuire",
      desc:
        "Caiet de sarcini, fișă de date, criterii de calificare/atribuire, proiect de contract.",
    },
    {
      title: "Managementul procesului de licitație",
      desc: "Planificare, publicare, clarificări, comunicare, raportare, arhivare.",
    },
    {
      title: "Asistență comisie de evaluare",
      desc: "Procedură, punctare, rapoarte, conformitate și trasabilitate.",
    },
    {
      title: "Consultanță contestații",
      desc: "Răspunsuri motivate, strategie, documentare, reprezentare.",
    },
    {
      title: "Sprijin ofertanți",
      desc: "Identificare oportunități, pregătire oferte, încărcare, livrabile finale.",
    },
  ];

  const packages = [
    {
      name: "Essentials",
      note: "Pentru proiecte mici/medii",
      features: [
        "Analiză preliminară",
        "Listă riscuri & recomandări",
        "Model documentație de bază",
      ],
    },
    {
      name: "Standard",
      note: "Majoritatea proiectelor",
      features: [
        "Documentație completă",
        "Management licitație",
        "Asistență evaluare",
      ],
    },
    {
      name: "Pro",
      note: "Proiecte complexe / accelerat",
      features: [
        "Strategie avansată",
        "Răspunsuri contestații",
        "Raport final & lecții învățate",
      ],
    },
  ];

  const steps = [
    { s: "01", t: "Analiză", d: "Obiective, buget, riscuri" },
    { s: "02", t: "Documente", d: "Caiet sarcini, criterii" },
    { s: "03", t: "Publicare", d: "Calendar, clarificări" },
    { s: "04", t: "Evaluare", d: "Punctare, rapoarte" },
    { s: "05", t: "Atribuire", d: "Decizie, arhivare" },
  ];

  return (
    <main ref={ref} className="min-h-screen px-10 py-20">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center reveal">
        <div>
          <p className="tracking-widest text-xs opacity-60">SERVICII</p>
          <h1 className="mt-3 text-4xl leading-tight">
            Suport complet în achiziții publice, cap‑coadă.
          </h1>
          <div className="mt-3 h-px w-24 bg-[#ededed]/40 line-reveal" />
          <p className="mt-5 opacity-70 max-w-[640px]">
            De la strategie și documentație, până la evaluare, comunicare și
            arhivare. Lucrăm transparent, pe livrabile clare și termene ferme.
          </p>
          <div className="mt-8 flex gap-4">
            <a className="px-5 py-2 rounded-full btn-outline" href="#contact">
              Solicită ofertă
            </a>
            <a className="px-5 py-2 rounded-full btn-outline" href="/about">
              De ce noi
            </a>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden zoom-hover min-h-[260px] bg-[#0f0f0f] border border-[#ededed]/10" />
      </section>

      {/* Services grid */}
      <section className="mt-16">
        <h2 className="text-2xl reveal">Ce facem</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#ededed]/12 p-5 card-hover reveal"
            >
              <h3 className="text-lg">{s.title}</h3>
              <p className="opacity-70 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="mt-16">
        <h2 className="text-2xl reveal">Pachete orientative</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#ededed]/15 p-6 flex flex-col justify-between card-hover reveal"
            >
              <div>
                <div className="text-xl">{p.name}</div>
                <div className="opacity-60 text-sm mt-1">{p.note}</div>
                <ul className="mt-5 space-y-2 opacity-80">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex gap-2">
                      <span>—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a href="/contact" className="px-5 py-2 rounded-full btn-outline">
                  Cere ofertă
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-16">
        <h2 className="text-2xl reveal">Procesul de lucru</h2>
        <div className="mt-8 space-y-6">
          {steps.map((st, i) => (
            <div key={i} className="flex items-start gap-5 reveal">
              <div className="text-sm opacity-50 w-10">{st.s}</div>
              <div className="flex-1 pb-6 border-b hairline-b border-[#ededed]/10">
                <div className="text-lg">{st.t}</div>
                <div className="opacity-70 mt-1">{st.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <div className="rounded-lg border border-[#ededed]/15 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between card-hover">
          <div>
            <h3 className="text-xl">Ai un proiect în plan?</h3>
            <p className="opacity-70 mt-2">
              Îți propunem rapid un plan, livrabile și calendar.
            </p>
          </div>
          <a href="/contact" className="mt-4 md:mt-0 px-5 py-2 rounded-full btn-outline">
            Discută cu noi
          </a>
        </div>
      </section>
    </main>
  );
}
 

