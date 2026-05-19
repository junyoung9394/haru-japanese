import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { cultureItems } from "@/data/culture";
import CultureGrid from "@/components/CultureGrid";

export const metadata: Metadata = {
  title: "일본 문화 배우기 | 하루일본어",
  description:
    "일본 인사, 식당, 편의점, 온천, 지하철 매너 등 일본 문화를 일본어 표현과 함께 배워보세요.",
};

export default function CulturePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          일본 문화 배우기
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          언어와 문화는 함께 배울 때 더 잘 이해됩니다. 일본 여행, 생활, 비즈니스에서 알아두면 유용한 일본 문화와 그 상황에서 쓰이는 일본어 표현을 함께 소개합니다.
        </p>
      </section>

      <CultureGrid items={cultureItems} />

      <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

      <section className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">일본어와 문화를 함께 배우는 이유</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          일본어 단어와 문법을 외우는 것도 중요하지만, 그 표현이 어떤 상황에서 쓰이는지 알면 훨씬 자연스럽게 활용할 수 있습니다.
          일본 인사 문화, 식당 주문 방식, 지하철 매너 등을 알아두면 일본 여행과 생활이 한결 편해집니다.
        </p>
      </section>

      <AppDownloadCta />

      <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />
    </div>
  );
}
