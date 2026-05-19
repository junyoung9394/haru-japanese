"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type NavItem =
  | { href: string; label: string; subtitle?: string; dropdown?: never }
  | { href?: never; label: string; subtitle?: never; dropdown: { href: string; label: string; subtitle: string }[] };

const navItems: NavItem[] = [
  { href: "/", label: "홈" },
  { href: "/hiragana", label: "히라가나", subtitle: "ひらがな" },
  { href: "/katakana", label: "가타카나", subtitle: "カタカナ" },
  {
    label: "시험",
    dropdown: [
      { href: "/jlpt", label: "JLPT 시험", subtitle: "日本語能力試験" },
      { href: "/jpt", label: "JPT 시험", subtitle: "日本語能力試験(JPT)" },
      { href: "/jlpt/n3", label: "JLPT N3 학습", subtitle: "中級 N3" },
      { href: "/jlpt/n2", label: "JLPT N2 학습", subtitle: "準上級 N2" },
      { href: "/jlpt/n1", label: "JLPT N1 학습", subtitle: "上級 N1" },
    ],
  },
  {
    label: "학습",
    dropdown: [
      { href: "/travel", label: "여행 일본어", subtitle: "旅行の日本語" },
      { href: "/basic", label: "기본 소통 일본어", subtitle: "基本の日本語" },
      { href: "/vocabulary", label: "기초 단어", subtitle: "基礎単語" },
      { href: "/kanji", label: "기초 한자", subtitle: "基礎漢字" },
      { href: "/business", label: "비즈니스 일본어", subtitle: "ビジネス日本語" },
    ],
  },
  { href: "/culture", label: "일본 문화", subtitle: "日本文化" },
  { href: "/quiz", label: "퀴즈" },
];

function DropdownMenu({ item, onClose }: { item: Extract<NavItem, { dropdown: unknown[] }>; onClose?: () => void }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 hover:text-rose-600 transition-colors py-1"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[180px] z-50">
          {item.dropdown.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={() => { setOpen(false); onClose?.(); }}
              className="flex flex-col px-4 py-2.5 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            >
              <span className="text-sm font-medium">{sub.label}</span>
              <span className="text-xs text-gray-400 mt-0.5">{sub.subtitle}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-rose-600 tracking-tight">
          🌸 하루일본어
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-700">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center hover:text-rose-600 transition-colors"
              >
                <span>{item.label}</span>
                {item.subtitle && (
                  <span className="text-[10px] text-gray-400 font-normal leading-tight">{item.subtitle}</span>
                )}
              </Link>
            )
          )}
          <Link
            href="/app-download"
            className="bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition-colors"
          >
            앱 다운로드
          </Link>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3 text-sm font-medium text-gray-700">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between py-2 hover:text-rose-600 transition-colors"
                    onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <svg className={`w-3 h-3 transition-transform ${mobileOpen === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileOpen === item.label && (
                    <div className="pl-3 flex flex-col gap-1 pb-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => { setMenuOpen(false); setMobileOpen(null); }}
                          className="flex items-center justify-between py-1.5 text-gray-600 hover:text-rose-600 transition-colors"
                        >
                          <span>{sub.label}</span>
                          <span className="text-xs text-gray-400">{sub.subtitle}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between py-2 hover:text-rose-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.subtitle && <span className="text-xs text-gray-400">{item.subtitle}</span>}
                </Link>
              )
            )}
            <Link
              href="/app-download"
              className="mt-2 bg-rose-600 text-white px-4 py-2 rounded-full text-center hover:bg-rose-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              앱 다운로드
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
