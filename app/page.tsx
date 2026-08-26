import { CONFIG } from "@/lib/config";

export default function Home() {
  const accent = CONFIG.coloreAccent;
  return (
    <main style={{ background: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>

      {/* ─────── HERO ─────── */}
      <section style={{ borderBottom: "1px solid #262626", padding: "80px 0 100px" }}>
        <div className="container">
          <div className="mono" style={{ fontSize: 13, textTransform: "uppercase", color: accent, marginBottom: 32, letterSpacing: "0.1em" }}>
            {CONFIG.nomeAgenzia.toUpperCase()} · GESTIONE AFFITTI BREVI · {CONFIG.città.toUpperCase()}
          </div>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 1.05, fontWeight: 700, margin: "0 0 32px", letterSpacing: "-0.02em" }}>
            Il tuo immobile a {CONFIG.città} rende fino al<br/>
            <span style={{ color: accent }}>{CONFIG.stats.percentualeRendita} in più.</span>
          </h1>
          <p style={{ fontSize: 20, color: "#a3a3a3", maxWidth: 720, marginBottom: 40 }}>
            Ci occupiamo di tutto noi: annuncio, ospiti, pulizie, burocrazia. Tu ricevi il bonifico ogni mese, senza pensieri.
          </p>
          <a href="#form" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: accent, color: "#fff", padding: "18px 36px", fontWeight: 600, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Richiedi la valutazione gratuita<span>→</span>
          </a>
          <div style={{ display: "flex", gap: 40, marginTop: 48, color: "#737373", fontSize: 14, flexWrap: "wrap" }}>
            <span>✓ Valutazione senza impegno</span>
            <span>✓ Risposta entro 24 ore</span>
            <span>✓ Solo {CONFIG.città}</span>
          </div>
        </div>
      </section>

      {/* ─────── STATS ─────── */}
      <section style={{ borderBottom: "1px solid #262626", padding: "60px 0" }}>
        <div className="container">
          <div className="mono" style={{ fontSize: 13, color: "#a3a3a3", textTransform: "uppercase", marginBottom: 32, letterSpacing: "0.1em" }}>I NUMERI</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
            <Stat n={`${CONFIG.stats.ourImmobili}+`} label="Immobili in gestione" accent={accent} />
            <Stat n={`${CONFIG.stats.anniEsperienza}`} label={`Anni a ${CONFIG.città}`} accent={accent} />
            <Stat n={`${CONFIG.stats.ratingMedio}⭐`} label="Rating medio ospiti" accent={accent} />
            <Stat n={CONFIG.stats.percentualeRendita} label="Aumento rendita medio" accent={accent} />
          </div>
        </div>
      </section>

      {/* ─────── METODO 01 02 03 ─────── */}
      <section style={{ borderBottom: "1px solid #262626", padding: "80px 0" }}>
        <div className="container">
          <div className="mono" style={{ fontSize: 13, color: "#a3a3a3", textTransform: "uppercase", marginBottom: 12, letterSpacing: "0.1em" }}>IL METODO</div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 60px" }}>Come lavoriamo.</h2>

          <MethodStep n="01" title="Annuncio ottimizzato" desc="Foto professionali, testi persuasivi, tariffe dinamiche per massimizzare le prenotazioni tutto l'anno." accent={accent} />
          <MethodStep n="02" title="Ospiti gestiti 24/7" desc="Check-in, check-out, comunicazioni, pulizie professionali. Tu non devi fare nulla, ci pensa il nostro team." accent={accent} />
          <MethodStep n="03" title="Zero burocrazia" desc="Contratti, tasse, comunicazioni al comune, sostituto d'imposta. Ci occupiamo di tutto, tu ricevi il bonifico." accent={accent} />
        </div>
      </section>

      {/* ─────── TESTIMONIANZE ─────── */}
      <section style={{ borderBottom: "1px solid #262626", padding: "80px 0" }}>
        <div className="container">
          <div className="mono" style={{ fontSize: 13, color: "#a3a3a3", textTransform: "uppercase", marginBottom: 12, letterSpacing: "0.1em" }}>PROPRIETARI SODDISFATTI</div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 60px" }}>Cosa dicono i nostri clienti.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {CONFIG.testimonianze.map((t, i) => (
              <blockquote key={i} style={{ margin: 0, padding: 32, background: "#141414", borderLeft: `3px solid ${accent}` }}>
                <p style={{ fontSize: 18, lineHeight: 1.5, margin: "0 0 24px", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                <footer style={{ fontSize: 14, color: "#a3a3a3" }}>
                  <strong style={{ color: "#f5f5f5" }}>{t.autore}</strong> · {t.immobile}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── FORM (GHL EMBED) ─────── */}
      <section id="form" style={{ padding: "100px 0", background: "#141414" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="mono" style={{ fontSize: 13, color: accent, textTransform: "uppercase", marginBottom: 12, letterSpacing: "0.1em" }}>RICHIEDI ORA</div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px" }}>Scopri quanto rende il tuo immobile.</h2>
          <p style={{ fontSize: 18, color: "#a3a3a3", marginBottom: 40 }}>
            Valutazione gratuita e senza impegno. Ti ricontattiamo entro 24 ore.
          </p>
          <div style={{ background: "#0a0a0a", padding: 24, borderRadius: 4 }} dangerouslySetInnerHTML={{ __html: CONFIG.ghlFormEmbedHtml }} />
        </div>
      </section>

      {/* ─────── FOOTER ─────── */}
      <footer style={{ padding: "48px 0", borderTop: "1px solid #262626", background: "#0a0a0a" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{CONFIG.nomeAgenzia}</div>
              <div style={{ fontSize: 14, color: "#737373", marginTop: 8 }}>Gestione affitti brevi · {CONFIG.città}</div>
            </div>
            <div style={{ fontSize: 14, color: "#a3a3a3", textAlign: "right" }}>
              <div>📞 <a href={`tel:${CONFIG.telefono}`}>{CONFIG.telefono}</a></div>
              <div style={{ marginTop: 6 }}>✉️ <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ n, label, accent }: { n: string; label: string; accent: string }) {
  return (
    <div>
      <div style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, color: accent, letterSpacing: "-0.02em", lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 14, color: "#a3a3a3", marginTop: 12 }}>{label}</div>
    </div>
  );
}

function MethodStep({ n, title, desc, accent }: { n: string; title: string; desc: string; accent: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 32, padding: "32px 0", borderTop: "1px solid #262626" }}>
      <div className="mono" style={{ fontSize: 40, color: accent, fontWeight: 700, letterSpacing: "-0.02em" }}>{n}</div>
      <div>
        <h3 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 12px" }}>{title}</h3>
        <p style={{ fontSize: 17, color: "#a3a3a3", margin: 0, maxWidth: 640 }}>{desc}</p>
      </div>
    </div>
  );
}
