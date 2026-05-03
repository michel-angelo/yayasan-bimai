// src/app/program/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Kebaikan - BIMAI Peduli",
  description:
    "Daftar program penyaluran donasi Yayasan Bina Masyarakat Indonesia yang berfokus pada pendidikan, sosial, dan kemanusiaan.",
};

// Data Statis (Hard-coded) untuk semua program
// Data Statis (Hard-coded) untuk semua program
const allPrograms = [
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
      "Mengawali hari dengan kebaikan. Dana sedekah subuh disalurkan untuk membantu biaya pengobatan dhuafa, beasiswa yatim, dan kebutuhan mendesak lainnya.",
    targetDana: 50000000,
    danaTerkumpul: 42000000,
    status: "aktif",
  },
  {
    id: "jumat-berkah",
    nama: "Jum'at Berkah",
    deskripsi:
      "Distribusi paket sembako dan makanan bergizi siap santap setiap hari Jumat untuk keluarga prasejahtera, yatim, dan pekerja harian lepas.",
    targetDana: 15000000,
    danaTerkumpul: 8000000,
    status: "selesai",
  },
];

export default function ProgramPage() {
  return (
    <div className="bg-[var(--color-putih)] min-h-screen">
      {/* Header Halaman */}
      <section className="bg-[var(--color-hijau-muda)]/50 pt-16 pb-12 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-teks)] font-bold mb-4">
            Program{" "}
            <span className="text-[var(--color-hijau-tua)] italic">
              Kebaikan
            </span>
          </h1>
          <p className="text-[var(--color-teks-sekunder)] max-w-2xl text-base md:text-lg leading-relaxed">
            Pilih program yang paling menyentuh hati Anda. Mari bersama-sama
            wujudkan perubahan nyata untuk mereka yang membutuhkan uluran tangan
            kita.
          </p>
        </div>
      </section>

      {/* Grid Daftar Program */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allPrograms.map((program) => {
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
                className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex-1"
              >
                {/* Frame Gambar */}
                <div className="relative w-full aspect-[4/3] bg-[var(--color-hijau-muda)] flex items-center justify-center overflow-hidden">
                  <svg
                    className="w-12 h-12 text-[var(--color-hijau-tua)]/30 group-hover:scale-110 transition-transform duration-500"
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
                  <span className="absolute bottom-4 font-serif italic tracking-wider text-[var(--color-hijau-tua)]/50 text-xs">
                    [ Foto Dokumentasi ]
                  </span>

                  {/* Badge Status */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded shadow-sm ${
                      program.status === "aktif"
                        ? "bg-[var(--color-emas)] text-white"
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
                  <h3 className="font-serif text-xl font-bold text-[var(--color-teks)] mb-3 leading-snug group-hover:text-[var(--color-hijau-tua)] transition-colors">
                    {program.nama}
                  </h3>
                  <p className="text-sm text-[var(--color-teks-sekunder)] leading-relaxed mb-8 flex-1">
                    {program.deskripsi}
                  </p>

                  {/* Area Progress Bar */}
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs font-bold text-[var(--color-teks-sekunder)] mb-2">
                      <span>
                        Terkumpul:{" "}
                        <span className="text-[var(--color-hijau-tua)]">
                          Rp {program.danaTerkumpul.toLocaleString("id-ID")}
                        </span>
                      </span>
                      <span className="text-[var(--color-emas)]">
                        {persen}%
                      </span>
                    </div>

                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
                      <div
                        className="h-full bg-[var(--color-hijau-tua)] rounded-full transition-all duration-1000"
                        style={{ width: `${persen}%` }}
                      />
                    </div>

                    <a
                      href={`https://wa.me/6288902047766?text=Bismillah,%20saya%20ingin%20berdonasi%20untuk%20program%20${encodeURIComponent(program.nama)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center text-xs font-bold tracking-wide uppercase py-3 rounded transition-colors ${
                        program.status === "aktif"
                          ? "text-white bg-[var(--color-hijau-tua)] hover:bg-opacity-90"
                          : "text-gray-400 bg-gray-100 pointer-events-none"
                      }`}
                    >
                      {program.status === "aktif"
                        ? "Donasi Sekarang"
                        : "Donasi Ditutup"}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
