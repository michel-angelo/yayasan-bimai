// src/components/home/Testimoni.tsx

const testimoni = [
  {
    nama: "Budi Santoso",
    peran: "Donatur Tetap",
    pesan:
      "Saya sudah berdonasi ke BIMAI selama 2 tahun. Laporan penggunaan dananya selalu transparan dan tepat sasaran. Insya Allah berkah.",
  },
  {
    nama: "Siti Rahmawati",
    peran: "Penerima Beasiswa",
    pesan:
      "Berkat beasiswa dari BIMAI, saya bisa melanjutkan pendidikan. Terima kasih sudah percaya pada mimpi anak yatim seperti saya.",
  },
  {
    nama: "Ahmad Fauzi",
    peran: "Donatur",
    pesan:
      "Prosesnya mudah, timnya responsif, dan yang paling penting amanah. Tidak ragu untuk terus berdonasi di sini.",
  },
];

export default function Testimoni() {
  return (
    <section className="bg-[var(--color-hijau-muda)] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center md:text-left">
          <p className="text-sm font-bold text-[var(--color-emas)] uppercase tracking-widest mb-3">
            Testimoni
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-teks)] font-bold">
            Kata Mereka
          </h2>
          <p className="text-[var(--color-teks-sekunder)] mt-4 max-w-lg mx-auto md:mx-0 text-base">
            Kepercayaan donatur dan senyum penerima manfaat adalah motivasi
            terbesar kami.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimoni.map((item) => (
            <div
              key={item.nama}
              className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow group"
            >
              {/* Kutipan & Teks */}
              <p className="text-[var(--color-emas)] text-5xl font-serif leading-none h-6 group-hover:-translate-y-1 transition-transform">
                "
              </p>
              <p className="text-sm text-[var(--color-teks-sekunder)] leading-relaxed flex-1 mt-4">
                {item.pesan}
              </p>

              {/* Profil */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[var(--color-emas-muda)] flex items-center justify-center text-[var(--color-emas)] font-bold text-lg">
                  {item.nama.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-teks)]">
                    {item.nama}
                  </p>
                  <p className="text-xs text-[var(--color-emas)] uppercase tracking-wider mt-1 font-semibold">
                    {item.peran}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
