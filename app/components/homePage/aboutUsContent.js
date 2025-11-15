import React from "react";

export default function AboutUsContent() {
  return (
    <section id="about" className="px-10 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl">DESPRE NOI</h2>
          <p className="mt-4 opacity-70 max-w-[640px]">
            Suntem un studio specializat în achiziții publice. Misiunea noastră:
            proceduri conforme, eficiente, transparente. Combinăm expertiza
            juridică și operațională cu o abordare pragmatică.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl">100+</div>
              <div className="opacity-60 text-sm">proceduri finalizate</div>
            </div>
            <div>
              <div className="text-3xl">10+</div>
              <div className="opacity-60 text-sm">ani experiență</div>
            </div>
            <div>
              <div className="text-3xl">40+</div>
              <div className="opacity-60 text-sm">parteneri / furnizori</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-b hairline-b border-[#ededed]/15" />
    </section>
  );
}
