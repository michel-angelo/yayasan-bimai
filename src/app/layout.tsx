import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

<meta name="apple-mobile-web-app-title" content="BIMAI" />;

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${playfair.variable} ${amiri.variable} font-sans bg-[var(--color-putih)] text-[var(--color-teks)] antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingWA /> {/* <-- Pasang di sini, di atas Footer */}
        <Footer />
      </body>
    </html>
  );
}
