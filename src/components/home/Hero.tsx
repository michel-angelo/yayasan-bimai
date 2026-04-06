export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-[var(--hijau-tua)] px-6 py-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Teks */}
        <div className="flex flex-col gap-6">
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            className="font-arab text-[var(--emas)] text-2xl"
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-4xl md:text-5xl leading-tight"
          >
            Bersama, Kita Bisa{" "}
            <span className="text-[var(--emas)]">Ubah Kehidupan</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/70 text-base leading-relaxed"
          >
            Yayasan BIMAI hadir untuk memberdayakan masyarakat melalui program
            sosial, pendidikan, dan kemanusiaan yang berkelanjutan.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/6288902047766"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--emas)] text-[var(--teks)] font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Donasi Sekarang
            </a>
            <a
              href="/program"
              className="border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Lihat Program
            </a>
          </div>
        </div>

        {/* Gambar */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="relative w-full aspect-square max-w-md mx-auto bg-white/10 rounded-2xl flex items-center justify-center"
        >
          <p className="text-white/40 text-sm">Foto kegiatan placeholder</p>
        </div>
      </div>
    </section>
  );
}
