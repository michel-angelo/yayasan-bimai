"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrailleTranslator from "@/components/landing/BrailleTranslator";

const packages = [
  {
    id: "patungan-1-juz",
    name: "Wakaf Patungan (1 Juz)",
    price: 75000,
    desc: "Wakaf patungan pencetakan & penyaluran 1 Juz mushaf Braille.",
    badge: "Paling Terjangkau",
    highlight: false,
  },
  {
    id: "wakaf-5-juz",
    name: "Wakaf 5 Juz Mushaf Braille",
    price: 375000,
    desc: "Membantu pencetakan 5 Juz mushaf Al-Qur'an Braille tebal.",
    badge: "Paling Populer",
    highlight: true,
  },
  {
    id: "setengah-set",
    name: "Wakaf Setengah Set (15 Jilid)",
    price: 1500000,
    desc: "Wakaf setengah set Al-Qur'an Braille tebal untuk perpustakaan / pesantren.",
    badge: "Pilihan Rutin",
    highlight: false,
  },
  {
    id: "set-lengkap",
    name: "Wakaf 1 Set Lengkap (30 Jilid)",
    price: 3000000,
    desc: "Menghadirkan 1 set lengkap (30 jilid besar) Al-Qur'an Braille untuk 1 mushalla / majelis tunanetra.",
    badge: "Pahala Jariyah Utuh",
    highlight: false,
  },
];

const galleryImages = [
  {
    src: "/images/seorang_tunanetra_sedang_membaca_alquran_braille_dipandu_oleh_ustadz_yang_juga_tunanetra_landscape_3.webp",
    title: "Bimbingan Mengaji Braille",
    desc: "Ustadz tunanetra membimbing santri melantunkan ayat suci.",
  },
  {
    src: "/images/foto_bersama_pengurus_bimai_bersama_anak-anak_tunanetra_dalam_acara_santunan-dan-buka-puasa-bersama.webp",
    title: "Penyaluran & Silaturahmi",
    desc: "Acara penyerahan bantuan mushaf Braille dan santunan.",
  },
  {
    src: "/images/seorang_santri_tunanetra_sedang_membaca_alquran_braille_secara_mandiri_potrait.webp",
    title: "Kemandirian Ibadah",
    desc: "Santri membaca Al-Qur'an Braille dengan kepekaan jemari.",
  },
  {
    src: "/images/tim_bimai_berfoto_bersama_dengan_pengurus_yayasan_braille.webp",
    title: "Kemitraan Yayasan",
    desc: "Kolaborasi penyerahan mushaf Braille ke lembaga disabilitas.",
  },
];

const faqs = [
  {
    q: "Mengapa biaya pencetakan Al-Qur'an Braille sangat tinggi?",
    a: "Al-Qur'an Braille membutuhkan kertas emboss khusus yang tebal agar titik timbul tidak kempes saat diraba. Satu set lengkap Al-Qur'an 30 Juz terdiri dari 30 jilid buku besar setinggi dada manusia dewasa dengan bobot hingga 25 kg.",
  },
  {
    q: "Bagaimana proses penyaluran Al-Qur'an Braille ini?",
    a: "Mushaf disalurkan langsung ke pesantren tunanetra, majelis taklim disabilitas netra, perpusda, serta sahabat tunanetra yang membutuhkan di berbagai penjuru Indonesia secara berkala.",
  },
  {
    q: "Apakah saya bisa berwakaf atas nama orang tua yang sudah meninggal?",
    a: "Bisa. Saat pengisian formulir donasi, Anda dapat mengisikan nama wakif (atas nama orang tua/keluarga). Pahala jariyah akan terus mengalir selama mushaf dibaca.",
  },
  {
    q: "Bagaimana saya menerima laporan penyaluran donasi saya?",
    a: "Tim Yayasan BIMAI mengirimkan laporan dokumentasi penyaluran resmi melalui WhatsApp dan email yang Anda daftarkan.",
  },
];

