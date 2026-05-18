import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import AppDownloadCta from "@/components/AppDownloadCta";
import { cultureItems } from "@/data/culture";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return cultureItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = cultureItems.find((c) => c.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} | 일본 문화 | 하루일본어`,
    description: item.description,
    alternates: {
      canonical: `https://japanese.luckygrampus.com/culture/${item.slug}`,
    },
  };
}

const categoryColor: Record<string, string> = {
  예절: "bg-purple-100 text-purple-700",
  음식: "bg-orange-100 text-orange-700",
  교통: "bg-blue-100 text-blue-700",
  생활: "bg-green-100 text-green-700",
  여행: "bg-teal-100 text-teal-700",
  축제: "bg-rose-100 text-rose-700",
  전통: "bg-yellow-100 text-yellow-700",
  학교: "bg-indigo-100 text-indigo-700",
  지역: "bg-cyan-100 text-cyan-700",
  관광: "bg-emerald-100 text-emerald-700",
};

export default async function CultureDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = cultureItems.find((c) => c.slug === slug);
  if (!item) notFound();

  const currentIndex = cultureItems.findIndex((c) => c.slug === slug);
  const prev = cultureItems[currentIndex - 1];
  const next = cultureItems[currentIndex + 1];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      {/* 뒤로가기 */}
      <Link href="/culture" className="text-sm text-rose-600 hover:underline">
        ← 일본 문화 목록으로
      </Link>

      {/* 헤더 */}
      <section className="space-y-3">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColor[item.category] ?? "bg-gray-100 text-gray-600"}`}>
          {item.category}
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
          {item.title}
        </h1>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      </section>

      <AdSlot type="horizontal" />

      {/* 핵심 표현 */}
      {item.expressions && item.expressions.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4">핵심 일본어 표현</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {item.expressions.map((exp) => (
              <div key={exp.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="text-xl font-bold text-rose-600 mb-1">{exp.japanese}</p>
                <p className="text-xs text-gray-400 mb-1">{exp.reading}</p>
                <p className="text-sm text-gray-700 font-medium">{exp.meaning}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 본문 섹션 */}
      {item.sections && item.sections.length > 0 && (
        <section className="space-y-6">
          {item.sections.map((section, i) => (
            <div key={i}>
              {i === 1 && <AdSlot type="inArticle" className="mb-6" />}
              <h2 className="text-lg font-bold text-gray-800 mb-2">{section.heading}</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{section.body}</p>
            </div>
          ))}
        </section>
      )}

      {/* 실용 팁 */}
      {item.tips && item.tips.length > 0 && (
        <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">실용 팁</h2>
          <ul className="space-y-2">
            {item.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                <span className="text-yellow-500 mt-0.5">✔</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <AppDownloadCta />

      {/* 이전/다음 문화 콘텐츠 */}
      <nav className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
        {prev ? (
          <Link href={`/culture/${prev.slug}`} className="group text-left">
            <p className="text-xs text-gray-400 mb-1">← 이전</p>
            <p className="text-sm font-medium text-gray-700 group-hover:text-rose-600 transition-colors line-clamp-2">
              {prev.title}
            </p>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/culture/${next.slug}`} className="group text-right">
            <p className="text-xs text-gray-400 mb-1">다음 →</p>
            <p className="text-sm font-medium text-gray-700 group-hover:text-rose-600 transition-colors line-clamp-2">
              {next.title}
            </p>
          </Link>
        ) : <div />}
      </nav>

      <AdSlot type="relaxed" />
    </div>
  );
}
