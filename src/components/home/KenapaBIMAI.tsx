const alasan = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    judul: "Legalitas Terpercaya",
    deskripsi:
      "Yayasan BIMAI terdaftar resmi dengan akta notaris dan SK Kemenkumham yang dapat diverifikasi.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    judul: "Transparan & Akuntabel",
    deskripsi:
      "Setiap donasi dilaporkan secara terbuka. Kami percaya transparansi adalah bentuk amanah.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    judul: "Dampak Nyata",
    deskripsi:
      "Program kami dirancang berbasis kebutuhan lapangan, bukan sekadar angka di atas kertas.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    judul: "Dikelola Profesional",
    deskripsi:
      "Tim kami terdiri dari individu berpengalaman di bidang sosial, pendidikan, dan kemanusiaan.",
  },
];

export default function KenapaBIMAI() {
  return (
    <section className="bg-white px-6 py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Kolom Kiri: Teks & Kutipan */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm font-bold text-[var(--color-emas)] uppercase tracking-widest mb-3">
              Kenapa BIMAI?
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-teks)] leading-tight mb-4">
              Donasi yang Tepat Sasaran & Amanah
            </h2>
            <p className="text-[var(--color-teks-sekunder)] leading-relaxed text-base md:text-lg">
              Kami memahami bahwa kepercayaan adalah segalanya. Setiap rupiah
              yang Anda titipkan akan kami jaga dan salurkan dengan penuh
              tanggung jawab.
            </p>
          </div>

          {/* Highlight Quote Box */}
          <div className="p-6 md:p-8 bg-[var(--color-emas-muda)] rounded-2xl border border-[var(--color-emas)]/20 shadow-sm relative overflow-hidden">
            {/* Ornamen dekoratif tipis */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-emas)]/10 rounded-bl-full" />

            <p
              dir="rtl"
              className="font-arab text-[var(--color-hijau-tua)] text-3xl md:text-4xl leading-loose font-bold relative z-10"
            >
              وَتَعَاوَنُوْا عَلَى الْبِرِّ وَالتَّقْوٰىۖ
            </p>
            <p className="text-sm md:text-base text-[var(--color-teks-sekunder)] mt-4 font-medium italic relative z-10 leading-relaxed">
              "Dan tolong-menolonglah kamu dalam kebaikan dan ketakwaan."{" "}
              <br className="hidden md:block" />
              (Al-Maidah: 2)
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Daftar Alasan */}
        <div className="flex flex-col gap-8 md:gap-10">
          {alasan.map((item) => (
            <div key={item.judul} className="flex gap-5 items-start group">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-hijau-muda)] flex items-center justify-center text-[var(--color-hijau-tua)] font-bold flex-shrink-0 group-hover:bg-[var(--color-emas)] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="text-xl font-serif font-bold text-[var(--color-teks)] group-hover:text-[var(--color-hijau-tua)] transition-colors">
                  {item.judul}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-teks-sekunder)] leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
