import { getGaleri } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function GaleriPage() {
  const galeri = await getGaleri();

  return (
    <div className="min-h-screen bg-[var(--putih)]">
      {/* Header */}
      <div className="bg-[var(--hijau-tua)] px-6 py-20 text-center">
        <p className="text-sm font-semibold text-[var(--emas)] uppercase tracking-widest mb-3">
          Galeri
        </p>
        <h1 className="text-4xl text-white">Dokumentasi Kegiatan</h1>
        <p className="text-white/70 mt-3 max-w-xl mx-auto">
          Momen-momen nyata dari program dan kegiatan BIMAI di lapangan.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {galeri?.length === 0 && (
          <p className="text-center text-[var(--teks-sekunder)]">
            Belum ada foto tersedia.
          </p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galeri?.map((item: any) => (
            <div key={item._id} className="flex flex-col gap-2">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[var(--hijau-muda)]">
                {item.foto ? (
                  <Image
                    src={urlFor(item.foto).width(400).url()}
                    alt={item.keterangan ?? "Foto kegiatan"}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[var(--teks-sekunder)] text-sm">
                    Foto placeholder
                  </div>
                )}
              </div>
              {item.keterangan && (
                <p className="text-xs text-[var(--teks-sekunder)] px-1">
                  {item.keterangan}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
