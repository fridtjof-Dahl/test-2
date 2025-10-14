import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Billån: Søk hos flere banker og få beste rente | Enkel Finansiering",
  description: "Trenger du billån? Hos Enkel Finansiering kan du søke hos flere banker med én gratis søknad. Få raskt svar, lav rente og personlig hjelp. Søk i dag!",
  keywords: "billån, bilfinansiering, lån til bil, billånskalkulator, grønt billån, billån uten egenkapital",
  openGraph: {
    title: "Enkel Finansiering - Norges enkleste vei til billån",
    description: "Søk hos flere banker med én søknad. Få beste rente og personlig hjelp.",
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
