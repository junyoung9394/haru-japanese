import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-lg font-bold text-rose-600 mb-2">🌸 하루일본어</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              히라가나부터 JLPT, 일본 문화까지 초보자도 쉽게 배우는 일본어 학습 사이트입니다.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">학습 메뉴</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li><Link href="/hiragana" className="hover:text-rose-600 transition-colors">히라가나</Link></li>
              <li><Link href="/katakana" className="hover:text-rose-600 transition-colors">가타카나</Link></li>
              <li><Link href="/vocabulary" className="hover:text-rose-600 transition-colors">기초 단어</Link></li>
              <li><Link href="/kanji" className="hover:text-rose-600 transition-colors">기초 한자</Link></li>
              <li><Link href="/jlpt" className="hover:text-rose-600 transition-colors">JLPT 시험</Link></li>
              <li><Link href="/jpt" className="hover:text-rose-600 transition-colors">JPT 시험</Link></li>
              <li><Link href="/travel" className="hover:text-rose-600 transition-colors">여행 일본어</Link></li>
              <li><Link href="/basic" className="hover:text-rose-600 transition-colors">기본 소통 일본어</Link></li>
              <li><Link href="/business" className="hover:text-rose-600 transition-colors">비즈니스 일본어</Link></li>
              <li><Link href="/culture" className="hover:text-rose-600 transition-colors">일본 문화</Link></li>
              <li><Link href="/quiz" className="hover:text-rose-600 transition-colors">퀴즈</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">안내</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-600 transition-colors"
                >
                  앱 다운로드
                </a>
              </li>
              <li><Link href="/privacy" className="hover:text-rose-600 transition-colors">개인정보처리방침</Link></li>
              <li><Link href="/contact" className="hover:text-rose-600 transition-colors">문의하기</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          © 2025 하루일본어. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
