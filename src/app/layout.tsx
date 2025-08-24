import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratRegular = Montserrat({
  weight: "400",
  variable: "--font-montserrat-regular",
  subsets: ["latin"],
});

const montserratSemibold = Montserrat({
  weight: "600",
  variable: "--font-montserrat-semibold",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iArremate Legacy - O Mercado de Arte em Números",
  description: "Transforme seu olhar sobre arte. Tenha acesso a métricas exclusivas que revelam o verdadeiro potencial de um acervo, com a mesma clareza dos índices financeiros.",
  keywords: "arte, mercado de arte, análise de dados, investimento em arte, colecionador, galerista",
  authors: [{ name: "iArremate Legacy" }],
  openGraph: {
    title: "iArremate Legacy - O Mercado de Arte em Números",
    description: "A primeira plataforma de análise de dados do Brasil dedicada ao mercado de arte.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/images/iArremateLegacyRedcut.png",
    shortcut: "/images/iArremateLegacyRedcut.png",
    apple: "/images/iArremateLegacyRedcut.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserratRegular.variable} ${montserratSemibold.variable} font-montserrat antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
