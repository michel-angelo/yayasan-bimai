import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "BIMAI Peduli — Yayasan Bina Masyarakat Indonesia",
  description:
    "Bersama memberdayakan masyarakat melalui program sosial, pendidikan, dan kemanusiaan yang berkelanjutan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} ${amiri.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
