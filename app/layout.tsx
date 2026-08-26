import type { Metadata } from "next";
import "./globals.css";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `${CONFIG.nomeAgenzia} — Affitti brevi a ${CONFIG.città}`,
  description: `Il tuo immobile a ${CONFIG.città} può rendere fino al ${CONFIG.stats.percentualeRendita} in più. Gestione completa affitti brevi. Bonifico ogni mese.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
