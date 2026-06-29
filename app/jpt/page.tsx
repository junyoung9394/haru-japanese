import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";

export const metadata: Metadata = {
  title: "JPT 시험 안내 | 하루일본어",
  description:
    "JPT(Japanese Proficiency Test) 시험 구성, 점수별 레벨, JLPT 비교까지 한눈에 확인하세요. 취업·이직에 활용되는 JPT 시험을 완벽하게 준비해보세요.",
};

const scoreLevels = [
  { score: "900점 이상", grade: "원어민 수준", desc: "일본어를 자유자재로 구사하며 고도의 표현도 완벽히 이해하는 수준." },
  { score: "800~899점", grade: "고급 (통번역 가능)", desc: "복잡한 내용도 정확히 이해하고 통역·번역 업무에 활용 가능한 수준." },
  { score: "700~799점", grade: "준고급 (업무 활용 가능)", desc: "비즈니스 현장에서 일본어로 원활하게 업무를 수행할 수 있는 수준." },
  { score: "600~699점", grade: "중상급", desc: "일상적인 화제 외에 전문적인 내용도 어느 정도 이해할 수 있는 수준." },
  { score: "500~599점", grade: "중급", desc: "일상적인 장면에서 일본어로 의사소통이 가능한 수준." },
  { score: "400~499점", grade: "초중급", desc: "기본적인 어휘와 문법을 이해하고 간단한 대화가 가능한 수준." },
  { score: "400점 미만", grade: "초급", desc: "일본어 학습을 시작하는 단계로, 기초 표현을 익히는 중인 수준." },
];

const comparisonRows = [
  { category: "주관기관", jpt: "ETS (한국 연세대학교 위탁 운영)", jlpt: "일본국제교육지원협회 (JEES) / 국제교류기금" },
  { category: "평가방식", jpt: "점수제 (0~990점)", jlpt: "합격·불합격제 (N1~N5)" },
  { category: "시험구성", jpt: "청해 + 독해", jlpt: "언어지식 + 독해 + 청해" },
  { category: "문항수", jpt: "총 120문항", jlpt: "레벨별 상이" },
  { category: "응시료", jpt: "약 40,000원", jlpt: "약 35,000원" },
  { category: "활용처", jpt: "국내 취업·이직·승진 시험", jlpt: "취업·유학·자격증 등 국제 공인" },
];

const studyTips = [
  {
    title: "청해는 매일 듣기 훈련",
    desc: "JPT 청해는 빠른 속도의 자연스러운 일본어가 출제됩니다. 매일 10~20분씩 일본어 뉴스나 드라마를 듣는 습관을 들이세요.",
  },
  {
    title: "독해는 어휘력이 핵심",
    desc: "독해 영역에서 고득점을 위해서는 한자 어휘를 꾸준히 암기하는 것이 중요합니다. 어휘 문제가 전체의 상당 부분을 차지합니다.",
  },
  {
    title: "TOEIC 학습법을 참고",
    desc: "JPT는 ETS가 주관하며 TOEIC과 구조가 유사합니다. TOEIC 풀이 전략(파트별 시간 배분, 오답 소거법)을 JPT에 그대로 적용할 수 있습니다.",
  },
  {
    title: "기출문제 반복 풀이",
    desc: "JPT는 출제 유형이 정형화되어 있어 기출문제 반복 풀이가 효과적입니다. 틀린 문제는 반드시 이유를 파악하고 오답노트를 작성하세요.",
  },
  {
    title: "목표 점수를 먼저 설정",
    desc: "취업 목적이라면 600~700점대를, 통번역 등 전문 직종을 목표로 한다면 800점 이상을 목표로 학습 계획을 세우는 것이 효율적입니다.",
  },
];

