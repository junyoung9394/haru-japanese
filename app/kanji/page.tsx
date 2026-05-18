import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "일본어 기초 한자 | 하루일본어",
  description:
    "JLPT N5 수준의 일본어 기초 한자를 음독·훈독과 뜻과 함께 학습하세요. 숫자, 시간, 자연, 가족 등 초보자에게 꼭 필요한 한자를 한눈에 확인할 수 있습니다.",
};

interface Kanji {
  char: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
}

interface KanjiCategory {
  title: string;
  list: Kanji[];
}

const kanjiCategories: KanjiCategory[] = [
  {
    title: "숫자 한자",
    list: [
      { char: "一", onyomi: "イチ", kunyomi: "ひと(つ)", meaning: "일, 하나" },
      { char: "二", onyomi: "ニ", kunyomi: "ふた(つ)", meaning: "이, 둘" },
      { char: "三", onyomi: "サン", kunyomi: "みっ(つ)", meaning: "삼, 셋" },
      { char: "四", onyomi: "シ", kunyomi: "よっ(つ)", meaning: "사, 넷" },
      { char: "五", onyomi: "ゴ", kunyomi: "いつ(つ)", meaning: "오, 다섯" },
      { char: "六", onyomi: "ロク", kunyomi: "むっ(つ)", meaning: "육, 여섯" },
      { char: "七", onyomi: "シチ", kunyomi: "なな(つ)", meaning: "칠, 일곱" },
      { char: "八", onyomi: "ハチ", kunyomi: "やっ(つ)", meaning: "팔, 여덟" },
      { char: "九", onyomi: "ク・キュウ", kunyomi: "ここの(つ)", meaning: "구, 아홉" },
      { char: "十", onyomi: "ジュウ", kunyomi: "とお", meaning: "십, 열" },
      { char: "百", onyomi: "ヒャク", kunyomi: "—", meaning: "백, 100" },
      { char: "千", onyomi: "セン", kunyomi: "ち", meaning: "천, 1000" },
      { char: "万", onyomi: "マン", kunyomi: "—", meaning: "만, 10000" },
    ],
  },
  {
    title: "시간/날짜 한자",
    list: [
      { char: "年", onyomi: "ネン", kunyomi: "とし", meaning: "년, 해" },
      { char: "月", onyomi: "ゲツ・ガツ", kunyomi: "つき", meaning: "월, 달" },
      { char: "日", onyomi: "ニチ・ジツ", kunyomi: "ひ・か", meaning: "일, 날" },
      { char: "時", onyomi: "ジ", kunyomi: "とき", meaning: "시, 때" },
      { char: "分", onyomi: "フン・ブン", kunyomi: "わ(かる)", meaning: "분, 나누다" },
      { char: "秒", onyomi: "ビョウ", kunyomi: "—", meaning: "초(시간 단위)" },
      { char: "曜", onyomi: "ヨウ", kunyomi: "—", meaning: "요일" },
      { char: "週", onyomi: "シュウ", kunyomi: "—", meaning: "주, 주간" },
    ],
  },
  {
    title: "자연 한자",
    list: [
      { char: "山", onyomi: "サン", kunyomi: "やま", meaning: "산" },
      { char: "川", onyomi: "セン", kunyomi: "かわ", meaning: "강, 하천" },
      { char: "田", onyomi: "デン", kunyomi: "た", meaning: "논, 밭" },
      { char: "海", onyomi: "カイ", kunyomi: "うみ", meaning: "바다" },
      { char: "空", onyomi: "クウ", kunyomi: "そら", meaning: "하늘, 비다" },
      { char: "雨", onyomi: "ウ", kunyomi: "あめ", meaning: "비" },
      { char: "火", onyomi: "カ", kunyomi: "ひ", meaning: "불, 화요일" },
      { char: "水", onyomi: "スイ", kunyomi: "みず", meaning: "물, 수요일" },
      { char: "木", onyomi: "モク", kunyomi: "き", meaning: "나무, 목요일" },
      { char: "土", onyomi: "ド・ト", kunyomi: "つち", meaning: "흙, 토요일" },
    ],
  },
  {
    title: "사람/가족 한자",
    list: [
      { char: "人", onyomi: "ジン・ニン", kunyomi: "ひと", meaning: "사람" },
      { char: "女", onyomi: "ジョ・ニョ", kunyomi: "おんな", meaning: "여자" },
      { char: "男", onyomi: "ダン・ナン", kunyomi: "おとこ", meaning: "남자" },
      { char: "子", onyomi: "シ・ス", kunyomi: "こ", meaning: "아이, 자식" },
      { char: "父", onyomi: "フ", kunyomi: "ちち", meaning: "아버지" },
      { char: "母", onyomi: "ボ", kunyomi: "はは", meaning: "어머니" },
      { char: "兄", onyomi: "ケイ・キョウ", kunyomi: "あに", meaning: "형, 오빠" },
      { char: "姉", onyomi: "シ", kunyomi: "あね", meaning: "언니, 누나" },
      { char: "弟", onyomi: "テイ・ダイ", kunyomi: "おとうと", meaning: "남동생" },
      { char: "妹", onyomi: "マイ", kunyomi: "いもうと", meaning: "여동생" },
    ],
  },
  {
    title: "방향/위치 한자",
    list: [
      { char: "上", onyomi: "ジョウ", kunyomi: "うえ・のぼ(る)", meaning: "위, 올라가다" },
      { char: "下", onyomi: "カ・ゲ", kunyomi: "した・くだ(る)", meaning: "아래, 내려가다" },
      { char: "左", onyomi: "サ", kunyomi: "ひだり", meaning: "왼쪽" },
      { char: "右", onyomi: "ウ・ユウ", kunyomi: "みぎ", meaning: "오른쪽" },
      { char: "中", onyomi: "チュウ", kunyomi: "なか", meaning: "가운데, 안" },
      { char: "外", onyomi: "ガイ・ゲ", kunyomi: "そと", meaning: "바깥, 밖" },
      { char: "前", onyomi: "ゼン", kunyomi: "まえ", meaning: "앞" },
      { char: "後", onyomi: "ゴ・コウ", kunyomi: "うしろ・あと", meaning: "뒤, 나중" },
      { char: "東", onyomi: "トウ", kunyomi: "ひがし", meaning: "동쪽" },
      { char: "西", onyomi: "セイ・サイ", kunyomi: "にし", meaning: "서쪽" },
      { char: "南", onyomi: "ナン", kunyomi: "みなみ", meaning: "남쪽" },
      { char: "北", onyomi: "ホク", kunyomi: "きた", meaning: "북쪽" },
    ],
  },
  {
    title: "생활 한자",
    list: [
      { char: "口", onyomi: "コウ・ク", kunyomi: "くち", meaning: "입, 입구" },
      { char: "手", onyomi: "シュ", kunyomi: "て", meaning: "손" },
      { char: "目", onyomi: "モク・ボク", kunyomi: "め", meaning: "눈, 목표" },
      { char: "耳", onyomi: "ジ", kunyomi: "みみ", meaning: "귀" },
      { char: "足", onyomi: "ソク", kunyomi: "あし", meaning: "발, 다리" },
      { char: "車", onyomi: "シャ", kunyomi: "くるま", meaning: "차, 수레" },
      { char: "電", onyomi: "デン", kunyomi: "—", meaning: "전기, 번개" },
      { char: "気", onyomi: "キ・ケ", kunyomi: "—", meaning: "기운, 마음" },
      { char: "本", onyomi: "ホン", kunyomi: "もと", meaning: "책, 근본" },
      { char: "学", onyomi: "ガク", kunyomi: "まな(ぶ)", meaning: "배우다, 학문" },
      { char: "校", onyomi: "コウ", kunyomi: "—", meaning: "학교" },
    ],
  },
];

