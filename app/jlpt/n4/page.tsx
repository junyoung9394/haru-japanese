import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { n4Words, n4Grammar } from "@/data/jlpt";

export const metadata: Metadata = {
  title: "JLPT N4 단어·문법 | 하루일본어",
  description:
    "JLPT N4 필수 단어 35개와 핵심 문법 12가지를 학습하세요. 역, 공항, 병원 등 생활 밀착형 어휘와 て형 문법을 정리했습니다.",
};

export default function JlptN4Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          {/* Header */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-orange-100 text-orange-700 text-sm font-bold px-3 py-1 rounded-full">JLPT N4</span>
              <Link href="/jlpt" className="text-sm text-gray-400 hover:text-rose-500 transition-colors">← 전체 레벨 보기</Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">JLPT N4 단어·문법</h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              기본적인 일본어로 일상적인 장면에서 대화할 수 있는 수준입니다.
              역, 공항, 병원 등 생활 관련 어휘와 て형 중심의 문법을 학습하세요.
            </p>
          </section>

          {/* Level info */}
          <section className="grid grid-cols-3 gap-4">
            {[
              { label: "어휘", value: "약 1,500개" },
              { label: "한자", value: "약 300자" },
              { label: "시험 시간", value: "105분" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
                <p className="text-xs text-orange-600 font-medium mb-1">{label}</p>
                <p className="text-lg font-bold text-gray-800">{value}</p>
              </div>
            ))}
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          {/* N4 Words */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              N4 핵심 단어 <span className="text-sm font-normal text-gray-500">({n4Words.length}개)</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {n4Words.slice(0, 15).map((word) => (
                <div key={word.word} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-orange-300 transition-colors">
                  <p className="text-xl font-bold text-gray-800 mb-1">{word.word}</p>
                  <p className="text-sm text-orange-600 mb-1">{word.reading}</p>
                  <p className="text-sm text-gray-600">{word.meaning}</p>
                </div>
              ))}
            </div>

            <AdBanner slotId={AD_SLOTS.home_top} variant="banner" className="my-4" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {n4Words.slice(15).map((word) => (
                <div key={word.word} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-orange-300 transition-colors">
                  <p className="text-xl font-bold text-gray-800 mb-1">{word.word}</p>
                  <p className="text-sm text-orange-600 mb-1">{word.reading}</p>
                  <p className="text-sm text-gray-600">{word.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* N4 Grammar */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              N4 핵심 문법 <span className="text-sm font-normal text-gray-500">({n4Grammar.length}개)</span>
            </h2>
            <div className="space-y-3">
              {n4Grammar.map((item) => (
                <div key={item.pattern} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-200 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-orange-600">{item.pattern}</span>
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

          {/* Level navigation */}
          <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h2 className="text-base font-bold text-gray-800 mb-4">다른 레벨 학습하기</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { level: "N5", href: "/jlpt", color: "bg-rose-50 border-rose-200 text-rose-700", sub: "기초" },
                { level: "N3", href: "/jlpt/n3", color: "bg-yellow-50 border-yellow-200 text-yellow-700", sub: "중급" },
                { level: "N2", href: "/jlpt/n2", color: "bg-green-50 border-green-200 text-green-700", sub: "준고급" },
                { level: "N1", href: "/jlpt/n1", color: "bg-blue-50 border-blue-200 text-blue-700", sub: "고급" },
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
