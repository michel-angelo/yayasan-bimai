import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Program", href: "/program" },
  { label: "Galeri", href: "/galeri" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-[var(--color-hijau-tua)] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Grid Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Kolom 1 - Logo & Deskripsi (Lebih Lebar) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white p-1 rounded">
                <Image
                  src="/logo.webp"
                  alt="Logo BIMAI Peduli"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold leading-tight text-lg">
                  BIMAI Peduli
                </span>
                <span className="text-[10px] text-[var(--color-emas)] tracking-widest uppercase font-semibold mt-0.5">
                  Yayasan Bina Masyarakat Indonesia
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Bersama memberdayakan masyarakat melalui program sosial,
              pendidikan, dan kemanusiaan yang berkelanjutan untuk membangun
              peradaban yang lebih baik.
            </p>

            <div className="mt-2 pl-4 border-l-2 border-[var(--color-emas)]/50">
              <p
                dir="rtl"
                className="font-arab text-xl text-[var(--color-emas)] leading-relaxed"
              >
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
            </div>
          </div>

          {/* Kolom 2 - Navigasi */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <p className="text-xs font-bold text-white/50 tracking-[0.2em] uppercase">
              Navigasi
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-[var(--color-emas)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 - Kontak */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <p className="text-xs font-bold text-white/50 tracking-[0.2em] uppercase">
              Kontak & Lokasi
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/80 leading-relaxed">
              <p>Depok, Jawa Barat, Indonesia</p>
              <p>Senin - Jumat, 08.00 - 17.00 WIB</p>
              <a
                href="https://wa.me/6288902047766"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-emas)] hover:text-white transition-colors font-medium mt-1"
              >
                +62 889-0204-7766
              </a>
            </div>

            <a
              href="https://wa.me/6288902047766"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2.5 border border-[var(--color-emas)]/50 text-[var(--color-emas)] text-xs font-bold tracking-widest uppercase rounded hover:bg-[var(--color-emas)] hover:text-[var(--color-teks)] transition-all w-fit"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center md:text-left">
            &copy; {currentYear} Yayasan Bina Masyarakat Indonesia. Semua hak
            dilindungi.
          </p>
          <p className="text-xs text-white/40 tracking-wider">bimaipeduli.id</p>
        </div>
      </div>
    </section>
  );
}
