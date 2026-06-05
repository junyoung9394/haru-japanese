"use client";

import { useState, useCallback } from "react";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";
import { n4Words } from "@/data/jlpt";

type Category = "hiragana" | "katakana" | "jlpt" | "n4";
type Phase = "start" | "quiz" | "mid_ad" | "result" | "done_today";

type QuizItem = { display: string; answer: string; reading?: string };
type Question = { question: string; correct: string; choices: string[]; reading?: string };

const n4QuizItems: QuizItem[] = n4Words.map((w) => ({
  display: w.meaning,
  answer: w.word,
  reading: w.reading,
}));

const quizData: Record<Category, QuizItem[]> = {
  hiragana: [
    { display: "あ", answer: "a" },
    { display: "い", answer: "i" },
    { display: "う", answer: "u" },
    { display: "え", answer: "e" },
    { display: "お", answer: "o" },
    { display: "か", answer: "ka" },
    { display: "き", answer: "ki" },
    { display: "く", answer: "ku" },
    { display: "け", answer: "ke" },
    { display: "こ", answer: "ko" },
    { display: "さ", answer: "sa" },
    { display: "し", answer: "shi" },
    { display: "す", answer: "su" },
    { display: "せ", answer: "se" },
    { display: "そ", answer: "so" },
    { display: "た", answer: "ta" },
    { display: "ち", answer: "chi" },
    { display: "つ", answer: "tsu" },
    { display: "て", answer: "te" },
    { display: "と", answer: "to" },
    { display: "な", answer: "na" },
    { display: "に", answer: "ni" },
    { display: "ぬ", answer: "nu" },
    { display: "ね", answer: "ne" },
    { display: "の", answer: "no" },
    { display: "は", answer: "ha" },
    { display: "ひ", answer: "hi" },
    { display: "ふ", answer: "fu" },
    { display: "へ", answer: "he" },
    { display: "ほ", answer: "ho" },
    { display: "ま", answer: "ma" },
    { display: "み", answer: "mi" },
    { display: "む", answer: "mu" },
    { display: "め", answer: "me" },
    { display: "も", answer: "mo" },
    { display: "や", answer: "ya" },
    { display: "ゆ", answer: "yu" },
    { display: "よ", answer: "yo" },
    { display: "ら", answer: "ra" },
    { display: "り", answer: "ri" },
    { display: "る", answer: "ru" },
    { display: "れ", answer: "re" },
    { display: "ろ", answer: "ro" },
    { display: "わ", answer: "wa" },
    { display: "を", answer: "wo" },
    { display: "ん", answer: "n" },
  ],
  katakana: [
    { display: "ア", answer: "a" },
    { display: "イ", answer: "i" },
    { display: "ウ", answer: "u" },
    { display: "エ", answer: "e" },
    { display: "オ", answer: "o" },
    { display: "カ", answer: "ka" },
    { display: "キ", answer: "ki" },
    { display: "ク", answer: "ku" },
    { display: "ケ", answer: "ke" },
    { display: "コ", answer: "ko" },
    { display: "サ", answer: "sa" },
    { display: "シ", answer: "shi" },
    { display: "ス", answer: "su" },
    { display: "セ", answer: "se" },
    { display: "ソ", answer: "so" },
    { display: "タ", answer: "ta" },
    { display: "チ", answer: "chi" },
    { display: "ツ", answer: "tsu" },
    { display: "テ", answer: "te" },
    { display: "ト", answer: "to" },
    { display: "ナ", answer: "na" },
    { display: "ニ", answer: "ni" },
    { display: "ヌ", answer: "nu" },
    { display: "ネ", answer: "ne" },
    { display: "ノ", answer: "no" },
    { display: "ハ", answer: "ha" },
    { display: "ヒ", answer: "hi" },
    { display: "フ", answer: "fu" },
    { display: "ヘ", answer: "he" },
    { display: "ホ", answer: "ho" },
    { display: "マ", answer: "ma" },
    { display: "ミ", answer: "mi" },
    { display: "ム", answer: "mu" },
    { display: "メ", answer: "me" },
    { display: "モ", answer: "mo" },
    { display: "ヤ", answer: "ya" },
    { display: "ユ", answer: "yu" },
    { display: "ヨ", answer: "yo" },
    { display: "ラ", answer: "ra" },
    { display: "リ", answer: "ri" },
    { display: "ル", answer: "ru" },
    { display: "レ", answer: "re" },
    { display: "ロ", answer: "ro" },
    { display: "ワ", answer: "wa" },
    { display: "ヲ", answer: "wo" },
    { display: "ン", answer: "n" },
  ],
  n4: n4QuizItems,
  jlpt: [
    { display: "물", answer: "水", reading: "みず" },
    { display: "산", answer: "山", reading: "やま" },
    { display: "강", answer: "川", reading: "かわ" },
    { display: "하늘", answer: "空", reading: "そら" },
    { display: "꽃", answer: "花", reading: "はな" },
    { display: "나무", answer: "木", reading: "き" },
    { display: "물고기", answer: "魚", reading: "さかな" },
    { display: "개", answer: "犬", reading: "いぬ" },
    { display: "고양이", answer: "猫", reading: "ねこ" },
    { display: "학교", answer: "学校", reading: "がっこう" },
    { display: "선생님", answer: "先生", reading: "せんせい" },
    { display: "친구", answer: "友達", reading: "ともだち" },
    { display: "집", answer: "家", reading: "いえ" },
    { display: "전철", answer: "電車", reading: "でんしゃ" },
    { display: "음식", answer: "食べ物", reading: "たべもの" },
    { display: "책", answer: "本", reading: "ほん" },
    { display: "날씨", answer: "天気", reading: "てんき" },
    { display: "시간", answer: "時間", reading: "じかん" },
    { display: "돈", answer: "お金", reading: "おかね" },
    { display: "사람", answer: "人", reading: "ひと" },
  ],
};

