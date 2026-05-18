import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";
import { cultureItems } from "@/data/culture";
import { hiragana } from "@/data/kana";
import { n5Words, n5Grammar } from "@/data/jlpt";

const dailyExpressions = [
  { expression: "おはようございます", romaji: "Ohayou gozaimasu", meaning: "좋은 아침입니다" },
  { expression: "ありがとうございます", romaji: "Arigatou gozaimasu", meaning: "감사합니다" },
  { expression: "すみません", romaji: "Sumimasen", meaning: "저기요 / 실례합니다" },
  { expression: "よろしくお願いします", romaji: "Yoroshiku onegaishimasu", meaning: "잘 부탁드립니다" },
  { expression: "いただきます", romaji: "Itadakimasu", meaning: "잘 먹겠습니다" },
  { expression: "お疲れさまです", romaji: "Otsukaresama desu", meaning: "수고하셨습니다" },
];

const categories = [
  {
    href: "/hiragana",
    icon: "あ",
    title: "히라가나",
    description: "일본어의 첫걸음, 기본 문자 46자를 카드로 익혀보세요.",
    color: "bg-rose-50 border-rose-200",
    iconColor: "text-rose-600",
  },
  {
    href: "/katakana",
    icon: "ア",
    title: "가타카나",
    description: "외래어 표기에 쓰이는 가타카나 46자를 배워보세요.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
  },
  {
    href: "/jlpt",
    icon: "N5",
    title: "JLPT N5 기초",
    description: "JLPT N5 단어와 문법으로 일본어 기초를 다져보세요.",
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "text-yellow-700",
  },
  {
    href: "/culture",
    icon: "🎌",
    title: "일본 문화",
    description: "인사, 식당, 편의점, 온천 등 일본 문화를 알아보세요.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-700",
  },
  {
    href: "/quiz",
    icon: "🧩",
    title: "퀴즈",
    description: "히라가나, 가타카나, JLPT 단어를 퀴즈로 복습해보세요.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-700",
  },
];

const hiraganaPreview = hiragana.slice(0, 10);
const wordPreview = n5Words.slice(0, 8);
const grammarPreview = n5Grammar.slice(0, 3);

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      {/* 히어로 섹션 */}
      <section className="text-center py-10 space-y-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
          🌸 히라가나부터 JLPT까지<br />
          <span className="text-rose-600">하루 10분 일본어</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          초보자도 쉽게 배우는 일본어 학습 사이트입니다. 웹에서 개념을 익히고, 앱에서 퀴즈와 반복 학습으로 완성하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/hiragana"
            className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors"
          >
            히라가나부터 시작하기
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-rose-600 text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors"
          >
            앱 다운로드
          </a>
        </div>
      </section>

      {/* 학습 카테고리 */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-5">학습 카테고리</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`border rounded-2xl p-5 hover:shadow-md transition-shadow ${cat.color}`}
            >
              <p className={`text-3xl font-bold mb-2 ${cat.iconColor}`}>{cat.icon}</p>
              <p className="font-semibold text-gray-800 mb-1">{cat.title}</p>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot type="horizontal" />

      {/* 히라가나 미리보기 */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">히라가나 미리보기</h2>
            <p className="text-sm text-gray-500 mt-1">あ행 ~ か행 — 발음과 예시 단어를 함께 확인해보세요</p>
          </div>
          <Link href="/hiragana" className="text-rose-600 text-sm font-medium hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {hiraganaPreview.map((item) => (
            <div
              key={item.kana}
              className="bg-white border border-gray-200 rounded-2xl p-4 text-center hover:border-rose-300 hover:shadow-sm transition-all"
            >
              <p className="text-3xl font-bold text-rose-600 mb-1">{item.kana}</p>
              <p className="text-sm font-medium text-gray-500 mb-2">{item.romaji}</p>
              <p className="text-xs text-gray-700 font-medium">{item.example}</p>
              <p className="text-xs text-gray-400">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* N5 단어 미리보기 */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">JLPT N5 단어</h2>
            <p className="text-sm text-gray-500 mt-1">일본어 능력 시험 N5 수준의 기초 단어입니다</p>
          </div>
          <Link href="/jlpt" className="text-rose-600 text-sm font-medium hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {wordPreview.map((word) => (
            <div
              key={word.word}
              className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-yellow-300 hover:shadow-sm transition-all"
            >
              <p className="text-2xl font-bold text-gray-800 mb-1">{word.word}</p>
              <p className="text-sm text-rose-500 font-medium mb-1">{word.reading}</p>
              <p className="text-sm text-gray-600">{word.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot type="inArticle" />

      {/* N5 문법 포인트 */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">N5 문법 포인트</h2>
            <p className="text-sm text-gray-500 mt-1">예문과 함께 핵심 문법 패턴을 익혀보세요</p>
          </div>
          <Link href="/jlpt" className="text-rose-600 text-sm font-medium hover:underline">
            더 보기 →
          </Link>
        </div>
        <div className="space-y-3">
          {grammarPreview.map((item) => (
            <div key={item.pattern} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-lg font-bold text-rose-600">{item.pattern}</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{item.meaning}</span>
              </div>
              <p className="text-sm text-gray-700 mb-1">
                예문: <span className="font-medium">{item.example}</span>
              </p>
              <p className="text-sm text-gray-400">{item.exampleMeaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 오늘의 일본어 표현 */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-5">꼭 알아야 할 일본어 표현</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dailyExpressions.map((item) => (
            <div key={item.expression} className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:shadow-sm transition-shadow">
              <p className="text-xl font-bold text-rose-600 mb-1">{item.expression}</p>
              <p className="text-xs text-gray-400 mb-2">{item.romaji}</p>
              <p className="text-gray-700 font-medium text-sm">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 앱 연동 소개 */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">웹 + 앱으로 효과적인 일본어 학습</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4">
            <p className="text-2xl mb-2">📖</p>
            <p className="font-semibold text-gray-800 mb-1">웹에서 개념 학습</p>
            <p className="text-sm text-gray-600">히라가나, 가타카나, JLPT 단어와 문법, 일본 문화를 확인합니다.</p>
          </div>
          <div className="text-center p-4">
            <p className="text-2xl mb-2">📱</p>
            <p className="font-semibold text-gray-800 mb-1">앱에서 반복 학습</p>
            <p className="text-sm text-gray-600">N5~N1 단어와 문법을 TTS 발음, 퀴즈, 오답노트로 복습합니다.</p>
          </div>
          <div className="text-center p-4">
            <p className="text-2xl mb-2">🏆</p>
            <p className="font-semibold text-gray-800 mb-1">XP와 스트릭으로 습관화</p>
            <p className="text-sm text-gray-600">매일 학습 기록을 쌓아 일본어 실력을 꾸준히 늘려갑니다.</p>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors"
          >
            Google Play에서 앱 설치하기
          </a>
        </div>
      </section>

      {/* 일본 문화 추천 글 */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-800">일본 문화 살펴보기</h2>
          <Link href="/culture" className="text-rose-600 text-sm font-medium hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cultureItems.slice(0, 3).map((item) => (
            <div key={item.slug} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-sm transition-shadow">
              <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-medium">
                {item.category}
              </span>
              <p className="font-semibold text-gray-800 mt-3 mb-2">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              {item.expression && (
                <p className="mt-3 text-rose-600 font-bold text-sm">
                  {item.expression} — {item.expressionMeaning}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 앱 다운로드 CTA */}
      <AppDownloadCta />

      <AdSlot type="relaxed" />
    </div>
  );
}
