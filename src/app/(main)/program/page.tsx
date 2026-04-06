import { getPrograms } from '@/sanity/lib/fetch'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProgramPage() {
  const programs = await getPrograms()

  return (
    <div className="min-h-screen bg-[var(--putih)]">

      {/* Header */}
      <div className="bg-[var(--hijau-tua)] px-6 py-20 text-center">
        <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest mb-3">
          Program Kami
        </p>
        <h1 className="text-4xl text-white">Semua Program BIMAI</h1>
        <p className="text-white/70 mt-3 max-w-xl mx-auto">
          Setiap program dirancang untuk memberikan dampak nyata dan berkelanjutan bagi masyarakat.
        </p>
      </div>

      {/* Grid Program */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {programs?.length === 0 && (
          <p className="text-center text-[var(--teks-sekunder)]">
            Belum ada program tersedia.
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs?.map((program: any) => {
            const persen = program.targetDana
              ? Math.round((program.danaTerkumpul / program.targetDana) * 100)
              : 0

            return (
              <div key={program._id} className="bg-white rounded-2xl overflow-hidden flex flex-col">

                {/* Thumbnail */}
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

                {/* Konten */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-[var(--teks)]">{program.nama}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      program.status === 'aktif'
                        ? 'bg-[var(--hijau-muda)] text-[var(--hijau)]'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {program.status === 'aktif' ? 'Aktif' : 'Selesai'}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--teks-sekunder)] leading-relaxed flex-1">
                    {program.deskripsiSingkat}
                  </p>

                  {/* Progress */}
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
                        Rp {program.danaTerkumpul?.toLocaleString('id-ID')}
                      </p>
                    </div>
                  )}

                  {/* Tombol */}
                  <div className="flex gap-3 mt-auto">
                    <Link
                      href={`/program/${program.slug.current}`}
                      className="flex-1 text-center text-sm font-medium text-[var(--hijau)] border border-[var(--hijau)] px-4 py-2 rounded-xl hover:bg-[var(--hijau-muda)] transition-colors"
                    >
                      Selengkapnya
                    </Link>
                    <a
                      href={program.linkWA ?? 'https://wa.me/6288902047766'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-semibold text-white bg-[var(--hijau)] px-4 py-2 rounded-xl hover:bg-[var(--hijau-tua)] transition-colors"
                    >
                      Donasi
                    </a>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}