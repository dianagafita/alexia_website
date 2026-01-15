const steps = [
    {
    title: "Analiză & consultanță inițială",
    desc: "Discutăm online despre business-ul tău, obiectivele urmărite și oportunitățile relevante din SEAP.",
  },
  {
    title: "Soluție personalizată",
    desc: "Recomandăm pachetul potrivit sau o abordare custom, cu pași clari și termene asumate.",
    },
    {
    title: "Implementare & documentație",
    desc: "Ne ocupăm de configurarea SEAP, pregătirea documentației și elaborarea ofertei, cu atenție la conformitate și detalii.",
    },
    {
    title: "Depunere & suport continuu",
    desc: "Depunem oferta, gestionăm procedura și îți oferim suport până la finalizarea acesteia.",
    },
  ];

export default function FAQ() {
  return (
    <section className="px-10 py-16">
      <p className="tracking-[0.4em] text-xs opacity-50">PROCESUL DE LUCRU</p>
      <h2 className="text-3xl mt-3">Structură clară, livrabile controlate</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {steps.map((step, idx) => (
          <article
            key={step.title}
            className="border border-[#ededed]/10 rounded-3xl p-6 card-hover"
          >
            <div className="text-sm opacity-60 mb-2">0{idx + 1}</div>
            <p className="text-xl">{step.title}</p>
            <p className="opacity-70 mt-3 text-sm leading-relaxed">{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
