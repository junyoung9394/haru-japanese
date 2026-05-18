import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://japanese.luckygrampus.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "하루일본어 | 히라가나부터 JLPT까지",
    template: "%s | 하루일본어",
  },
  description:
    "히라가나, 가타카나, JLPT 단어와 문법, 일본 문화를 초보자도 쉽게 배울 수 있는 일본어 학습 사이트입니다.",
  keywords: [
    "일본어",
    "일본어 공부",
    "히라가나",
    "가타카나",
    "JLPT",
    "JLPT N5",
    "일본어 단어",
    "일본어 문법",
    "일본어 초보",
    "일본 문화",
    "하루일본어",
  ],
  authors: [{ name: "하루일본어" }],
  creator: "하루일본어",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "하루일본어",
    title: "하루일본어 | 히라가나부터 JLPT까지",
    description:
      "히라가나, 가타카나, JLPT 단어와 문법, 일본 문화를 초보자도 쉽게 배울 수 있는 일본어 학습 사이트입니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "하루일본어 - 히라가나부터 JLPT까지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "하루일본어 | 히라가나부터 JLPT까지",
    description:
      "히라가나, 가타카나, JLPT 단어와 문법, 일본 문화를 초보자도 쉽게 배울 수 있는 일본어 학습 사이트입니다.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "하루일본어",
  url: BASE_URL,
  description:
    "히라가나, 가타카나, JLPT 단어와 문법, 일본 문화를 초보자도 쉽게 배울 수 있는 일본어 학습 사이트입니다.",
  inLanguage: "ko",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/quiz?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} h-full`}>
      <head>
        <meta name="naver-site-verification" content="9062e0dad4a36e831754c21ede1ce2fb6489748c" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8518556382646891"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
