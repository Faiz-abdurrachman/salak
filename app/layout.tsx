import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Syne,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daulat Salak — Komoditas. Terdesentralisasi.",
  description:
    "Indonesia's first commodity-backed Web3 salak fruit ecosystem. 1 kg salak. 1 $SALAK token. Real fruit, real warehouse, redeemable anytime.",
  keywords: ["salak", "web3", "Indonesia", "DeFi", "komoditas", "blockchain"],
  openGraph: {
    title: "Daulat Salak",
    description: "Buah ini telah ada sejak 1.000 tahun. Belum pernah menyentuh blockchain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#080806] text-[#F2EDE4] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
