import Link from "next/link";

export default function Nav() {
  return <header className="site-header"><nav className="shell nav-inner" aria-label="주 메뉴">
    <Link href="/" className="brand">운명의 이룸<span className="brand-mark"> / 기록</span></Link>
    <div className="nav-links"><Link href="/#story">이야기</Link><Link href="/episodes">목차</Link><Link href="/episode/1" className="nav-start">첫 화부터 <span aria-hidden="true">↗</span></Link></div>
  </nav></header>;
}
