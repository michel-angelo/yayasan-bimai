"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const availablePrograms = [
  { id: "umum", nama: "Sedekah Umum / Infaq Operasional" },
  { id: "wakaf-quran-braille", nama: "Wakaf Al-Qur'an Braille" },
  { id: "wakaf-quran", nama: "Wakaf Al-Qur'an Standar" },
  { id: "sedekah-subuh", nama: "Sedekah Subuh Berkah" },
  { id: "jumat-berkah", nama: "Jum'at Berkah Makanan Yatim" },
];

const nominalPresets = [50000, 100000, 250000, 375000, 500000, 1500000];

function DonasiFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const programParam = searchParams.get("program");
  const amountParam = searchParams.get("amount");

  // Step state
  const [step, setStep] = useState(1);

  // Form states
  const [selectedProgram, setSelectedProgram] = useState("umum");
  const [amount, setAmount] = useState<number | "">(50000);
  const [customAmountActive, setCustomAmountActive] = useState(false);

  const [donatorName, setDonatorName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [wakifName, setWakifName] = useState("");
  const [doa, setDoa] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("SP"); // SP = QRIS, BC = BCA VA, M2 = Mandiri VA, I1 = BNI VA, BR = BRI VA, BV = BSI VA, DA = DANA
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (programParam && availablePrograms.some((p) => p.id === programParam)) {
      setSelectedProgram(programParam);
    }
    if (amountParam) {
      const parsed = parseInt(amountParam, 10);
      if (!isNaN(parsed) && parsed >= 10000) {
        setAmount(parsed);
      }
    }
  }, [programParam, amountParam]);

  const handlePresetSelect = (val: number) => {
    setAmount(val);
    setCustomAmountActive(false);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setAmount(val === "" ? "" : parseInt(val, 10));
    setCustomAmountActive(true);
  };

  const getProgramName = () => {
    return availablePrograms.find((p) => p.id === selectedProgram)?.nama || "Sedekah Umum";
  };

  // Submit Handler to Duitku Sandbox API
  const handleProcessPayment = async () => {
    if (!amount || amount < 10000) {
      setErrorMessage("Nominal donasi minimal adalah Rp 10.000");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/donations/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donor_name: donatorName || "Hamba Allah",
          phone: emailOrPhone,
          email: emailOrPhone.includes("@") ? emailOrPhone : "donatur@bimaipeduli.id",
          amount: Number(amount),
          payment_method: paymentMethod,
          program_id: selectedProgram,
          program_name: getProgramName(),
          wakif_name: wakifName || null,
          doa: doa || null,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (data.paymentUrl) {
          // Alihkan ke Payment Gateway Duitku Sandbox / Return URL
          window.location.href = data.paymentUrl;
        } else {
          router.push(`/donasi/sukses?orderId=${data.orderId}`);
        }
      } else {
        setErrorMessage(data.message || "Gagal memproses transaksi. Silakan coba lagi.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error("Error submitting donation:", err);
      setErrorMessage("Koneksi gagal. Silakan periksa jaringan internet Anda.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 md:p-10 border border-gray-100 rounded-3xl shadow-xl">
      {/* Header Info */}
      <div className="text-center pb-6 border-b border-gray-100 mb-8">
        <span className="text-xs font-bold text-[var(--color-emas)] uppercase tracking-widest block mb-1">
          Formulir Wakaf &amp; Donasi Resmi
        </span>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
          Yayasan Bina Masyarakat Indonesia
        </h1>
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-10">
        {[
          { num: 1, label: "Program & Nominal" },
          { num: 2, label: "Data Donatur" },
          { num: 3, label: "Metode Pembayaran" },
        ].map((s) => (
          <div key={s.num} className="flex items-center flex-1 last:flex-initial">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step >= s.num
                  ? "bg-[var(--color-hijau-tua)] text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {s.num}
            </div>
            {s.num < 3 && (
              <div
                className={`h-0.5 flex-1 mx-3 transition-colors ${
                  step > s.num ? "bg-[var(--color-hijau-tua)]" : "bg-gray-100"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* STEP 1: Program & Nominal */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-1">1. Pilih Program Kebaikan</h2>
            <p className="text-xs text-gray-500">Tentukan program penyaluran infak / wakaf Anda.</p>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Pilihan Program</label>
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full bg-[#fdfaf5] border border-gray-200 px-4 py-3.5 rounded-xl text-sm text-gray-900 font-bold focus:border-[var(--color-emas)] focus:outline-none"
            >
              {availablePrograms.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nama}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Pilih Nominal Donasi (Rp)</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {nominalPresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handlePresetSelect(preset)}
                  className={`py-3.5 px-3 rounded-xl font-bold transition-all text-xs border cursor-pointer ${
                    amount === preset && !customAmountActive
                      ? "border-[var(--color-emas)] bg-amber-50 text-[var(--color-hijau-tua)] ring-2 ring-[var(--color-emas)]/30 font-extrabold shadow-sm"
                      : "border-gray-200 hover:border-gray-400 bg-white text-gray-700"
                  }`}
                >
                  Rp {preset.toLocaleString("id-ID")}
                </button>
              ))}
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-bold text-gray-600">Atau Nominal Kustom (Rp)</label>
              <input
                type="text"
                placeholder="Masukkan nominal donasi lain (min Rp 10.000)..."
                value={amount === "" ? "" : amount}
                onChange={handleCustomAmountChange}
                className={`w-full bg-[#fdfaf5] border px-4 py-3.5 rounded-xl text-sm font-bold text-gray-900 focus:outline-none ${
                  customAmountActive
                    ? "border-[var(--color-emas)] ring-2 ring-[var(--color-emas)]/30 text-[var(--color-hijau-tua)]"
                    : "border-gray-200"
                }`}
              />
            </div>
          </div>

          <button
            type="button"
            disabled={!amount || amount < 10000}
            onClick={() => setStep(2)}
            className="w-full py-4 bg-[var(--color-hijau-tua)] hover:bg-[#123825] text-white text-xs font-extrabold tracking-[0.2em] uppercase rounded-xl shadow-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            Lanjutkan ke Data Donatur &rarr;
          </button>
          {amount !== "" && amount < 10000 && (
            <p className="text-xs text-red-500 text-center font-semibold mt-2">Minimal donasi adalah Rp 10.000</p>
          )}
        </div>
      )}

      {/* STEP 2: Donatur Info */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-1">2. Lengkapi Data Donatur</h2>
            <p className="text-xs text-gray-500">Informasi ini digunakan untuk pencatatan &amp; laporan akad donasi.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Nama Donatur</label>
              <input
                type="text"
                placeholder="Nama lengkap donatur..."
                value={donatorName}
                onChange={(e) => setDonatorName(e.target.value)}
                className="w-full bg-[#fdfaf5] border border-gray-200 px-4 py-3.5 rounded-xl text-sm font-medium text-gray-900 focus:border-[var(--color-emas)] focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">No. WhatsApp / Email</label>
              <input
                type="text"
                placeholder="Contoh: 081234567890 / email@domain.com..."
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full bg-[#fdfaf5] border border-gray-200 px-4 py-3.5 rounded-xl text-sm font-medium text-gray-900 focus:border-[var(--color-emas)] focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Atas Nama Wakif <span className="text-gray-400 font-normal text-[11px]">(Opsional - misal: Orang Tua/Almarhum)</span>
              </label>
              <input
                type="text"
                placeholder="Niatkan wakaf atas nama..."
                value={wakifName}
                onChange={(e) => setWakifName(e.target.value)}
                className="w-full bg-[#fdfaf5] border border-gray-200 px-4 py-3.5 rounded-xl text-sm font-medium text-gray-900 focus:border-[var(--color-emas)] focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Doa / Niat Kebaikan <span className="text-gray-400 font-normal text-[11px]">(Opsional)</span>
              </label>
              <textarea
                placeholder="Tuliskan niat atau doa khusus Anda agar diaminkan penerima manfaat..."
                rows={3}
                value={doa}
                onChange={(e) => setDoa(e.target.value)}
                className="w-full bg-[#fdfaf5] border border-gray-200 px-4 py-3 rounded-xl text-sm font-medium text-gray-900 focus:border-[var(--color-emas)] focus:outline-none resize-none"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/3 py-4 border border-gray-200 text-gray-600 text-xs font-bold tracking-wider uppercase rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              &larr; Kembali
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="w-2/3 py-4 bg-[var(--color-hijau-tua)] hover:bg-[#123825] text-white text-xs font-extrabold tracking-[0.2em] uppercase rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              Lanjutkan Pembayaran &rarr;
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Payment Gateway Duitku */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-1">3. Pilih Metode Pembayaran</h2>
            <p className="text-xs text-gray-500">
              Total Pembayaran Donasi:{" "}
              <span className="font-bold text-[var(--color-hijau-tua)] text-base">
                Rp {amount ? amount.toLocaleString("id-ID") : "0"}
              </span>
            </p>
          </div>

          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-xs font-semibold p-4 rounded-xl">
              {errorMessage}
            </div>
          )}

          {/* Duitku Payment Methods Grid */}
          <div className="space-y-4">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
              Pembayaran Otomatis Duitku Payment Gateway (Sandbox)
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: "SP", name: "QRIS", desc: "Gopay, OVO, ShopeePay, DANA, LinkAja & BCA", badge: "Instan" },
                { id: "BC", name: "BCA Virtual Account", desc: "Verifikasi Otomatis 24 Jam", badge: "VA BCA" },
                { id: "M2", name: "Mandiri Virtual Account", desc: "Verifikasi Otomatis 24 Jam", badge: "VA Mandiri" },
                { id: "I1", name: "BNI Virtual Account", desc: "Verifikasi Otomatis 24 Jam", badge: "VA BNI" },
                { id: "BR", name: "BRI Virtual Account", desc: "Verifikasi Otomatis 24 Jam", badge: "VA BRI" },
                { id: "BV", name: "BSI Virtual Account", desc: "Verifikasi Otomatis 24 Jam", badge: "VA BSI" },
                { id: "DA", name: "DANA E-Wallet", desc: "Pembayaran Langsung via DANA", badge: "E-Wallet" },
              ].map((m) => (
                <div
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    paymentMethod === m.id
                      ? "border-[var(--color-emas)] bg-amber-50/60 ring-2 ring-[var(--color-emas)]/40 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-gray-900">{m.name}</span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                        {m.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500">{m.desc}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      paymentMethod === m.id ? "border-[var(--color-hijau-tua)] bg-[var(--color-hijau-tua)]" : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === m.id && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#fdfaf5] border border-amber-200/60 p-4 rounded-xl text-xs text-gray-600 space-y-1">
            <p className="font-bold text-gray-900">🔒 Transaksi Aman &amp; Terverifikasi</p>
            <p>
              Dengan mengklik &quot;Bayar Sekarang&quot;, Anda akan dihubungkan langsung ke gerbang pembayaran aman Duitku untuk menyelesaikan transaksi wakaf Anda.
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => setStep(2)}
              className="w-1/3 py-4 border border-gray-200 text-gray-600 text-xs font-bold tracking-wider uppercase rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              &larr; Kembali
            </button>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleProcessPayment}
              className="w-2/3 py-4 bg-[var(--color-hijau-tua)] hover:bg-[#123825] text-white text-xs font-extrabold tracking-[0.2em] uppercase rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Memproses Duitku...</span>
              ) : (
                <span>Bayar Sekarang via Duitku &rarr;</span>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DonasiPage() {
  return (
    <div className="bg-[#fdfaf5] min-h-screen py-24 px-6 md:py-32">
      <Suspense
        fallback={
          <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-100 rounded-3xl shadow-sm text-center">
            <p className="text-sm text-gray-500 animate-pulse">Memuat formulir donasi Duitku...</p>
          </div>
        }
      >
        <DonasiFormContent />
      </Suspense>
    </div>
  );
}
