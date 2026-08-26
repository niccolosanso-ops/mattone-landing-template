import { CONFIG } from "@/lib/config";
import Link from "next/link";

export default function Grazie() {
  const bookingConfigured = !CONFIG.bookingEmbedHtml.includes("PLACEHOLDER");

  return (
    <main>

      {/* ═══════════════ TOP BAR ═══════════════ */}
      <header style={{ padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em" }}>{CONFIG.nomeAgenzia}</div>
          <Link href="/" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "underline" }}>← Torna alla pagina</Link>
        </div>
      </header>

      {/* ═══════════════ HERO GRAZIE ═══════════════ */}
      <section style={{ padding: "80px 0 60px", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>🎉</div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>RICHIESTA RICEVUTA</div>
          <h1 style={{ fontSize: "clamp(44px, 6vw, 76px)", marginBottom: 24 }}>
            Grazie!<br/>
            <span style={{ color: "var(--accent)" }}>Ti chiamiamo entro 24 ore.</span>
          </h1>
          <p style={{ fontSize: 20, color: "var(--text-muted)", maxWidth: 720, margin: "0 auto", lineHeight: 1.55 }}>
            Il team di {CONFIG.nomeAgenzia} ha ricevuto la tua richiesta. Ti contatteremo il prima possibile per fissare la consulenza sul tuo immobile a {CONFIG.città}.
          </p>
        </div>
      </section>

      {/* ═══════════════ COSA SUCCEDE ORA ═══════════════ */}
      <section style={{ padding: "80px 0", background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20, textAlign: "center" }}>COSA SUCCEDE ORA</div>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", marginBottom: 56, textAlign: "center" }}>
            I prossimi 3 passi.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { n: "01", title: "Email di conferma", desc: "Tra pochi minuti riceverai una email che conferma la ricezione della richiesta." },
              { n: "02", title: "Analisi immobile", desc: "Il nostro team analizza il tuo immobile e prepara una valutazione realistica di rendita." },
              { n: "03", title: "Chiamata di consulenza", desc: "Ti chiamiamo entro 24 ore per fissare la consulenza gratuita di 15 minuti." },
            ].map((s, i) => (
              <div key={i} style={{ padding: 32, background: "#fff", border: "1px solid var(--border)", borderRadius: 16 }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "var(--accent)", marginBottom: 16, letterSpacing: "-0.03em" }}>{s.n}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BOOKING SUBITO (upsell) ═══════════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="eyebrow" style={{ marginBottom: 20, textAlign: "center" }}>💡 VUOI SALTARE LA FILA?</div>
          <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", marginBottom: 20, textAlign: "center" }}>
            Prenota <span style={{ color: "var(--accent)" }}>subito</span> la tua call.
          </h2>
          <p style={{ fontSize: 18, color: "var(--text-muted)", marginBottom: 48, textAlign: "center", lineHeight: 1.55 }}>
            Scegli un orario adesso dal calendario e non aspettare il richiamo del team.
          </p>
          {bookingConfigured ? (
            <div style={{ background: "#fff", padding: 32, border: "1px solid var(--border)", borderRadius: 16 }} dangerouslySetInnerHTML={{ __html: CONFIG.bookingEmbedHtml }} />
          ) : (
            <div style={{ background: "var(--bg-soft)", padding: 56, border: "2px dashed var(--accent)", borderRadius: 16, textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📅</div>
              <div className="eyebrow" style={{ marginBottom: 20, fontSize: 15 }}>⚠️ QUI VA MESSO IL BOOKING EMBED (GHL/CALENDLY)</div>
              <p style={{ color: "var(--text)", fontSize: 17, margin: "0 0 24px", lineHeight: 1.6, fontWeight: 600 }}>
                Ole deve incollare qui l&apos;iframe del calendario del cliente per far prenotare la call subito.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                Apri <code style={{ background: "#fff", padding: "3px 10px", color: "var(--accent)", borderRadius: 4, fontSize: 14, fontWeight: 700 }}>lib/config.ts</code> e sostituisci{" "}
                <code style={{ background: "#fff", padding: "3px 10px", color: "var(--accent)", borderRadius: 4, fontSize: 14, fontWeight: 700 }}>bookingEmbedHtml</code> con l&apos;iframe del calendario.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════ PROVA SOCIALE ═══════════════ */}
      {CONFIG.testimonianze.length > 0 && (
        <section style={{ padding: "80px 0", background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 20, textAlign: "center" }}>NEL FRATTEMPO</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: 40, textAlign: "center" }}>
              Guarda cosa dicono altri proprietari.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
              {CONFIG.testimonianze.slice(0, 3).map((t, i) => (
                <div key={i} style={{ padding: 24, background: "#fff", border: "1px solid var(--border)", borderRadius: 12 }}>
                  <div style={{ color: "var(--accent)", fontSize: 16, marginBottom: 12 }}>★★★★★</div>
                  <p style={{ fontSize: 15, lineHeight: 1.55, margin: "0 0 16px", color: "var(--text)" }}>&ldquo;{t.quote}&rdquo;</p>
                  <footer style={{ fontSize: 13, color: "var(--text-muted)" }}>
                    <strong style={{ color: "var(--text)", fontWeight: 700 }}>{t.autore}</strong> · {t.città}
                  </footer>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}>
              <strong style={{ color: "var(--text)" }}>{CONFIG.stats.ratingMedio}★</strong> media su Google · <strong style={{ color: "var(--text)" }}>{CONFIG.stats.ratingReviews}+</strong> proprietari soddisfatti
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ SOCIAL / PDF (opzionali) ═══════════════ */}
      {(CONFIG.instagramUrl || CONFIG.pdfLeadMagnetUrl) && (
        <section style={{ padding: "80px 0" }}>
          <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
            <h3 style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: 32 }}>
              Restiamo in contatto.
            </h3>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              {CONFIG.instagramUrl && (
                <a href={CONFIG.instagramUrl} target="_blank" rel="noopener" className="btn-outline">
                  📸 Seguici su Instagram
                </a>
              )}
              {CONFIG.pdfLeadMagnetUrl && (
                <a href={CONFIG.pdfLeadMagnetUrl} target="_blank" rel="noopener" className="btn">
                  📥 Scarica la guida gratuita
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ CONTATTI VELOCI ═══════════════ */}
      <section style={{ padding: "60px 0 100px", background: "var(--bg-dark)", color: "#fff" }}>
        <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 20, color: "var(--gold)" }}>PER URGENZE</div>
          <h3 style={{ fontSize: "clamp(24px, 3vw, 36px)", marginBottom: 32, color: "#fff" }}>
            Contattaci subito.
          </h3>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${CONFIG.telefono}`} className="btn">📞 {CONFIG.telefono}</a>
            <a href={`mailto:${CONFIG.email}`} style={{ padding: "18px 32px", background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", borderRadius: 999, fontWeight: 700, fontSize: 15 }}>✉️ {CONFIG.email}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
