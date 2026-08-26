import { CONFIG } from "@/lib/config";
import Link from "next/link";

export default function Grazie() {
  const accent = CONFIG.coloreAccent;
  return (
    <main style={{ background: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
        <div className="mono" style={{ fontSize: 13, color: accent, textTransform: "uppercase", marginBottom: 24, letterSpacing: "0.1em" }}>RICHIESTA RICEVUTA</div>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 32px" }}>
          Grazie!<br/><span style={{ color: accent }}>Ti richiamiamo entro 24 ore.</span>
        </h1>
        <p style={{ fontSize: 20, color: "#a3a3a3", marginBottom: 48, lineHeight: 1.5 }}>
          Il team di {CONFIG.nomeAgenzia} ha ricevuto la tua richiesta. Ti contatteremo il prima possibile per fissare la valutazione del tuo immobile a {CONFIG.città}.
        </p>
        <div style={{ fontSize: 15, color: "#737373", marginBottom: 40 }}>Per urgenze puoi contattarci direttamente:</div>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", fontSize: 16 }}>
          <a href={`tel:${CONFIG.telefono}`} style={{ padding: "14px 28px", border: `1px solid ${accent}`, color: accent, fontWeight: 600 }}>📞 {CONFIG.telefono}</a>
          <a href={`mailto:${CONFIG.email}`} style={{ padding: "14px 28px", border: "1px solid #262626", color: "#f5f5f5", fontWeight: 600 }}>✉️ {CONFIG.email}</a>
        </div>
        <div style={{ marginTop: 64, fontSize: 14, color: "#737373" }}>
          <Link href="/" style={{ color: "#a3a3a3", textDecoration: "underline" }}>← Torna alla pagina</Link>
        </div>
      </div>
    </main>
  );
}
