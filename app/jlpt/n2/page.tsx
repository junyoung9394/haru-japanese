import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JLPT N2 단어·문법 | 하루일본어",
  description: "JLPT N2 단어와 문법을 학습하세요.",
};

export default function JlptN2Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">JLPT N2 단어·문법</h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          준고급 일본어로 자연스러운 일본어를 폭넓게 이해할 수 있는 수준입니다.
        </p>
      </section>

      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-10 text-center space-y-4">
        <p className="text-5xl">🚧</p>
        <h2 className="text-xl font-bold text-gray-800">준비 중</h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          JLPT N2 콘텐츠를 준비하고 있습니다. 현재 N5 학습을 먼저 완료하거나 앱에서 N2를 학습해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/jlpt"
            className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors text-sm"
          >
            N5 학습하기
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-rose-600 text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors text-sm"
          >
            앱에서 N2 학습하기
          </a>
        </div>
      </section>
    </div>
  );
}