export default function WakafBraillePage() {
  const [customAmount, setCustomAmount] = useState<number | "">("");

  return (
    <div className="bg-[#fafbfc] min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0e2c1d] via-[#143d29] to-[#1b4d35] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Left */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-emas)]/20 border border-[var(--color-emas)]/40 rounded-full text-[var(--color-emas)] text-xs font-extrabold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[var(--color-emas)] animate-ping" />
                Program Prioritas Kemakmuran Umat
              </span>

              <h1 className="font-serif text-3xl md:text-5xl font-extrabold leading-tight">
                Terangi Hati Sahabat Tunanetra dengan <span className="text-[var(--color-emas)]">Wakaf Al-Qur&apos;an Braille</span>
              </h1>

              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                Bantu sahabat disabilitas netra membaca dan menghafal ayat-ayat suci Al-Qur&apos;an secara mandiri. Satu set mushaf Braille adalah jendela ibadah seumur hidup bagi mereka.
              </p>

              {/* Progress Summary Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-end text-sm">
                  <div>
                    <span className="text-xs text-white/70 block uppercase tracking-wider font-semibold">Terkumpul saat ini</span>
                    <span className="font-serif text-2xl md:text-3xl font-extrabold text-[var(--color-emas)]">
                      Rp 24.850.000
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/70 block uppercase tracking-wider font-semibold">Target Tahap 1</span>
                    <span className="font-bold text-white">Rp 50.000.000</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div className="h-full bg-gradient-to-r from-[var(--color-emas)] to-amber-300 rounded-full transition-all duration-1000 w-[49.7%]" />
                </div>

                <div className="flex justify-between text-xs text-white/70 pt-1">
                  <span>66.2% Tercapai</span>
                  <span>462 Mushaf Terdiskon &amp; Tersalurkan</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/donasi?program=wakaf-quran-braille"
                  className="px-8 py-4 bg-[var(--color-emas)] hover:bg-amber-400 text-gray-900 text-sm font-extrabold tracking-wider uppercase rounded-xl shadow-lg hover:shadow-xl transition-all text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Wakaf Sekarang
                </Link>
                <a
                  href="#paket-wakaf"
                  className="px-8 py-4 border border-white/30 hover:border-white text-white text-sm font-bold tracking-wider uppercase rounded-xl transition-colors text-center"
                >
                  Pilih Paket Wakaf
                </a>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl group">
                <Image
                  src="/images/seorang_tunanetra_sedang_membaca_alquran_braille_dipandu_oleh_ustadz_yang_juga_tunanetra_landscape_3.webp"
                  alt="Ustadz Membimbing Santri Tunanetra Mengaji Braille"
                  width={600}
                  height={400}
                  className="w-full h-[380px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs text-white/90 italic font-medium leading-snug">
                    &ldquo;Dulu saya hanya bisa mendengarkan lewat audio. Sekarang dengan Al-Qur&apos;an Braille dari BIMAI, jemari saya bisa menyentuh ayat-ayat Allah sendiri.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Why Braille Quran is Vital */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-extrabold text-[var(--color-emas)] uppercase tracking-widest block mb-2">
              Realita Lapangan
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 leading-tight">
              Mengapa Al-Qur&apos;an Braille Masih Sangat Langka &amp; Mahal?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fdfaf5] p-6 rounded-2xl border border-amber-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold font-serif text-xl">
                1
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900">Kertas Emboss Khusus</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Membutuhkan kertas tebal khusus agar titik timbul tidak mudah rata saat diraba terus-menerus oleh jemari tunanetra.
              </p>
            </div>

            <div className="bg-[#fdfaf5] p-6 rounded-2xl border border-amber-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold font-serif text-xl">
                2
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900">30 Jilid Besar per Set</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Satu set Al-Qur&apos;an Braille 30 Juz terdiri dari 30 jilid buku tebal berbobot hingga 25 kg, membutuhkan biaya cetak Rp 3 Juta per set.
              </p>
            </div>

            <div className="bg-[#fdfaf5] p-6 rounded-2xl border border-amber-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold font-serif text-xl">
                3
              </div>
              <h3 className="font-serif font-bold text-lg text-gray-900">Pahala Jariyah Abadi</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Setiap kali jemari mereka menyentuh dan membaca ayat Al-Qur&apos;an Braille wakaf Anda, pahala mengalir tanpa henti kepada Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Braille Simulator */}
        <BrailleTranslator />

        {/* Packages Grid */}
        <section id="paket-wakaf" className="space-y-10 scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-[var(--color-emas)] uppercase tracking-widest block">
              Pilihan Pilihan Kebaikan
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              Pilihan Paket Wakaf Al-Qur&apos;an Braille
            </h2>
            <p className="text-sm text-gray-600">
              Salurkan kebaikan Anda sesuai nominal yang diinginkan. Setiap rupiah menjadi pelita bagi mereka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md relative overflow-hidden ${
                  pkg.highlight
                    ? "border-[var(--color-emas)] ring-2 ring-[var(--color-emas)]/30"
                    : "border-gray-200"
                }`}
              >
                {pkg.badge && (
                  <span
                    className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-bl-xl ${
                      pkg.highlight
                        ? "bg-[var(--color-emas)] text-gray-900"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                )}

                <div className="space-y-4 pt-2">
                  <h3 className="font-serif font-bold text-lg text-gray-900 leading-snug">
                    {pkg.name}
                  </h3>
                  <div className="font-serif font-extrabold text-2xl text-[var(--color-hijau-tua)]">
                    Rp {pkg.price.toLocaleString("id-ID")}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <Link
                  href={`/donasi?program=wakaf-quran-braille&amount=${pkg.price}`}
                  className={`mt-6 w-full py-3 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all text-center block ${
                    pkg.highlight
                      ? "bg-[var(--color-hijau-tua)] hover:bg-[#123825] text-white shadow"
                      : "bg-gray-900 hover:bg-black text-white"
                  }`}
                >
                  Wakaf Paket Ini
                </Link>
              </div>
            ))}
          </div>

          {/* Custom Donation Form Box */}
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-8 rounded-3xl border border-amber-200/60 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-serif font-bold text-lg text-gray-900">Ingin Berwakaf Nominal Kustom?</h3>
              <p className="text-xs text-gray-600">Anda dapat menentukan sendiri nominal wakaf mulai dari Rp 10.000.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="number"
                placeholder="Nominal Rp..."
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value === "" ? "" : Number(e.target.value))}
                className="bg-white border border-gray-300 px-4 py-3 rounded-xl text-sm font-bold text-gray-900 focus:outline-none focus:border-[var(--color-emas)] w-full md:w-48"
              />
              <Link
                href={`/donasi?program=wakaf-quran-braille${customAmount ? `&amount=${customAmount}` : ""}`}
                className="px-6 py-3 bg-[var(--color-hijau-tua)] hover:bg-[#123825] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl whitespace-nowrap"
              >
                Lanjutkan
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-[var(--color-emas)] uppercase tracking-widest block">
              Bukti Penyaluran Nyata
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Dokumentasi Penyaluran Wakaf Braille
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-serif font-bold text-sm text-gray-900">{img.title}</h4>
                  <p className="text-xs text-gray-500 leading-snug">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-[var(--color-emas)] uppercase tracking-widest block">
              Pertanyaan Populer
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Pertanyaan Sering Diajukan (FAQ)
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#fdfaf5] p-6 rounded-2xl border border-amber-100/60 space-y-2">
                <h3 className="font-serif font-bold text-base text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-emas)]" />
                  {faq.q}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed pl-4">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-gradient-to-r from-[#0e2c1d] to-[#194b32] text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold">
              Mari Menjadi Bagian dari Kebaikan Ini Sekarang
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Setiap helai halaman mushaf Al-Qur&apos;an Braille yang dibaca tunanetra akan menjadi saksi kebaikan Anda di akhirat.
            </p>
          </div>
          <Link
            href="/donasi?program=wakaf-quran-braille"
            className="px-8 py-4 bg-[var(--color-emas)] hover:bg-amber-400 text-gray-900 text-xs font-extrabold tracking-widest uppercase rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
          >
            Salurkan Wakaf Sekarang
          </Link>
        </section>
      </div>
    </div>
  );
}
