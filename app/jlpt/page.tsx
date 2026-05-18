import type { Metadata } from "next";
import Link from "next/link";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { n5Words, n5Grammar } from "@/data/jlpt";

export const metadata: Metadata = {
  title: "JLPT N5 기초 | 하루일본어",
  description:
    "JLPT N5 단어와 문법을 초보자도 쉽게 확인하고 앱에서 반복 학습해보세요. N5부터 N1까지 일본어 능력 시험을 준비할 수 있습니다.",
};

const levels = [
  { level: "N5", desc: "기초 일본어. 일상적인 표현과 기본 단어를 이해할 수 있는 수준.", href: "/jlpt" },
  { level: "N4", desc: "기본적인 일본어. 일상적인 장면에서 대화할 수 있는 수준.", href: "/jlpt/n4" },
  { level: "N3", desc: "중급 일본어. 일상적인 내용을 어느 정도 이해할 수 있는 수준.", href: "/jlpt/n3" },
  { level: "N2", desc: "준고급 일본어. 자연스러운 일본어를 폭넓게 이해할 수 있는 수준.", href: "/jlpt/n2" },
  { level: "N1", desc: "고급 일본어. 고도의 일본어를 폭넓게 이해할 수 있는 수준.", href: "/jlpt/n1" },
];

export default function JlptPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              JLPT 일본어 능력 시험
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              JLPT(日本語能力試験)는 N5부터 N1까지 5단계로 구성된 일본어 능력 시험입니다.
              이 페이지에서는 입문 단계인 N5 단어와 문법을 확인할 수 있습니다.
            </p>
          </section>

          {/* JLPT 레벨 소개 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">JLPT 레벨 소개</h2>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {levels.map((item) => (
                <Link
                  key={item.level}
                  href={item.href}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-rose-300 hover:shadow-sm transition-all"
                >
                  <p className="text-xl font-bold text-rose-600 mb-2">{item.level}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          {/* N5 단어 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">JLPT N5 단어</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {n5Words.slice(0, 8).map((word) => (
                <div key={word.word} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gray-800 mb-1">{word.word}</p>
                  <p className="text-sm text-rose-600 mb-1">{word.reading}</p>
                  <p className="text-sm text-gray-600">{word.meaning}</p>
                </div>
              ))}
            </div>

            <AdBanner slotId={AD_SLOTS.home_top} variant="banner" className="my-4" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {n5Words.slice(8).map((word) => (
                <div key={word.word} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-gray-800 mb-1">{word.word}</p>
                  <p className="text-sm text-rose-600 mb-1">{word.reading}</p>
                  <p className="text-sm text-gray-600">{word.meaning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* N5 문법 */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">JLPT N5 문법</h2>
            <div className="space-y-3">
              {n5Grammar.map((item) => (
                <div key={item.pattern} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-rose-600">{item.pattern}</span>
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

          {/* N4~N1 링크 */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">N4~N1 단어·문법 학습</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              N4~N1 단어와 문법을 학습해보세요. 웹에서 예습하고, 앱에서 TTS 발음, 퀴즈, 오답노트로 완성하세요.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { level: "N4", href: "/jlpt/n4", color: "bg-orange-50 border-orange-200 text-orange-700" },
                { level: "N3", href: "/jlpt/n3", color: "bg-yellow-50 border-yellow-200 text-yellow-700" },
                { level: "N2", href: "/jlpt/n2", color: "bg-green-50 border-green-200 text-green-700" },
                { level: "N1", href: "/jlpt/n1", color: "bg-blue-50 border-blue-200 text-blue-700" },
              ].map(({ level, href, color }) => (
                <Link
                  key={level}
                  href={href}
                  className={`border rounded-xl p-4 text-center font-bold text-lg hover:shadow-sm transition-shadow ${color}`}
                >
                  {level}
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
