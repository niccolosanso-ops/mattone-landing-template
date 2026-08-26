import { CONFIG } from "@/lib/config";

export default function Home() {
  return (
    <main>

      {/* ═══════════════ TOP BAR ═══════════════ */}
      <header style={{ padding: "20px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: "-0.02em" }}>{CONFIG.nomeAgenzia}</div>
          <div className="eyebrow-muted" style={{ fontSize: 11 }}>{CONFIG.città.toUpperCase()} · GESTIONE AFFITTI BREVI</div>
        </div>
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            {CONFIG.nomeAgenzia.toUpperCase()} · {CONFIG.città.toUpperCase()} · GESTIONE COMPLETA AFFITTI BREVI
          </div>
          <h1 style={{ fontSize: "clamp(44px, 7vw, 96px)", marginBottom: 40, maxWidth: 1100 }}>
            Il tuo immobile a {CONFIG.città} rende fino al<br/>
            <span style={{ color: "var(--accent)" }}>{CONFIG.stats.percentualeRendita} in più</span> — o non paghi.
          </h1>
          <p style={{ fontSize: 20, color: "var(--text-muted)", maxWidth: 780, marginBottom: 56, lineHeight: 1.5 }}>
            Noi facciamo tutto: annunci, foto professionali, ospiti 24/7, pulizie, burocrazia e sostituto d'imposta. Tu ricevi il bonifico ogni mese. Zero pensieri.
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", color: "var(--text-dim)", fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            <span>Valutazione gratuita</span>
            <span style={{ color: "var(--border-strong)" }}>·</span>
            <span>Risposta entro 24h</span>
            <span style={{ color: "var(--border-strong)" }}>·</span>
            <span>Solo {CONFIG.città} e provincia</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ THE WIN ═══════════════ */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="eyebrow-muted" style={{ marginBottom: 24 }}>IL RISULTATO</div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 68px)", marginBottom: 48, maxWidth: 900 }}>
            Metti a reddito il tuo immobile.<br/>
            <span style={{ color: "var(--accent-2)" }}>Entra nella rete Dimora Plus.</span>
          </h2>
          <p style={{ fontSize: 19, color: "var(--text-muted)", maxWidth: 780, marginBottom: 48, lineHeight: 1.5 }}>
            Diventi cliente {CONFIG.nomeAgenzia} e il tuo immobile a {CONFIG.città} inizia a rendere fino al {CONFIG.stats.percentualeRendita} in più rispetto all'affitto tradizionale. Con noi fai parte di una rete di proprietari che si prende un pezzo del mercato prima degli altri.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32, marginTop: 64 }}>
            <StatBig n={`${CONFIG.stats.ourImmobili}+`} label="Immobili in gestione" accent="var(--accent)" />
            <StatBig n={CONFIG.stats.percentualeRendita} label="Aumento rendita medio" accent="var(--accent-2)" />
            <StatBig n={CONFIG.stats.anniEsperienza} label={`Anni a ${CONFIG.città}`} accent="var(--accent)" />
            <StatBig n={`${CONFIG.stats.ratingMedio}★`} label="Rating medio ospiti" accent="var(--accent-2)" />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ THE METHOD ═══════════════ */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="eyebrow-muted" style={{ marginBottom: 24 }}>IL METODO</div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 68px)", marginBottom: 64 }}>Come lo facciamo.</h2>

          <MethodRow n="01 · Annuncio" title="Il tuo immobile online in 7 giorni." desc="Foto professionali, testo persuasivo, prezzi dinamici. L'annuncio va su Airbnb, Booking, Vrbo e i portali giusti — non a caso, con la strategia che vince nel tuo quartiere." />
          <MethodRow n="02 · Ospiti" title="Gestione 24/7, notti e weekend inclusi." desc="Rispondiamo agli ospiti entro 5 minuti, gestiamo check-in e check-out, coordiniamo pulizie professionali dopo ogni soggiorno. Tu non ricevi mai una chiamata." />
          <MethodRow n="03 · Bonifico" title="Ricevi solo il bonifico, ogni mese." desc="Contratti, tasse, sostituto d'imposta, comunicazioni al Comune, CIN, CIR. Ci occupiamo di tutta la burocrazia. Il rendiconto è chiaro e trasparente." />
        </div>
      </section>

      <div className="divider" />

      {/* ═══════════════ TESTIMONIANZE ═══════════════ */}
      {CONFIG.testimonianze.length > 0 && (
        <>
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="eyebrow-muted" style={{ marginBottom: 24 }}>PROPRIETARI SODDISFATTI</div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 68px)", marginBottom: 48 }}>Cosa dicono i nostri clienti.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
              {CONFIG.testimonianze.map((t, i) => (
                <blockquote key={i} style={{ margin: 0, padding: 32, background: "var(--bg-elevated)", borderTop: "3px solid var(--accent)" }}>
                  <p style={{ fontSize: 18, lineHeight: 1.5, margin: "0 0 24px", color: "var(--text)" }}>&ldquo;{t.quote}&rdquo;</p>
                  <footer style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    <strong style={{ color: "var(--text)", fontWeight: 800 }}>{t.autore}</strong> · {t.immobile}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
        <div className="divider" />
        </>
      )}

      {/* ═══════════════ FORM GHL EMBED ═══════════════ */}
      <section id="form" style={{ padding: "100px 0", background: "var(--bg-elevated)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>RICHIEDI LA VALUTAZIONE</div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 68px)", marginBottom: 20 }}>
            Scopri quanto rende<br/>
            <span style={{ color: "var(--accent)" }}>il tuo immobile.</span>
          </h2>
          <p style={{ fontSize: 19, color: "var(--text-muted)", marginBottom: 48, lineHeight: 1.5 }}>
            Valutazione gratuita e senza impegno. Ti ricontattiamo entro 24 ore.
          </p>
          <div style={{ background: "var(--bg)", padding: 32, border: "1px solid var(--border)" }} dangerouslySetInnerHTML={{ __html: CONFIG.ghlFormEmbedHtml }} />
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer style={{ padding: "48px 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, alignItems: "flex-start" }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: "-0.02em" }}>{CONFIG.nomeAgenzia}</div>
              <div className="eyebrow-muted" style={{ marginTop: 12, fontSize: 11 }}>GESTIONE AFFITTI BREVI · {CONFIG.città.toUpperCase()}</div>
            </div>
            <div style={{ fontSize: 14, textAlign: "right", color: "var(--text-muted)" }}>
              <div style={{ marginBottom: 8 }}><a href={`tel:${CONFIG.telefono}`} style={{ color: "var(--text)" }}>{CONFIG.telefono}</a></div>
              <div><a href={`mailto:${CONFIG.email}`} style={{ color: "var(--text)" }}>{CONFIG.email}</a></div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StatBig({ n, label, accent }: { n: string; label: string; accent: string }) {
  return (
    <div>
      <div style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 900, color: accent, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</div>
      <div className="eyebrow-muted" style={{ marginTop: 16 }}>{label}</div>
    </div>
  );
}

function MethodRow({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(180px, 240px) 1fr", gap: 48, padding: "48px 0", borderTop: "1px solid var(--border)" }}>
      <div className="mono" style={{ fontSize: 15, color: "var(--accent)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{n}</div>
      <div>
        <h3 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, marginBottom: 20 }}>{title}</h3>
        <p style={{ fontSize: 17, color: "var(--text-muted)", margin: 0, maxWidth: 720, lineHeight: 1.55 }}>{desc}</p>
      </div>
    </div>
  );
}
