"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/hiragana", label: "히라가나" },
  { href: "/katakana", label: "가타카나" },
  { href: "/jlpt", label: "JLPT" },
  { href: "/culture", label: "일본 문화" },
  { href: "/quiz", label: "퀴즈" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-rose-600 tracking-tight">
          🌸 하루일본어
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-rose-600 transition-colors">
              {link.label}
            </Link>
          ))}
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
          <nav className="flex flex-col gap-3 pt-3 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-rose-600 transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/app-download"
              className="bg-rose-600 text-white px-4 py-2 rounded-full text-center hover:bg-rose-700 transition-colors"
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