const categoryLabels: Record<Category, string> = {
  hiragana: "히라가나",
  katakana: "가타카나",
  jlpt: "N5 단어",
  n4: "N4 단어",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function storageKey(cat: Category) {
  return `haru_quiz_${getToday()}_${cat}`;
}

function generateQuestions(data: QuizItem[]): Question[] {
  const selected = shuffle(data).slice(0, 10);
  const allAnswers = data.map((d) => d.answer);
  return selected.map((item) => {
    const wrongs = shuffle(allAnswers.filter((a) => a !== item.answer)).slice(0, 3);
    return {
      question: item.display,
      correct: item.answer,
      choices: shuffle([item.answer, ...wrongs]),
      reading: item.reading,
    };
  });
}

export default function QuizClient() {
  const [category, setCategory] = useState<Category>("hiragana");
  const [phase, setPhase] = useState<Phase>("start");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [savedScore, setSavedScore] = useState(0);

  const handleTabClick = useCallback((cat: Category) => {
    setCategory(cat);
    setPhase("start");
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, []);

  const startQuiz = useCallback((cat: Category) => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(storageKey(cat)) : null;
    if (saved) {
      const data = JSON.parse(saved);
      setSavedScore(data.score);
      setPhase("done_today");
      return;
    }
    const qs = generateQuestions(quizData[cat]);
    setQuestions(qs);
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setPhase("quiz");
  }, []);

  const handleAnswer = useCallback(
    (answer: string) => {
      if (selectedAnswer !== null) return;
      const isCorrect = answer === questions[currentIdx]?.correct;
      const newScore = score + (isCorrect ? 1 : 0);
      setSelectedAnswer(answer);
      setScore(newScore);
      setShowExplanation(true);

      if (currentIdx === 9) {
        localStorage.setItem(
          storageKey(category),
          JSON.stringify({ category, score: newScore, completed: true })
        );
      }
    },
    [selectedAnswer, questions, currentIdx, score, category]
  );

  const handleNext = useCallback(() => {
    setShowExplanation(false);
    setSelectedAnswer(null);

    if (currentIdx === 4) {
      setPhase("mid_ad");
      setTimeout(() => {
        setPhase("quiz");
        setCurrentIdx(5);
      }, 2500);
    } else if (currentIdx === 9) {
      setPhase("result");
    } else {
      setCurrentIdx((i) => i + 1);
    }
  }, [currentIdx]);

  const currentQuestion = questions[currentIdx];
  const isCorrect = selectedAnswer !== null && selectedAnswer === currentQuestion?.correct;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Category tabs */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {(["hiragana", "katakana", "jlpt", "n4"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => handleTabClick(cat)}
            className={`flex-1 py-2 px-3 rounded-xl font-semibold text-sm transition-colors ${
              category === cat
                ? "bg-rose-600 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:border-rose-300"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Start screen */}
      {phase === "start" && (
        <div className="text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-4">
            <p className="text-4xl" aria-hidden="true">🧩</p>
            <h2 className="text-xl font-bold text-gray-800">{categoryLabels[category]} 퀴즈</h2>
            <p className="text-gray-600 text-sm">
              {category === "jlpt" || category === "n4"
                ? "한국어 뜻을 보고 올바른 일본어 단어를 골라보세요."
                : `${categoryLabels[category]} 문자를 보고 올바른 발음을 골라보세요.`}
              <br />랜덤 10문제 · 4지선다
            </p>
            <button
              onClick={() => startQuiz(category)}
              className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors"
            >
              퀴즈 시작하기
            </button>
          </div>
        </div>
      )}

      {/* Quiz screen */}
      {phase === "quiz" && currentQuestion && (
        <div className="space-y-5">
          {/* Progress */}
          <div className="flex items-center justify-between text-sm font-medium">
            <span className="text-gray-500">{currentIdx + 1} / 10</span>
            <span className="text-rose-600">점수: {score}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-rose-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / 10) * 100}%` }}
            />
          </div>

          {/* Question */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-5xl font-bold text-gray-800">{currentQuestion.question}</p>
          </div>

          {/* Choices */}
          <div className="grid grid-cols-2 gap-3">
            {currentQuestion.choices.map((choice) => {
              let cls = "bg-white border-2 border-gray-200 text-gray-700 hover:border-rose-300";
              if (selectedAnswer !== null) {
                if (choice === currentQuestion.correct) {
                  cls = "bg-green-500 border-2 border-green-500 text-white";
                } else if (choice === selectedAnswer) {
                  cls = "bg-red-500 border-2 border-red-500 text-white";
                } else {
                  cls = "bg-white border-2 border-gray-200 text-gray-300";
                }
              }
              return (
                <button
                  key={choice}
                  onClick={() => handleAnswer(choice)}
                  disabled={selectedAnswer !== null}
                  className={`py-4 px-4 rounded-xl font-semibold text-lg transition-colors ${cls}`}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {/* Explanation panel */}
          {showExplanation && (
            <div
              className={`rounded-2xl p-5 border-2 space-y-3 ${
                isCorrect
                  ? "bg-green-50 border-green-300"
                  : "bg-red-50 border-red-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{isCorrect ? "🎉" : "😅"}</span>
                <span className={`font-bold text-lg ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                  {isCorrect ? "정답!" : "오답!"}
                </span>
              </div>
              <div className="bg-white rounded-xl p-4 space-y-1">
                <p className="text-sm text-gray-500">정답</p>
                <p className="text-2xl font-bold text-gray-800">{currentQuestion.correct}</p>
                {currentQuestion.reading && (
                  <p className="text-rose-600 font-medium">{currentQuestion.reading}</p>
                )}
                {!isCorrect && (
                  <p className="text-sm text-gray-600 mt-1">
                    선택한 답: <span className="font-medium text-red-600">{selectedAnswer}</span>
                  </p>
                )}
              </div>
              <button
                onClick={handleNext}
                className="w-full bg-rose-600 text-white py-3 rounded-xl font-semibold hover:bg-rose-700 transition-colors"
              >
                {currentIdx === 9 ? "결과 보기" : "다음 문제 →"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mid-quiz ad */}
      {phase === "mid_ad" && (
        <div className="text-center space-y-4">
          <p className="text-gray-500 text-sm">5문제 완료! 잠시 후 계속됩니다...</p>
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <p className="text-sm text-gray-500 mb-2">현재 점수: <span className="font-bold text-rose-600">{score} / 5</span></p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-rose-500 h-2 rounded-full" style={{ width: "50%" }} />
            </div>
          </div>
          <AdBanner slotId={AD_SLOTS.quiz_between} variant="quiz" />
        </div>
      )}

      {/* Result screen */}
      {phase === "result" && (
        <div className="space-y-6">
          <AdBanner slotId={AD_SLOTS.quiz_between} variant="quiz" />
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center space-y-4">
            <p className="text-4xl">
              {score >= 9 ? "🏆" : score >= 7 ? "🎉" : score >= 5 ? "👍" : "📚"}
            </p>
            <h2 className="text-2xl font-bold text-gray-800">{score} / 10</h2>
            <p className="text-gray-600">
              {score >= 9
                ? "완벽해요! 정말 잘하셨어요!"
                : score >= 7
                ? "잘하셨어요!"
                : score >= 5
                ? "조금 더 연습해봐요!"
                : "다시 한 번 도전해보세요!"}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => {
                  if (typeof window !== "undefined") localStorage.removeItem(storageKey(category));
                  startQuiz(category);
                }}
                className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors"
              >
                다시 풀기
              </button>
              {category !== "jlpt" && (
                <button
                  onClick={() => handleTabClick("jlpt")}
                  className="border border-rose-600 text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors"
                >
                  N5 단어 도전하기
                </button>
              )}
              {category === "jlpt" && (
                <button
                  onClick={() => handleTabClick("n4")}
                  className="border border-rose-600 text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors"
                >
                  N4 단어 도전하기
                </button>
              )}
            </div>
          </div>
          <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />
        </div>
      )}

      {/* Already done today */}
      {phase === "done_today" && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center space-y-4">
            <p className="text-4xl">✅</p>
            <h2 className="text-xl font-bold text-gray-800">오늘의 퀴즈 완료!</h2>
            <p className="text-3xl font-bold text-rose-600">{savedScore} / 10</p>
            <p className="text-gray-500 text-sm">내일 또 도전하세요 🌸</p>
            <button
              onClick={() => {
                if (typeof window !== "undefined") localStorage.removeItem(storageKey(category));
                startQuiz(category);
              }}
              className="border border-rose-600 text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors text-sm"
            >
              다시 풀기
            </button>
          </div>
          <AdBanner slotId={AD_SLOTS.content_bottom} variant="banner" />
        </div>
      )}
    </div>
  );
}
