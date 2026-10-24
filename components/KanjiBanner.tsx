"use client";

import { useSyncExternalStore } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&referrer=utm_source%3Djp-site%26utm_medium%3Dweb%26utm_campaign%3Dkanji-banner";
const SESSION_KEY = "kanji_banner_dismissed";

/**
 * 세션 스토리지를 외부 스토어로 다룹니다.
 * 서버 스냅샷은 항상 "닫힘"이라 SSR HTML에는 배너가 없고, 하이드레이션 후에만 나타납니다.
 */
let dismissedInMemory = false;
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): boolean {
  if (dismissedInMemory) return true;
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return true;
}

function dismiss() {
  dismissedInMemory = true;
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {}
  listeners.forEach((listener) => listener());
}

export default function KanjiBanner() {
  const isDismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (isDismissed) return null;

  return (
    <div
      className="flex items-center justify-between gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 sm:px-6 sm:py-4"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
        <p className="font-bold text-gray-800 text-sm sm:text-base truncate">
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
