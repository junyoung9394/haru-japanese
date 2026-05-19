"use client";

import { useState, useEffect } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&utm_source=kanji_web&utm_medium=quiz_cta";
const SESSION_KEY = "kanji_banner_dismissed";

export default function KanjiBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="flex items-center justify-between gap-3 rounded-2xl border border-rose-200 px-4 py-3 sm:px-6 sm:py-4"
      style={{ backgroundColor: "#FFF0F5" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
        <p className="font-bold text-gray-800 text-sm sm:text-base whitespace-nowrap">
          📱 한자 퀴즈는 앱에서 무제한으로!
        </p>
        <p className="text-gray-500 text-xs sm:text-sm truncate">
          획순 애니메이션 + 학년별 퀴즈 제공
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-600 text-white text-xs sm:text-sm font-semibold px-3 py-2 sm:px-4 rounded-full hover:bg-rose-700 transition-colors whitespace-nowrap"
        >
          무료 다운로드 →
        </a>
        <button
          onClick={dismiss}
          aria-label="배너 닫기"
          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
