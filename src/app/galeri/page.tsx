// src/app/galeri/page.tsx

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galeri Kegiatan - BIMAI Peduli",
  description:
    "Dokumentasi visual penyaluran donasi dan kegiatan sosial Yayasan Bina Masyarakat Indonesia.",
};

const galeriData = [
  {
    id: 1,
    judul: "Penyaluran Wakaf Qur'an & Iqro",
    kategori: "Pendidikan",
    tanggal: "12 Mei 2026",
    image: "/images/distribusi-wakaf-qur'an.webp",
    size: "wide"
  },
  {
    id: 2,
    judul: "Sedekah Pangan Jalanan untuk Lansia",
    kategori: "Sosial",
    tanggal: "08 Mei 2026",
    image: "/images/jumber.webp",
    size: "tall"
  },
  {
    id: 3,
    judul: "Doa Bersama Santri & Anak Yatim",
    kategori: "Kemanusiaan",
    tanggal: "20 April 2026",
    image: "/images/doa-bersama.webp",
    size: "tall"
  },
  {
    id: 4,
    judul: "Penyerahan Beasiswa & Alat Belajar",
    kategori: "Pendidikan",
    tanggal: "15 April 2026",
    image: "/images/santunan.webp",
    size: "normal"
  },
  {
    id: 5,
    judul: "Santunan & Buka Puasa Bersama",
    kategori: "Sosial",
    tanggal: "02 April 2026",
    image: "/images/bukber.webp",
    size: "wide"
  },
  {
    id: 6,
    judul: "Pembagian Paket Buku & Krayon",
    kategori: "Pendidikan",
    tanggal: "25 Maret 2026",
    image: "/images/santunan2.webp",
    size: "normal"
  },
];

export default function GaleriPage() {
  return (
    <div className="bg-[#fdfaf5] min-h-screen">
      {/* Editorial Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-emas" />
            <p className="text-xs font-bold tracking-[0.4em] text-emas uppercase">Dokumentasi</p>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl text-teks font-bold leading-[0.85] mb-12">
            Jejak <br /> <span className="text-hijau-tua">Harapan.</span>
          </h1>
          <p className="text-teks-sekunder text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-hijau-tua pl-8">
            Setiap momen adalah bukti nyata bahwa kebaikan tidak pernah sia-sia. Inilah fragmen kebahagiaan yang kita bangun bersama.
          </p>
        </div>
      </section>

      {/* Masonry-style Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {galeriData.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden bg-white border border-gray-100 shadow-sm"
            >
              <div className="relative w-full">
                <Image 
                  src={item.image} 
                  alt={item.judul} 
                  width={800} 
                  height={item.size === 'tall' ? 1200 : item.size === 'wide' ? 600 : 800} 
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Overlay Label (Permanent but subtle) */}
              <div className="p-6 bg-white flex flex-col gap-4">
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold tracking-widest text-emas uppercase">{item.kategori}</span>
                    <span className="text-[10px] text-teks-sekunder font-medium">{item.tanggal}</span>
                 </div>
                 <h3 className="font-serif text-xl text-teks font-bold leading-snug group-hover:text-hijau-tua transition-colors">
                    {item.judul}
                 </h3>
              </div>

              {/* Minimalist interactive accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-8 h-8 rounded-full bg-hijau-tua text-white flex items-center justify-center text-xs">
                    +
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
