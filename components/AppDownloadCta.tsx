import StoreButton from "@/components/StoreButton";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&referrer=utm_source%3Djp-site%26utm_medium%3Dweb%26utm_campaign%3Dcta";

const HIGHLIGHTS = ["N5~N1 단어·문법", "퀴즈 & 오답노트", "TTS 발음"];

export default function AppDownloadCta() {
  return (
    <section className="promo p-6 sm:p-9" data-glyph="あ" aria-labelledby="app-cta-title">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-5">
            <span
              aria-hidden="true"
              lang="ja"
              className="grid place-items-center w-12 h-12 rounded-[14px] bg-white text-rose-600 text-xl font-extrabold shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)]"
            >
              日
            </span>
            <span className="text-sm font-semibold text-white/80">JLPT 일본어 단어 문법 공부</span>
          </div>
          <h2 id="app-cta-title" className="text-2xl sm:text-[28px] font-extrabold leading-snug text-white mb-3">
            앱에서 반복 학습하기
          </h2>
          <p className="text-white/85 text-[15px] leading-relaxed">
            오늘 배운 일본어를 앱에서 퀴즈로 복습해보세요.
            <br className="hidden sm:block" />{" "}
            JLPT 일본어 단어 문법 공부 앱에서 N5~N1 단어와 문법을 반복 학습할 수 있습니다.
          </p>
          <ul className="flex flex-wrap gap-2 mt-5" aria-label="앱 주요 기능">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="promo-chip">{h}</li>
            ))}
          </ul>
        </div>
        <StoreButton href={PLAY_STORE_URL} variant="light" className="self-start md:self-end" />
      </div>
    </section>
  );
}
