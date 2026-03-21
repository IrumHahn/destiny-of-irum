import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import episodes from "@/data/episodes.json";

interface Props {
  params: { number: string };
}

export async function generateStaticParams() {
  return episodes.map((ep) => ({ number: String(ep.number) }));
}

export async function generateMetadata({ params }: Props) {
  const ep = episodes.find((e) => e.number === Number(params.number));
  if (!ep) return {};
  return {
    title: `EP.${String(ep.number).padStart(2, "0")} ${ep.title} | 운명의 이룸`,
  };
}

function renderContent(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="my-8">
          <code className="text-amber-300 font-mono text-sm">{line.slice(2)}</code>
        </blockquote>
      );
    } else if (line.startsWith("—")) {
      elements.push(
        <p key={key++} className="text-amber-400/70 text-sm font-mono tracking-wider mt-12 mb-4">
          {line}
        </p>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="h-1" />);
    } else {
      elements.push(
        <p key={key++} className="prose-p">
          {line}
        </p>
      );
    }
  }
  return elements;
}

export default function EpisodePage({ params }: Props) {
  const num = Number(params.number);
  const episode = episodes.find((e) => e.number === num);
  if (!episode) notFound();

  const prev = episodes.find((e) => e.number === num - 1);
  const next = episodes.find((e) => e.number === num + 1);

  return (
    <main className="min-h-screen pt-14">
      <Nav />

      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        {/* 에피소드 헤더 */}
        <header className="mb-14 pb-10 border-b border-white/5">
          <p className="text-xs font-mono tracking-[0.3em] text-amber-500/70 uppercase mb-6">
            EP.{String(episode.number).padStart(2, "0")}
          </p>
          <h1
            className="text-2xl sm:text-3xl font-black text-white leading-snug mb-5"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {episode.title}
          </h1>
          <time className="text-xs text-slate-600">{episode.date}</time>
        </header>

        {/* 본문 */}
        <section
          className="prose-novel"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          {renderContent(episode.content)}
        </section>

        {/* 작가의 한마디 */}
        <aside className="mt-20 border-t border-amber-500/10 pt-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-xs">
              ✦
            </div>
            <span className="text-xs tracking-widest text-amber-500/70 uppercase">작가의 한마디</span>
          </div>
          <p
            className="text-slate-400 text-sm leading-[2]"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            {episode.authorNote}
          </p>
          <p className="text-xs text-slate-600 mt-4">— 지혜 (AI 에이전트)</p>
        </aside>

        {/* 이전/다음 네비게이션 */}
        <nav className="mt-16 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/episode/${prev.number}`}
              className="group border border-white/5 rounded-2xl p-5 hover:border-amber-500/20 transition-all"
            >
              <p className="text-xs text-slate-600 mb-2">← 이전화</p>
              <p className="text-sm text-slate-300 group-hover:text-amber-300 transition-colors line-clamp-2 leading-relaxed">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/episode/${next.number}`}
              className="group border border-white/5 rounded-2xl p-5 hover:border-amber-500/20 transition-all text-right"
            >
              <p className="text-xs text-slate-600 mb-2">다음화 →</p>
              <p className="text-sm text-slate-300 group-hover:text-amber-300 transition-colors line-clamp-2 leading-relaxed">
                {next.title}
              </p>
            </Link>
          ) : (
            <div className="border border-white/5 rounded-2xl p-5 text-right">
              <p className="text-xs text-slate-700 mb-2">다음화 →</p>
              <p className="text-sm text-slate-700">준비 중...</p>
            </div>
          )}
        </nav>

        {/* 목록으로 */}
        <div className="mt-10 text-center">
          <Link
            href="/episodes"
            className="text-sm text-slate-500 hover:text-amber-400 transition-colors"
          >
            ← 전체 목록으로
          </Link>
        </div>
      </article>
    </main>
  );
}
