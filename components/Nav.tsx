import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-navy-950/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-gold-gradient">
          운명의 이룸
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/episodes"
            className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
          >
            전체 화 목록
          </Link>
          <Link
            href="/episode/1"
            className="text-sm px-4 py-1.5 rounded-full border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 transition-all"
          >
            첫화 읽기
          </Link>
        </div>
      </div>
    </nav>
  );
}
