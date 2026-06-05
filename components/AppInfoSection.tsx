import Image from "next/image";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&utm_source=kanji_web&utm_medium=quiz_cta";

const FEATURES = [
  { icon: "📚", title: "JLPT N5~N1 단어장", desc: "레벨별 단어를 플래시카드로 암기" },
  { icon: "✏️", title: "한자 획순 학습", desc: "획순 애니메이션으로 올바른 필순 학습 (업데이트 예정)" },
  { icon: "🎯", title: "매일 퀴즈 + 학습 스트릭", desc: "매일 퀴즈로 복습하고 연속 학습 기록 유지" },
];

export default function AppInfoSection() {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
        더 깊이 공부하고 싶다면 앱을 사용해보세요
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="bg-rose-50 rounded-xl p-4 text-center"
          >
            <p className="text-3xl mb-2">{f.icon}</p>
            <p className="font-semibold text-gray-800 text-sm mb-1">{f.title}</p>
            <p className="text-gray-500 text-xs">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://play.google.com/intl/ko/badges/images/generic/ko_badge_web_generic.png"
            alt="Google Play에서 다운로드"
            width={200}
            height={56}
            className="mx-auto hover:opacity-90 transition-opacity"
          />
        </a>
      </div>
    </section>
  );
}
