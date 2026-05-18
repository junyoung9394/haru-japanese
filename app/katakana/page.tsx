import type { Metadata } from "next";
import KanaGrid from "@/components/KanaGrid";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { katakana } from "@/data/kana";

export const metadata: Metadata = {
  title: "가타카나 학습 | 하루일본어",
  description:
    "일본어 외래어 표기에 자주 쓰이는 가타카나를 카드와 예시 단어로 쉽게 배워보세요. 46자 전체를 로마자와 함께 확인할 수 있습니다.",
};

const half = Math.ceil(katakana.length / 2);

export default function KatakanaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              가타카나 (カタカナ) 학습
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              가타카나는 주로 외래어, 외국 인명, 지명, 의성어를 표기할 때 사용합니다. 히라가나와 같은 발음을 가지지만 모양이 다릅니다.
              아래 카드에서 가타카나 46자를 확인해보세요.
            </p>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">가타카나 46자</h2>
            <KanaGrid items={katakana.slice(0, half)} />
          </section>

          <AdBanner slotId={AD_SLOTS.home_top} variant="banner" />

          <section>
            <KanaGrid items={katakana.slice(half)} />
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">가타카나 학습 팁 &amp; 외래어 표기</h2>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>✅ 가타카나는 외래어 표기에 자주 쓰입니다. 예: コーヒー(커피), テレビ(텔레비전)</li>
              <li>✅ 히라가나를 먼저 익힌 후 가타카나를 배우면 더 수월합니다.</li>
              <li>✅ 모양이 비슷한 문자(シ와 ツ, ソ와 ン)에 주의하세요.</li>
              <li>✅ 익숙한 외래어를 가타카나로 써보면 빠르게 외울 수 있습니다.</li>
              <li>✅ 앱에서 TTS 발음을 들으며 가타카나 발음을 연습해보세요.</li>
            </ul>
          </section>

          <AppDownloadCta />

          <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />
        </div>

        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky" style={{ top: "80px" }}>
            <AdBanner slotId={AD_SLOTS.sidebar} variant="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  );
}
