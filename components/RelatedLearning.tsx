import Link from "next/link";

const links = {
  culture: [
    { href: "/travel", title: "여행 일본어", description: "교통·숙소·식당에서 쓰는 표현을 확인하세요." },
    { href: "/vocabulary", title: "기초 단어 익히기", description: "숫자와 시간, 일상 단어를 읽어보세요." },
  ],
  jlpt: [
    { href: "/quiz", title: "퀴즈로 복습하기", description: "읽은 내용을 문제로 확인하세요." },
    { href: "/jlpt/n4", title: "다음 단계 N4 살펴보기", description: "N5 다음에 배울 단어와 문법을 확인하세요." },
  ],
  jpt: [
    { href: "/business", title: "직장 일본어 표현", description: "전화·메일·회의에서 쓰는 표현을 익혀보세요." },
    { href: "/jlpt", title: "JLPT 기초부터 확인", description: "기초 단어와 문법을 정리하세요." },
  ],
  business: [
    { href: "/jpt", title: "JPT와 JLPT 비교", description: "시험 구성과 평가 방식의 차이를 확인하세요." },
    { href: "/basic", title: "기본 회화 복습", description: "일상 인사와 자주 쓰는 표현을 확인하세요." },
  ],
  vocabulary: [
    { href: "/quiz", title: "단어 퀴즈 풀기", description: "기억한 단어를 직접 확인하세요." },
    { href: "/jlpt", title: "N5 단어·문법 이어보기", description: "시험 기초 학습으로 이어가세요." },
  ],
};

export default function RelatedLearning({ topic }: { topic: keyof typeof links }) {
  return (
    <section aria-label="이어서 공부하기" className="rounded-2xl border border-rose-100 bg-rose-50 p-5 my-8">
      <h2 className="text-lg font-bold text-gray-800 mb-3">이어서 공부하기</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links[topic].map((link) => (
          <Link key={link.href} href={link.href} data-learning-link className="rounded-xl bg-white p-4 border border-rose-100 hover:border-rose-400 focus-visible:outline-2 focus-visible:outline-rose-600">
            <span className="font-semibold text-rose-700">{link.title} →</span>
            <p className="text-sm text-gray-600 mt-1">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
