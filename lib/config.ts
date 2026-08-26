// ═══════════════════════════════════════════════════════════════════
// CONFIG AGENZIA — cambia SOLO qui i dati per personalizzare la landing.
// ═══════════════════════════════════════════════════════════════════

export const CONFIG = {
  nomeAgenzia: "Dimora Plus",
  città: "Roma",
  nomeAgente: "Egidio",

  // ─── COLORI BRAND CLIENTE ─────────────────────────────────────────
  // Cambia questi 2 hex per personalizzare i colori della landing
  // secondo l'identità dell'agenzia cliente. Il resto rimane bianco/blu.
  coloreAccent: "#7873F5",       // colore principale (bottoni, titoli evidenziati)
  coloreAccentHover: "#6660E8",  // versione più scura per hover bottoni

  stats: {
    percentualeRendita: "300%",
    ourImmobili: 40,
    anniEsperienza: 5,
    ratingMedio: "4.9",
    ratingReviews: 200,
  },

  telefono: "+39 06 0000 0000",
  email: "info@dimoraplus.it",

  // FORM GHL EMBED — Ole sostituisce con iframe reale dal GHL cliente
  ghlFormEmbedHtml: `<iframe src="https://forms.gohighlevel.com/PLACEHOLDER" style="width:100%;min-height:520px;border:0;background:transparent;" allowfullscreen></iframe>`,

  // Testimonianze (min 3, max 6 mostrate in griglia)
  testimonianze: [
    { quote: "Affittare casa era diventato un secondo lavoro. Ora mi godo il tempo libero e il conto cresce da solo.", autore: "Giuseppe T.", città: "Roma" },
    { quote: "Prima era un incubo tra inquilini, pulizie e problemi. Ora guadagno il doppio e non ci penso più.", autore: "Marco R.", città: "Roma" },
    { quote: "Ogni mese avevo stress tra check-in e gestione. Adesso è tutto seguito da professionisti e i guadagni sono saliti.", autore: "Laura B.", città: "Roma" },
    { quote: "Ho scelto l'affitto garantito e ogni mese ho un fisso sul conto. Nessun pensiero.", autore: "Chiara D.", città: "Roma" },
  ],

  // Case study reale (opzionale — se vuoto non appare la sezione)
  caseStudy: {
    nome: "Luca",
    città: "Roma",
    tipologia: "Bilocale",
    risultato: "45% in più rispetto all'affitto tradizionale",
    tempo: "2 settimane",
    quote: "Non pensavo potesse rendere così tanto. Dimora Plus ha cambiato il mio approccio agli immobili.",
  },
} as const;
