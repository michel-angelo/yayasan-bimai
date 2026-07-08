import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

<meta name="apple-mobile-web-app-title" content="BIMAI" />;
export const metadata: Metadata = {
  title: "BIMAI Peduli - Yayasan Bina Masyarakat Indonesia",
  description:
    "Bersama memberdayakan masyarakat melalui program sosial, pendidikan, dan kemanusiaan yang berkelanjutan.",
  icons: {
    icon: "/logo.webp",
  },
  keywords: [
    "yayasan bimai",
    "bimai peduli",
    "donasi online",
    "sedekah subuh",
    "wakaf quran",
    "yayasan yatim",
    "bina masyarakat indonesia",
  ],
  authors: [{ name: "Yayasan BIMAI" }],
  openGraph: {
    title: "BIMAI Peduli - Bergerak Bersama Memberdayakan Umat",
    description:
      "Satu langkah kecilmu hari ini bisa mengubah hidup banyak orang. Mari berdonasi dan wujudkan perubahan nyata bersama BIMAI Peduli.",
    url: "https://bimaipeduli.id", // Ganti dengan domain Anda nanti jika sudah ada
    siteName: "BIMAI Peduli",
    images: [
      {
        url: "/logo.webp", // Idealnya nanti Anda buat gambar khusus ukuran 1200x630px
        width: 800,
        height: 600,
        alt: "Logo BIMAI Peduli",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIMAI Peduli - Yayasan Bina Masyarakat Indonesia",
    description:
      "Bersama memberdayakan masyarakat melalui program sosial, pendidikan, dan kemanusiaan yang berkelanjutan.",
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
        className={`${jakarta.variable} ${playfair.variable} ${amiri.variable} font-sans bg-[var(--color-putih)] text-[var(--color-teks)] antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingWA /> {/* <-- Pasang di sini, di atas Footer */}
        <Footer />
      </body>
    </html>
  );
}
