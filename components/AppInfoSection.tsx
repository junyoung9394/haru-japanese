import StoreButton from "@/components/StoreButton";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&referrer=utm_source%3Djp-site%26utm_medium%3Dweb%26utm_campaign%3Dapp-info";

const FEATURES = [
  { icon: "📚", title: "JLPT N5~N1 단어장", desc: "레벨별 단어를 플래시카드로 암기" },
  { icon: "✏️", title: "한자 획순 학습", desc: "획순 애니메이션으로 올바른 필순 학습 (업데이트 예정)" },
  { icon: "🎯", title: "매일 퀴즈 + 학습 스트릭", desc: "매일 퀴즈로 복습하고 연속 학습 기록 유지" },
];

export default function AppInfoSection() {
  return (
    <section className="card p-6 sm:p-9">
      <div className="text-center mb-7">
        <span className="eyebrow mb-3">하루일본어 앱</span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
          더 깊이 공부하고 싶다면 앱을 사용해보세요
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {FEATURES.map((f) => (
          <div key={f.title} className="rounded-2xl bg-gray-100 p-5 text-center">
            <p className="text-3xl mb-3" aria-hidden="true">{f.icon}</p>
            <p className="font-bold text-gray-900 text-sm mb-1">{f.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <StoreButton href={PLAY_STORE_URL} />
      </div>
    </section>
  );
}
