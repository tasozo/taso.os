"use client";

import Link from "next/link";

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
    <div className="h-screen bg-black text-white p-8">

      <div className="text-cyan-300 text-xl mb-6">
        NOTES
      </div>

      <div className="flex flex-col gap-3">
        {notes.map((n) => (
          <Link
            key={n}
            href={`/notes/${n}`}
            className="text-cyan-200 hover:text-cyan-400"
          >
            {n}
          </Link>
        ))}
      </div>

    </div>
  );
}