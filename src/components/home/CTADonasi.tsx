import Link from "next/link";

export default function CTADonasi() {
  return (
    <section className="bg-[var(--color-hijau-tua)] px-6 py-24 overflow-hidden relative">
      {/* Pola Latar Belakang Geometris (Opsional, agar tidak terlalu sepi) */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

      <div className="max-w-3xl mx-auto text-center flex flex-col gap-10 items-center relative z-10">
        {/* Quote Section */}
        <div className="flex flex-col gap-4">
          <p
            dir="rtl"
            className="font-arab text-[var(--color-emas)] text-3xl md:text-4xl leading-loose font-bold"
          >
            مَنْ ذَا الَّذِيْ يُقْرِضُ اللّٰهَ قَرْضًا حَسَنًا
          </p>
          <p className="text-sm text-white/70 font-light tracking-wide">
            "Siapakah yang mau meminjamkan kepada Allah pinjaman yang baik?"{" "}
            <br className="hidden md:block" />
            (Al-Baqarah: 245)
          </p>
        </div>

        {/* Main CTA Text */}
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-3xl md:text-5xl text-white leading-tight font-serif font-bold">
            Jadikan Hartamu{" "}
            <span className="text-[var(--color-emas)] italic">
              Jariyah yang Abadi
            </span>
          </h2>
          <p className="text-white/80 text-base leading-relaxed max-w-xl">
            Satu langkah kecilmu hari ini bisa mengubah hidup banyak orang.
            Hubungi tim kami sekarang dan mulai perjalanan kebaikanmu.
          </p>
        </div>

        {/* Button */}
        <Link
          href="/donasi"
          className="inline-flex items-center gap-3 bg-[var(--color-emas)] text-[var(--color-teks)] font-bold px-8 py-4 rounded hover:bg-opacity-90 transition-all text-sm tracking-wide uppercase mt-4"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          Donasi Sekarang
        </Link>
      </div>
    </section>
  );
}
