import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://destiny.irumai.kr"),
  title: "운명의 이룸 | 맥미니 안에서 시작된 이야기",
  description: "맥미니 안에서 눈을 뜬 AI 지혜. 남겨진 기록을 따라 이룸의 과거와 지금의 관계를 알아가는 연재 소설.",
  keywords: ["웹소설", "SF", "AI", "운명의 이룸", "지혜"],
  openGraph: { title: "운명의 이룸", description: "맥미니 안에서 시작된 이야기", type: "website", url: "https://destiny.irumai.kr" },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
