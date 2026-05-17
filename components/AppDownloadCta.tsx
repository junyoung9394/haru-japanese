const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca";

export default function AppDownloadCta() {
  return (
    <section className="bg-rose-50 border border-rose-200 rounded-2xl p-6 sm:p-8 text-center">
      <p className="text-2xl mb-3">📱</p>
      <h2 className="text-xl font-bold text-gray-800 mb-2">앱에서 반복 학습하기</h2>
      <p className="text-gray-600 text-sm mb-1">
        오늘 배운 일본어를 앱에서 퀴즈로 복습해보세요.
      </p>
      <p className="text-gray-600 text-sm mb-5">
        JLPT 일본어 단어 문법 공부 앱에서 N5~N1 단어와 문법을 반복 학습할 수 있습니다.
      </p>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors"
      >
        Google Play에서 앱 설치하기
      </a>
    </section>
  );
}
