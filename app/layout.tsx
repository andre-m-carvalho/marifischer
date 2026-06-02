import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: {
    default: "Dra. Mariana Fischer | Otorrinolaringologista em São Paulo",
    template: "%s | Dra. Mariana Fischer | Otorrinolaringologista SP",
  },
  description:
    "Otorrinolaringologista em São Paulo para adultos e crianças. Dra. Mariana Fischer, consultas, procedimentos e cirurgias otorrino. CRM-SP 134.600, RQE 108169.",
  metadataBase: new URL("https://marifischer.com.br"),
  verification: {
    google: "F5QxG7ruvVulP94-2BZwCKH1yB6uJQwnJwYs89FrNk4",
  },
  openGraph: {
    siteName: "Dra. Mariana Fischer, Otorrinolaringologista",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" href="/icone.png" type="image/png" />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
