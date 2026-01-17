"use client";
import { useState } from "react";
import { useRevealOnScroll } from "../lib/useRevealOnScroll";

export default function ContactPage() {
  const ref = useRevealOnScroll();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      project: formData.get("project"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(result.error || "A apărut o eroare.");
        return;
      }

      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("Nu am putut trimite mesajul. Verifică conexiunea.");
    }
  }

  return (
    <main ref={ref} className="min-h-screen px-0 md:px-10 py-20">
      <section className="reveal px-4 sm:px-6 md:px-0">
        <div className="mt-10 rounded-lg border border-[#ededed]/12 px-4 sm:px-6 md:px-8 py-10 grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left: intro + details */}
          <div>
            <p className="tracking-widest text-xs opacity-60">CONTACT</p>
            <h1 className="mt-3 text-4xl leading-tight">Stăm la o discuție?</h1>
            <div className="mt-3 h-px w-24 bg-[#ededed]/40 line-reveal" />
            <p className="mt-5 opacity-70 max-w-[560px]">
              Spune-ne pe scurt despre proiectul tău, iar noi revenim rapid cu
              pașii următori. Lucrăm 100% online și adaptăm pachetul exact
              nevoilor tale.
            </p>
            <div className="mt-8 space-y-2 opacity-80">
              <div>
                Email:{" "}
                <a
                  href="mailto:contact@achipconsulting.com"
                  className="link-underline"
                >
                  contact@achipconsulting.com
                </a>
              </div>
              <div>Program: L–V, 09:00 – 18:00 (online)</div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 reveal reveal-delay-1"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm opacity-70">Nume *</span>
                <input
                  name="name"
                  required
                  className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
                  placeholder="Numele tău"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm opacity-70">Email *</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
                  placeholder="exemplu@mail.com"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm opacity-70">Companie</span>
              <input
                name="company"
                className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none"
                placeholder="Numele companiei"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm opacity-70">Tip proiect / domeniu</span>
              <textarea
                name="project"
                rows={2}
                className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none resize-none"
                placeholder="Ex: procedură simplificată, achiziții lucrări"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm opacity-70">Mesaj *</span>
              <textarea
                name="message"
                required
                className="bg-transparent border-b hairline-b border-[#ededed]/25 p-3 outline-none min-h-[220px]"
                placeholder="Scrie câteva detalii relevante..."
              />
            </label>

            {status === "error" && (
              <div className="text-red-400 text-sm">{errorMsg}</div>
            )}

            {status === "success" && (
              <div className="text-green-400 text-sm">
                Mesajul a fost trimis cu succes! Revenim în curând.
              </div>
            )}

            <div className="flex items-center justify-between gap-4">
              <span className="opacity-60 text-sm">
                Răspundem de regulă în 24–48h.
              </span>
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-5 py-2 rounded-full btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Se trimite..." : "Trimite mesajul"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
