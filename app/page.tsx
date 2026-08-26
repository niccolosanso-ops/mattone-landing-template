import { CONFIG } from "@/lib/config";

export default function Home() {
  return (
    <main>

      {/* ═══════════════ TOP BAR ═══════════════ */}
      <header style={{ padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em" }}>{CONFIG.nomeAgenzia}</div>
          <a href="#form" className="btn" style={{ padding: "12px 24px", fontSize: 14 }}>Consulenza gratuita →</a>
        </div>
      </header>

      {/* ═══════════════ HERO ═══════════════ */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container">
          <h1 style={{ fontSize: "clamp(38px, 5.5vw, 72px)", maxWidth: 1000, marginBottom: 28 }}>
            Stai perdendo fino al <span style={{ color: "var(--accent)" }}>50% di guadagno</span> ogni mese con l'affitto tradizionale
          </h1>
          <p style={{ fontSize: 20, color: "var(--text-muted)", maxWidth: 800, marginBottom: 40, lineHeight: 1.55 }}>
            Con {CONFIG.nomeAgenzia} trasformi il tuo appartamento a {CONFIG.città} in una rendita vera, senza inquilini morosi, senza burocrazia, senza fare nulla. Affitti brevi, transitori o garantiti: scegli tu, al resto pensiamo noi.
          </p>
          <a href="#form" className="btn">Scopri quanto potresti guadagnare →</a>
          <div style={{ marginTop: 40, display: "flex", gap: 32, flexWrap: "wrap", color: "var(--text-dim)", fontSize: 14 }}>
            <span>★★★★★ {CONFIG.stats.ratingMedio} su Google</span>
            <span>·</span>
            <span>{CONFIG.stats.ourImmobili}+ immobili gestiti</span>
            <span>·</span>
            <span>Partner Airbnb & Booking</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROBLEMI ═══════════════ */}
      <section style={{ padding: "80px 0", background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>STUFO DEI SOLITI PROBLEMI?</div>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", maxWidth: 800, marginBottom: 24 }}>
            Hai un appartamento, ma è lui che ti comanda.
          </h2>
          <p style={{ fontSize: 19, color: "var(--text-muted)", maxWidth: 780, marginBottom: 48, lineHeight: 1.55 }}>
            Affittare nel modo tradizionale oggi è una corsa a ostacoli. Morosità, burocrazia infinita, tempi lunghi per liberare l'immobile… e il rischio di vedere svanire il tuo investimento mese dopo mese.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {[
              "Inquilini morosi difficili da sfrattare",
              "Contratti lunghi, senza flessibilità",
              "Reddito spesso inferiore a quanto meriteresti",
              "Spese di manutenzione a tuo carico",
              "Un mercato sempre più incerto",
            ].map((t, i) => (
              <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--accent)", fontSize: 22, fontWeight: 800, lineHeight: 1 }}>—</span>
                <span style={{ fontSize: 16, color: "var(--text)", fontWeight: 500 }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════ COSA OTTIENI ═══════════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>COSA OTTIENI CON NOI</div>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", maxWidth: 900, marginBottom: 24 }}>
            Guadagni di più. Dormi sereno. <span style={{ color: "var(--accent)" }}>Vivi libero.</span>
          </h2>
          <p style={{ fontSize: 19, color: "var(--text-muted)", maxWidth: 780, marginBottom: 56, lineHeight: 1.55 }}>
            Gli affitti brevi e transitori ti permettono di massimizzare i guadagni senza compromettere la sicurezza. E soprattutto, con un modello flessibile che si adatta a te, non il contrario.
          </p>

          <h3 style={{ fontSize: 24, marginBottom: 32, fontWeight: 700 }}>Perché conviene rispetto all'affitto tradizionale?</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { title: "+30-300%", desc: "di reddito medio annuo rispetto all'affitto tradizionale" },
              { title: "Zero rischio", desc: "morosità: paghi solo per il tempo effettivo" },
              { title: "Flessibilità totale", desc: "durate da pochi giorni a 18 mesi" },
              { title: "Sempre libero", desc: "puoi usare l'immobile quando vuoi tu" },
              { title: "Trasparenza", desc: "monitoraggio in tempo reale dei guadagni" },
              { title: "Zero pensieri", desc: "un solo referente, gestione end-to-end" },
            ].map((b, i) => (
              <div key={i} style={{ padding: 28, background: "#fff", border: "1px solid var(--border)", borderRadius: 16, transition: "all 0.2s" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "var(--accent)", marginBottom: 10 }}>{b.title}</div>
                <div style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVIZIO ALL INCLUSIVE ═══════════════ */}
      <section style={{ padding: "100px 0", background: "var(--bg-dark)", color: "#fff" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20, color: "var(--gold)" }}>SERVIZIO ALL INCLUSIVE</div>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", maxWidth: 900, marginBottom: 28, color: "#fff" }}>
            Fai guadagnare il tuo immobile.<br/>
            <span style={{ color: "var(--accent)" }}>Noi pensiamo a tutto.</span>
          </h2>
          <p style={{ fontSize: 19, color: "rgba(255,255,255,0.7)", maxWidth: 800, marginBottom: 56, lineHeight: 1.55 }}>
            {CONFIG.nomeAgenzia} è il servizio full-service che gestisce il tuo appartamento a {CONFIG.città} come un hotel, curando ogni dettaglio per te. Tu affidi l'immobile, noi ci occupiamo del resto.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              "Home staging professionale",
              "Manutenzione, pulizia, lavanderia",
              "Pratiche amministrative e CIN",
              "Pubblicazione su Airbnb, Booking, Vrbo",
              "Allestimento e shooting fotografico",
              "Check-in, check-out, gestione ospiti 24/7",
              "Dashboard per controllo in tempo reale",
              "Sostituto d'imposta e adempimenti fiscali",
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ color: "var(--accent)", fontSize: 22, fontWeight: 800, lineHeight: 1 }}>✓</span>
                <span style={{ fontSize: 16, color: "#fff", fontWeight: 500 }}>{s}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 56, display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#form" className="btn">Scopri quanto potresti guadagnare →</a>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>Un solo referente. Zero problemi. Più guadagni.</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIANZE ═══════════════ */}
      {CONFIG.testimonianze.length > 0 && (
        <section style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 20 }}>PROPRIETARI SODDISFATTI</div>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", maxWidth: 900, marginBottom: 24 }}>
              Più di {CONFIG.stats.ratingReviews} proprietari felici.<br/>
              <span style={{ color: "var(--accent)" }}>Scopri perché.</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginTop: 56 }}>
              {CONFIG.testimonianze.map((t, i) => (
                <div key={i} style={{ padding: 32, background: "#fff", border: "1px solid var(--border)", borderRadius: 16 }}>
                  <div style={{ color: "var(--accent)", fontSize: 18, marginBottom: 16 }}>★★★★★</div>
                  <p style={{ fontSize: 17, lineHeight: 1.55, margin: "0 0 24px", color: "var(--text)" }}>&ldquo;{t.quote}&rdquo;</p>
                  <footer style={{ fontSize: 14, color: "var(--text-muted)" }}>
                    <strong style={{ color: "var(--text)", fontWeight: 700 }}>{t.autore}</strong> · {t.città}
                  </footer>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48, textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}>
              <strong style={{ color: "var(--text)" }}>{CONFIG.stats.ratingMedio}★</strong> media su Google · <strong style={{ color: "var(--text)" }}>{CONFIG.stats.ourImmobili}+</strong> immobili gestiti · Partner ufficiali Airbnb, Booking, Idealista
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ CASE STUDY ═══════════════ */}
      {CONFIG.caseStudy && (
        <section style={{ padding: "100px 0", background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 20 }}>CASE STUDY</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", maxWidth: 900, marginBottom: 32 }}>
              Come abbiamo trasformato un {CONFIG.caseStudy.tipologia.toLowerCase()} in una{" "}
              <span style={{ color: "var(--accent)" }}>macchina da reddito</span>
            </h2>
            <p style={{ fontSize: 19, color: "var(--text-muted)", maxWidth: 800, marginBottom: 32, lineHeight: 1.55 }}>
              <strong style={{ color: "var(--text)" }}>{CONFIG.caseStudy.nome}</strong> aveva un {CONFIG.caseStudy.tipologia.toLowerCase()} vuoto a {CONFIG.caseStudy.città}. In {CONFIG.caseStudy.tempo} lo abbiamo allestito, messo online e oggi guadagna il <strong style={{ color: "var(--text)" }}>{CONFIG.caseStudy.risultato}</strong>. Senza fare nulla.
            </p>
            <blockquote style={{ margin: 0, padding: "24px 32px", background: "#fff", borderLeft: "4px solid var(--accent)", borderRadius: 8, fontSize: 18, fontStyle: "italic", color: "var(--text)" }}>
              &ldquo;{CONFIG.caseStudy.quote}&rdquo;
              <footer style={{ marginTop: 12, fontSize: 14, color: "var(--text-muted)", fontStyle: "normal" }}>
                — {CONFIG.caseStudy.nome}, {CONFIG.caseStudy.città}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* ═══════════════ FORM GHL EMBED ═══════════════ */}
      <section id="form" style={{ padding: "100px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="eyebrow" style={{ marginBottom: 20, textAlign: "center" }}>RICHIEDI LA CONSULENZA</div>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", marginBottom: 20, textAlign: "center" }}>
            Scopri il potenziale nascosto<br/>
            <span style={{ color: "var(--accent)" }}>del tuo immobile.</span>
          </h2>
          <p style={{ fontSize: 19, color: "var(--text-muted)", marginBottom: 48, textAlign: "center", lineHeight: 1.55 }}>
            Consulenza gratuita e in 15 minuti scopri quanto potresti guadagnare in più con {CONFIG.nomeAgenzia}. Zero impegno. Solo chiarezza e numeri reali.
          </p>
          {CONFIG.ghlFormEmbedHtml.includes("PLACEHOLDER") ? (
            <div style={{ background: "var(--bg-soft)", padding: 48, border: "2px dashed var(--accent)", borderRadius: 16, textAlign: "center" }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>⚠️ FORM DA CONFIGURARE</div>
              <p style={{ color: "var(--text-muted)", fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                Sostituisci <code style={{ background: "#fff", padding: "2px 8px", color: "var(--accent)", borderRadius: 4, fontSize: 14 }}>ghlFormEmbedHtml</code> in <code style={{ background: "#fff", padding: "2px 8px", color: "var(--accent)", borderRadius: 4, fontSize: 14 }}>lib/config.ts</code> con l'iframe del form GHL del cliente.<br/>
                Guida: <a href="https://docs.mattone.co/integrazioni/ghl/setup-agenzia-landing" style={{ color: "var(--accent)", textDecoration: "underline" }}>docs.mattone.co</a>
              </p>
            </div>
          ) : (
            <div style={{ background: "#fff", padding: 32, border: "1px solid var(--border)", borderRadius: 16 }} dangerouslySetInnerHTML={{ __html: CONFIG.ghlFormEmbedHtml }} />
          )}
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section style={{ padding: "100px 0", background: "var(--bg-soft)" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>FAQ</div>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", marginBottom: 56 }}>
            Hai domande?<br/>
            <span style={{ color: "var(--accent)" }}>Ecco le risposte.</span>
          </h2>
          {[
            { q: "Cosa succede se il mio appartamento resta vuoto?", a: "Nella formula garantita ricevi comunque il pagamento mensile. Negli altri modelli, usiamo strategie e canali performanti per massimizzare l'occupazione." },
            { q: "Posso usare l'immobile per me in certi periodi?", a: "Sì, con gli affitti brevi o transitori puoi bloccare le date che desideri." },
            { q: "Devo occuparmi della pulizia o delle chiavi?", a: "No, ci occupiamo noi di tutto: pulizia, check-in, check-out e gestione degli ospiti." },
            { q: "Ci sono costi nascosti?", a: "Assolutamente no. Ti spieghiamo tutto in trasparenza già nella prima consulenza gratuita." },
          ].map((f, i) => (
            <details key={i} style={{ padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
              <summary style={{ fontSize: 19, fontWeight: 700, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {f.q}
                <span style={{ color: "var(--accent)", fontSize: 24 }}>+</span>
              </summary>
              <p style={{ marginTop: 16, fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer style={{ padding: "56px 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 24, letterSpacing: "-0.02em" }}>{CONFIG.nomeAgenzia}</div>
              <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 8 }}>Gestione affitti brevi · {CONFIG.città}</div>
            </div>
            <div style={{ fontSize: 14, textAlign: "right" }}>
              <div style={{ marginBottom: 6 }}><a href={`tel:${CONFIG.telefono}`}>{CONFIG.telefono}</a></div>
              <div><a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></div>
            </div>
          </div>
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--border)", fontSize: 13, color: "var(--text-dim)", textAlign: "center" }}>
            Il futuro della gestione immobiliare è già qui.
          </div>
        </div>
      </footer>
    </main>
  );
}
