"use client";

import { useState } from "react";
import type { GradeKanji } from "@/data/kanji";

interface Props {
  grades: GradeKanji[];
}

export default function KanjiTabs({ grades }: Props) {
  const [activeGrade, setActiveGrade] = useState(0);

  const current = grades[activeGrade];

  return (
    <div>
      {/* 학년 탭 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {grades.map((g, i) => (
          <button
            key={g.grade}
            onClick={() => setActiveGrade(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeGrade === i
                ? "bg-rose-600 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:border-rose-300 hover:text-rose-600"
            }`}
          >
            {g.label}
            <span className={`ml-1.5 text-xs ${activeGrade === i ? "text-rose-200" : "text-gray-400"}`}>
              {g.count}자
            </span>
          </button>
        ))}
      </div>

      {/* 현재 학년 한자 그리드 */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {current.list.map((kanji) => (
          <div
            key={kanji.char}
            className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-rose-300 transition-colors"
          >
            <p className="text-2xl font-bold text-gray-800 mb-1.5">{kanji.char}</p>
            <p className="text-[10px] text-rose-600 leading-tight mb-0.5 truncate" title={kanji.onyomi}>
              음: {kanji.onyomi}
            </p>
            <p className="text-[10px] text-blue-600 leading-tight mb-0.5 truncate" title={kanji.kunyomi}>
              훈: {kanji.kunyomi}
            </p>
            <p className="text-[10px] text-gray-500 leading-tight">{kanji.meaning}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-4 text-right">{current.label} 총 {current.list.length}자</p>
    </div>
  );
}
