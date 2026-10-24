"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type SubItem = { href: string; label: string; subtitle: string };

type NavItem =
  | { href: string; label: string; subtitle?: string; dropdown?: never }
  | { href?: never; label: string; subtitle?: never; dropdown: SubItem[] };

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

/** 모바일 가로 스크롤 내비에 쓰는 평탄화된 목록 */
const flatItems: { href: string; label: string }[] = navItems.flatMap((item) =>
  item.dropdown
    ? item.dropdown.map((sub) => ({ href: sub.href, label: sub.label.replace(/ 학습$/, "").replace(/ 시험$/, "") }))
    : [{ href: item.href, label: item.label }]
);

/** 현재 경로와 가장 구체적으로 일치하는 href */
function useActiveHref() {
  const pathname = usePathname() ?? "/";
  let best = "";
  for (const { href } of flatItems) {
    const match = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
    if (match && href.length > best.length) best = href;
  }
  return best;
}

function DropdownMenu({ item, activeHref }: { item: Extract<NavItem, { dropdown: unknown[] }>; activeHref: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = `dropdown-${item.label}`;
  const isActive = item.dropdown.some((sub) => sub.href === activeHref);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((v) => !v);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={`nav-link ${isActive ? "is-active" : ""}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
      >
        {item.label}
        <svg aria-hidden="true" className={`w-3 h-3 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div id={menuId} role="menu" className="pop pop-in p-1.5 min-w-[220px]">
            {item.dropdown.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                role="menuitem"
                aria-current={sub.href === activeHref ? "page" : undefined}
                onClick={() => setOpen(false)}
                onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
                className={`flex items-center justify-between gap-4 rounded-[10px] px-3 py-2.5 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100 ${
                  sub.href === activeHref ? "text-rose-600" : "text-gray-800"
                }`}
              >
                <span className="text-sm font-semibold">{sub.label}</span>
                <span className="text-xs text-gray-400" lang="ja">{sub.subtitle}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const activeHref = useActiveHref();
  const scrollRef = useRef<HTMLDivElement>(null);

  // 모바일 내비에서 현재 메뉴가 보이도록 가로 스크롤 위치 맞추기
  useEffect(() => {
    const box = scrollRef.current;
    const el = box?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!box || !el) return;
    const target = el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2;
    box.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [activeHref]);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 h-14 sm:h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="하루일본어 홈">
          <span
            aria-hidden="true"
            lang="ja"
            className="grid place-items-center w-8 h-8 rounded-[10px] bg-rose-600 text-white text-[15px] font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
          >
            日
          </span>
          <span className="text-[17px] font-extrabold tracking-[-0.03em] text-gray-900">하루일본어</span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="주요 메뉴">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label} item={item} activeHref={activeHref} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.href === activeHref ? "page" : undefined}
                className="nav-link"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link href="/app-download" className="btn btn-primary btn-sm shrink-0">
          <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14" />
          </svg>
          앱 다운로드
        </Link>
      </div>

      {/* 모바일·태블릿: 가로 스크롤 내비 */}
      <nav className="lg:hidden max-w-5xl mx-auto" aria-label="주요 메뉴 (모바일)">
        <div ref={scrollRef} className="scroll-nav flex gap-1 px-3 pb-2.5">
          {flatItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === activeHref ? "page" : undefined}
              className="nav-link !text-[13.5px] !py-1.5"
            >
              {item.label}
            </Link>
          ))}
          <span aria-hidden="true" className="shrink-0 w-4" />
        </div>
      </nav>
    </header>
  );
}
