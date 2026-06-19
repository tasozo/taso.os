import Link from "next/link";

function getTASOVersion() {
  const now = new Date();

  const age = 40; // ←ここは誕生日で更新（今は仮）
  const month = now.getMonth() + 1;
  const day = now.getDate();

  return `v${age}.${month}.${day}`;
}

export default function DesktopPage() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">

      {/* HEADER */}
      <header className="h-14 border-b border-cyan-500 flex items-center justify-between px-6">
        
        <div className="text-cyan-300 tracking-wider">
          TASO OS | {getTASOVersion()}
        </div>

        <div className="text-xs text-gray-400 flex gap-4">
          <span>14:32</span>
          <span className="text-green-400">SYSTEM: OPTIMAL</span>
        </div>
      </header>

      {/* BODY */}
      <div className="flex h-[calc(100vh-56px)]">

        {/* SIDEBAR - FILE SYSTEM */}
        <aside className="w-64 border-r border-cyan-500 p-5">

          <div className="text-xs text-cyan-400 mb-6">
            /root/navigation
          </div>

          <nav className="flex flex-col gap-3 text-sm">

            <Link href="/readme" className="text-cyan-200 hover:text-cyan-400">
              READ_ME.md
            </Link>

            <Link href="/quest" className="text-cyan-200 hover:text-cyan-400">
              QUEST.exe
            </Link>

            <Link href="/projects" className="text-cyan-200 hover:text-cyan-400">
              PROJECTS/
            </Link>

            <Link href="/library" className="text-cyan-200 hover:text-cyan-400">
              LIBRARY.sys
            </Link>

            <Link href="/notes" className="text-cyan-200 hover:text-cyan-400">
              NOTES.log
            </Link>

            <Link href="/update" className="text-cyan-200 hover:text-cyan-400">
              UPDATE.patch
            </Link>

          </nav>

        </aside>

        {/* MAIN DESKTOP */}
        <section className="flex-1 p-10 overflow-auto">

          {/* TITLE */}
          <div className="text-cyan-300 mb-6 tracking-widest">
            DASHBOARD / CURRENT SESSION
          </div>

          <h1 className="text-5xl text-cyan-300 mb-2">
            Hello.
          </h1>

          <h2 className="text-xl text-gray-300 mb-10">
            Human Operating System Interface
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-6">

            {/* WEB DEV */}
            <div className="border border-cyan-800 rounded-xl p-5">
              <div className="text-cyan-300 mb-3">
                WEB DEVELOPMENT
              </div>
              <div className="text-gray-300 text-sm space-y-1">
                <div>Next.js</div>
                <div>UI / UX Design</div>
                <div>Performance Tuning</div>
              </div>
            </div>

            {/* QUEST */}
            <div className="border border-cyan-800 rounded-xl p-5">
              <div className="text-cyan-300 mb-3">
                ACTIVE QUEST
              </div>
              <div className="text-gray-300 text-sm">
                Build TASO.OS Core System
              </div>
            </div>

            {/* PROJECTS */}
            <div className="border border-cyan-800 rounded-xl p-5">
              <div className="text-cyan-300 mb-3">
                PROJECT STATUS
              </div>
              <div className="text-gray-300 text-sm">
                Desktop UI Architecture Revamp
              </div>
            </div>

            {/* SYSTEM */}
            <div className="border border-cyan-800 rounded-xl p-5">
              <div className="text-cyan-300 mb-3">
                SYSTEM STATUS
              </div>
              <div className="text-green-400 text-sm">
                OPTIMAL
              </div>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}