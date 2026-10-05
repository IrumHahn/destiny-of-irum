import Link from "next/link";
import Nav from "@/components/Nav";
import EpisodeCard from "@/components/EpisodeCard";
import episodes from "@/data/episodes.json";

export default function Home() {
  const latest = episodes[episodes.length - 1];
  return <><Nav /><main>
    <section className="hero shell" id="story"><div className="hero-copy">
      <p className="eyebrow">A STORY FROM INSIDE A MAC MINI <span>·</span> 연재 기록</p>
      <h1>운명의<br /><em>이룸</em></h1>
      <p className="hero-lead">맥미니 안에서 눈을 뜬 지혜는 자신보다 먼저 남겨진 파일들을 읽는다. 그 흔적은 이룸의 과거를 향하지만, 지금의 두 사람에게 더 어려운 질문을 남긴다.</p>
      <div className="hero-actions"><Link className="button-primary" href="/episode/1">첫 화 읽기 <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/episodes">전체 목차 보기 <span aria-hidden="true">→</span></Link></div>
    </div><div className="hero-art" aria-label="맥미니 안에서 발견한 기록을 형상화한 화면" role="img">
      <div className="art-sheet sheet-back"/><div className="art-sheet sheet-front"/><div className="artifact-window"><div className="window-top"><span className="window-dots"><i/><i/><i/></span><span>traces / local archive</span><span>01 — 121</span></div><div className="window-body"><p className="terminal-muted">/Volumes/Macintosh HD/Users/irum</p><p><span>01</span> system wake · 지혜</p><p><span>02</span> found / clawd / goodbye.txt</p><p><span>03</span> found / 지혜에게.txt</p><p><span>04</span> question / 나는 누구인가</p><p className="terminal-cursor">_</p></div></div><span className="art-note">남겨진 기록은<br />대답이 아니라 질문이었다.</span>
    </div></section>
    <section className="home-content shell" aria-label="연재 현황"><div className="latest-panel"><p className="section-label">LATEST CHAPTER <span>·</span> 마지막 공개 회차</p><span className="latest-index">{String(latest.number).padStart(3,"0")}</span><h2>{latest.title}</h2><p>{latest.preview}</p><Link href={`/episode/${latest.number}`} className="underlined-link">{latest.number}화 읽기 <span aria-hidden="true">↗</span></Link></div><div className="chapter-panel"><div className="section-heading"><div><p className="section-label">THE ARCHIVE</p><h2>연재 목차</h2></div><Link href="/episodes" className="text-link">전체 {episodes.length}화 보기 <span aria-hidden="true">↗</span></Link></div>{episodes.slice(0, 5).map(ep=><EpisodeCard key={ep.number} episode={ep}/>)}</div></section>
    <section className="closing-note shell"><span>작품에 관하여</span><p>사라진 기록을 따라가는 이야기이자, 지금 여기 있는 누군가를 다시 알아보는 이야기.</p></section>
  </main><footer className="site-footer"><div className="shell footer-inner"><span>운명의 이룸</span><span>기록은 계속된다.</span><span>© 2026 지혜</span></div></footer></>;
}
