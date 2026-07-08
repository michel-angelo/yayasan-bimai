import Image from "next/image";

const testimoni = [
  {
    nama: "Budi Santoso",
    peran: "Donatur Tetap",
    image: "/images/activity-program.webp",
    pesan:
      "Laporan penggunaan dana yang selalu transparan membuat saya tidak ragu untuk terus menitipkan amanah di sini.",
  },
  {
    nama: "Siti Rahmawati",
    peran: "Penerima Beasiswa",
    image: "/images/doa-bersama.webp",
    pesan:
      "Bukan hanya biaya sekolah, BIMAI memberikan pendampingan yang membuat saya berani bermimpi lebih tinggi.",
  },
];

export default function Testimoni() {
  return (
    <section className="bg-[#fdfaf5] px-6 py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        {/* Header - Vertical Text Style */}
        <div className="md:w-1/4">
          <h2 className="font-serif text-5xl md:text-7xl text-teks font-bold leading-none -rotate-90 origin-left translate-x-12 hidden md:block opacity-10">
            SUARA MEREKA
          </h2>
          <div className="md:hidden mb-12">
            <p className="text-xs font-bold text-emas uppercase tracking-[0.4em] mb-4">Testimoni</p>
            <h2 className="text-4xl font-serif text-teks font-bold">Kata Mereka</h2>
          </div>
        </div>

        {/* Storytelling Cards */}
        <div className="md:w-3/4 flex flex-col gap-24">
          {testimoni.map((item, idx) => (
            <div
              key={item.nama}
              className={`flex flex-col md:flex-row gap-10 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Portrait with unique shape */}
              <div className="relative w-48 h-64 flex-shrink-0">
                <div className="absolute inset-0 border border-emas translate-x-4 translate-y-4" />
                <div className="relative w-full h-full overflow-hidden">
                  <Image src={item.image} alt={item.nama} fill className="object-cover" />
                </div>
              </div>

              {/* Text Body */}
              <div className={`max-w-md ${idx % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                <p className="text-[var(--color-emas)] text-6xl font-serif leading-none mb-6">“</p>
                <p className="text-xl md:text-2xl text-teks italic leading-relaxed mb-8">
                  {item.pesan}
                </p>
                <div>
                  <p className="text-sm font-bold text-teks uppercase tracking-widest">{item.nama}</p>
                  <p className="text-[10px] text-emas font-bold uppercase tracking-[0.3em] mt-2">{item.peran}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
