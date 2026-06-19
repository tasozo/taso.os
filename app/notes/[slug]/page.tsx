"use client";

import { useParams, useRouter } from "next/navigation";

const data: Record<string, string> = {
  "2026": `
# 2026
Reflection year
`,
  thoughts: `
# Thoughts
Thinking log
`,
  learning: `
# Learning
Daily growth
`,
  design: `
# Design
Neon UI experiments
`,
  engineering: `
# Engineering
System building
`,
  "daily-life": `
# Daily Life
Simple records
`,
};

export default function Note() {
  const params = useParams();
  const router = useRouter();

  const slug = params.slug as string;

  return (
    <div className="h-screen bg-black text-white p-8">

      <button
        onClick={() => router.push("/notes")}
        className="text-cyan-300 mb-6"
      >
        ← BACK
      </button>

      <div className="border border-cyan-500 p-6 max-w-2xl">

        <pre className="whitespace-pre-wrap text-gray-300">
          {data[slug] || "# Not Found"}
        </pre>

      </div>

    </div>
  );
}