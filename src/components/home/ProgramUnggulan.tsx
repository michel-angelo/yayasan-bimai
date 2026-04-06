import { getPrograms } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default async function ProgramUnggulan() {
  const programs = await getPrograms();
  const unggulan = programs?.slice(0, 3);

  return (
    <section className="bg-[var(--hijau-muda)] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12" data-aos="fade-up">
          <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest mb-2">
            Program Kami
          </p>
          <h2 className="text-3xl text-[var(--teks)]">Program Unggulan</h2>
          <p className="text-[var(--teks-sekunder)] mt-2 max-w-lg">
            Setiap program dirancang untuk memberikan dampak nyata dan
            berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {unggulan?.map((program: any, i: number) => {
            const persen = program.targetDana
              ? Math.round((program.danaTerkumpul / program.targetDana) * 100)
              : 0;

            return (
              <div
                key={program._id}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="bg-white rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-video bg-[var(--hijau-muda)]">
                  {program.thumbnail ? (
                    <Image
                      src={urlFor(program.thumbnail).width(600).url()}
                      alt={program.nama}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--teks-sekunder)] text-sm">
                      Foto placeholder
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h3 className="text-lg text-[var(--teks)]">{program.nama}</h3>
                  <p className="text-sm text-[var(--teks-sekunder)] leading-relaxed flex-1">
                    {program.deskripsiSingkat}
                  </p>

                  {program.targetDana > 0 && (
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs text-[var(--teks-sekunder)]">
                        <span>Terkumpul</span>
                        <span>{persen}%</span>
                      </div>
                      <div className="h-1.5 bg-[var(--hijau-muda)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--hijau)] rounded-full"
                          style={{ width: `${persen}%` }}
                        />
                      </div>
                      <p className="text-xs font-semibold text-[var(--hijau)]">
                        Rp {program.danaTerkumpul?.toLocaleString("id-ID")}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3 mt-auto">
                    <Link
                      href={`/program/${program.slug.current}`}
                      className="flex-1 text-center text-sm font-medium text-[var(--hijau)] border border-[var(--hijau)] px-4 py-2 rounded-xl hover:bg-[var(--hijau-muda)] transition-colors"
                    >
                      Selengkapnya
                    </Link>
                    <a
                      href={program.linkWA ?? "https://wa.me/6288902047766"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-semibold text-white bg-[var(--hijau)] px-4 py-2 rounded-xl hover:bg-[var(--hijau-tua)] transition-colors"
                    >
                      Donasi
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <Link
            href="/program"
            className="inline-block text-sm font-semibold text-[var(--hijau)] border border-[var(--hijau)] px-8 py-3 rounded-xl hover:bg-[var(--hijau)] hover:text-white transition-colors"
          >
            Lihat Semua Program
          </Link>
        </div>
      </div>
    </section>
  );
}