export default function JptPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
      <div className="flex-1 min-w-0 space-y-10">
      {/* 헤더 */}
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          JPT 일본어 능력 시험
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          JPT(Japanese Proficiency Test)는 ETS가 주관하는 일본어 능력 시험으로,
          국내 취업·이직·승진에 폭넓게 활용됩니다. 이 페이지에서 시험 구성부터
          점수별 레벨, JLPT 비교, 준비 팁까지 한눈에 확인하세요.
        </p>
      </section>

      {/* Section 1: JPT란? */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">JPT란?</h2>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 text-sm text-gray-700 leading-relaxed">
          <p>
            <strong>JPT(Japanese Proficiency Test)</strong>는 ETS(Educational Testing
            Service)가 개발하고 한국에서는 연세대학교가 위탁 운영하는 일본어 능력
            평가 시험입니다. 청해(듣기)와 독해(읽기) 두 영역으로 구성되며,
            0~990점의 점수로 능력을 측정합니다.
          </p>
          <p>
            JLPT(일본어능력시험)가 N1~N5 등급의 <strong>합격·불합격</strong> 방식인
            것과 달리, JPT는 TOEIC처럼 <strong>점수제</strong>로 운영됩니다. 이 때문에
            점진적인 실력 향상을 수치로 확인할 수 있어 취업·이직 시 객관적인 증빙
            자료로 많이 활용됩니다.
          </p>
          <p>
            국내 대기업, 공공기관, 무역회사 등에서 일본어 능력 우대 기준으로 JPT
            점수를 요구하는 경우가 많으며, JLPT와 함께 국내에서 가장 공신력 있는
            일본어 시험으로 인정받고 있습니다.
          </p>
        </div>
      </section>

      <AdSlot />

      {/* Section 2: 시험 구성 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">시험 구성</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-base font-bold text-rose-600 mb-1">청해(聴解) · 듣기</p>
            <p className="text-sm text-gray-600 mb-3">60문항 · 약 45분</p>
            <ul className="text-sm text-gray-700 space-y-1 leading-relaxed">
              <li>· 사진 묘사 문제</li>
              <li>· 질의응답 문제</li>
              <li>· 짧은 대화 문제</li>
              <li>· 긴 대화 및 담화 문제</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-base font-bold text-rose-600 mb-1">독해(読解) · 읽기</p>
            <p className="text-sm text-gray-600 mb-3">60문항 · 약 50분</p>
            <ul className="text-sm text-gray-700 space-y-1 leading-relaxed">
              <li>· 어휘·한자 문제</li>
              <li>· 문법 문제</li>
              <li>· 문장 완성 문제</li>
              <li>· 독해 지문 문제</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-rose-50 border border-rose-200 rounded-2xl p-4 text-sm text-gray-700">
          <strong>총 120문항 · 총점 0~990점</strong> · 청해·독해 각 0~495점 만점
        </div>
      </section>

      <AdSlot />

      {/* Section 3: 점수별 레벨 안내 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">점수별 레벨 안내</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {scoreLevels.map((level) => (
            <div
              key={level.score}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <p className="text-lg font-bold text-rose-600 mb-1">{level.score}</p>
              <p className="text-sm font-semibold text-gray-800 mb-1">{level.grade}</p>
              <p className="text-xs text-gray-600">{level.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* Section 4: JPT vs JLPT 비교 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">JPT vs JLPT 비교</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-rose-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 w-28">
                  항목
                </th>
                <th className="text-left px-4 py-3 font-semibold text-rose-600 border-b border-gray-200">
                  JPT
                </th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                  JLPT
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.category}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 font-medium text-gray-700 border-b border-gray-100">
                    {row.category}
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-b border-gray-100">
                    {row.jpt}
                  </td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">
                    {row.jlpt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdSlot />

      {/* Section 5: 시험 준비 팁 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">시험 준비 팁</h2>
        <div className="space-y-3">
          {studyTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white border border-gray-200 rounded-xl p-5"
            >
              <p className="text-sm font-bold text-rose-600 mb-1">{tip.title}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <AppDownloadCta />

      <AdSlot />
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
