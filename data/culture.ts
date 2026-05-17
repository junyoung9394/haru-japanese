export type CultureItem = {
  title: string;
  slug: string;
  description: string;
  category: "예절" | "음식" | "교통" | "생활" | "여행";
  expression?: string;
  expressionMeaning?: string;
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
  },
  {
    title: "일본 편의점 문화",
    slug: "japanese-convenience-store",
    description:
      "일본 편의점은 단순한 쇼핑 공간이 아닙니다. 도시락 주문, ATM, 공공요금 납부까지 가능한 생활 허브입니다. 점원에게 말하는 기본 표현을 익혀보세요.",
    category: "생활",
    expression: "温めますか？",
    expressionMeaning: "데워 드릴까요?",
  },
  {
    title: "일본 식당 주문 문화",
    slug: "japanese-restaurant",
    description:
      "일본 식당에서 자리 안내부터 주문, 계산까지 흐름과 표현을 익혀두면 여행이 한결 편해집니다. '이라샤이마세'의 의미도 함께 알아보세요.",
    category: "음식",
    expression: "いらっしゃいませ",
    expressionMeaning: "어서 오세요",
  },
  {
    title: "일본 온천 예절",
    slug: "japanese-onsen",
    description:
      "온천(오센)은 일본 여행의 백미입니다. 몸을 씻고 들어가기, 수건을 물에 담그지 않기 등 기본 예절을 알아두세요.",
    category: "여행",
    expression: "お風呂に入る",
    expressionMeaning: "목욕하다",
  },
  {
    title: "일본 지하철 매너",
    slug: "japanese-train-manner",
    description:
      "일본 지하철에서는 통화 자제, 큰 소리 금지, 우선석 배려가 기본입니다. 역 안내 방송에서 자주 들리는 표현도 정리했습니다.",
    category: "교통",
    expression: "優先席",
    expressionMeaning: "우선석(경로석)",
  },
];
