import type { Metadata } from "next";
import {  Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitosans = Nunito_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Phuwis — Fullstack web developer",
  description: "Motivated self-taught programmer seeking full-stack web developer opportunities. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={nunitosans.className}>{children}</body>
    </html>
  );
}
