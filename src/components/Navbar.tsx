"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Program", href: "/program" },
  { label: "Galeri", href: "/galeri" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-putih border-b border-emas/20 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Logo BIMAI Peduli"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif text-hijau-tua font-bold leading-tight">
              BIMAI Peduli
            </span>
            <span className="text-[10px] text-teks-sekunder tracking-wider uppercase font-semibold">
              Yayasan Bina Masyarakat Indonesia
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-hijau-tua ${
                    isActive
                      ? "text-hijau-tua border-b-2 border-hijau-tua pb-1"
                      : "text-teks-sekunder"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/6288902047766"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hijau-tua text-white text-sm font-bold tracking-wide uppercase px-6 py-2.5 rounded hover:bg-opacity-90 transition-all"
          >
            Donasi
          </a>
        </div>

        {/* Hamburger Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-teks transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-teks transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-teks transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-putih border-b border-emas/20 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-serif border-b border-gray-100 pb-3 ${
                  isActive ? "text-hijau-tua font-bold" : "text-teks-sekunder"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/6288902047766"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hijau-tua text-white text-center text-sm font-bold uppercase px-4 py-3 rounded mt-2"
          >
            Donasi Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
