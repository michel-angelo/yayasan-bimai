import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wakaf Al-Qur'an Braille Tunanetra | BIMAI Peduli",
  description:
    "Terangi hati sahabat tunanetra dengan Wakaf Al-Qur'an Braille. Bantu sahabat disabilitas netra membaca & menghafal Al-Qur'an secara mandiri bersama BIMAI Peduli.",
  openGraph: {
    title: "Wakaf Al-Qur'an Braille Tunanetra | BIMAI Peduli",
    description:
      "Bantu sahabat tunanetra memiliki Al-Qur'an Braille. Pahala jariyah abadi dengan mewakafkan mushaf titik timbul untuk santri disabilitas netra.",
    images: [
      {
        url: "/images/seorang_tunanetra_sedang_membaca_alquran_braille_dipandu_oleh_ustadz_yang_juga_tunanetra_landscape_3.webp",
        width: 1200,
        height: 630,
        alt: "Santri Tunanetra Membaca Al-Qur'an Braille",
      },
    ],
  },
};

export default function WakafBrailleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
