import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CONFIG } from "@/lib/config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: `${CONFIG.nomeAgenzia} — Affitti brevi a ${CONFIG.città}`,
  description: `Il tuo immobile a ${CONFIG.città} può rendere fino al ${CONFIG.stats.percentualeRendita} in più. Gestione completa affitti brevi. Bonifico ogni mese.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Inject colori brand cliente da config → CSS custom properties
  const brandStyle = {
    ["--accent" as string]: CONFIG.coloreAccent,
    ["--accent-hover" as string]: CONFIG.coloreAccentHover,
    ["--accent-soft" as string]: `${CONFIG.coloreAccent}14`, // 8% opacity
  } as React.CSSProperties;

  return (
    <html lang="it" className={jakarta.variable}>
      <body style={brandStyle}>{children}</body>
    </html>
  );
}
