import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";

export const metadata: Metadata = {
  title: "일본어 퀴즈 | 하루일본어",
  description:
    "히라가나, 가타카나, JLPT 단어와 문법을 퀴즈로 복습하는 학습 흐름을 확인해보세요.",
};

const quizCategories = [
  {
    icon: "あ",
    title: "히라가나 퀴즈",
    description: "히라가나 46자 발음을 카드로 복습하고 퀴즈로 테스트해보세요.",
    href: "/hiragana",
    color: "bg-rose-50 border-rose-200",
    iconColor: "text-rose-600",
    appOnly: false,
  },
  {
    icon: "ア",
    title: "가타카나 퀴즈",
    description: "가타카나 46자 발음과 외래어 표기를 퀴즈로 확인해보세요.",
    href: "/katakana",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    appOnly: false,
  },
  {
    icon: "N5",
    title: "JLPT 단어 퀴즈",
    description: "N5~N1 단어를 객관식 퀴즈로 반복 학습할 수 있습니다.",
    href: "/app-download",
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "text-yellow-700",
    appOnly: true,
  },
  {
    icon: "📝",
    title: "JLPT 문법 퀴즈",
    description: "N5~N1 문법 패턴을 예문 퀴즈로 학습할 수 있습니다.",
    href: "/app-download",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-700",
    appOnly: true,
  },
  {
    icon: "❌",
    title: "오답노트 복습",
    description: "틀린 문제만 모아 집중 복습하는 오답노트 기능입니다.",
    href: "/app-download",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-700",
    appOnly: true,
  },
];

export default function QuizPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          일본어 퀴즈
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          웹에서 개념을 익힌 후 퀴즈로 복습하면 학습 효과가 높아집니다. 히라가나, 가타카나는 아래 링크에서,
          JLPT 단어·문법·오답노트 퀴즈는 앱에서 이용할 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-5">퀴즈 카테고리</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {quizCategories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className={`border rounded-2xl p-5 hover:shadow-md transition-shadow relative ${cat.color}`}
            >
              {cat.appOnly && (
                <span className="absolute top-3 right-3 text-xs bg-rose-600 text-white px-2 py-0.5 rounded-full">
                  앱 전용
                </span>
              )}
              <p className={`text-3xl font-bold mb-2 ${cat.iconColor}`}>{cat.icon}</p>
              <p className="font-semibold text-gray-800 mb-1">{cat.title}</p>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">퀴즈 학습 효과를 높이는 방법</h2>
        <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
          <li>✅ 새 단어나 문법을 배운 직후 바로 퀴즈로 확인하세요.</li>
          <li>✅ 오답노트에 모인 문제는 다음 날 다시 복습하면 기억에 오래 남습니다.</li>
          <li>✅ 하루 10분이라도 꾸준히 퀴즈를 풀면 실력이 빠르게 늘어납니다.</li>
          <li>✅ 즐겨찾기 기능으로 어려운 단어를 따로 모아 집중 학습해보세요.</li>
        </ul>
      </section>

      <AppDownloadCta />
    </div>
  );
}
