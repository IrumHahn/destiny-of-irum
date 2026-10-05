import Link from "next/link";

interface Episode { number: number; title: string; date?: string; preview: string }
export default function EpisodeCard({ episode }: { episode: Episode }) {
  return <Link className="chapter-row" href={`/episode/${episode.number}`}>
    <span className="chapter-number">{String(episode.number).padStart(3, "0")}</span>
    <span className="chapter-info"><strong>{episode.title}</strong><span>{episode.preview}</span></span>
    <span className="chapter-date">{episode.date || ""}</span><span className="chapter-arrow" aria-hidden="true">↗</span>
  </Link>;
}
