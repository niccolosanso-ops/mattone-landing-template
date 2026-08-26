// ═══════════════════════════════════════════════════════════════════
// CONFIG AGENZIA — cambia SOLO qui i dati per personalizzare la landing.
// Nulla di tecnico: testi, numeri, colori, embed form GHL.
// ═══════════════════════════════════════════════════════════════════

export const CONFIG = {
  // Identità agenzia
  nomeAgenzia: "Dimora Plus",
  città: "Roma",
  nomeAgente: "Egidio",

  // Colore accent (default arancio, per cambiare passa un hex tipo #FF6B00)
  coloreAccent: "#FF6B00",

  // Numeri per prova sociale
  stats: {
    percentualeRendita: "300%",
    ourImmobili: 40,
    anniEsperienza: 5,
    ratingMedio: "4.9",
  },

  // Contatti
  telefono: "+39 06 0000 0000",
  email: "info@dimoraplus.it",

  // ─── FORM GHL EMBED ───────────────────────────────────────────────
  // Ole sostituisce questo con l'iframe reale dal GHL cliente.
  // Deve essere un tag <iframe ...></iframe> valido.
  ghlFormEmbedHtml: `<iframe src="https://forms.gohighlevel.com/PLACEHOLDER" style="width:100%;min-height:520px;border:0;background:transparent;" allowfullscreen></iframe>`,

  // Testimonianze (2-3 max)
  testimonianze: [
    {
      quote: "In 6 mesi il mio bilocale a Trastevere rende il triplo dell'affitto tradizionale. Non devo fare niente.",
      autore: "Marco R.",
      immobile: "Bilocale a Trastevere",
    },
    {
      quote: "Zero pensieri, bonifico puntuale ogni mese. Team sempre disponibile per qualsiasi cosa.",
      autore: "Laura B.",
      immobile: "Trilocale a Prati",
    },
  ],
} as const;
