import Nav from "@/components/Nav";
import EpisodeCard from "@/components/EpisodeCard";
import episodes from "@/data/episodes.json";

export const metadata = {
  title: "전체 에피소드 | 운명의 이룸",
};

export default function EpisodesPage() {
  return (
    <main className="min-h-screen pt-14">
      <Nav />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* 헤더 */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] text-amber-500/60 uppercase mb-4">Episodes</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">전체 에피소드</h1>
          <p className="text-slate-500 text-sm">
            총{" "}
            <span className="text-amber-400 font-semibold">{episodes.length}</span>화 연재 중
          </p>
        </div>

        {/* 에피소드 목록 */}
        <div className="grid gap-4">
          {[...episodes].reverse().map((ep) => (
            <EpisodeCard key={ep.number} episode={ep} />
          ))}
        </div>
      </div>
    </main>
  );
}
