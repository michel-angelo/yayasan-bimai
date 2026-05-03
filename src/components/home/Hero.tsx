import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[var(--color-putih)] overflow-hidden">
      {/* Background Ornamen (Hanya muncul di Desktop) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-hijau-muda)]/40 rounded-bl-full -z-10 hidden md:block" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-28 md:pb-32 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Kolom Kiri: Teks & Call to Action */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-0.5 bg-[var(--color-emas)]" />
            <span className="text-[var(--color-emas)] font-bold text-xs tracking-widest uppercase">
              Peduli • Amanah • Berdaya
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-teks)] leading-tight">
            Bersama, Kita Bisa <br />
            <span className="text-[var(--color-hijau-tua)] italic">
              Ubah Kehidupan
            </span>
          </h1>

          <p className="text-[var(--color-teks-sekunder)] text-base md:text-lg leading-relaxed max-w-lg">
            Yayasan Bina Masyarakat Indonesia (BIMAI) hadir untuk memberdayakan
            umat melalui program sosial, pendidikan, dan kemanusiaan yang
            berkelanjutan dan tepat sasaran.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="https://wa.me/6288902047766"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-hijau-tua)] text-white px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-opacity-90 transition-all shadow-lg shadow-[var(--color-hijau-tua)]/20"
            >
              Donasi Sekarang
            </a>
            <Link
              href="/program"
              className="bg-white text-[var(--color-hijau-tua)] border border-[var(--color-hijau-tua)] px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-[var(--color-hijau-muda)] transition-all"
            >
              Lihat Program
            </Link>
          </div>

          {/* Baris Statistik */}
          <div className="flex items-center gap-6 md:gap-8 mt-8 pt-8 border-t border-gray-200 w-full">
            <div>
              <p className="font-serif text-3xl text-[var(--color-hijau-tua)] font-bold">
                12+
              </p>
              <p className="text-[10px] text-[var(--color-teks-sekunder)] uppercase tracking-wider mt-1 font-semibold">
                Tahun Berdiri
              </p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="font-serif text-3xl text-[var(--color-hijau-tua)] font-bold">
                5Rb+
              </p>
              <p className="text-[10px] text-[var(--color-teks-sekunder)] uppercase tracking-wider mt-1 font-semibold">
                Penerima Manfaat
              </p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="font-serif text-3xl text-[var(--color-hijau-tua)] font-bold">
                20+
              </p>
              <p className="text-[10px] text-[var(--color-teks-sekunder)] uppercase tracking-wider mt-1 font-semibold">
                Program Aktif
              </p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Visual / Gambar */}
        <div className="flex-1 w-full relative mt-10 md:mt-0">
          <div className="aspect-[4/3] md:aspect-square bg-[var(--color-hijau-tua)] rounded-2xl overflow-hidden relative shadow-2xl flex flex-col items-center justify-center group">
            {/* Tempat Placeholder Foto. Jika Anda sudah punya foto, ganti ini dengan <Image src="..." /> dari Next.js */}
            <svg
              className="w-16 h-16 text-white/40 mb-4 group-hover:scale-110 transition-transform duration-500"
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
            <span className="font-serif italic tracking-wider text-white/60 text-sm">
              [ Ruang Visual Foto Kegiatan ]
            </span>
          </div>

          {/* Elemen Melayang (Floating Card) */}
          <div className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-5 rounded-xl shadow-xl border border-gray-100 max-w-[220px]">
            <p className="text-[10px] font-bold text-[var(--color-emas)] uppercase tracking-wider mb-1.5">
              Bantuan Mendesak
            </p>
            <p className="font-serif text-[var(--color-teks)] font-bold text-base leading-snug">
              Beasiswa Santri Berprestasi 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
