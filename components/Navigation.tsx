import Link from "next/link";

export default function Navigation() {
  return (
    <aside className="w-64 border-r border-cyan-900/30 p-6 flex flex-col justify-between bg-black/40">

      {/* MENU */}
      <nav className="space-y-2">

        {/* TOP（OS本体） */}
        <Link
          href="/top"
          className="block text-sm tracking-wider px-2 py-1 rounded text-cyan-400 font-bold bg-cyan-900/10"
        >
          Top
        </Link>

        <Link
          href="/quest"
          className="block text-sm tracking-wider px-2 py-1 rounded text-cyan-600 hover:text-cyan-300 hover:bg-cyan-900/20"
        >
          Quest
        </Link>

        <Link
          href="/projects"
          className="block text-sm tracking-wider px-2 py-1 rounded text-cyan-600 hover:text-cyan-300 hover:bg-cyan-900/20"
        >
          Projects
        </Link>

        <Link
          href="/notes"
          className="block text-sm tracking-wider px-2 py-1 rounded text-cyan-600 hover:text-cyan-300 hover:bg-cyan-900/20"
        >
          Notes
        </Link>

        <Link
          href="/library"
          className="block text-sm tracking-wider px-2 py-1 rounded text-cyan-600 hover:text-cyan-300 hover:bg-cyan-900/20"
        >
          Library
        </Link>

        <Link
          href="/update"
          className="block text-sm tracking-wider px-2 py-1 rounded text-cyan-600 hover:text-cyan-300 hover:bg-cyan-900/20"
        >
          Updates
        </Link>

      </nav>

      {/* BOTTOM STATUS */}
      <div className="pt-6 border-t border-cyan-900/20 flex items-center justify-between">

        <div className="w-8 h-8 rounded-full border border-cyan-900 flex items-center justify-center text-xs text-cyan-700">
          N
        </div>

        <div className="text-[10px] text-cyan-700 tracking-widest">
          ONLINE
        </div>

      </div>

    </aside>
  );
}