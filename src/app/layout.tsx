import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Integração de dados de marketing",
  description:
    "Conecte diretamente seus dados de marketing, em minutos e em um formato fácil de usar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
