"use client";

type Props = {
  activeWindows?: string[];
};

export default function Taskbar({ activeWindows = [] }: Props) {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t border-cyan-500 bg-black/80 text-white flex items-center px-4 py-2">

      {/* LEFT: OS NAME */}
      <div className="text-cyan-400 font-bold">
        TASO.OS
      </div>

      {/* ACTIVE WINDOWS */}
      <div className="ml-6 flex gap-3 text-sm">
        {activeWindows.length === 0 ? (
          <span className="opacity-40">NO ACTIVE WINDOWS</span>
        ) : (
          activeWindows.map((name) => (
            <span
              key={name}
              className="border border-cyan-500 px-2 py-1 text-cyan-300"
            >
              {name}
            </span>
          ))
        )}
      </div>

    </div>
  );
}