import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CONFIG } from "@/lib/config";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: `${CONFIG.nomeAgenzia} — Affitti brevi a ${CONFIG.città}`,
  description: `Il tuo immobile a ${CONFIG.città} può rendere fino al ${CONFIG.stats.percentualeRendita} in più. Gestione completa affitti brevi.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
