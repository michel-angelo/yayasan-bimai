import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Program Kebaikan - BIMAI Peduli",
  description:
    "Daftar program penyaluran donasi Yayasan Bina Masyarakat Indonesia yang berfokus pada pendidikan, sosial, dan kemanusiaan.",
};

const allPrograms = [
  {
    id: "wakaf-quran",
    nama: "Wakaf Qur'an",
    image: "/images/distribusi-wakaf-qur'an.webp",
    deskripsi:
      "Menyalurkan mushaf Al-Qur'an baru dan layak baca ke pelosok desa, madrasah, dan pondok pesantren yang kekurangan fasilitas belajar.",
    targetDana: 25000000,
    danaTerkumpul: 18500000,
    status: "aktif",
  },
  {
    id: "wakaf-quran-braille",
    nama: "Wakaf Qur'an Braille",
    image: "/images/tunanetra.webp",
    deskripsi:
      "Memfasilitasi saudara-saudara kita penyandang tunanetra dengan Al-Qur'an Braille khusus agar mereka tetap bisa membaca dan menghafal kalam Ilahi.",
    targetDana: 30000000,
    danaTerkumpul: 12400000,
    status: "aktif",
  },
  {
    id: "sedekah-subuh",
    nama: "Sedekah Subuh",
    image: "/images/og-cover.jpg",
    deskripsi:
      "Mengawali hari dengan kebaikan. Dana sedekah subuh disalurkan untuk membantu biaya pengobatan dhuafa, beasiswa yatim, dan kebutuhan mendesak.",
    targetDana: 50000000,
    danaTerkumpul: 42000000,
    status: "aktif",
  },
  {
    id: "jumat-berkah",
    nama: "Jum'at Berkah",
    image: "/images/jum'at-berkah.webp",
    deskripsi:
      "Distribusi paket sembako dan makanan bergizi siap santap setiap hari Jumat untuk keluarga prasejahtera, yatim, dan pekerja harian lepas.",
    targetDana: 15000000,
    danaTerkumpul: 8000000,
    status: "selesai",
  },
];

export default function ProgramPage() {
  return (
    <div className="bg-[#fdfaf5] min-h-screen">
      {/* Editorial Header */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-emas" />
            <p className="text-xs font-bold tracking-[0.4em] text-emas uppercase">Inisiatif Sosial</p>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl text-teks font-bold leading-[0.85] mb-12">
            Saluran <br /> <span className="text-hijau-tua">Berkah.</span>
          </h1>
          <p className="text-teks-sekunder text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-hijau-tua pl-8">
            Setiap rupiah yang Anda titipkan adalah benih perubahan. Pilih program yang paling dekat dengan nurani Anda dan mari bertumbuh dalam kebaikan.
          </p>
        </div>
      </section>

      {/* Bespoke Program List */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-32">
          {allPrograms.map((program, idx) => {
            const persen = Math.min(Math.round((program.danaTerkumpul / program.targetDana) * 100), 100);
            
            return (
              <div 
                key={program.id} 
                className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Section with stylized border */}
                <div className="md:w-1/2 relative group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden shadow-xl">
                    <Image src={program.image} alt={program.nama} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className={`absolute top-0 ${idx % 2 !== 0 ? '-right-6' : '-left-6'} h-full w-px bg-emas/30 hidden md:block`} />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-bold tracking-widest text-emas uppercase">0{idx + 1}</span>
                    <span className={`h-px flex-1 bg-gray-100`} />
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${program.status === 'aktif' ? 'text-hijau-tua' : 'text-gray-400'}`}>
                      {program.status === 'aktif' ? 'Sedang Berjalan' : 'Telah Selesai'}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-4xl md:text-5xl text-teks font-bold mb-6 leading-tight group-hover:text-hijau-tua transition-colors">
                    {program.nama}
                  </h3>
                  
                  <p className="text-teks-sekunder text-lg leading-relaxed mb-10">
                    {program.deskripsi}
                  </p>

                  {/* Minimalist Progress */}
                  <div className="space-y-4">
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[var(--color-emas)] h-full rounded-full transition-all duration-1000"
                        style={{ width: `${persen}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold tracking-widest text-teks-sekunder uppercase">
                          Terkumpul
                        </span>
                        <span className="text-xl md:text-2xl font-serif font-bold text-hijau-tua">
                          Rp {program.danaTerkumpul.toLocaleString("id-ID")}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <span className="text-[10px] font-bold tracking-widest text-teks-sekunder uppercase">
                          Target Dana
                        </span>
                        <span className="text-sm md:text-base font-semibold text-teks">
                          Rp {program.targetDana.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emas uppercase tracking-widest">
                        {persen}% Terpenuhi
                      </span>
                    </div>
                  </div>

                  {program.status === "aktif" && (
                    <Link
                      href={`/donasi?program=${program.id}`}
                      className="mt-10 inline-flex items-center justify-center bg-teks text-white py-5 px-10 text-xs font-bold tracking-[0.3em] uppercase hover:bg-hijau-tua transition-colors w-fit text-center"
                    >
                      Salurkan Donasi
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
