"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen bg-black text-cyan-300 flex flex-col items-center justify-center">

      {/* SYSTEM NAME */}
      <div className="text-5xl font-bold mb-2 tracking-wider">
        TASO.OS
      </div>

      {/* SUB TITLE */}
      <div className="text-sm opacity-70 mb-6">
        Human Operating System
      </div>

      {/* VERSION（小さくするのが正解） */}
      <div className="text-cyan-400 text-sm mb-6 tracking-wide">
        V39.6.21
      </div>

      {/* STATUS */}
      <div className="animate-pulse mb-10 text-sm opacity-70">
        Booting...
      </div>

      {/* BUTTON */}
      <button
        onClick={() => router.push("/top")}
        className="border border-cyan-400 px-6 py-2 hover:bg-cyan-900/30 transition"
      >
        ENTER
      </button>

    </div>
  );
}