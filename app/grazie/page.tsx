import { CONFIG } from "@/lib/config";
import Link from "next/link";

export default function Grazie() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 780 }}>
        <div className="eyebrow" style={{ marginBottom: 32 }}>RICHIESTA RICEVUTA</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 88px)", marginBottom: 32 }}>
          Grazie!<br/>
          <span style={{ color: "var(--accent)" }}>Ti richiamiamo entro 24 ore.</span>
        </h1>
        <p style={{ fontSize: 20, color: "var(--text-muted)", marginBottom: 56, lineHeight: 1.5 }}>
          Il team di {CONFIG.nomeAgenzia} ha ricevuto la tua richiesta. Ti contatteremo il prima possibile per fissare la valutazione del tuo immobile a {CONFIG.città}.
        </p>
        <div className="eyebrow-muted" style={{ marginBottom: 32 }}>PER URGENZE</div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", fontSize: 16 }}>
          <a href={`tel:${CONFIG.telefono}`} className="btn">{CONFIG.telefono}</a>
          <a href={`mailto:${CONFIG.email}`} style={{ padding: "18px 32px", border: "1px solid var(--border-strong)", color: "var(--text)", fontWeight: 800, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>{CONFIG.email}</a>
        </div>
        <div style={{ marginTop: 80, fontSize: 14 }}>
          <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "underline" }}>← Torna alla pagina</Link>
        </div>
      </div>
    </main>
  );
}
