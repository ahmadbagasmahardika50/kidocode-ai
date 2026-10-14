"use client";
import Link from "next/link";
import { useState } from "react";

export default function Playground() {
  const [logicBlocks, setLogicBlocks] = useState<string[]>([]);

  const addBlock = (blockName: string) => {
    setLogicBlocks([...logicBlocks, blockName]);
  };

  const clearBlocks = () => {
    setLogicBlocks([]);
  };

  return (
    <main className="min-h-screen bg-sky-50 p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-sky-600">🚀 Area Bermain</h1>
        <Link href="/" className="px-4 py-2 bg-amber-400 hover:bg-amber-500 font-bold text-white rounded-full transition-transform hover:scale-105">
          🏠 Kembali
        </Link>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kolom Kiri: Misi Cerita */}
        <section className="bg-amber-50 p-8 rounded-3xl border-4 border-amber-200 shadow-lg relative">
          <div className="absolute -top-6 -left-6 text-6xl">🐱</div>
          <h2 className="text-2xl font-bold text-amber-600 mb-4 ml-8">Misi 1: Cari Baterai! 🔋</h2>
          <p className="text-lg text-slate-700 font-medium mb-4 leading-relaxed">
            Halo kawan! Robot Kucingku kehabisan tenaga. Dia butuh baterai yang ada di ujung jalan. <br/><br/>
            Bantu aku menyusun blok perintah di sebelah kanan agar Robot Kucing bisa berjalan dan mengambil baterainya!
          </p>
          <div className="bg-white p-4 rounded-xl border-2 border-dashed border-amber-300">
            <h3 className="font-bold text-slate-600 mb-2">Petunjuk:</h3>
            <ul className="list-disc list-inside text-slate-600 font-medium">
              <li>Maju 2 langkah</li>
              <li>Belok Kanan</li>
              <li>Ambil Baterai</li>
            </ul>
          </div>
        </section>

        {/* Kolom Kanan: Area Logika */}
        <section className="bg-white p-8 rounded-3xl border-4 border-dashed border-sky-300 shadow-lg flex flex-col">
          <h2 className="text-xl font-bold text-sky-600 mb-4">Pilih Blok Logika:</h2>
          
          {/* Tombol Blok */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button onClick={() => addBlock("⬆️ Maju")} className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-[0_4px_0_rgb(29,78,216)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgb(29,78,216)] transition-all">
              ⬆️ Maju 1 Langkah
            </button>
            <button onClick={() => addBlock("↪️ Belok Kanan")} className="px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-[0_4px_0_rgb(4,120,87)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgb(4,120,87)] transition-all">
              ↪️ Belok Kanan
            </button>
            <button onClick={() => addBlock("🔋 Ambil")} className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-[0_4px_0_rgb(185,28,28)] hover:translate-y-[2px] hover:shadow-[0_2px_0_rgb(185,28,28)] transition-all">
              🔋 Ambil Baterai
            </button>
          </div>

          {/* Area Hasil Susunan */}
          <div className="flex-1 bg-slate-100 rounded-2xl p-4 border-2 border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-600">Urutan Perintahmu:</h3>
              <button onClick={clearBlocks} className="text-sm font-bold text-red-500 hover:text-red-700">🗑️ Hapus Semua</button>
            </div>
            
            <div className="flex flex-col gap-2">
              {logicBlocks.length === 0 ? (
                <p className="text-slate-400 italic text-center mt-4">Belum ada blok yang dipilih...</p>
              ) : (
                logicBlocks.map((block, index) => (
                  <div key={index} className="bg-white border-2 border-slate-300 p-3 rounded-lg font-bold text-slate-700 animate-bounce-short">
                    {index + 1}. {block}
                  </div>
                ))
              )}
            </div>
          </div>
          
          <button className="mt-6 w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xl rounded-2xl shadow-[0_6px_0_rgb(2,132,199)] hover:translate-y-[2px] hover:shadow-[0_4px_0_rgb(2,132,199)] transition-all">
            ▶️ JALANKAN PROGRAM!
          </button>
        </section>
      </div>
    </main>
  );
}