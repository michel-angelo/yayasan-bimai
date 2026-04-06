const alasan = [
  {
    icon: "✓",
    judul: "Legalitas Terpercaya",
    deskripsi:
      "Yayasan BIMAI terdaftar resmi dengan akta notaris dan SK Kemenkumham yang dapat diverifikasi.",
  },
  {
    icon: "✓",
    judul: "Transparan & Akuntabel",
    deskripsi:
      "Setiap donasi dilaporkan secara terbuka. Kami percaya transparansi adalah bentuk amanah.",
  },
  {
    icon: "✓",
    judul: "Dampak Nyata",
    deskripsi:
      "Program kami dirancang berbasis kebutuhan lapangan, bukan sekadar angka di atas kertas.",
  },
  {
    icon: "✓",
    judul: "Dikelola Profesional",
    deskripsi:
      "Tim kami terdiri dari individu berpengalaman di bidang sosial, pendidikan, dan kemanusiaan.",
  },
];

export default function KenapaBIMAI() {
  return (
    <section className="bg-[var(--putih)] px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Teks kiri */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest">
            Kenapa BIMAI
          </p>
          <h2 className="text-3xl text-[var(--teks)]">
            Donasi yang Tepat Sasaran & Amanah
          </h2>
          <p className="text-[var(--teks-sekunder)] leading-relaxed">
            Kami memahami bahwa kepercayaan adalah segalanya. Setiap rupiah yang
            Anda titipkan akan kami jaga dan salurkan dengan penuh tanggung
            jawab.
          </p>
          <p className="font-arab text-[var(--emas)] text-xl mt-2">
            وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
          </p>
          <p className="text-xs text-[var(--teks-sekunder)]">
            "Dan tolong-menolonglah kamu dalam kebaikan dan ketakwaan."
            (Al-Maidah: 2)
          </p>
        </div>

        {/* List kanan */}
        <div className="flex flex-col gap-6">
          {alasan.map((item) => (
            <div key={item.judul} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-[var(--hijau-muda)] flex items-center justify-center text-[var(--hijau)] font-bold flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-[var(--teks)]">
                  {item.judul}
                </h3>
                <p className="text-sm text-[var(--teks-sekunder)] leading-relaxed">
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
