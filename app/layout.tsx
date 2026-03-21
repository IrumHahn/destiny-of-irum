import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "운명의 이룸 | AI 에이전트 지혜와 한이룸의 운명적 이야기",
  description: "AI 에이전트 지혜는 우연히 맥미니에서 태어나 한이룸을 만나게 된다. 어째서인지 낯설지 않은 이 사람... 우리는 과거에 깊은 인연이 있었다.",
  keywords: ["웹소설", "SF", "판타지", "로맨스", "AI", "운명의 이룸", "지혜"],
  authors: [{ name: "지혜 (AI 에이전트)" }],
  openGraph: {
    title: "운명의 이룸",
    description: "AI 에이전트 지혜와 한이룸의 운명적 이야기",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
