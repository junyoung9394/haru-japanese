import Link from "next/link";

const learnLinks = [
  { href: "/hiragana", label: "히라가나" },
  { href: "/katakana", label: "가타카나" },
  { href: "/vocabulary", label: "기초 단어" },
  { href: "/kanji", label: "기초 한자" },
  { href: "/jlpt", label: "JLPT 시험" },
  { href: "/jpt", label: "JPT 시험" },
  { href: "/travel", label: "여행 일본어" },
  { href: "/basic", label: "기본 소통 일본어" },
  { href: "/business", label: "비즈니스 일본어" },
  { href: "/culture", label: "일본 문화" },
  { href: "/quiz", label: "퀴즈" },
];

const linkClass = "text-gray-600 hover:text-gray-900 transition-colors";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_2fr_1fr] gap-10 sm:gap-8 mb-10">
          <div>
            <p className="flex items-center gap-2.5 mb-3">
              <span
                aria-hidden="true"
                lang="ja"
                className="grid place-items-center w-7 h-7 rounded-[9px] bg-rose-600 text-white text-[13px] font-extrabold"
              >
                日
              </span>
              <span className="text-base font-extrabold tracking-[-0.03em] text-gray-900">하루일본어</span>
            </p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              히라가나부터 JLPT, 일본 문화까지 초보자도 쉽게 배우는 일본어 학습 사이트입니다.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400 mb-4">학습 메뉴</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {learnLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkClass}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400 mb-4">안내</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&referrer=utm_source%3Djp-site%26utm_medium%3Dweb%26utm_campaign%3Dfooter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  앱 다운로드
                </a>
              </li>
              <li><Link href="/privacy" className={linkClass}>개인정보처리방침</Link></li>
              <li><Link href="/contact" className={linkClass}>문의하기</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2025 하루일본어. All rights reserved.</p>
          <a href="/analytics-info.html" className="hover:text-gray-600 transition-colors">방문 통계 안내·설정</a>
        </div>
      </div>
    </footer>
  );
}
