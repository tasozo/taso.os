"use client";

export default function Header() {
  return (
    <header className="h-14 border-b border-cyan-500 flex items-center justify-between px-6 bg-black/80 backdrop-blur z-10">

      {/* BRAND */}
      <div className="text-cyan-400 font-bold tracking-widest">
        TASO.OS
      </div>

      {/* STATUS */}
      <div className="text-xs text-gray-400">
        SYSTEM : OPTIMAL
      </div>

    </header>
  );
}