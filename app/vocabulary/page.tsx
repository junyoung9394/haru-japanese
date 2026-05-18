import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "일본어 기초 단어 | 하루일본어",
  description:
    "숫자, 요일, 색깔, 가족, 시간, 동사 등 일본어 기초 단어를 한눈에 확인하세요. 하루일본어 앱으로 반복 학습하면 더 빠르게 외울 수 있습니다.",
};

const numbers = [
  { word: "一", reading: "いち", meaning: "1" },
  { word: "二", reading: "に", meaning: "2" },
  { word: "三", reading: "さん", meaning: "3" },
  { word: "四", reading: "し・よん", meaning: "4" },
  { word: "五", reading: "ご", meaning: "5" },
  { word: "六", reading: "ろく", meaning: "6" },
  { word: "七", reading: "しち・なな", meaning: "7" },
  { word: "八", reading: "はち", meaning: "8" },
  { word: "九", reading: "く・きゅう", meaning: "9" },
  { word: "十", reading: "じゅう", meaning: "10" },
  { word: "百", reading: "ひゃく", meaning: "100" },
  { word: "千", reading: "せん", meaning: "1000" },
  { word: "万", reading: "まん", meaning: "10000" },
];

const daysOfWeek = [
  { word: "月曜日", reading: "げつようび", meaning: "월요일" },
  { word: "火曜日", reading: "かようび", meaning: "화요일" },
  { word: "水曜日", reading: "すいようび", meaning: "수요일" },
  { word: "木曜日", reading: "もくようび", meaning: "목요일" },
  { word: "金曜日", reading: "きんようび", meaning: "금요일" },
  { word: "土曜日", reading: "どようび", meaning: "토요일" },
  { word: "日曜日", reading: "にちようび", meaning: "일요일" },
];

const colors = [
  { word: "赤", reading: "あか", meaning: "빨강" },
  { word: "青", reading: "あお", meaning: "파랑" },
  { word: "白", reading: "しろ", meaning: "흰색" },
  { word: "黒", reading: "くろ", meaning: "검정" },
  { word: "黄色", reading: "きいろ", meaning: "노랑" },
  { word: "緑", reading: "みどり", meaning: "초록" },
  { word: "ピンク", reading: "ぴんく", meaning: "분홍" },
  { word: "紫", reading: "むらさき", meaning: "보라" },
  { word: "オレンジ", reading: "おれんじ", meaning: "주황" },
  { word: "茶色", reading: "ちゃいろ", meaning: "갈색" },
];

const family = [
  { word: "父／お父さん", reading: "ちち／おとうさん", meaning: "아버지" },
  { word: "母／お母さん", reading: "はは／おかあさん", meaning: "어머니" },
  { word: "兄／お兄さん", reading: "あに／おにいさん", meaning: "형·오빠" },
  { word: "姉／お姉さん", reading: "あね／おねえさん", meaning: "누나·언니" },
  { word: "弟", reading: "おとうと", meaning: "남동생" },
  { word: "妹", reading: "いもうと", meaning: "여동생" },
  { word: "祖父", reading: "そふ", meaning: "할아버지" },
  { word: "祖母", reading: "そぼ", meaning: "할머니" },
  { word: "息子", reading: "むすこ", meaning: "아들" },
  { word: "娘", reading: "むすめ", meaning: "딸" },
];

const timeDate = [
  { word: "今日", reading: "きょう", meaning: "오늘" },
  { word: "明日", reading: "あした", meaning: "내일" },
  { word: "昨日", reading: "きのう", meaning: "어제" },
  { word: "今", reading: "いま", meaning: "지금" },
  { word: "午前", reading: "ごぜん", meaning: "오전" },
  { word: "午後", reading: "ごご", meaning: "오후" },
  { word: "朝", reading: "あさ", meaning: "아침" },
  { word: "昼", reading: "ひる", meaning: "낮" },
  { word: "夜", reading: "よる", meaning: "밤" },
  { word: "夜中", reading: "よなか", meaning: "한밤중" },
];

const verbs = [
  { word: "行く", reading: "いく", meaning: "가다" },
  { word: "来る", reading: "くる", meaning: "오다" },
  { word: "食べる", reading: "たべる", meaning: "먹다" },
  { word: "飲む", reading: "のむ", meaning: "마시다" },
  { word: "見る", reading: "みる", meaning: "보다" },
  { word: "聞く", reading: "きく", meaning: "듣다" },
  { word: "話す", reading: "はなす", meaning: "말하다" },
  { word: "買う", reading: "かう", meaning: "사다" },
  { word: "寝る", reading: "ねる", meaning: "자다" },
  { word: "起きる", reading: "おきる", meaning: "일어나다" },
];

function WordGrid({ words }: { words: { word: string; reading: string; meaning: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {words.map((w) => (
        <div key={w.word} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-xl font-bold text-gray-800 mb-1">{w.word}</p>
          <p className="text-sm text-rose-600 mb-1">{w.reading}</p>
          <p className="text-sm text-gray-600">{w.meaning}</p>
        </div>
      ))}
    </div>
  );
}

export default function VocabularyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          일본어 기초 단어
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          일본어를 처음 배울 때 꼭 알아야 할 기초 단어를 카테고리별로 정리했습니다.
          숫자, 요일, 색깔, 가족, 시간, 자주 쓰는 동사를 한눈에 확인해보세요.
        </p>
      </section>

      {/* 숫자 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">숫자</h2>
        <WordGrid words={numbers} />
      </section>

      <AdSlot />

      {/* 요일 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">요일</h2>
        <WordGrid words={daysOfWeek} />
      </section>

      {/* 색깔 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">색깔</h2>
        <WordGrid words={colors} />
      </section>

      <AdSlot />

      {/* 가족 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">가족</h2>
        <WordGrid words={family} />
      </section>

      {/* 시간/날짜 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">시간·날짜</h2>
        <WordGrid words={timeDate} />
      </section>

      <AdSlot />

      {/* 자주 쓰는 동사 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">자주 쓰는 동사</h2>
        <WordGrid words={verbs} />
      </section>

      <AppDownloadCta />

      <AdSlot />
    </div>
  );
}
