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
    <section className="bg-[var(--hijau-muda)] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest mb-2">
            Testimoni
          </p>
          <h2 className="text-3xl text-[var(--teks)]">Kata Mereka</h2>
          <p className="text-[var(--teks-sekunder)] mt-2 max-w-lg">
            Kepercayaan donatur dan senyum penerima manfaat adalah motivasi
            terbesar kami.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimoni.map((item) => (
            <div
              key={item.nama}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-[var(--emas)] text-3xl font-serif">"</p>
              <p className="text-sm text-[var(--teks-sekunder)] leading-relaxed flex-1">
                {item.pesan}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-[var(--hijau-muda)] flex items-center justify-center text-[var(--hijau)] font-bold text-sm">
                  {item.nama.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--teks)]">
                    {item.nama}
                  </p>
                  <p className="text-xs text-[var(--teks-sekunder)]">
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
