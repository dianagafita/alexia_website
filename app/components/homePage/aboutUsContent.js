const sections = [
  {
    title: "Administrare SEAP",
    intro:
      "Gestionăm cap-coadă prezența ta în platformă, astfel încât să fii vizibil și pregătit pentru oportunități.",
    bullets: [
      "Deschidere cont SEAP și configurare cont operator economic",
      "Publicare produse în catalogul electronic SEAP",
      "Gestionare și acceptare cumpărări directe din catalog",
      "Monitorizare și notificări pentru anunțuri de publicitate și cumpărări directe",
    ],
  },
  {
    title: "Pregătire și gestionare dosare de achiziție",
    intro:
      "Ne ocupăm cap–coadă de documentația necesară participării la proceduri de achiziție publică.",
    bullets: [
      "Studierea documentației de atribuire",
      "Analiză și raport cu opțiunile optime pentru client",
      "Formularea și gestionarea solicitărilor de clarificări",
      "Întocmirea ofertei tehnice și financiare",
    ],
  },
  {
    title: "Tipuri de proceduri gestionate",
    intro: "Acoperim achiziții de produse, servicii și lucrări.",
    columns: [
      {
        heading: "Achiziții de produse și servicii",
        items: [
          "Cerere de ofertă",
          "Procedură simplificată",
          "Negociere fără publicare",
          "Licitație deschisă",
        ],
      },
      {
        heading: "Achiziții de lucrări",
        items: ["Procedură simplificată", "Licitație deschisă"],
      },
    ],
  },
  {
    title: "Suport pe tot parcursul procedurii",
    intro:
      "Suntem alături de tine până la finalizarea procedurii și după depunerea ofertei.",
    bullets: [
      "Asistență continuă până la finalizarea procedurii",
      "Comunicare cu autoritatea contractantă",
      "Reducerea riscului de erori și respingeri",
    ],
  },
];

export default function AboutUsContent() {
  return (
    <section id="servicii" className="px-10 py-16">
      <p className="tracking-[0.4em] text-xs opacity-50">CE FACEM PENTRU TINE?</p>
      <h2 className="text-3xl mt-3">Servicii complete pentru participarea în SEAP</h2>
      <div className="mt-10 grid gap-8">
        {sections.map((section) => (
          <article key={section.title} className="border border-[#ededed]/10 rounded-3xl p-6 md:p-8 card-hover">
            <h3 className="text-2xl">{section.title}</h3>
            <p className="opacity-70 mt-3">{section.intro}</p>
            {section.bullets && (
              <ul className="mt-5 space-y-2 text-sm opacity-80 list-disc list-inside">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.columns && (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {section.columns.map((col) => (
                  <div key={col.heading}>
                    <p className="font-semibold">{col.heading}</p>
                    <ul className="mt-2 space-y-1 text-sm opacity-80 list-disc list-inside">
                      {col.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
            </div>
                ))}
            </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
