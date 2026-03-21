import Link from "next/link";

interface Episode {
  number: number;
  title: string;
  date: string;
  preview: string;
}

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link href={`/episode/${episode.number}`}>
      <div className="group relative border border-white/5 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-xs font-mono text-amber-500/70 tracking-widest">
            EP.{String(episode.number).padStart(2, "0")}
          </span>
          <span className="text-xs text-slate-600">{episode.date}</span>
        </div>
        <h3 className="font-bold text-slate-100 text-lg mb-3 group-hover:text-amber-300 transition-colors leading-snug">
          {episode.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{episode.preview}</p>
        <div className="mt-4 flex items-center gap-1 text-amber-500/50 text-xs group-hover:text-amber-400 transition-colors">
          <span>읽기</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}
