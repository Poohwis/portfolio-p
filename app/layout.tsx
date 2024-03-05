import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavButton from "@/components/NavButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Phuwis — Fullstack web developer",
  description:
    "Motivated self-taught programmer seeking full-stack web developer opportunities. ",
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
      <body className={`${poppins.className} `}>
        {children}
        </body>
    </html>
  );
}
