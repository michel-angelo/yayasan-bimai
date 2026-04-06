import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Program", href: "/program" },
  { label: "Galeri", href: "/galeri" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--hijau-tua)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kolom 1 - Logo & Deskripsi */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="BIMAI Peduli"
              width={100}
              height={33}
              className="object-contain brightness-0 invert"
            />
            <p className="text-sm text-white/70 leading-relaxed">
              Yayasan Bina Masyarakat Indonesia — bersama memberdayakan
              masyarakat melalui program sosial, pendidikan, dan kemanusiaan.
            </p>
            <p className="font-arab text-[var(--emas)] text-xl">
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          </div>

          {/* Kolom 2 - Navigasi */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-widest">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[var(--emas)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 - Kontak */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-widest">
              Kontak
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <p>Depok, Jawa Barat, Indonesia</p>
              <p>Senin–Jumat, 08.00–17.00 WIB</p>
              <a
                href="https://wa.me/6288902047766"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--emas)] hover:text-[var(--emas)]/80 transition-colors"
              >
                +62 889-0204-7766
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © 2026 Yayasan Bina Masyarakat Indonesia. Semua hak dilindungi.
          </p>
          <p className="text-xs text-white/40">bimaipeduli.id</p>
        </div>
      </div>
    </footer>
  );
}
