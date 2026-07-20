"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuksesContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "BIMAI-INV-1001";
  const resultCode = searchParams.get("resultCode");

  const isFailed = resultCode === "01";

  return (
    <div className="max-w-xl mx-auto bg-white p-8 md:p-12 border border-gray-100 rounded-3xl shadow-xl text-center space-y-6">
      {/* Icon Indicator */}
      <div className="flex justify-center">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center ${
            isFailed ? "bg-red-50 text-red-500 border border-red-200" : "bg-emerald-50 text-emerald-600 border border-emerald-200"
          }`}
        >
          {isFailed ? (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold text-[var(--color-emas)] uppercase tracking-widest block">
          {isFailed ? "Status Transaksi Pembayaran" : "Jazakumullah Khairan Katsiran"}
        </span>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
          {isFailed ? "Transaksi Belum Berhasil" : "Terima Kasih Atas Wakaf &amp; Donasi Anda"}
        </h1>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          {isFailed
            ? "Transaksi pembayaran Anda belum terselesaikan. Silakan coba kembali atau hubungi CS kami."
            : "Niat dan amanah kebaikan Anda telah kami catat dalam sistem. Setiap rupiah donasi Anda sangat berarti untuk pemberdayaan ummat."}
        </p>
      </div>

      {/* Transaction Details Box */}
      <div className="bg-[#fdfaf5] p-6 rounded-2xl border border-amber-200/60 text-left space-y-3">
        <div className="flex justify-between items-center text-xs pb-2 border-b border-gray-200">
          <span className="text-gray-500 font-semibold">Nomor Invoice Order ID</span>
          <span className="font-mono font-bold text-gray-900">{orderId}</span>
        </div>
        <div className="flex justify-between items-center text-xs pb-2 border-b border-gray-200">
          <span className="text-gray-500 font-semibold">Status Pembayaran Duitku</span>
          <span
            className={`font-bold px-2 py-0.5 rounded text-[10px] uppercase ${
              isFailed ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-800"
            }`}
          >
            {isFailed ? "Gagal / Dibatalkan" : "Berhasil / Menunggu Callback"}
          </span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500 font-semibold">Laporan Penyaluran</span>
          <span className="text-gray-700 font-medium">Dikirimkan via WhatsApp / Email</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Link
          href="/"
          className="flex-1 py-3.5 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors text-center block"
        >
          Kembali ke Beranda
        </Link>
        <a
          href="https://wa.me/6288902047766?text=Assalamu'alaikum%20Admin%20BIMAI,%20saya%20ingin%20mengonfirmasi%20donasi%20dengan%20Order%20ID%20"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 bg-[var(--color-hijau-tua)] hover:bg-[#123825] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors text-center block"
        >
          Konfirmasi CS WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function SuksesPage() {
  return (
    <div className="bg-[#fdfaf5] min-h-screen py-24 px-6 md:py-32">
      <Suspense
        fallback={
          <div className="max-w-xl mx-auto bg-white p-8 border border-gray-100 rounded-3xl shadow-sm text-center">
            <p className="text-sm text-gray-500 animate-pulse">Memuat konfirmasi donasi...</p>
          </div>
        }
      >
        <SuksesContent />
      </Suspense>
    </div>
  );
}