export default function KanjiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      {/* 헤더 */}
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          일본어 기초 한자
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          한자(漢字)는 일본어의 중요한 구성 요소입니다. JLPT N5 수준의 기초 한자를
          익히면 일상적인 표지판, 메뉴판, 간단한 문장을 읽을 수 있습니다.
          각 한자의 음독(音読み)과 훈독(訓読み)을 함께 학습해보세요.
        </p>
      </section>

      {/* 음독·훈독 설명 팁 박스 */}
      <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">
          음독(音読み)과 훈독(訓読み)이란?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 leading-relaxed">
          <div className="bg-white rounded-xl p-4 border border-rose-100">
            <p className="font-bold text-rose-600 mb-1">음독 (音読み・おんよみ)</p>
            <p>
              중국에서 전래된 한자 발음을 일본식으로 읽는 방법입니다.
              주로 카타카나(片仮名)로 표기합니다.
              예: 山 → <span className="font-semibold">サン</span>
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-blue-100">
            <p className="font-bold text-blue-600 mb-1">훈독 (訓読み・くんよみ)</p>
            <p>
              한자의 뜻을 일본 고유어로 읽는 방법입니다.
              주로 히라가나(平仮名)로 표기합니다.
              예: 山 → <span className="font-semibold">やま</span>
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * 하나의 한자가 음독과 훈독을 모두 가지는 경우가 많습니다. 단어 안에서 어떤 독음을 쓰는지는 단어마다 다르므로 함께 익히는 것이 좋습니다.
        </p>
      </section>

      {/* 한자 카테고리 섹션 */}
      {kanjiCategories.map((category, index) => (
        <>
          <section key={category.title}>
            <h2 className="text-lg font-bold text-gray-800 mb-4">{category.title}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {category.list.map((kanji) => (
                <div
                  key={kanji.char}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center"
                >
                  <p className="text-3xl font-bold text-gray-800 mb-2">{kanji.char}</p>
                  <p className="text-xs text-rose-600 mb-1">음: {kanji.onyomi}</p>
                  <p className="text-xs text-blue-600 mb-1">훈: {kanji.kunyomi}</p>
                  <p className="text-xs text-gray-600">{kanji.meaning}</p>
                </div>
              ))}
            </div>
          </section>
          {index < kanjiCategories.length - 1 && <AdSlot key={`ad-${index}`} />}
        </>
      ))}

      {/* 학습 안내 */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">한자 학습 팁</h2>
        <ul className="text-sm text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
          <li>한자 하나를 외울 때 음독과 훈독, 뜻을 세트로 외우세요.</li>
          <li>한자가 포함된 단어를 통째로 익히면 독음을 자연스럽게 습득할 수 있습니다.</li>
          <li>획순(書き順)을 지켜 쓰면 모양을 오래 기억할 수 있습니다.</li>
          <li>JLPT N5에서는 약 100자, N4에서는 약 300자의 한자가 출제됩니다.</li>
        </ul>
      </section>

      <AppDownloadCta />

      <AdSlot />
    </div>
  );
}
