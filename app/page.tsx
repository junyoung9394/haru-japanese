import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";
import AdBanner from "@/components/AdBanner";
import StoreButton from "@/components/StoreButton";
import { AD_SLOTS } from "@/lib/adSlots";
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
    iconColor: "bg-rose-50 text-rose-600",
  },
  {
    href: "/katakana",
    icon: "ア",
    title: "가타카나",
    description: "외래어 표기에 쓰이는 가타카나 46자를 배워보세요.",
    iconColor: "bg-orange-50 text-orange-600",
  },
  {
    href: "/jlpt",
    icon: "N5",
    title: "JLPT N5 기초",
    description: "JLPT N5 단어와 문법으로 일본어 기초를 다져보세요.",
    iconColor: "bg-amber-50 text-amber-600",
  },
  {
    href: "/culture",
    icon: "🎌",
    title: "일본 문화",
    description: "인사, 식당, 편의점, 온천 등 일본 문화를 알아보세요.",
    iconColor: "bg-emerald-50 text-emerald-600",
  },
  {
    href: "/quiz",
    icon: "🧩",
    title: "퀴즈",
    description: "히라가나, 가타카나, JLPT 단어를 퀴즈로 복습해보세요.",
    iconColor: "bg-blue-50 text-blue-600",
  },
];

const hiraganaPreview = hiragana.slice(0, 10);
const wordPreview = n5Words.slice(0, 8);
const grammarPreview = n5Grammar.slice(0, 3);

function SectionHead({ title, desc, href, more = "전체 보기" }: { title: string; desc?: string; href?: string; more?: string }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-5">
      <div>
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900">{title}</h2>
        {desc && <p className="text-sm text-gray-500 mt-1.5">{desc}</p>}
      </div>
      {href && (
        <Link href={href} className="more-link shrink-0">
          {more}
          <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-5 pb-10 space-y-16">
      {/* 히어로 섹션 */}
      <section className="hero-glow text-center pt-14 pb-6 sm:pt-20 sm:pb-10">
        <span className="eyebrow mb-6">히라가나 · 가타카나 · JLPT · 일본 문화</span>
        <h1 className="text-[32px] sm:text-5xl font-extrabold text-gray-900 leading-[1.25] sm:leading-[1.2] mb-5">
          🌸 히라가나부터 JLPT까지<br />
          <span className="text-rose-600">하루 10분 일본어</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
          초보자도 쉽게 배우는 일본어 학습 사이트입니다. 웹에서 개념을 익히고, 앱에서 퀴즈와 반복 학습으로 완성하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5 justify-center max-w-sm sm:max-w-none mx-auto">
          <Link href="/hiragana" className="btn btn-primary px-7">
            히라가나부터 시작하기
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&referrer=utm_source%3Djp-site%26utm_medium%3Dweb%26utm_campaign%3Dhero"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary px-7"
          >
            앱 다운로드
          </a>
        </div>
      </section>

      <AdBanner slotId={AD_SLOTS.home_top} variant="banner" />

      {/* 학습 카테고리 */}
      <section>
        <SectionHead title="학습 카테고리" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="card card-link group flex items-start gap-4 p-5">
              <span className={`grid place-items-center shrink-0 w-12 h-12 rounded-[14px] text-xl font-extrabold ${cat.iconColor}`} lang="ja">
                {cat.icon}
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1 font-bold text-gray-900 mb-1">
                  {cat.title}
                  <svg aria-hidden="true" className="w-3.5 h-3.5 text-gray-400 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </span>
                <span className="block text-sm text-gray-500 leading-relaxed">{cat.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

      {/* 히라가나 미리보기 */}
      <section>
        <SectionHead title="히라가나 미리보기" desc="あ행 ~ か행 — 발음과 예시 단어를 함께 확인해보세요" href="/hiragana" />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {hiraganaPreview.map((item) => (
            <div key={item.kana} className="card p-4 pt-5 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-1.5" lang="ja">{item.kana}</p>
              <p className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-3">{item.romaji}</p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-sm text-gray-700 font-medium" lang="ja">{item.example}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.meaning}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />

      {/* N5 단어 미리보기 */}
      <section>
        <SectionHead title="JLPT N5 단어" desc="일본어 능력 시험 N5 수준의 기초 단어입니다" href="/jlpt" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {wordPreview.map((word) => (
            <div key={word.word} className="card p-5 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-1" lang="ja">{word.word}</p>
              <p className="text-sm text-rose-600 font-medium mb-1.5" lang="ja">{word.reading}</p>
              <p className="text-sm text-gray-500">{word.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot type="inArticle" />

      {/* N5 문법 포인트 */}
      <section>
        <SectionHead title="N5 문법 포인트" desc="예문과 함께 핵심 문법 패턴을 익혀보세요" href="/jlpt" more="더 보기" />
        <div className="card divide-y divide-gray-100 overflow-hidden">
          {grammarPreview.map((item) => (
            <div key={item.pattern} className="p-5 sm:px-6">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="text-lg font-bold text-rose-600" lang="ja">{item.pattern}</span>
                <span className="chip">{item.meaning}</span>
              </div>
              <p className="text-[15px] text-gray-700 mb-1">
                예문: <span className="font-medium" lang="ja">{item.example}</span>
              </p>
              <p className="text-sm text-gray-400">{item.exampleMeaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 오늘의 일본어 표현 */}
      <section>
        <SectionHead title="꼭 알아야 할 일본어 표현" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {dailyExpressions.map((item) => (
            <div key={item.expression} className="card p-5">
              <p className="text-lg font-bold text-gray-900 mb-1" lang="ja">{item.expression}</p>
              <p className="text-xs text-gray-400 mb-3">{item.romaji}</p>
              <p className="inline-flex text-sm font-semibold text-rose-600 bg-rose-50 rounded-lg px-2.5 py-1">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 앱 연동 소개 */}
      <section className="card p-6 sm:p-9">
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900 mb-6">웹 + 앱으로 효과적인 일본어 학습</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
          {[
            { icon: "📖", title: "웹에서 개념 학습", desc: "히라가나, 가타카나, JLPT 단어와 문법, 일본 문화를 확인합니다." },
            { icon: "📱", title: "앱에서 반복 학습", desc: "N5~N1 단어와 문법을 TTS 발음, 퀴즈, 오답노트로 복습합니다." },
            { icon: "🏆", title: "XP와 스트릭으로 습관화", desc: "매일 학습 기록을 쌓아 일본어 실력을 꾸준히 늘려갑니다." },
          ].map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl" aria-hidden="true">{step.icon}</span>
                <span className="text-xs font-bold text-gray-400 tabular">STEP {i + 1}</span>
              </div>
              <p className="font-bold text-gray-900 mb-1">{step.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="flex justify-center">
          <StoreButton href="https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&referrer=utm_source%3Djp-site%26utm_medium%3Dweb%26utm_campaign%3Dbottom-cta" />
        </div>
      </section>

      {/* 일본 문화 추천 글 */}
      <section>
        <SectionHead title="일본 문화 살펴보기" href="/culture" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {cultureItems.slice(0, 3).map((item) => (
            <div key={item.slug} className="card p-5 flex flex-col">
              <span className="chip chip-acc self-start">{item.category}</span>
              <p className="font-bold text-gray-900 mt-3 mb-2 leading-snug">{item.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              {item.expression && (
                <p className="mt-auto pt-4 text-sm">
                  <span className="font-bold text-rose-600" lang="ja">{item.expression}</span>
                  <span className="text-gray-500"> — {item.expressionMeaning}</span>
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
