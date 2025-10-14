import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Kontakt oss | Enkel Finansiering',
  description: 'Har du spørsmål? Kontakt oss på e-post eller telefon. Vi svarer vanligvis innen 24 timer.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
