import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
      <p className="text-6xl font-bold text-rose-600">404</p>
      <h1 className="text-2xl font-bold text-gray-800">페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-500 leading-relaxed">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.<br />
        아래 링크에서 원하시는 콘텐츠를 찾아보세요.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
        {[
          { href: "/hiragana", label: "히라가나" },
          { href: "/katakana", label: "가타카나" },
          { href: "/jlpt", label: "JLPT N5" },
          { href: "/culture", label: "일본 문화" },
          { href: "/quiz", label: "퀴즈" },
          { href: "/app-download", label: "앱 다운로드" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm font-medium text-gray-700 hover:border-rose-300 hover:text-rose-600 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link href="/" className="inline-block mt-4 bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
