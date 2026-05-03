// src/app/galeri/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Kegiatan - BIMAI Peduli",
  description:
    "Dokumentasi visual penyaluran donasi dan kegiatan sosial Yayasan Bina Masyarakat Indonesia.",
};

// Data Statis (Hard-coded) untuk Galeri
const galeriData = [
  {
    id: 1,
    judul: "Penyaluran Wakaf Qur'an di Pelosok NTT",
    kategori: "Pendidikan",
    tanggal: "12 Mei 2026",
  },
  {
    id: 2,
    judul: "Distribusi Sedekah Pangan Jumat",
    kategori: "Sosial",
    tanggal: "08 Mei 2026",
  },
  {
    id: 3,
    judul: "Peresmian Sumur Bor Desa Sukamaju",
    kategori: "Kemanusiaan",
    tanggal: "20 April 2026",
  },
  {
    id: 4,
    judul: "Penyerahan Beasiswa Santri",
    kategori: "Pendidikan",
    tanggal: "15 April 2026",
  },
  {
    id: 5,
    judul: "Bantuan Logistik Korban Banjir",
    kategori: "Tanggap Bencana",
    tanggal: "02 April 2026",
  },
  {
    id: 6,
    judul: "Pelatihan UMKM Bunda Yatim",
    kategori: "Ekonomi",
    tanggal: "25 Maret 2026",
  },
];

export default function GaleriPage() {
  return (
    <div className="bg-[var(--color-putih)] min-h-screen">
      {/* Header Halaman */}
      <section className="bg-white pt-16 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest text-[var(--color-emas)] uppercase mb-4">
            Dokumentasi Visual
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-teks)] font-bold mb-6">
            Galeri{" "}
            <span className="text-[var(--color-hijau-tua)] italic">
              Kebaikan
            </span>
          </h1>
          <p className="text-[var(--color-teks-sekunder)] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Jejak langkah kepedulian yang terukir berkat keikhlasan Anda. Setiap
            foto adalah cerita tentang harapan yang kembali menyala.
          </p>
        </div>
      </section>

      {/* Grid Galeri */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galeriData.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square md:aspect-[4/5] bg-[var(--color-hijau-muda)] rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
            >
              {/* Gambar / Placeholder Visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-hijau-tua)]/30 group-hover:scale-110 transition-transform duration-700">
                <svg
                  className="w-16 h-16 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-serif italic text-xs tracking-wider">
                  Foto {item.kategori}
                </span>
              </div>

              {/* Overlay Gradient (Muncul saat di-hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-hijau-tua)] via-[var(--color-hijau-tua)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Teks Informasi */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[var(--color-emas)] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                    {item.kategori}
                  </span>
                  <span className="text-white/80 text-xs font-medium">
                    {item.tanggal}
                  </span>
                </div>
                <h3 className="text-white font-serif text-xl font-bold leading-snug">
                  {item.judul}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
