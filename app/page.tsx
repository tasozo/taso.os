"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen bg-black text-cyan-300 flex flex-col items-center justify-center">

      <div className="text-4xl mb-4">
        Taso.os
      </div>

      <div className="text-sm opacity-70 mb-2">
        Human Operating System
      </div>

      <div className="text-xs opacity-50 mb-10">
        Ver 39.6.19
      </div>

      <div className="animate-pulse mb-10">
        Booting...
      </div>

      <button
        onClick={() => router.push("/desktop")}
        className="border border-cyan-400 px-6 py-2"
      >
        ENTER
      </button>

    </div>
  );
}