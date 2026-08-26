import { CONFIG } from "@/lib/config";
import Link from "next/link";

export default function Grazie() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 780 }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>RICHIESTA RICEVUTA</div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 76px)", marginBottom: 28 }}>
          Grazie!<br/>
          <span style={{ color: "var(--accent)" }}>Ti richiamiamo entro 24 ore.</span>
        </h1>
        <p style={{ fontSize: 20, color: "var(--text-muted)", marginBottom: 56, lineHeight: 1.55 }}>
          Il team di {CONFIG.nomeAgenzia} ha ricevuto la tua richiesta. Ti contatteremo il prima possibile per fissare la consulenza sul tuo immobile a {CONFIG.città}.
        </p>
        <div className="eyebrow" style={{ marginBottom: 24 }}>PER URGENZE</div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", fontSize: 15 }}>
          <a href={`tel:${CONFIG.telefono}`} className="btn">{CONFIG.telefono}</a>
          <a href={`mailto:${CONFIG.email}`} className="btn-outline">{CONFIG.email}</a>
        </div>
        <div style={{ marginTop: 64, fontSize: 14 }}>
          <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "underline" }}>← Torna alla pagina</Link>
        </div>
      </div>
    </main>
  );
}
