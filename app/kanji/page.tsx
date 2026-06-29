import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import KanjiTabs from "@/components/KanjiTabs";
import KanjiBanner from "@/components/KanjiBanner";
import AppInfoSection from "@/components/AppInfoSection";
import { kanjiByGrade } from "@/data/kanji";

export const metadata: Metadata = {
  title: "일본어 기초 한자 | 하루일본어",
  description:
    "일본 초등학교 교육한자(教育漢字) 1~6학년 1024자를 학년별로 학습하세요. 각 한자의 음독·훈독과 한국어 뜻을 한눈에 확인할 수 있습니다.",
};

const totalCount = kanjiByGrade.reduce((sum, g) => sum + g.list.length, 0);

export default function KanjiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
      <div className="flex-1 min-w-0 space-y-10">
      {/* 앱 다운로드 배너 */}
      <KanjiBanner />

      {/* 헤더 */}
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          일본어 교육한자 (教育漢字)
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          일본 초등학교 1~6학년에서 배우는 교육한자(教育漢字) 총 <strong>{totalCount}자</strong>를 학년별로 정리했습니다.
          각 한자의 음독(音読み)과 훈독(訓読み), 뜻을 함께 학습해보세요.
        </p>
      </section>

      {/* 음독·훈독 설명 */}
      <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">
          음독(音読み)과 훈독(訓読み)이란?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 leading-relaxed">
          <div className="bg-white rounded-xl p-4 border border-rose-100">
            <p className="font-bold text-rose-600 mb-1">음독 (音読み・おんよみ)</p>
            <p>
              중국에서 전래된 한자 발음을 일본식으로 읽는 방법입니다.
              카타카나로 표기합니다.
              예: 山 → <span className="font-semibold">サン</span>
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100">
            <p className="font-bold text-blue-600 mb-1">훈독 (訓読み・くんよみ)</p>
            <p>
              한자의 뜻을 일본 고유어로 읽는 방법입니다.
              히라가나로 표기합니다.
              예: 山 → <span className="font-semibold">やま</span>
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * 하나의 한자가 음독과 훈독을 모두 가지는 경우가 많습니다. 단어와 함께 익히는 것이 효과적입니다.
        </p>
      </section>

      <AdSlot />

      {/* 학년별 탭 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">학년별 교육한자</h2>
        <KanjiTabs grades={kanjiByGrade} />
      </section>

      <AdSlot type="inArticle" />

      {/* 학습 팁 */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">한자 학습 팁</h2>
        <ul className="text-sm text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
          <li>한자 하나를 외울 때 음독·훈독·뜻을 세트로 외우세요.</li>
          <li>한자가 포함된 단어를 통째로 익히면 독음을 자연스럽게 습득할 수 있습니다.</li>
          <li>획순(書き順)을 지켜 쓰면 모양을 오래 기억할 수 있습니다.</li>
          <li>JLPT N5는 약 100자, N4는 약 300자, N3는 약 650자 수준입니다.</li>
          <li>1~2학년 한자부터 시작해서 단계적으로 올라가는 것이 효과적입니다.</li>
        </ul>
      </section>

      <AdSlot />

      {/* 앱 소개 섹션 */}
      <AppInfoSection />
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
