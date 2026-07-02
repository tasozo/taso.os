"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function NotesPage() {
  const notes = [
    "2026",
    "thoughts",
    "learning",
    "design",
    "engineering",
    "daily-life",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">

      <Navigation />

      <main className="flex-1 p-8">

        <div className="text-cyan-300 text-2xl mb-8">
          NOTES
        </div>

        <div className="border border-cyan-800 rounded-xl p-6">

          <div className="text-gray-400 text-sm mb-6">
            /notes
          </div>

          <div className="flex flex-col gap-3">

            {notes.map((n) => (
              <Link
                key={n}
                href={`/notes/${n}`}
                className="text-cyan-200 hover:text-cyan-400"
              >
                {n}.md
              </Link>
            ))}

          </div>

        </div>

      </main>

    </div>
  );
}