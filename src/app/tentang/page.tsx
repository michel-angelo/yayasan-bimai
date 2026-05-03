// src/app/tentang/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - BIMAI Peduli",
  description:
    "Mengenal lebih dekat Yayasan Bina Masyarakat Indonesia, visi, misi, dan dampak yang telah kami ciptakan.",
};

const misiList = [
  "Menyelenggarakan program pendidikan yang berkualitas bagi yatim dan dhuafa.",
  "Memberdayakan ekonomi masyarakat prasejahtera melalui bantuan modal dan pembinaan.",
  "Merespons cepat kebutuhan kemanusiaan dan tanggap darurat bencana alam.",
  "Menyediakan fasilitas kesehatan dan air bersih di daerah pelosok yang membutuhkan.",
];

const statistik = [
  { angka: "12+", label: "Tahun Berbakti" },
  { angka: "5.000+", label: "Penerima Manfaat" },
  { angka: "1.200+", label: "Donatur Aktif" },
  { angka: "20+", label: "Program Berjalan" },
];

export default function TentangPage() {
  return (
    <div className="bg-[var(--color-putih)] min-h-screen">
      {/* Header Halaman */}
      <section className="bg-[var(--color-hijau-tua)] pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest text-[var(--color-emas)] uppercase mb-4">
            Tentang Kami
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">
            Membangun Peradaban,
            <br className="hidden md:block" /> Memberdayakan Umat
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Yayasan Bina Masyarakat Indonesia (BIMAI) adalah lembaga filantropi
            Islam yang berdedikasi untuk mengangkat harkat dan martabat kaum
            dhuafa melalui pendekatan pendidikan, sosial, dan ekonomi yang
            komprehensif.
          </p>
        </div>
      </section>

      {/* Section Angka Dampak (Statistik) */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {statistik.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${idx === 0 || idx === 1 ? "pt-0" : "pt-8 md:pt-0"} md:pt-0`}
            >
              <p className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-emas)] mb-2">
                {stat.angka}
              </p>
              <p className="text-xs md:text-sm font-bold tracking-wider text-[var(--color-teks-sekunder)] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Visi */}
        <div className="bg-[var(--color-emas-muda)] p-10 md:p-14 rounded-3xl border border-[var(--color-emas)]/20 relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg
              className="w-24 h-24 text-[var(--color-emas)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-[var(--color-teks)] font-bold mb-6 relative z-10">
            Visi Kami
          </h2>
          <p className="text-[var(--color-hijau-tua)] font-serif text-xl md:text-2xl leading-relaxed italic relative z-10">
            "Menjadi lembaga filantropi terdepan yang profesional, transparan,
            dan berdampak luas dalam mewujudkan masyarakat Indonesia yang
            mandiri, sejahtera, dan berakhlak mulia."
          </p>
        </div>

        {/* Misi */}
        <div>
          <h2 className="font-serif text-3xl text-[var(--color-teks)] font-bold mb-8">
            Misi Kami
          </h2>
          <ul className="flex flex-col gap-6">
            {misiList.map((misi, index) => (
              <li key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[var(--color-hijau-muda)] flex items-center justify-center text-[var(--color-hijau-tua)] font-bold flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="text-[var(--color-teks-sekunder)] leading-relaxed text-base">
                  {misi}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
