import { getTentang } from "@/sanity/lib/fetch";

export default async function AngkaDampak() {
  const tentang = await getTentang();
  const dampak = tentang?.angkaDampak;

  const stats = [
    { label: "Penerima Manfaat", value: dampak?.penerimaManfaat ?? 0 },
    { label: "Program Aktif", value: dampak?.programAktif ?? 0 },
    { label: "Total Donatur", value: dampak?.donatur ?? 0 },
    { label: "Tahun Berdiri", value: dampak?.tahunBerdiri ?? 0 },
  ];

  return (
    <section className="bg-[var(--putih)] px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="flex flex-col items-center text-center gap-2"
          >
            <span className="text-4xl font-bold text-[var(--hijau)]">
              {stat.value.toLocaleString("id-ID")}
            </span>
            <span className="text-sm text-[var(--teks-sekunder)]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
