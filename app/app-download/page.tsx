import type { Metadata } from "next";
import StoreButton from "@/components/StoreButton";

export const metadata: Metadata = {
  title: "JLPT 일본어 단어 문법 공부 앱 다운로드 | 하루일본어",
  description:
    "N5부터 N1까지 일본어 단어, 문법, 퀴즈, 오답노트, TTS 발음으로 반복 학습할 수 있는 앱을 설치해보세요.",
};

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&referrer=utm_source%3Djp-site%26utm_medium%3Dweb%26utm_campaign%3Ddownload-page";

const appFeatures = [
  { icon: "📚", title: "JLPT N5~N1 단어 학습", desc: "레벨별로 정리된 단어를 체계적으로 학습합니다." },
  { icon: "📖", title: "JLPT N5~N1 문법 학습", desc: "문법 패턴과 예문을 함께 익힐 수 있습니다." },
  { icon: "あ", title: "히라가나 / 가타카나", desc: "일본어 기본 문자를 카드와 함께 학습합니다." },
  { icon: "🀄", title: "기초 한자 학습", desc: "일상에서 자주 쓰이는 기초 한자를 배웁니다." },
  { icon: "🧩", title: "단어 & 문법 퀴즈", desc: "객관식 퀴즈로 배운 내용을 즉시 복습합니다." },
  { icon: "❌", title: "오답노트", desc: "틀린 문제만 모아 집중적으로 재학습합니다." },
  { icon: "⭐", title: "즐겨찾기", desc: "중요한 단어와 문법을 즐겨찾기로 관리합니다." },
  { icon: "🔊", title: "TTS 발음 듣기", desc: "원어민 발음을 들으며 정확한 발음을 익힙니다." },
  { icon: "🏆", title: "XP & 스트릭", desc: "매일 학습 기록을 쌓아 습관을 만들어갑니다." },
];

const roles = [
  {
    label: "웹사이트 (하루일본어)",
    items: [
      "히라가나 / 가타카나 개념 학습",
      "JLPT N5 단어 & 문법 개요 확인",
      "일본 문화 콘텐츠 읽기",
      "학습 흐름 파악 및 시작",
    ],
    color: "bg-rose-50 border-rose-100",
  },
  {
    label: "앱 (JLPT 일본어 단어 문법 공부)",
    items: [
      "N5~N1 단어 & 문법 반복 학습",
      "퀴즈 & 오답노트로 복습",
      "TTS 발음 교정",
      "XP & 스트릭으로 학습 습관 형성",
    ],
    color: "bg-white border-gray-200",
  },
];

export default function AppDownloadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-5 py-10 sm:py-14 space-y-14">
      <section className="hero-glow text-center pt-4">
        <div className="app-icon mx-auto mb-6" aria-hidden="true" lang="ja">日</div>
        <span className="eyebrow mb-4">Android 앱 · 무료</span>
        <h1 className="text-[28px] sm:text-4xl font-extrabold text-gray-900 mb-4">
          JLPT 일본어 단어 문법 공부
        </h1>
        <p className="text-gray-600 sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
          N5부터 N1까지 일본어 단어, 문법, 한자, 히라가나, 가타카나를 퀴즈와 TTS 발음으로 반복 학습할 수 있는 앱입니다.
        </p>
        <StoreButton href={PLAY_STORE_URL} />
      </section>

      <section>
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900 mb-5">앱 주요 기능</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {appFeatures.map((feature) => (
            <div key={feature.title} className="card p-5 flex items-start gap-4">
              <span className="grid place-items-center shrink-0 w-11 h-11 rounded-[13px] bg-gray-100 text-xl font-bold text-gray-800" aria-hidden="true" lang="ja">
                {feature.icon}
              </span>
              <span>
                <span className="block font-bold text-gray-900 mb-1">{feature.title}</span>
                <span className="block text-sm text-gray-500 leading-relaxed">{feature.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900 mb-5">웹사이트와 앱의 역할</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {roles.map((role) => (
            <div key={role.label} className={`border rounded-2xl p-6 ${role.color}`}>
              <p className="font-bold text-gray-900 mb-4">{role.label}</p>
              <ul className="space-y-2.5">
                {role.items.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2.5">
                    <svg aria-hidden="true" className="w-4 h-4 mt-0.5 shrink-0 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="promo p-8 sm:p-10 text-center" data-glyph="あ">
        <p className="text-2xl font-extrabold text-white mb-2">지금 바로 시작해보세요</p>
        <p className="text-white/85 text-[15px] mb-7">
          TTS 발음, 오답노트, 즐겨찾기로 매일 일본어 습관을 만들어보세요.
        </p>
        <StoreButton href={PLAY_STORE_URL} variant="light" />
      </section>
    </div>
  );
}
