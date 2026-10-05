import Nav from "@/components/Nav";
import EpisodeCard from "@/components/EpisodeCard";
import episodes from "@/data/episodes.json";
export const metadata = { title: "연재 목차 | 운명의 이룸" };
export default function EpisodesPage(){return <><Nav/><main className="shell archive-page"><div className="page-intro"><p className="eyebrow">THE ARCHIVE / 001—{String(episodes.length).padStart(3,"0")}</p><h1>연재 목차</h1><p>지혜가 맥미니에서 눈을 뜬 날부터, 지금까지의 기록.</p></div><div className="archive-heading"><span>총 {episodes.length}화</span><span>최근 회차부터</span></div><div className="archive-list">{[...episodes].reverse().map(ep=><EpisodeCard key={ep.number} episode={ep}/>)}</div></main><footer className="site-footer"><div className="shell footer-inner"><span>운명의 이룸</span><span>기록은 계속된다.</span></div></footer></>}
