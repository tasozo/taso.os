"use client";

import Header from "@/components/header";
import Navigation from "@/components/Navigation";

export default function Top() {
  return (
    <div className="flex flex-col h-screen bg-black text-white font-mono select-none">

      {/* HEADER */}
      <Header />

      {/* MAIN LAYOUT */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT NAVIGATION */}
        <Navigation />

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto">

          <div className="max-w-5xl mx-auto space-y-8">

            {/* TITLE */}
            <div>
              <p className="text-xs tracking-widest text-cyan-500 font-bold uppercase mb-2">
                DASHBOARD / TOP
              </p>

              <h1 className="text-5xl text-white mb-2">
                Hello.
              </h1>

              <p className="text-xl text-zinc-500">
                Human Operating System
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {[
                { title: "CURRENT QUEST", value: "Building TASO.OS" },
                { title: "CURRENT FOCUS", value: "Design System" },
                { title: "LATEST UPDATE", value: "Architecture Revision" },
                { title: "LIBRARY", value: "React / Next.js / UI Design" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-6 rounded-xl border border-cyan-900/30 bg-zinc-950/40 hover:border-cyan-500/30 transition"
                >
                  <p className="text-xs tracking-widest text-cyan-400 font-bold mb-2">
                    {card.title}
                  </p>
                  <p className="text-zinc-300 text-sm">
                    {card.value}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </main>

      </div>
    </div>
  );
}