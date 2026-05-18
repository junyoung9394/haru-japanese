export type CultureExpression = {
  japanese: string;
  reading: string;
  meaning: string;
};

export type CultureSection = {
  heading: string;
  body: string;
};

export type CultureItem = {
  title: string;
  slug: string;
  description: string;
  category: "예절" | "음식" | "교통" | "생활" | "여행" | "축제" | "전통";
  expression?: string;
  expressionMeaning?: string;
  expressions?: CultureExpression[];
  sections?: CultureSection[];
  tips?: string[];
};

export const cultureItems: CultureItem[] = [
  {
    title: "일본 인사 문화",
    slug: "japanese-greeting",
    description:
      "일본에서는 상황과 관계에 따라 인사말과 절하는 각도가 다릅니다. 기본 인사인 'よろしくおねがいします'부터 상황별 표현을 알아보세요.",
    category: "예절",
    expression: "よろしくおねがいします",
    expressionMeaning: "잘 부탁드립니다",
    expressions: [
      { japanese: "おはようございます", reading: "ohayou gozaimasu", meaning: "좋은 아침입니다" },
      { japanese: "こんにちは", reading: "konnichiwa", meaning: "안녕하세요 (낮)" },
      { japanese: "こんばんは", reading: "konbanwa", meaning: "안녕하세요 (저녁)" },
      { japanese: "よろしくおねがいします", reading: "yoroshiku onegaishimasu", meaning: "잘 부탁드립니다" },
      { japanese: "おじゃまします", reading: "ojama shimasu", meaning: "실례합니다 (집 방문 시)" },
    ],
    sections: [
      {
        heading: "절하는 각도",
        body: "일본의 인사는 절(お辞儀, おじぎ)이 기본입니다. 가볍게 15도 고개를 숙이는 것은 일상적인 인사, 30도는 일반적인 감사나 부탁, 45도 이상은 깊은 사과나 경의를 표할 때 사용합니다. 비즈니스 자리에서는 상대방보다 더 깊이 절하는 것이 예의입니다.",
      },
      {
        heading: "처음 만날 때",
        body: "처음 만나는 사람에게는 'はじめまして(hajimemashite, 처음 뵙겠습니다)'라고 말하고 이름을 소개합니다. 명함(名刺, めいし)을 두 손으로 건네고 받는 것도 중요한 예절입니다. 받은 명함은 즉시 주머니에 넣지 않고 잠시 테이블 위에 올려두는 것이 예의입니다.",
      },
      {
        heading: "집을 방문할 때",
        body: "일본 가정에 방문할 때는 현관에서 'おじゃまします'라고 말하고 신발을 가지런히 벗어둡니다. 방문 선물(手土産, てみやげ)을 가져가는 것이 관례이며, 선물은 두 손으로 건넵니다.",
      },
    ],
    tips: [
      "절할 때 시선은 아래를 향하는 것이 자연스럽습니다.",
      "악수는 서양 문화권 사람과 만날 때 적절합니다.",
      "'すみません(sumimasen)'은 '저기요', '실례합니다', '죄송합니다' 등 다양하게 활용됩니다.",
    ],
  },
  {
    title: "일본 편의점 문화",
    slug: "japanese-convenience-store",
    description:
      "일본 편의점은 단순한 쇼핑 공간이 아닙니다. 도시락 주문, ATM, 공공요금 납부까지 가능한 생활 허브입니다.",
    category: "생활",
    expression: "温めますか？",
    expressionMeaning: "데워 드릴까요?",
    expressions: [
      { japanese: "温めますか？", reading: "atatame masu ka?", meaning: "데워 드릴까요?" },
      { japanese: "袋はご利用ですか？", reading: "fukuro wa goriyou desu ka?", meaning: "봉투가 필요하신가요?" },
      { japanese: "ポイントカードはお持ちですか？", reading: "pointo kaado wa omochi desu ka?", meaning: "포인트 카드 있으신가요?" },
      { japanese: "レジ袋をください", reading: "rejibukuro wo kudasai", meaning: "비닐봉투 주세요" },
    ],
    sections: [
      {
        heading: "편의점에서 할 수 있는 것들",
        body: "일본 편의점(コンビニ)은 24시간 운영되며 음식, 음료 외에도 ATM 이용, 택배 발송·수령, 공공요금(전기·가스·수도) 납부, 티켓 구매, 복사·인쇄, 여권사진 촬영까지 가능합니다. 세븐일레븐, 패밀리마트, 로손이 3대 편의점입니다.",
      },
      {
        heading: "편의점 음식 문화",
        body: "일본 편의점 도시락(お弁当)과 삼각김밥(おにぎり)은 수준 높은 맛으로 유명합니다. 계산대에서 '데워 드릴까요?(温めますか?)'라고 묻는 경우가 많으며, 데워달라고 할 때는 'お願いします(onegaishimasu)'라고 하면 됩니다.",
      },
    ],
    tips: [
      "봉투는 유료(약 3~5엔)이므로 필요 없으면 '결構です(kekkou desu, 괜찮습니다)'라고 하세요.",
      "ATM에서 해외 카드도 대부분 사용 가능합니다 (세븐일레븐 ATM 추천).",
      "화장실은 무료로 이용 가능하며 대부분 청결합니다.",
    ],
  },
  {
    title: "일본 식당 주문 문화",
    slug: "japanese-restaurant",
    description:
      "일본 식당에서 자리 안내부터 주문, 계산까지 흐름과 표현을 익혀두면 여행이 한결 편해집니다.",
    category: "음식",
    expression: "いらっしゃいませ",
    expressionMeaning: "어서 오세요",
    expressions: [
      { japanese: "いらっしゃいませ", reading: "irasshaimase", meaning: "어서 오세요" },
      { japanese: "何名様ですか？", reading: "nanmei sama desu ka?", meaning: "몇 분이세요?" },
      { japanese: "これをください", reading: "kore wo kudasai", meaning: "이것을 주세요" },
      { japanese: "お会計をお願いします", reading: "okaikei wo onegaishimasu", meaning: "계산서 주세요" },
      { japanese: "ごちそうさまでした", reading: "gochisousama deshita", meaning: "잘 먹었습니다" },
    ],
    sections: [
      {
        heading: "입장부터 착석까지",
        body: "일본 식당에 들어서면 점원이 'いらっしゃいませ'라고 외칩니다. 인원수를 묻는 'お一人様ですか?(혼자세요?)'나 '何名様?(몇 분이세요?)'에 숫자로 답하면 됩니다. 자리를 직접 고르는 곳도 있고 안내해주는 곳도 있습니다.",
      },
      {
        heading: "주문하기",
        body: "물과 물수건(おしぼり)은 대부분 무료로 제공됩니다. 점원을 부를 때는 손을 들고 'すみません'이라고 하거나 테이블 버저를 누릅니다. 메뉴를 가리키며 'これをください'라고 하면 주문이 됩니다. 사진 메뉴가 있는 식당이 많아 언어 장벽이 낮습니다.",
      },
      {
        heading: "계산하기",
        body: "일본에서는 테이블에서 계산하지 않고 계산대(レジ)로 가거나, 점원에게 'お会計をお願いします'라고 요청합니다. 팁 문화가 없으므로 표기된 금액만 내면 됩니다. 현금과 카드 모두 사용 가능하지만 소규모 식당은 현금만 받는 경우도 있습니다.",
      },
    ],
    tips: [
      "런치 세트(ランチセット)는 저렴하고 양이 많아 강력 추천합니다.",
      "'食べ放題(tabehoudai)'는 무한리필, '飲み放題(nomihoudai)'는 무한주문입니다.",
      "라멘집 등 일부 식당은 자판기로 주문하는 시스템을 운영합니다.",
    ],
  },
  {
    title: "일본 온천 예절",
    slug: "japanese-onsen",
    description:
      "온천(오센)은 일본 여행의 백미입니다. 몸을 씻고 들어가기, 수건을 물에 담그지 않기 등 기본 예절을 알아두세요.",
    category: "여행",
    expression: "お風呂に入る",
    expressionMeaning: "목욕하다",
    expressions: [
      { japanese: "温泉", reading: "onsen", meaning: "온천" },
      { japanese: "露天風呂", reading: "rotenburo", meaning: "노천탕" },
      { japanese: "かけ湯", reading: "kakeyu", meaning: "몸을 씻고 들어가기 전 뿌리는 물" },
      { japanese: "脱衣所", reading: "datsuijyo", meaning: "탈의실" },
    ],
    sections: [
      {
        heading: "온천 입욕 순서",
        body: "탈의실(脱衣所)에서 옷을 벗고 큰 수건은 바구니에 두고 작은 수건만 가지고 들어갑니다. 욕조에 들어가기 전 반드시 샤워 공간에서 몸을 씻어야 합니다. 한두 바가지 물을 몸에 끼얹는 '가케유(かけ湯)'도 기본 예절입니다.",
      },
      {
        heading: "주의사항",
        body: "작은 수건을 물에 담그거나 욕조 안에 넣으면 안 됩니다. 머리카락이 긴 경우 물에 닿지 않도록 올려 묶어야 합니다. 문신(タトゥー)이 있는 경우 입장이 거부될 수 있으므로 사전에 확인이 필요합니다. 음주 후 입욕은 위험하므로 삼가세요.",
      },
      {
        heading: "노천탕(露天風呂)",
        body: "외부에 위치한 노천탕은 일본 온천의 하이라이트입니다. 계절에 따라 설경, 단풍 등 자연 경관을 감상하며 온천을 즐길 수 있습니다.",
      },
    ],
    tips: [
      "온천 후 수분 보충을 잊지 마세요.",
      "온천 온도는 40~42도가 일반적이며, 처음에는 낮은 온도 욕조부터 시작하세요.",
      "료칸(旅館)에서는 유카타를 입고 온천에 다녀와도 됩니다.",
    ],
  },
  {
    title: "일본 지하철 매너",
    slug: "japanese-train-manner",
    description:
      "일본 지하철에서는 통화 자제, 큰 소리 금지, 우선석 배려가 기본입니다. 역 안내 방송에서 자주 들리는 표현도 정리했습니다.",
    category: "교통",
    expression: "優先席",
    expressionMeaning: "우선석(경로석)",
    expressions: [
      { japanese: "次は〜駅です", reading: "tsugi wa ~ eki desu", meaning: "다음은 ~ 역입니다" },
      { japanese: "乗り換え", reading: "norikae", meaning: "환승" },
      { japanese: "終点", reading: "shuuten", meaning: "종점" },
      { japanese: "ドアが閉まります", reading: "doa ga shimarimasu", meaning: "문이 닫힙니다" },
    ],
    sections: [
      {
        heading: "지하철 이용 기본 매너",
        body: "일본 지하철에서는 통화를 자제하고, 통화 시에는 작은 소리로 짧게 마칩니다. 음악은 이어폰으로 듣고, 큰 소리로 대화하는 것도 삼가야 합니다. 우선석(優先席) 근처에서는 휴대폰을 비행기 모드로 설정하는 것이 예절입니다.",
      },
      {
        heading: "승하차 예절",
        body: "승강장에서는 노란 점선 안쪽에서 대기하며, 내리는 사람이 다 내린 후 탑승합니다. 배낭이나 큰 짐은 선반 위에 올리거나 발 사이에 두는 것이 예의입니다. 러시아워(朝のラッシュ)에는 혼잡도가 매우 높으니 주의가 필요합니다.",
      },
    ],
    tips: [
      "IC 카드(Suica, PASMO)를 구매하면 환승이 편리합니다.",
      "Google 지도에서 일본 지하철 경로 검색이 잘 됩니다.",
      "막차(終電, しゅうでん) 시간을 미리 확인하세요. 보통 자정~오전 1시경 종료됩니다.",
    ],
  },
  {
    title: "일본 마츠리(祭り) 문화",
    slug: "japanese-matsuri",
    description:
      "마츠리는 일본의 전통 축제입니다. 신사에서 열리는 종교적 행사에서 출발해 지역 공동체 축제로 발전했으며, 유카타를 입고 참여하는 여름 마츠리가 특히 유명합니다.",
    category: "축제",
    expression: "お祭り",
    expressionMeaning: "축제",
    expressions: [
      { japanese: "お祭り", reading: "omatsuri", meaning: "축제" },
      { japanese: "神輿", reading: "mikoshi", meaning: "신을 모시는 가마" },
      { japanese: "浴衣", reading: "yukata", meaning: "유카타 (여름 전통 의상)" },
      { japanese: "花火", reading: "hanabi", meaning: "불꽃놀이" },
      { japanese: "屋台", reading: "yatai", meaning: "노점" },
    ],
    sections: [
      {
        heading: "마츠리란?",
        body: "마츠리(祭り)는 신사(神社)나 절(お寺)의 신령을 기리는 의식에서 비롯된 일본 전통 축제입니다. 지역마다 고유한 마츠리가 있으며, 일본 전국에서 연간 수백 개가 열립니다. 신을 모신 가마(神輿, みこし)를 여럿이 메고 동네를 행진하는 모습이 전형적인 마츠리 풍경입니다.",
      },
      {
        heading: "여름 마츠리와 불꽃놀이",
        body: "7~8월은 마츠리의 계절입니다. 유카타(浴衣)를 입고 노점(屋台)에서 다코야키, 야키소바, 금붕어잡기 등을 즐깁니다. 마츠리 마지막 날 밤에는 대부분 불꽃놀이(花火大会)가 열립니다. 도쿄의 스미다가와 불꽃놀이, 오사카의 텐진마츠리가 3대 마츠리에 속합니다.",
      },
      {
        heading: "일본 3대 마츠리",
        body: "일본 3대 마츠리는 교토 기온마츠리(祇園祭, 7월), 오사카 텐진마츠리(天神祭, 7월), 도쿄 간다마츠리(神田祭, 5월)입니다. 기온마츠리는 1100년 이상의 역사를 가지며 야마호코 행렬로 유명합니다. 유네스코 무형문화유산에 등재되어 있습니다.",
      },
      {
        heading: "마츠리 음식(屋台)",
        body: "노점(屋台)은 마츠리의 빠질 수 없는 요소입니다. 타코야키(たこ焼き), 야키소바(焼きそば), 카키고오리(かき氷, 빙수), 린고아메(りんご飴, 사과 사탕), 초코바나나(チョコバナナ) 등이 대표 먹거리입니다.",
      },
    ],
    tips: [
      "유카타는 대여 서비스(浴衣レンタル)를 이용하면 편리합니다.",
      "마츠리 당일은 혼잡하므로 대중교통 이용을 권장합니다.",
      "'わっしょい(wasshoi)'는 가마를 메고 행진할 때 외치는 구호입니다.",
    ],
  },
  {
    title: "하나미(花見) — 일본 벚꽃놀이 문화",
    slug: "japanese-hanami",
    description:
      "하나미는 벚꽃(桜) 아래에서 꽃구경을 즐기는 일본의 대표 봄 문화입니다. 매년 3~4월 전국의 공원이 돗자리를 깐 인파로 가득 찹니다.",
    category: "축제",
    expression: "花見",
    expressionMeaning: "꽃구경 (하나미)",
    expressions: [
      { japanese: "花見", reading: "hanami", meaning: "꽃구경" },
      { japanese: "桜", reading: "sakura", meaning: "벚꽃" },
      { japanese: "満開", reading: "mankai", meaning: "만개 (활짝 핀 상태)" },
      { japanese: "花見酒", reading: "hanami zake", meaning: "꽃놀이 술" },
      { japanese: "散る", reading: "chiru", meaning: "(꽃이) 지다" },
    ],
    sections: [
      {
        heading: "하나미 문화",
        body: "하나미(花見)는 '꽃을 본다'는 뜻으로, 주로 벚꽃(桜) 시즌인 3월 말~4월 초에 즐기는 봄 행사입니다. 공원이나 강변에 돗자리를 펼치고 도시락과 음료를 즐기며 꽃을 감상합니다. 회사 동료나 친구, 가족과 함께 하는 연례 행사로 자리 잡혀 있습니다.",
      },
      {
        heading: "벚꽃 개화 예보",
        body: "일본 기상청과 민간 기상업체에서 매년 '벚꽃 개화 예보(桜の開花予報)'를 발표합니다. 규슈 남부에서 시작해 북쪽으로 올라오는 '벚꽃 전선(桜前線)'은 TV 뉴스에서도 매일 다뤄집니다. 만개(満開) 상태는 개화 후 약 1~2주이므로 일정을 잘 맞춰야 합니다.",
      },
      {
        heading: "유명 하나미 명소",
        body: "도쿄의 우에노 공원(上野公園), 신주쿠 교엔(新宿御苑), 메구로강(目黒川)이 대표적입니다. 교토에서는 마루야마 공원(円山公園)과 게아게 인클라인(蹴上インクライン)이 유명합니다. 요시노 산(吉野山, 나라현)은 3000그루 이상의 벚나무로 장관을 이룹니다.",
      },
    ],
    tips: [
      "하나미 인기 명소는 1~2주 전부터 자리 경쟁이 시작됩니다.",
      "일본 편의점에서 도시락, 맥주, 돗자리를 모두 구매할 수 있습니다.",
      "밤 벚꽃(夜桜, よざくら) 감상도 별미입니다. 조명이 설치된 명소를 찾아보세요.",
    ],
  },
  {
    title: "오봉(お盆) — 일본 조상 추모 명절",
    slug: "japanese-obon",
    description:
      "오봉은 매년 8월 중순 조상의 영혼을 맞이하고 보내는 일본의 전통 명절입니다. 한국의 추석과 비슷한 개념으로, 귀성 행렬과 봉오도리 춤이 대표적입니다.",
    category: "전통",
    expression: "お盆",
    expressionMeaning: "오봉 (조상 추모 명절)",
    expressions: [
      { japanese: "お盆", reading: "obon", meaning: "오봉 (명절)" },
      { japanese: "帰省", reading: "kisei", meaning: "귀성" },
      { japanese: "盆踊り", reading: "bon odori", meaning: "봉오도리 (전통 춤)" },
      { japanese: "迎え火", reading: "mukaebi", meaning: "조상을 맞이하는 불" },
      { japanese: "送り火", reading: "okuribi", meaning: "조상을 보내는 불" },
    ],
    sections: [
      {
        heading: "오봉이란?",
        body: "오봉(お盆)은 매년 8월 13~16일에 거행되는 일본의 전통 명절로, 조상의 영혼이 집으로 돌아온다고 믿어 제사를 지내고 가족이 모이는 기간입니다. 한국의 추석과 유사한 개념입니다. 이 기간 많은 회사가 휴가를 주기 때문에 일본 최대 귀성 시즌이기도 합니다.",
      },
      {
        heading: "봉오도리(盆踊り)",
        body: "오봉 기간에는 지역 공원이나 신사에서 봉오도리(盆踊り)가 열립니다. 북 소리에 맞춰 원을 그리며 추는 전통 춤으로, 유카타를 입고 참여하는 것이 일반적입니다. 지역마다 고유한 춤 스타일이 있으며 누구나 참여할 수 있습니다.",
      },
      {
        heading: "맞이불과 보내는 불",
        body: "8월 13일 저녁에는 '맞이불(迎え火)'을 피워 조상의 영혼을 집으로 안내하고, 16일에는 '보내는 불(送り火)'로 영혼을 저세상으로 돌려보냅니다. 교토의 고잔 오쿠리비(五山送り火)는 다섯 산에 한자 모양으로 불을 밝히는 장대한 행사로 유명합니다.",
      },
    ],
    tips: [
      "오봉 연휴(8월 13~16일)에는 기차, 비행기, 도로 모두 극도로 혼잡합니다.",
      "봉오도리는 관광객도 자유롭게 참여할 수 있습니다.",
      "일부 지역은 양력 7월에 오봉을 치르기도 합니다.",
    ],
  },
  {
    title: "세쓰분(節分) — 콩 던지기로 귀신 쫓기",
    slug: "japanese-setsubun",
    description:
      "세쓰분은 매년 2월 3일 전후 귀신을 쫓고 복을 부르는 일본 전통 행사입니다. '오니와 소토, 후쿠와 우치'를 외치며 콩을 던지는 풍습이 있습니다.",
    category: "전통",
    expression: "鬼は外、福は内",
    expressionMeaning: "귀신은 밖으로, 복은 안으로",
    expressions: [
      { japanese: "節分", reading: "setsubun", meaning: "세쓰분 (입춘 전날)" },
      { japanese: "豆まき", reading: "mamemaki", meaning: "콩 던지기" },
      { japanese: "鬼", reading: "oni", meaning: "귀신, 도깨비" },
      { japanese: "恵方巻き", reading: "ehou maki", meaning: "에호마키 (복을 부르는 김밥)" },
      { japanese: "福", reading: "fuku", meaning: "복" },
    ],
    sections: [
      {
        heading: "세쓰분이란?",
        body: "세쓰분(節分)은 계절의 변화를 앞두고 나쁜 기운을 쫓는 행사입니다. '입춘(立春)' 전날인 2월 3일 전후에 열립니다. 집이나 신사에서 귀신 탈을 쓴 가족을 향해 콩을 던지며 '오니와 소토! 후쿠와 우치!(鬼は外！福は内！)'를 외칩니다.",
      },
      {
        heading: "에호마키(恵方巻き)",
        body: "에호마키는 세쓰분에 먹는 두꺼운 김밥입니다. 그 해의 길한 방향(恵方)을 바라보며 아무 말도 하지 않고 한 번에 다 먹으면 소원이 이루어진다고 합니다. 편의점과 슈퍼에서 다양한 에호마키를 판매합니다.",
      },
      {
        heading: "신사에서의 세쓰분",
        body: "나리타산 신쇼지(成田山新勝寺), 도쿄 아사쿠사(浅草), 교토 요시다 신사(吉田神社) 등 유명 신사에서 대규모 세쓰분 행사가 열립니다. 연예인과 운동선수들이 초청되어 콩을 뿌리는 행사는 TV에도 중계됩니다.",
      },
    ],
    tips: [
      "나이 수만큼 콩을 먹으면 건강하게 지낼 수 있다는 풍습이 있습니다.",
      "에호마키 방향은 매년 달라집니다.",
      "슈퍼나 편의점에서 콩 세트(豆まきセット)를 쉽게 구입할 수 있습니다.",
    ],
  },
  {
    title: "다나바타(七夕) — 소원을 비는 별 축제",
    slug: "japanese-tanabata",
    description:
      "다나바타는 매년 7월 7일 견우와 직녀가 만나는 날을 기념하는 일본 전통 축제입니다. 대나무에 소원을 적은 색종이를 달며 상점가를 화려하게 장식합니다.",
    category: "축제",
    expression: "七夕",
    expressionMeaning: "다나바타 (칠석 축제)",
    expressions: [
      { japanese: "七夕", reading: "tanabata", meaning: "다나바타 (칠석)" },
      { japanese: "短冊", reading: "tanzaku", meaning: "소원을 적는 색종이" },
      { japanese: "笹飾り", reading: "sasa kazari", meaning: "대나무 장식" },
      { japanese: "織姫", reading: "orihime", meaning: "직녀성" },
      { japanese: "彦星", reading: "hikoboshi", meaning: "견우성" },
    ],
    sections: [
      {
        heading: "다나바타 전설",
        body: "다나바타는 중국에서 전해진 견우(彦星)와 직녀(織姫)의 전설에서 유래했습니다. 은하수를 사이에 두고 떨어져 사는 두 별이 1년에 한 번 7월 7일에만 만날 수 있다는 이야기입니다. 일본에서는 소원을 적어 대나무에 다는 문화가 자리 잡혔습니다.",
      },
      {
        heading: "소원 종이(短冊)",
        body: "다나바타에는 색색의 단자쿠(短冊)라는 가늘고 긴 종이에 소원을 적어 대나무(笹) 가지에 답니다. 학교나 상점가, 신사 등 곳곳에 대나무 장식이 등장합니다. 한국의 칠석과 같은 날이지만 방식은 조금 다릅니다.",
      },
      {
        heading: "센다이 다나바타 마츠리",
        body: "미야기현 센다이(仙台)의 다나바타 마츠리는 일본 3대 다나바타 행사 중 하나로, 매년 8월 6~8일에 열립니다. 상점가 아케이드를 수놓는 화려한 대형 장식은 장인들이 1년에 걸쳐 제작합니다. 약 200만 명의 관광객이 방문하는 센다이의 최대 행사입니다.",
      },
    ],
    tips: [
      "소원은 한국어로 적어도 괜찮습니다.",
      "교토 기타노 텐만구(北野天満宮)의 다나바타 행사도 아름답기로 유명합니다.",
      "양력 7월 7일 외에 음력으로 지내는 지역도 있어 8월에 행사가 열리는 곳도 있습니다.",
    ],
  },
];
