import { getTentang } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function TentangPage() {
  const tentang = await getTentang();

  return (
    <div className="min-h-screen bg-[var(--putih)]">
      {/* Header */}
      <div className="bg-[var(--hijau-tua)] px-6 py-20 text-center">
        <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest mb-3">
          Tentang Kami
        </p>
        <h1 className="text-4xl text-white">
          Yayasan Bina Masyarakat Indonesia
        </h1>
        <p className="text-white/70 mt-3 max-w-xl mx-auto">
          Mengenal lebih dekat siapa kami, apa yang kami perjuangkan, dan
          bagaimana kami bekerja.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-20">
        {/* Sejarah */}
        {tentang?.sejarah && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest mb-3">
                Sejarah
              </p>
              <h2 className="text-3xl text-[var(--teks)] mb-4">
                Perjalanan BIMAI
              </h2>
              <div className="prose max-w-none text-[var(--teks-sekunder)] leading-relaxed">
                <PortableText value={tentang.sejarah} />
              </div>
            </div>
            <div className="bg-[var(--hijau-muda)] rounded-2xl aspect-square flex items-center justify-center text-[var(--teks-sekunder)] text-sm">
              Foto placeholder
            </div>
          </div>
        )}

        {/* Visi & Misi */}
        {(tentang?.visi || tentang?.misi) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tentang?.visi && (
              <div className="bg-[var(--hijau-tua)] rounded-2xl p-8 flex flex-col gap-4">
                <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest">
                  Visi
                </p>
                <p className="text-white leading-relaxed">{tentang.visi}</p>
              </div>
            )}

            {tentang?.misi && (
              <div className="bg-white rounded-2xl p-8 flex flex-col gap-4 border border-[var(--hijau-muda)]">
                <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest">
                  Misi
                </p>
                <ul className="flex flex-col gap-3">
                  {tentang.misi.map((item: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-sm text-[var(--teks-sekunder)]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[var(--hijau-muda)] text-[var(--hijau)] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Angka Dampak */}
        {tentang?.angkaDampak && (
          <div className="bg-[var(--hijau-muda)] rounded-2xl px-8 py-12">
            <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest mb-2 text-center">
              Dampak Kami
            </p>
            <h2 className="text-3xl text-[var(--teks)] text-center mb-12">
              Angka yang Bicara
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  label: "Penerima Manfaat",
                  value: tentang.angkaDampak.penerimaManfaat,
                },
                {
                  label: "Program Aktif",
                  value: tentang.angkaDampak.programAktif,
                },
                { label: "Total Donatur", value: tentang.angkaDampak.donatur },
                {
                  label: "Tahun Berdiri",
                  value: tentang.angkaDampak.tahunBerdiri,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <span className="text-4xl font-bold text-[var(--hijau)]">
                    {stat.value?.toLocaleString("id-ID") ?? 0}
                  </span>
                  <span className="text-sm text-[var(--teks-sekunder)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pengurus */}
        {tentang?.pengurus && tentang.pengurus.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest mb-3">
              Tim Kami
            </p>
            <h2 className="text-3xl text-[var(--teks)] mb-12">
              Struktur Pengurus
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {tentang.pengurus.map((orang: any, i: number) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-[var(--hijau-muda)]">
                    {orang.foto ? (
                      <Image
                        src={urlFor(orang.foto).width(200).url()}
                        alt={orang.nama}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--hijau)] font-bold text-2xl">
                        {orang.nama?.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--teks)] text-sm">
                      {orang.nama}
                    </p>
                    <p className="text-xs text-[var(--teks-sekunder)]">
                      {orang.jabatan}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legalitas */}
        {tentang?.legalitas && tentang.legalitas.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest mb-3">
              Legalitas
            </p>
            <h2 className="text-3xl text-[var(--teks)] mb-8">Dokumen Resmi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tentang.legalitas.map((dok: any, i: number) => (
                <a
                  key={i}
                  href={dok.file?.asset?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white border border-[var(--hijau-muda)] rounded-xl p-4 hover:border-[var(--hijau)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--hijau-muda)] flex items-center justify-center text-[var(--hijau)] flex-shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--teks)]">
                    {dok.nama}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
