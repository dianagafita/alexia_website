export default function FAQ() {
  const faqs = [
    {
      q: "Cum particip la o licitație publică?",
      a: "Identifici oportunitatea, analizezi cerințele, pregătești documentele și depui oferta în termen.",
    },
    {
      q: "Ce înseamnă caiet de sarcini?",
      a: "Documentul care descrie cerințele tehnice și funcționale ale achiziției.",
    },
    {
      q: "Cum se evaluează ofertele?",
      a: "Conform criteriilor stabilite în documentația de atribuire, de comisia de evaluare.",
    },
  ];
  return (
    <section className="px-10 py-16">
      <h2 className="text-3xl">ÎNTREBĂRI FRECVENTE</h2>
      <div className="mt-8 space-y-6">
        {faqs.map((f, idx) => (
          <div
            key={idx}
            className="pb-5 border-b hairline-b border-[#ededed]/10"
          >
            <p className="text-lg">{f.q}</p>
            <p className="opacity-70 mt-2 max-w-[800px]">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
