import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Billån på dagen: Uforpliktende tilbud innen 24 timer | Enkel Finansiering",
  description: "Få et uforpliktende tilbud på billån innen 24 timer fra vår samarbeidspartner. Rask behandling og personlig oppfølging.",
  keywords: "billån, bilfinansiering, lån til bil, billånskalkulator, billån på dagen, uforpliktende tilbud",
  openGraph: {
    title: "Enkel Finansiering - Billån på dagen",
    description: "Få et uforpliktende tilbud innen 24 timer. Rask behandling og personlig oppfølging.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
