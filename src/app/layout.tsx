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
  title: "IArremate Landing Page",
  description: "Landing page para IArremate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserratRegular.variable} ${montserratSemibold.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
