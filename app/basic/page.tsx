import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "기본 소통 일본어 | 하루일본어",
  description:
    "일상에서 바로 쓰는 기본 일본어 회화 표현 모음. 인사, 감사, 사과, 부탁, 감정 표현, 일상 대화까지 기초 소통 문장을 확인하고 앱에서 반복 학습해보세요.",
};

const greetingPhrases = [
  { japanese: "おはようございます。", reading: "おはようございます。", meaning: "안녕하세요. (아침 인사)" },
  { japanese: "こんにちは。", reading: "こんにちは。", meaning: "안녕하세요. (낮 인사)" },
  { japanese: "こんばんは。", reading: "こんばんは。", meaning: "안녕하세요. (저녁 인사)" },
  { japanese: "おやすみなさい。", reading: "おやすみなさい。", meaning: "잘 자요. / 안녕히 주무세요." },
  { japanese: "さようなら。", reading: "さようなら。", meaning: "안녕히 가세요. (작별 인사)" },
  { japanese: "またね。", reading: "またね。", meaning: "또 봐요. (친근한 작별)" },
  { japanese: "いってきます。", reading: "いってきます。", meaning: "다녀오겠습니다." },
  { japanese: "ただいま。", reading: "ただいま。", meaning: "다녀왔습니다." },
];

const thanksSorryPhrases = [
  { japanese: "ありがとうございます。", reading: "ありがとうございます。", meaning: "감사합니다." },
  { japanese: "どうもありがとう。", reading: "どうもありがとう。", meaning: "정말 고마워요." },
  { japanese: "おかげさまで。", reading: "おかげさまで。", meaning: "덕분입니다." },
  { japanese: "どういたしまして。", reading: "どういたしまして。", meaning: "천만에요." },
  { japanese: "すみません。", reading: "すみません。", meaning: "실례합니다. / 죄송합니다." },
  { japanese: "ごめんなさい。", reading: "ごめんなさい。", meaning: "미안합니다." },
  { japanese: "申し訳ありません。", reading: "もうしわけありません。", meaning: "정말 죄송합니다. (정중)" },
  { japanese: "大丈夫です。", reading: "だいじょうぶです。", meaning: "괜찮습니다." },
];

const requestQuestionPhrases = [
  { japanese: "お願いします。", reading: "おねがいします。", meaning: "부탁합니다." },
  { japanese: "〜をください。", reading: "〜をください。", meaning: "〜을/를 주세요." },
  { japanese: "〜してもいいですか？", reading: "〜してもいいですか？", meaning: "〜해도 되나요?" },
  { japanese: "〜できますか？", reading: "〜できますか？", meaning: "〜할 수 있나요?" },
  { japanese: "〜はどこですか？", reading: "〜はどこですか？", meaning: "〜은/는 어디인가요?" },
  { japanese: "これはいくらですか？", reading: "これはいくらですか？", meaning: "이것은 얼마인가요?" },
  { japanese: "もう一度言ってください。", reading: "もういちどいってください。", meaning: "한 번 더 말해 주세요." },
  { japanese: "ゆっくり話してください。", reading: "ゆっくりはなしてください。", meaning: "천천히 말해 주세요." },
];

const emotionPhrases = [
  { japanese: "うれしいです。", reading: "うれしいです。", meaning: "기쁩니다." },
  { japanese: "楽しいです。", reading: "たのしいです。", meaning: "즐겁습니다." },
  { japanese: "びっくりしました。", reading: "びっくりしました。", meaning: "깜짝 놀랐습니다." },
  { japanese: "かわいいですね。", reading: "かわいいですね。", meaning: "귀엽네요." },
  { japanese: "わかりました。", reading: "わかりました。", meaning: "알겠습니다. / 이해했습니다." },
  { japanese: "わかりません。", reading: "わかりません。", meaning: "모르겠습니다." },
  { japanese: "大変でしたね。", reading: "たいへんでしたね。", meaning: "힘드셨겠네요." },
  { japanese: "本当ですか？", reading: "ほんとうですか？", meaning: "정말인가요?" },
];

const dailyConversationPhrases = [
  { japanese: "お元気ですか？", reading: "おげんきですか？", meaning: "잘 지내시나요?" },
  { japanese: "元気です。", reading: "げんきです。", meaning: "잘 지내고 있습니다." },
  { japanese: "最近どうですか？", reading: "さいきんどうですか？", meaning: "요즘 어떠세요?" },
  { japanese: "何をしていますか？", reading: "なにをしていますか？", meaning: "무엇을 하고 있나요?" },
  { japanese: "また明日。", reading: "またあした。", meaning: "내일 또 봐요." },
  { japanese: "お疲れ様でした。", reading: "おつかれさまでした。", meaning: "수고하셨습니다." },
  { japanese: "よろしくお願いします。", reading: "よろしくおねがいします。", meaning: "잘 부탁드립니다." },
  { japanese: "はじめまして。", reading: "はじめまして。", meaning: "처음 뵙겠습니다." },
];

export default function BasicPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          기본 소통 일본어
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          일상 대화에서 가장 자주 쓰이는 기본 일본어 표현을 모았습니다. 인사부터 감사, 사과, 부탁, 감정 표현까지 기초 소통에 꼭 필요한 문장들을 확인해보세요.
        </p>
      </section>

      {/* 기본 인사 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">기본 인사</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {greetingPhrases.map((phrase) => (
            <div key={phrase.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-lg font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 감사 & 사과 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">감사 &amp; 사과</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {thanksSorryPhrases.map((phrase) => (
            <div key={phrase.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-lg font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 부탁 & 질문 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">부탁 &amp; 질문</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {requestQuestionPhrases.map((phrase) => (
            <div key={phrase.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-lg font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 감정 표현 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">감정 표현</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {emotionPhrases.map((phrase) => (
            <div key={phrase.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-lg font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 일상 대화 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">일상 대화</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {dailyConversationPhrases.map((phrase) => (
            <div key={phrase.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-lg font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AppDownloadCta />

      <AdSlot />
    </div>
  );
}
