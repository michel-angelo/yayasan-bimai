import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    id: "wakaf-quran",
    nama: "Wakaf Qur'an",
    image: "/images/activity-program.webp",
    deskripsi:
      "Menyalurkan mushaf Al-Qur'an baru ke pelosok desa, madrasah, dan pondok pesantren yang kekurangan fasilitas belajar.",
    targetDana: 25000000,
    danaTerkumpul: 18500000,
    status: "aktif",
  },
  {
    id: "wakaf-quran-braille",
    nama: "Wakaf Qur'an Braille",
    image: "/images/dampak.webp",
    deskripsi:
      "Memfasilitasi saudara-saudara kita penyandang tunanetra dengan Al-Qur'an Braille khusus agar mereka tetap bisa membaca.",
    targetDana: 30000000,
    danaTerkumpul: 12400000,
    status: "aktif",
  },
  {
    id: "sedekah-subuh",
    nama: "Sedekah Subuh",
    image: "/images/jumber.webp",
    deskripsi:
      "Mengawali hari dengan kebaikan. Membantu biaya pengobatan dhuafa, beasiswa yatim, dan kebutuhan mendesak.",
    targetDana: 50000000,
    danaTerkumpul: 42000000,
    status: "aktif",
  },
];

export default function ProgramUnggulan() {
  return (
    <section className="bg-white px-6 py-32 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-emas" />
            <p className="text-xs font-bold tracking-[0.4em] text-emas uppercase">
              Pilar Kebaikan
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-serif text-5xl md:text-6xl text-teks font-bold leading-[0.85]">
              Fokus <br /> Penyaluran
            </h2>
            <Link
              href="/program"
              className="group inline-flex items-center gap-4 text-xs font-bold tracking-widest text-hijau-tua uppercase border-b-2 border-hijau-tua/10 pb-2 hover:border-hijau-tua transition-all"
            >
              Lihat Semua Program
              <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {programs.map((program, idx) => {
            const persen = Math.min(Math.round((program.danaTerkumpul / program.targetDana) * 100), 100);
            
            return (
              <div
                key={program.id}
                className={`flex flex-col group ${idx === 1 ? 'md:translate-y-12' : ''}`}
              >
                {/* Image Container with offset border */}
                <div className="relative mb-8">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image 
                      src={program.image} 
                      alt={program.nama} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  {/* Floating Status Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase text-teks border border-black/5">
                    {program.status === "aktif" ? "Berjalan" : "Selesai"}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="font-serif text-3xl font-bold text-teks mb-4 leading-tight group-hover:text-hijau-tua transition-colors">
                    {program.nama}
                  </h3>
                  <p className="text-sm text-teks-sekunder leading-relaxed mb-10 line-clamp-2">
                    {program.deskripsi}
                  </p>

                  <div className="space-y-4">
                    <div className="h-px w-full bg-gray-100">
                      <div className="h-px bg-emas transition-all duration-1000" style={{ width: `${persen}%` }} />
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
                      <span className="text-teks-sekunder">Terkumpul</span>
                      <span className="text-hijau-tua">Rp {program.danaTerkumpul.toLocaleString("id-ID")}</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/6288902047766?text=Bismillah,%20saya%20ingin%20berdonasi%20untuk%20program%20${encodeURIComponent(program.nama)}`}
                    className="mt-10 inline-flex items-center justify-center border border-teks py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-teks hover:text-white transition-all"
                  >
                    Donasi Sekarang
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
