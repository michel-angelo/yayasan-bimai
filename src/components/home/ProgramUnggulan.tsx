import Link from "next/link";

// 1. Data Statis (Hard-coded) sebagai pengganti CMS
const programs = [
  {
    id: "wakaf-quran",
    nama: "Wakaf Qur'an",
    deskripsi:
      "Menyalurkan mushaf Al-Qur'an baru dan layak baca ke pelosok desa, madrasah, dan pondok pesantren yang kekurangan fasilitas belajar.",
    targetDana: 25000000,
    danaTerkumpul: 18500000,
    status: "aktif",
  },
  {
    id: "wakaf-quran-braille",
    nama: "Wakaf Qur'an Braille",
    deskripsi:
      "Memfasilitasi saudara-saudara kita penyandang tunanetra dengan Al-Qur'an Braille khusus agar mereka tetap bisa membaca dan menghafal kalam Ilahi.",
    targetDana: 30000000,
    danaTerkumpul: 12400000,
    status: "aktif",
  },
  {
    id: "sedekah-subuh",
    nama: "Sedekah Subuh",
    deskripsi:
      "Mengawali hari dengan kebaikan. Dana sedekah subuh disalurkan untuk membantu biaya pengobatan dhuafa, beasiswa yatim, dan kebutuhan mendesak.",
    targetDana: 50000000,
    danaTerkumpul: 42000000,
    status: "aktif",
  },
];

export default function ProgramUnggulan() {
  return (
    <section className="bg-putih px-6 py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b-2 border-hijau-tua pb-6">
          <div>
            <p className="text-sm font-bold tracking-widest text-emas uppercase mb-3">
              Pilar Kebaikan
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-teks font-bold">
              Fokus Penyaluran
            </h2>
          </div>
          <Link
            href="/program"
            className="text-sm font-bold tracking-wide text-hijau-tua hover:text-emas transition-colors flex items-center gap-2"
          >
            Lihat Semua Program
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Grid Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program) => {
            // Kalkulasi persentase dana
            const persen =
              program.targetDana > 0
                ? Math.min(
                    Math.round(
                      (program.danaTerkumpul / program.targetDana) * 100,
                    ),
                    100,
                  )
                : 0;

            return (
              <div
                key={program.id}
                className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Frame Gambar (Placeholder) */}
                <div className="relative w-full aspect-[4/3] bg-hijau-muda flex items-center justify-center overflow-hidden">
                  <svg
                    className="w-12 h-12 text-hijau-tua/30 group-hover:scale-110 transition-transform duration-500"
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
                  <span className="absolute bottom-4 font-serif italic tracking-wider text-hijau-tua/50 text-xs">
                    [ Foto Dokumentasi ]
                  </span>

                  {/* Badge Status */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded shadow-sm ${
                      program.status === "aktif"
                        ? "bg-emas text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {program.status === "aktif"
                      ? "Sedang Berjalan"
                      : "Telah Selesai"}
                  </div>
                </div>

                {/* Konten Card */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-bold text-teks mb-3 leading-snug group-hover:text-hijau-tua transition-colors">
                    {program.nama}
                  </h3>
                  <p className="text-sm text-teks-sekunder leading-relaxed mb-8 flex-1 line-clamp-3">
                    {program.deskripsi}
                  </p>

                  {/* Area Progress Bar */}
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs font-bold text-teks-sekunder mb-2">
                      <span>
                        Terkumpul:{" "}
                        <span className="text-hijau-tua">
                          Rp {program.danaTerkumpul.toLocaleString("id-ID")}
                        </span>
                      </span>
                      <span className="text-emas">{persen}%</span>
                    </div>

                    {/* Bar Tracker */}
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
                      <div
                        className="h-full bg-hijau-tua rounded-full transition-all duration-1000"
                        style={{ width: `${persen}%` }}
                      />
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex gap-3">
                      <a
                        href={`https://wa.me/6288902047766?text=Bismillah,%20saya%20ingin%20berdonasi%20untuk%20program%20${encodeURIComponent(program.nama)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-xs font-bold tracking-wide uppercase text-white bg-hijau-tua py-3 rounded hover:bg-opacity-90 transition-colors"
                      >
                        Donasi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
