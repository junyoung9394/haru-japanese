import type { Metadata } from "next";
import QuizClient from "@/components/QuizClient";

export const metadata: Metadata = {
  title: "일본어 퀴즈 | 하루일본어",
  description:
    "히라가나, 가타카나, JLPT N5 단어를 퀴즈로 복습해보세요. 매일 새로운 랜덤 10문제로 일본어 실력을 키워보세요.",
};

export default function QuizPage() {
  return <QuizClient />;
}
