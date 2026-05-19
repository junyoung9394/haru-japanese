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

export const n4Words: JlptWord[] = [
  { word: "駅", reading: "えき", meaning: "역", level: "N4" },
  { word: "空港", reading: "くうこう", meaning: "공항", level: "N4" },
  { word: "病院", reading: "びょういん", meaning: "병원", level: "N4" },
  { word: "薬局", reading: "やっきょく", meaning: "약국", level: "N4" },
  { word: "図書館", reading: "としょかん", meaning: "도서관", level: "N4" },
  { word: "郵便局", reading: "ゆうびんきょく", meaning: "우체국", level: "N4" },
  { word: "銀行", reading: "ぎんこう", meaning: "은행", level: "N4" },
  { word: "交差点", reading: "こうさてん", meaning: "교차로", level: "N4" },
  { word: "信号", reading: "しんごう", meaning: "신호등", level: "N4" },
  { word: "地図", reading: "ちず", meaning: "지도", level: "N4" },
  { word: "旅行", reading: "りょこう", meaning: "여행", level: "N4" },
  { word: "飛行機", reading: "ひこうき", meaning: "비행기", level: "N4" },
  { word: "切符", reading: "きっぷ", meaning: "표", level: "N4" },
  { word: "荷物", reading: "にもつ", meaning: "짐", level: "N4" },
  { word: "部屋", reading: "へや", meaning: "방", level: "N4" },
  { word: "玄関", reading: "げんかん", meaning: "현관", level: "N4" },
  { word: "台所", reading: "だいどころ", meaning: "부엌", level: "N4" },
  { word: "風呂", reading: "ふろ", meaning: "욕조/목욕", level: "N4" },
  { word: "掃除", reading: "そうじ", meaning: "청소", level: "N4" },
  { word: "洗濯", reading: "せんたく", meaning: "세탁", level: "N4" },
  { word: "料理", reading: "りょうり", meaning: "요리", level: "N4" },
  { word: "買い物", reading: "かいもの", meaning: "쇼핑", level: "N4" },
  { word: "値段", reading: "ねだん", meaning: "가격", level: "N4" },
  { word: "安い", reading: "やすい", meaning: "싸다", level: "N4" },
  { word: "高い", reading: "たかい", meaning: "비싸다/높다", level: "N4" },
  { word: "便利", reading: "べんり", meaning: "편리하다", level: "N4" },
  { word: "大切", reading: "たいせつ", meaning: "소중하다", level: "N4" },
  { word: "有名", reading: "ゆうめい", meaning: "유명하다", level: "N4" },
  { word: "丁寧", reading: "ていねい", meaning: "정중하다", level: "N4" },
  { word: "練習", reading: "れんしゅう", meaning: "연습", level: "N4" },
  { word: "試験", reading: "しけん", meaning: "시험", level: "N4" },
  { word: "授業", reading: "じゅぎょう", meaning: "수업", level: "N4" },
  { word: "宿題", reading: "しゅくだい", meaning: "숙제", level: "N4" },
  { word: "卒業", reading: "そつぎょう", meaning: "졸업", level: "N4" },
  { word: "会議", reading: "かいぎ", meaning: "회의", level: "N4" },
];

export const n4Grammar: JlptGrammar[] = [
  {
    pattern: "〜ている",
    meaning: "~하고 있다 (진행/상태)",
    example: "今、ご飯を食べています。",
    exampleMeaning: "지금 밥을 먹고 있습니다.",
    level: "N4",
  },
  {
    pattern: "〜てから",
    meaning: "~하고 나서",
    example: "宿題をしてから、ゲームをします。",
    exampleMeaning: "숙제를 하고 나서 게임을 합니다.",
    level: "N4",
  },
  {
    pattern: "〜たことがある",
    meaning: "~한 적이 있다",
    example: "日本に行ったことがあります。",
    exampleMeaning: "일본에 간 적이 있습니다.",
    level: "N4",
  },
  {
    pattern: "〜なければならない",
    meaning: "~하지 않으면 안 된다",
    example: "毎日勉強しなければなりません。",
    exampleMeaning: "매일 공부하지 않으면 안 됩니다.",
    level: "N4",
  },
  {
    pattern: "〜てもいい",
    meaning: "~해도 된다",
    example: "ここに座ってもいいですか。",
    exampleMeaning: "여기에 앉아도 됩니까?",
    level: "N4",
  },
  {
    pattern: "〜てはいけない",
    meaning: "~하면 안 된다",
    example: "ここで写真を撮ってはいけません。",
    exampleMeaning: "여기서 사진을 찍으면 안 됩니다.",
    level: "N4",
  },
  {
    pattern: "〜ようにする",
    meaning: "~하도록 하다",
    example: "毎日運動するようにしています。",
    exampleMeaning: "매일 운동하도록 하고 있습니다.",
    level: "N4",
  },
  {
    pattern: "〜そうだ",
    meaning: "~할 것 같다 (추측/전문)",
    example: "明日は雨が降りそうです。",
    exampleMeaning: "내일은 비가 올 것 같습니다.",
    level: "N4",
  },
  {
    pattern: "〜と思う",
    meaning: "~라고 생각하다",
    example: "彼は優しい人だと思います。",
    exampleMeaning: "그는 친절한 사람이라고 생각합니다.",
    level: "N4",
  },
  {
    pattern: "〜すぎる",
    meaning: "너무 ~하다",
    example: "この料理は辛すぎます。",
    exampleMeaning: "이 요리는 너무 맵습니다.",
    level: "N4",
  },
  {
    pattern: "〜やすい / 〜にくい",
    meaning: "~하기 쉽다 / ~하기 어렵다",
    example: "この本は読みやすいです。",
    exampleMeaning: "이 책은 읽기 쉽습니다.",
    level: "N4",
  },
  {
    pattern: "〜んです / 〜のです",
    meaning: "~인 것입니다 (설명·이유)",
    example: "どうして遅れたんですか。",
    exampleMeaning: "왜 늦은 것입니까?",
    level: "N4",
  },
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
