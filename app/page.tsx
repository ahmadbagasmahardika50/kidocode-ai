import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-100 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute top-10 left-10 text-6xl opacity-20">☁️</div>
      <div className="absolute top-20 right-20 text-6xl opacity-20">☁️</div>
      <div className="absolute bottom-10 left-20 text-8xl opacity-10">🚀</div>

      <div className="max-w-2xl bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border-4 border-white z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-500 mb-6 drop-shadow-sm">
          KidoCode AI 🤖
        </h1>
        <p className="text-lg md:text-xl text-slate-700 mb-8 font-semibold">
          Tempat paling seru buat belajar logika coding! Yuk, selesaikan misi-misi keren dan jadilah pahlawan coding masa depan! 🌟
        </p>
        
        <Link 
          href="/playground"
          className="inline-block bg-emerald-400 hover:bg-emerald-500 text-white text-xl md:text-2xl font-bold py-4 px-10 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 shadow-[0_8px_0_rgb(5,150,105)] hover:shadow-[0_6px_0_rgb(5,150,105)] hover:translate-y-[2px] active:shadow-none active:translate-y-[8px]"
        >
          Mulai Petualangan 🚀
        </Link>
      </div>
    </main>
  );
}
