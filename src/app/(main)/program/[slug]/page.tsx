import { getProgramBySlug, getPrograms } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const programs = await getPrograms();
  return programs?.map((program: any) => ({
    slug: program.slug.current,
  }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);

  if (!program) notFound();

  const persen = program.targetDana
    ? Math.round((program.danaTerkumpul / program.targetDana) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-[var(--putih)]">
      {/* Hero */}
      <div className="relative w-full aspect-video max-h-[500px] bg-[var(--hijau-muda)]">
        {program.thumbnail ? (
          <Image
            src={urlFor(program.thumbnail).width(1200).url()}
            alt={program.nama}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--teks-sekunder)]">
            Foto placeholder
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Konten Utama */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <div>
            <Link
              href="/program"
              className="text-sm text-[var(--teks-sekunder)] hover:text-[var(--hijau)] transition-colors mb-4 inline-block"
            >
              ← Kembali ke Program
            </Link>
            <h1 className="text-3xl text-[var(--teks)] mt-2">{program.nama}</h1>
            <p className="text-[var(--teks-sekunder)] mt-3 leading-relaxed">
              {program.deskripsiSingkat}
            </p>
          </div>

          {/* Deskripsi Lengkap */}
          {program.deskripsiLengkap && (
            <div className="prose prose-green max-w-none text-[var(--teks-sekunder)] leading-relaxed">
              <PortableText value={program.deskripsiLengkap} />
            </div>
          )}

          {/* Galeri */}
          {program.galeri && program.galeri.length > 0 && (
            <div>
              <h2 className="text-xl text-[var(--teks)] mb-4">
                Galeri Kegiatan
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {program.galeri.map((foto: any, i: number) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden bg-[var(--hijau-muda)]"
                  >
                    <Image
                      src={urlFor(foto).width(400).url()}
                      alt={`Foto ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Card Donasi */}
          <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-[var(--hijau-muda)]">
            <h3 className="text-lg text-[var(--teks)]">Donasi Program Ini</h3>

            {program.targetDana > 0 && (
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm text-[var(--teks-sekunder)]">
                  <span>Terkumpul</span>
                  <span className="font-semibold text-[var(--hijau)]">
                    {persen}%
                  </span>
                </div>
                <div className="h-2 bg-[var(--hijau-muda)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--hijau)] rounded-full"
                    style={{ width: `${persen}%` }}
                  />
                </div>
                <p className="text-sm font-semibold text-[var(--hijau)]">
                  Rp {program.danaTerkumpul?.toLocaleString("id-ID")}
                </p>
                <p className="text-xs text-[var(--teks-sekunder)]">
                  dari target Rp {program.targetDana?.toLocaleString("id-ID")}
                </p>
              </div>
            )}

            {program.penerimaMmanfaat > 0 && (
              <div className="flex items-center gap-2 text-sm text-[var(--teks-sekunder)]">
                <span className="text-[var(--hijau)] font-semibold">
                  {program.penerimaMmanfaat?.toLocaleString("id-ID")}
                </span>
                penerima manfaat
              </div>
            )}
            <a
              href={program.linkWA ?? "https://wa.me/6288902047766"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-sm font-semibold text-white bg-[var(--hijau)] px-4 py-3 rounded-xl hover:bg-[var(--hijau-tua)] transition-colors"
            >
              Donasi via WhatsApp
            </a>
          </div>

          {/* Status */}
          <div className="bg-white rounded-2xl p-6 border border-[var(--hijau-muda)]">
            <h3 className="text-sm font-semibold text-[var(--teks-sekunder)] uppercase tracking-widest mb-3">
              Status Program
            </h3>
            <span
              className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
                program.status === "aktif"
                  ? "bg-[var(--hijau-muda)] text-[var(--hijau)]"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {program.status === "aktif" ? "Aktif" : "Selesai"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
