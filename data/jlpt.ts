export type JlptWord = {
  word: string;
  reading: string;
  meaning: string;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
};

export type JlptGrammar = {
  pattern: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
};

export const n5Words: JlptWord[] = [
  { word: "水", reading: "みず", meaning: "물", level: "N5" },
  { word: "山", reading: "やま", meaning: "산", level: "N5" },
  { word: "川", reading: "かわ", meaning: "강", level: "N5" },
  { word: "空", reading: "そら", meaning: "하늘", level: "N5" },
  { word: "花", reading: "はな", meaning: "꽃", level: "N5" },
  { word: "木", reading: "き", meaning: "나무", level: "N5" },
  { word: "魚", reading: "さかな", meaning: "물고기", level: "N5" },
  { word: "犬", reading: "いぬ", meaning: "개", level: "N5" },
  { word: "猫", reading: "ねこ", meaning: "고양이", level: "N5" },
  { word: "学校", reading: "がっこう", meaning: "학교", level: "N5" },
  { word: "先生", reading: "せんせい", meaning: "선생님", level: "N5" },
  { word: "友達", reading: "ともだち", meaning: "친구", level: "N5" },
  { word: "家", reading: "いえ", meaning: "집", level: "N5" },
  { word: "電車", reading: "でんしゃ", meaning: "전철", level: "N5" },
  { word: "食べ物", reading: "たべもの", meaning: "음식", level: "N5" },
];

export const n5Grammar: JlptGrammar[] = [
  {
    pattern: "〜は〜です",
    meaning: "~은/는 ~입니다",
    example: "わたしは学生です。",
    exampleMeaning: "저는 학생입니다.",
    level: "N5",
  },
  {
    pattern: "〜が好きです",
    meaning: "~을/를 좋아합니다",
    example: "すしが好きです。",
    exampleMeaning: "초밥을 좋아합니다.",
    level: "N5",
  },
  {
    pattern: "〜に行きます",
    meaning: "~에 갑니다",
    example: "学校に行きます。",
    exampleMeaning: "학교에 갑니다.",
    level: "N5",
  },
  {
    pattern: "〜を〜します",
    meaning: "~을/를 ~합니다",
    example: "ごはんを食べます。",
    exampleMeaning: "밥을 먹습니다.",
    level: "N5",
  },
  {
    pattern: "〜てください",
    meaning: "~해 주세요",
    example: "ここに書いてください。",
    exampleMeaning: "여기에 써 주세요.",
    level: "N5",
  },
  {
    pattern: "〜たいです",
    meaning: "~하고 싶습니다",
    example: "日本に行きたいです。",
    exampleMeaning: "일본에 가고 싶습니다.",
    level: "N5",
  },
];
