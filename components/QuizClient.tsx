"use client";

import { useState, useCallback } from "react";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";

type Category = "hiragana" | "katakana" | "jlpt";
type Phase = "start" | "quiz" | "mid_ad" | "result" | "done_today";

type QuizItem = { display: string; answer: string };
type Question = { question: string; correct: string; choices: string[] };

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
  ],
  jlpt: [
    { display: "물", answer: "水" },
    { display: "산", answer: "山" },
    { display: "강", answer: "川" },
    { display: "하늘", answer: "空" },
    { display: "꽃", answer: "花" },
    { display: "나무", answer: "木" },
    { display: "물고기", answer: "魚" },
    { display: "개", answer: "犬" },
    { display: "고양이", answer: "猫" },
    { display: "학교", answer: "学校" },
    { display: "선생님", answer: "先生" },
    { display: "친구", answer: "友達" },
    { display: "집", answer: "家" },
    { display: "전철", answer: "電車" },
    { display: "음식", answer: "食べ物" },
  ],
};

const categoryLabels: Record<Category, string> = {
  hiragana: "히라가나",
  katakana: "가타카나",
  jlpt: "N5 단어",
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
    };
  });
}

export default function QuizClient() {
  const [category, setCategory] = useState<Category>("hiragana");
  const [phase, setPhase] = useState<Phase>("start");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [savedScore, setSavedScore] = useState(0);

  const handleTabClick = useCallback((cat: Category) => {
    setCategory(cat);
    setPhase("start");
    setSelectedAnswer(null);
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
    setPhase("quiz");
  }, []);

  const handleAnswer = useCallback(
    (answer: string) => {
      if (selectedAnswer !== null) return;
      const isCorrect = answer === questions[currentIdx]?.correct;
      const newScore = score + (isCorrect ? 1 : 0);
      setSelectedAnswer(answer);
      setScore(newScore);

      setTimeout(() => {
        if (currentIdx === 4) {
          setPhase("mid_ad");
          setTimeout(() => {
            setPhase("quiz");
            setCurrentIdx(5);
            setSelectedAnswer(null);
          }, 2000);
        } else if (currentIdx === 9) {
          localStorage.setItem(
            storageKey(category),
            JSON.stringify({ category, score: newScore, completed: true })
          );
          setPhase("result");
        } else {
          setCurrentIdx((i) => i + 1);
          setSelectedAnswer(null);
        }
      }, 1000);
    },
    [selectedAnswer, questions, currentIdx, score, category]
  );

  const currentQuestion = questions[currentIdx];

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Category tabs */}
      <div className="flex gap-2 mb-8">
        {(["hiragana", "katakana", "jlpt"] as Category[]).map((cat) => (
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
            <p className="text-4xl">🧩</p>
            <h2 className="text-xl font-bold text-gray-800">{categoryLabels[category]} 퀴즈</h2>
            <p className="text-gray-600 text-sm">
              {category === "jlpt"
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
        <div key={currentIdx} className="quiz-fade space-y-5">
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
              let cls =
                "bg-white border-2 border-gray-200 text-gray-700 hover:border-rose-300";
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
        </div>
      )}

      {/* Mid-quiz ad */}
      {phase === "mid_ad" && (
        <div className="text-center space-y-4">
          <p className="text-gray-500 text-sm">잠시 후 계속됩니다...</p>
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
            <button
              onClick={() => startQuiz(category)}
              className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors"
            >
              다시 풀기
            </button>
          </div>
        </div>
      )}

      {/* Already done today */}
      {phase === "done_today" && (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center space-y-4">
          <p className="text-4xl">✅</p>
          <h2 className="text-xl font-bold text-gray-800">오늘의 퀴즈 완료!</h2>
          <p className="text-3xl font-bold text-rose-600">{savedScore} / 10</p>
          <p className="text-gray-500 text-sm">내일 또 도전하세요 🌸</p>
        </div>
      )}
    </div>
  );
}
