"use client";

import { useState } from "react";
import Link from "next/link";
import type { CultureItem } from "@/data/culture";

type Category = CultureItem["category"] | "전체";

const CATEGORIES: Category[] = [
  "전체", "예절", "음식", "여행", "생활", "교통", "축제", "전통", "학교", "지역", "관광",
];

const CATEGORY_EMOJI: Record<string, string> = {
  전체: "🗾", 예절: "🙇", 음식: "🍱", 여행: "✈️", 생활: "🏠",
  교통: "🚇", 축제: "🎆", 전통: "⛩️", 학교: "🎓", 지역: "📍", 관광: "🗺️",
};

export default function CultureGrid({ items }: { items: CultureItem[] }) {
  const [active, setActive] = useState<Category>("전체");

  const filtered = active === "전체" ? items : items.filter((i) => i.category === active);

  return (
    <section>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? "bg-rose-600 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:border-rose-300 hover:text-rose-600"
            }`}
          >
            {CATEGORY_EMOJI[cat]} {cat}
            {active !== "전체" && cat !== "전체" && cat === active && (
              <span className="ml-1 text-xs opacity-80">({filtered.length})</span>
            )}
          </button>
        ))}
      </div>

      {/* Count badge */}
      <p className="text-sm text-gray-500 mb-4">
        {active === "전체" ? `전체 ${items.length}개` : `${active} ${filtered.length}개`} 콘텐츠
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filtered.map((item) => (
          <Link
            key={item.slug}
            href={`/culture/${item.slug}`}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-rose-200 transition-all block"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-medium">
                {CATEGORY_EMOJI[item.category]} {item.category}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
            {item.expression && (
              <div className="bg-rose-50 rounded-xl p-3 border border-rose-100">
                <p className="text-rose-600 font-bold text-base">{item.expression}</p>
                <p className="text-gray-600 text-sm">{item.expressionMeaning}</p>
              </div>
            )}
            <p className="text-xs text-rose-500 mt-3 font-medium">자세히 보기 →</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p>해당 카테고리의 콘텐츠가 없습니다.</p>
        </div>
      )}
    </section>
  );
}
