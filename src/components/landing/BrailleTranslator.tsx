"use client";

import React, { useState } from "react";

// Map Alfabet ke Titik Braille (representasi 6 titik: [titik1, titik2, titik3, titik4, titik5, titik6])
const brailleMap: Record<string, number[]> = {
  a: [1, 0, 0, 0, 0, 0],
  b: [1, 1, 0, 0, 0, 0],
  c: [1, 0, 0, 1, 0, 0],
  d: [1, 0, 0, 1, 1, 0],
  e: [1, 0, 0, 0, 1, 0],
  f: [1, 1, 0, 1, 0, 0],
  g: [1, 1, 0, 1, 1, 0],
  h: [1, 1, 0, 0, 1, 0],
  i: [0, 1, 0, 1, 0, 0],
  j: [0, 1, 0, 1, 1, 0],
  k: [1, 0, 1, 0, 0, 0],
  l: [1, 1, 1, 0, 0, 0],
  m: [1, 0, 1, 1, 0, 0],
  n: [1, 0, 1, 1, 1, 0],
  o: [1, 0, 1, 0, 1, 0],
  p: [1, 1, 1, 1, 0, 0],
  q: [1, 1, 1, 1, 1, 0],
  r: [1, 1, 1, 0, 1, 0],
  s: [0, 1, 1, 1, 0, 0],
  t: [0, 1, 1, 1, 1, 0],
  u: [1, 0, 1, 0, 0, 1],
  v: [1, 1, 1, 0, 0, 1],
  w: [0, 1, 0, 1, 1, 1],
  x: [1, 0, 1, 1, 0, 1],
  y: [1, 0, 1, 1, 1, 1],
  z: [1, 0, 1, 0, 1, 1],
  " ": [0, 0, 0, 0, 0, 0],
};

export default function BrailleTranslator() {
  const [translatorInput, setTranslatorInput] = useState("bismillah");

  const translateToBraille = (text: string) => {
    return text
      .toLowerCase()
      .split("")
      .map((char) => ({
        char,
        dots: brailleMap[char] || [0, 0, 0, 0, 0, 0],
      }));
  };

  const translatedResult = translateToBraille(translatorInput);

  return (
    <section className="py-16 bg-gradient-to-br from-[var(--color-hijau-tua)] to-[#0f3020] text-white rounded-3xl my-12 shadow-xl border border-emerald-500/20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-emas)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-emas)]/20 text-[var(--color-emas)] text-xs font-bold uppercase tracking-widest rounded-full mb-3 border border-[var(--color-emas)]/30">
            Simulator Interaktif
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Kenali Aksara Braille
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Sahabat tunanetra mengaji menggunakan kepekaan ujung jari mereka.
            Coba ketik kata di bawah untuk mensimulasikan teks Anda ke dalam titik Braille secara instan!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 md:p-8 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Input Side */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <label htmlFor="braille-input" className="text-xs font-bold uppercase tracking-wider text-white/90">
                Ketik Nama atau Teks Anda (max 20 kar):
              </label>
              <input
                type="text"
                id="braille-input"
                value={translatorInput}
                onChange={(e) => setTranslatorInput(e.target.value)}
                placeholder="Contoh: bismillah..."
                maxLength={20}
                autoComplete="off"
                className="w-full bg-white/10 border border-white/30 text-white placeholder-white/40 px-4 py-3.5 rounded-xl font-medium focus:outline-none focus:border-[var(--color-emas)] focus:ring-2 focus:ring-[var(--color-emas)]/30 transition-all text-base"
              />
              <p className="text-xs text-white/60">
                Setiap huruf alfabet diwakili oleh kombinasi 6 titik timbul yang diraba ujung jari.
              </p>
            </div>

            {/* Output Side */}
            <div className="md:col-span-7 bg-black/20 p-6 rounded-xl border border-white/10 min-h-[160px] flex items-center">
              {translatedResult.length === 0 ? (
                <p className="text-center text-sm text-white/50 w-full">
                  Ketik kata di atas untuk melihat terjemahan Braille...
                </p>
              ) : (
                <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full max-h-60 overflow-y-auto p-1 custom-scrollbar">
                  {translatedResult.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center bg-white/10 border border-white/15 px-3 py-3 rounded-lg hover:border-[var(--color-emas)]/60 transition-colors"
                    >
                      {/* Grid 6 Titik Braille (2 kolom x 3 baris) */}
                      <div className="grid grid-cols-2 gap-1.5 w-7 h-10 items-center justify-center mb-2">
                        {item.dots.map((isActive, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                              isActive
                                ? "bg-[var(--color-emas)] shadow-[0_0_8px_rgba(234,179,8,0.8)] scale-110"
                                : "bg-white/20"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-white/90 uppercase tracking-widest">
                        {item.char === " " ? "␣" : item.char}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
