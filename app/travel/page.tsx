import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "여행 일본어 회화 | 하루일본어",
  description:
    "일본 여행 필수 일본어 회화 모음. 공항, 숙소, 식당, 쇼핑, 긴급상황별 실전 회화 표현을 확인하고 앱에서 반복 학습해보세요.",
};

const airportPhrases = [
  { japanese: "すみません、搭乗ゲートはどこですか？", reading: "すみません、とうじょうゲートはどこですか？", meaning: "실례합니다, 탑승 게이트가 어디인가요?" },
  { japanese: "パスポートを見せてください。", reading: "パスポートをみせてください。", meaning: "여권을 보여 주세요." },
  { japanese: "荷物を預けたいです。", reading: "にもつをあずけたいです。", meaning: "짐을 맡기고 싶습니다." },
  { japanese: "この荷物は機内に持ち込めますか？", reading: "このにもつはきないにもちこめますか？", meaning: "이 짐은 기내에 가지고 탈 수 있나요?" },
  { japanese: "乗り継ぎのカウンターはどこですか？", reading: "のりつぎのカウンターはどこですか？", meaning: "환승 카운터가 어디인가요?" },
  { japanese: "電車で市内に行きたいです。", reading: "でんしゃでしないにいきたいです。", meaning: "전철로 시내에 가고 싶습니다." },
  { japanese: "タクシー乗り場はどこですか？", reading: "タクシーのりばはどこですか？", meaning: "택시 승강장이 어디인가요?" },
  { japanese: "ICカードはどこで買えますか？", reading: "ICカードはどこでかえますか？", meaning: "IC 카드는 어디서 살 수 있나요?" },
];

const hotelPhrases = [
  { japanese: "チェックインをお願いします。", reading: "チェックインをおねがいします。", meaning: "체크인 부탁합니다." },
  { japanese: "Wi-Fiのパスワードを教えてください。", reading: "Wi-Fiのパスワードをおしえてください。", meaning: "와이파이 비밀번호를 알려 주세요." },
  { japanese: "ルームサービスをお願いします。", reading: "ルームサービスをおねがいします。", meaning: "룸서비스 부탁합니다." },
  { japanese: "チェックアウトは何時ですか？", reading: "チェックアウトはなんじですか？", meaning: "체크아웃은 몇 시인가요?" },
  { japanese: "タオルを追加でもらえますか？", reading: "タオルをついかでもらえますか？", meaning: "수건을 추가로 받을 수 있나요?" },
  { japanese: "エアコンの使い方を教えてください。", reading: "エアコンのつかいかたをおしえてください。", meaning: "에어컨 사용법을 알려 주세요." },
  { japanese: "近くにコンビニはありますか？", reading: "ちかくにコンビニはありますか？", meaning: "근처에 편의점이 있나요?" },
  { japanese: "荷物を預かってもらえますか？", reading: "にもつをあずかってもらえますか？", meaning: "짐을 맡아 주실 수 있나요?" },
];

const restaurantPhrases = [
  { japanese: "一人です、席はありますか？", reading: "ひとりです、せきはありますか？", meaning: "1명인데, 자리 있나요?" },
  { japanese: "おすすめは何ですか？", reading: "おすすめはなんですか？", meaning: "추천 메뉴가 무엇인가요?" },
  { japanese: "お会計をお願いします。", reading: "おかいけいをおねがいします。", meaning: "계산 부탁합니다." },
  { japanese: "これをください。", reading: "これをください。", meaning: "이것을 주세요." },
  { japanese: "辛くないものはありますか？", reading: "からくないものはありますか？", meaning: "맵지 않은 것이 있나요?" },
  { japanese: "アレルギーがあります。", reading: "アレルギーがあります。", meaning: "알레르기가 있습니다." },
  { japanese: "お水をください。", reading: "おみずをください。", meaning: "물을 주세요." },
  { japanese: "メニューを見せてください。", reading: "メニューをみせてください。", meaning: "메뉴를 보여 주세요." },
];

const shoppingPhrases = [
  { japanese: "これはいくらですか？", reading: "これはいくらですか？", meaning: "이것은 얼마인가요?" },
  { japanese: "試着してもいいですか？", reading: "しちゃくしてもいいですか？", meaning: "입어봐도 되나요?" },
  { japanese: "カードで払えますか？", reading: "カードではらえますか？", meaning: "카드로 결제할 수 있나요?" },
  { japanese: "袋をください。", reading: "ふくろをください。", meaning: "봉투를 주세요." },
  { japanese: "もう少し安くなりますか？", reading: "もうすこしやすくなりますか？", meaning: "조금 더 싸게 해주실 수 있나요?" },
  { japanese: "別のサイズはありますか？", reading: "べつのサイズはありますか？", meaning: "다른 사이즈가 있나요?" },
  { japanese: "返品できますか？", reading: "へんぴんできますか？", meaning: "반품할 수 있나요?" },
  { japanese: "免税になりますか？", reading: "めんぜいになりますか？", meaning: "면세가 되나요?" },
];

const emergencyPhrases = [
  { japanese: "助けてください！", reading: "たすけてください！", meaning: "도와주세요!" },
  { japanese: "病院に連れて行ってください。", reading: "びょういんにつれていってください。", meaning: "병원에 데려다 주세요." },
  { japanese: "警察を呼んでください。", reading: "けいさつをよんでください。", meaning: "경찰을 불러 주세요." },
  { japanese: "財布を盗まれました。", reading: "さいふをぬすまれました。", meaning: "지갑을 도둑맞았습니다." },
  { japanese: "迷子になりました。", reading: "まいごになりました。", meaning: "길을 잃었습니다." },
  { japanese: "具合が悪いです。", reading: "ぐあいがわるいです。", meaning: "몸이 좋지 않습니다." },
  { japanese: "救急車を呼んでください。", reading: "きゅうきゅうしゃをよんでください。", meaning: "구급차를 불러 주세요." },
  { japanese: "日本語があまりわかりません。", reading: "にほんごがあまりわかりません。", meaning: "일본어를 잘 모릅니다." },
];

export default function TravelPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          여행 간단 일본어
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          일본 여행에서 꼭 필요한 회화 표현을 상황별로 모았습니다. 공항, 숙소, 식당, 쇼핑, 긴급상황까지 실전에서 바로 쓸 수 있는 문장들을 확인해보세요.
        </p>
      </section>

      {/* 공항/교통 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">✈ 공항 / 교통</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {airportPhrases.map((phrase) => (
            <div key={phrase.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-lg font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 숙소 체크인 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">🏨 숙소 체크인</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {hotelPhrases.map((phrase) => (
            <div key={phrase.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-lg font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 식당 주문 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">🍜 식당 주문</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {restaurantPhrases.map((phrase) => (
            <div key={phrase.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-lg font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 쇼핑 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">🛍 쇼핑</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {shoppingPhrases.map((phrase) => (
            <div key={phrase.japanese} className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-lg font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 긴급상황 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">🚨 긴급상황</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {emergencyPhrases.map((phrase) => (
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
