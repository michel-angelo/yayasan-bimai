import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

export const metadata: Metadata = {
  metadataBase: new URL("https://bimaipeduli.id"),
  title: {
    default: "BIMAI Peduli - Yayasan Bina Masyarakat Indonesia",
    template: "%s | BIMAI Peduli",
  },
  description:
    "Portal Resmi Wakaf & Donasi Yayasan Bina Masyarakat Indonesia. Bersama memberdayakan masyarakat melalui program sosial, pendidikan, wakaf Al-Qur'an Braille, dan kemanusiaan berkelanjutan.",
  keywords: [
    "yayasan bimai",
    "bimai peduli",
    "wakaf quran braille",
    "donasi online",
    "sedekah subuh",
    "wakaf alquran",
    "yayasan yatim",
    "bina masyarakat indonesia",
    "pamulang tangerang selatan",
  ],
  authors: [{ name: "Yayasan Bina Masyarakat Indonesia" }],
  creator: "Yayasan BIMAI",
  publisher: "Yayasan BIMAI",
  alternates: {
    canonical: "https://bimaipeduli.id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "BIMAI Peduli - Bergerak Bersama Memberdayakan Umat",
    description:
      "Satu langkah kecilmu hari ini bisa mengubah hidup banyak orang. Mari berdonasi dan berwakaf Al-Qur'an Braille bersama BIMAI Peduli.",
    url: "https://bimaipeduli.id",
    siteName: "BIMAI Peduli",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Logo Resmi BIMAI Peduli",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIMAI Peduli - Yayasan Bina Masyarakat Indonesia",
    description:
      "Bersama memberdayakan masyarakat melalui program sosial, pendidikan, wakaf Al-Qur'an Braille, dan kemanusiaan.",
    images: ["/logo.webp"],
  },
};

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
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${playfair.variable} ${amiri.variable} font-sans bg-[var(--color-putih)] text-[var(--color-teks)] antialiased min-h-screen flex flex-col overflow-x-hidden`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
        <FloatingWA />
        <Footer />
      </body>
    </html>
  );
}
