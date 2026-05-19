import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { n1Words, n1Grammar } from "@/data/jlpt";

export const metadata: Metadata = {
  title: "JLPT N1 단어·문법 | 하루일본어",
  description:
    "JLPT N1 필수 단어 20개와 핵심 문법 8가지를 학습하세요. 고급 일본어 어휘와 문법을 정리했습니다.",
};

export default function JlptN1Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full">JLPT N1</span>
              <Link href="/jlpt" className="text-sm text-gray-400 hover:text-rose-500 transition-colors">← 전체 레벨 보기</Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">JLPT N1 단어·문법</h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              최고급 일본어로 고도의 일본어를 폭넓게 이해할 수 있는 수준입니다.
              개념, 본질, 논리 등 학술·전문 분야에서 쓰이는 어휘와 문법을 학습하세요.
            </p>
          </section>

          <section className="grid grid-cols-3 gap-4">
            {[
              { label: "어휘", value: "약 2,000개" },
              { label: "한자", value: "약 2,000자" },
              { label: "시험 시간", value: "170분" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
                <p className="text-lg font-bold text-gray-800">{value}</p>
              </div>
            ))}
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              N1 핵심 단어 <span className="text-sm font-normal text-gray-500">({n1Words.length}개)</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {n1Words.slice(0, 10).map((word) => (
                <div key={word.word} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-blue-300 transition-colors">
                  <p className="text-xl font-bold text-gray-800 mb-1">{word.word}</p>
                  <p className="text-sm text-blue-600 mb-1">{word.reading}</p>
                  <p className="text-sm text-gray-600">{word.meaning}</p>
                </div>
              ))}
            </div>

            <AdBanner slotId={AD_SLOTS.home_top} variant="banner" className="my-4" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {n1Words.slice(10).map((word) => (
                <div key={word.word} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-blue-300 transition-colors">
                  <p className="text-xl font-bold text-gray-800 mb-1">{word.word}</p>
                  <p className="text-sm text-blue-600 mb-1">{word.reading}</p>
                  <p className="text-sm text-gray-600">{word.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              N1 핵심 문법 <span className="text-sm font-normal text-gray-500">({n1Grammar.length}개)</span>
            </h2>
            <div className="space-y-3">
              {n1Grammar.map((item) => (
                <div key={item.pattern} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-blue-600">{item.pattern}</span>
                    <span className="text-sm text-gray-600 font-medium">{item.meaning}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">
                    예문: <span className="font-medium">{item.example}</span>
                  </p>
                  <p className="text-sm text-gray-500">{item.exampleMeaning}</p>
                </div>
              ))}
            </div>
          </section>

          <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />

          <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-base font-bold text-gray-800 mb-4">다른 레벨 학습하기</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { level: "N5", href: "/jlpt", color: "bg-rose-50 border-rose-200 text-rose-700", sub: "기초" },
                { level: "N4", href: "/jlpt/n4", color: "bg-orange-50 border-orange-200 text-orange-700", sub: "초중급" },
                { level: "N3", href: "/jlpt/n3", color: "bg-yellow-50 border-yellow-200 text-yellow-700", sub: "중급" },
                { level: "N2", href: "/jlpt/n2", color: "bg-green-50 border-green-200 text-green-700", sub: "준고급" },
              ].map(({ level, href, color, sub }) => (
                <Link
                  key={level}
                  href={href}
                  className={`border rounded-xl p-4 text-center hover:shadow-sm transition-shadow ${color}`}
                >
                  <p className="text-lg font-bold">{level}</p>
                  <p className="text-xs mt-1 opacity-70">{sub}</p>
                </Link>
              ))}
            </div>
          </section>

          <AppDownloadCta />
        </div>

        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky" style={{ top: "80px" }}>
            <AdBanner slotId={AD_SLOTS.sidebar} variant="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  );
}
