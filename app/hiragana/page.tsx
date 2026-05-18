import type { Metadata } from "next";
import KanaGrid from "@/components/KanaGrid";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { hiragana } from "@/data/kana";

export const metadata: Metadata = {
  title: "히라가나 학습 | 하루일본어",
  description:
    "일본어의 기본 문자인 히라가나를 카드와 예시 단어로 쉽게 배워보세요. 46자 전체를 로마자와 함께 확인할 수 있습니다.",
};

const half = Math.ceil(hiragana.length / 2);

export default function HiraganaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0 space-y-10">
          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              히라가나 (ひらがな) 학습
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              히라가나는 일본어의 기본 문자입니다. 총 46자로 이루어져 있으며, 일본어를 배우기 위한 첫 번째 단계입니다.
              아래 카드에서 문자, 로마자 발음, 예시 단어를 함께 확인해보세요.
            </p>
          </section>

          <AdBanner slotId={AD_SLOTS.content_mid} variant="banner" />

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">히라가나 46자</h2>
            <KanaGrid items={hiragana.slice(0, half)} />
          </section>

          <AdBanner slotId={AD_SLOTS.home_top} variant="banner" />

          <section>
            <KanaGrid items={hiragana.slice(half)} />
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">히라가나 학습 팁</h2>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li>✅ 먼저 모음(あ い う え お)부터 외우세요.</li>
              <li>✅ 하루에 한 행(か행, さ행...)씩 나눠서 외우면 부담이 줄어듭니다.</li>
              <li>✅ 카드를 볼 때 발음을 소리 내어 읽어보세요.</li>
              <li>✅ 예시 단어를 함께 외우면 문자를 더 오래 기억할 수 있습니다.</li>
              <li>✅ 앱에서 TTS 발음을 들으며 발음 교정을 해보세요.</li>
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
