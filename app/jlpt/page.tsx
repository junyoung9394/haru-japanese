import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";
import { n5Words, n5Grammar } from "@/data/jlpt";

export const metadata: Metadata = {
  title: "JLPT N5 기초 | 하루일본어",
  description:
    "JLPT N5 단어와 문법을 초보자도 쉽게 확인하고 앱에서 반복 학습해보세요. N5부터 N1까지 일본어 능력 시험을 준비할 수 있습니다.",
};

const levels = [
  { level: "N5", desc: "기초 일본어. 일상적인 표현과 기본 단어를 이해할 수 있는 수준." },
  { level: "N4", desc: "기본적인 일본어. 일상적인 장면에서 대화할 수 있는 수준." },
  { level: "N3", desc: "중급 일본어. 일상적인 내용을 어느 정도 이해할 수 있는 수준." },
  { level: "N2", desc: "준고급 일본어. 자연스러운 일본어를 폭넓게 이해할 수 있는 수준." },
  { level: "N1", desc: "고급 일본어. 고도의 일본어를 폭넓게 이해할 수 있는 수준." },
];

export default function JlptPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
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
            <div key={item.level} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-rose-600 mb-2">{item.level}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* N5 단어 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">JLPT N5 단어</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {n5Words.map((word) => (
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

      {/* N4~N1 안내 */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">N4~N1 학습은 앱에서</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          N4, N3, N2, N1 단어와 문법은 앱에서 체계적으로 학습할 수 있습니다.
          TTS 발음, 퀴즈, 오답노트, 즐겨찾기 기능으로 JLPT를 준비해보세요.
        </p>
      </section>

      <AppDownloadCta />

      <AdSlot />
    </div>
  );
}
