"use client";

import { useState } from "react";
import type { GradeKanji, KanjiEntry } from "@/data/kanji";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.junyoung.jlptvoca&utm_source=kanji_web&utm_medium=quiz_cta";

interface Props {
  grades: GradeKanji[];
}

type QuizState =
  | { phase: "idle" }
  | { phase: "question"; questions: QuizQuestion[]; index: number; selected: number | null; score: number }
  | { phase: "result"; score: number; total: number; gradeLabel: string };

interface QuizQuestion {
  kanji: KanjiEntry;
  choices: string[];
  answer: number;
}

function buildQuiz(list: KanjiEntry[]): QuizQuestion[] {
  const pool = [...list].sort(() => Math.random() - 0.5).slice(0, 3);
  return pool.map((kanji) => {
    const distractors = list
      .filter((k) => k.char !== kanji.char && k.meaning !== kanji.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((k) => k.meaning);
    const choices = [...distractors, kanji.meaning].sort(() => Math.random() - 0.5);
    return { kanji, choices, answer: choices.indexOf(kanji.meaning) };
  });
}

export default function KanjiTabs({ grades }: Props) {
  const [activeGrade, setActiveGrade] = useState(0);
  const [quiz, setQuiz] = useState<QuizState>({ phase: "idle" });

  const current = grades[activeGrade];

  function startQuiz() {
    setQuiz({
      phase: "question",
      questions: buildQuiz(current.list),
      index: 0,
      selected: null,
      score: 0,
    });
  }

  function selectAnswer(choiceIdx: number) {
    if (quiz.phase !== "question" || quiz.selected !== null) return;
    setQuiz({ ...quiz, selected: choiceIdx });
  }

  function nextQuestion() {
    if (quiz.phase !== "question" || quiz.selected === null) return;
    const correct = quiz.selected === quiz.questions[quiz.index].answer;
    const newScore = quiz.score + (correct ? 1 : 0);
    if (quiz.index + 1 >= quiz.questions.length) {
      setQuiz({ phase: "result", score: newScore, total: quiz.questions.length, gradeLabel: current.label });
    } else {
      setQuiz({ ...quiz, index: quiz.index + 1, selected: null, score: newScore });
    }
  }

  function resetQuiz() {
    setQuiz({ phase: "idle" });
  }

  function shareResult() {
    if (quiz.phase !== "result") return;
    const text = `나는 ${quiz.gradeLabel} 한자 ${quiz.score}/${quiz.total} 맞췄다! #하루일본어`;
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => alert("클립보드에 복사됐어요!"));
    }
  }

  function handleTabChange(i: number) {
    setActiveGrade(i);
    setQuiz({ phase: "idle" });
  }

  return (
    <div>
      {/* 학년 탭 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {grades.map((g, i) => (
          <button
            key={g.grade}
            onClick={() => handleTabChange(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeGrade === i
                ? "bg-rose-600 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:border-rose-300 hover:text-rose-600"
            }`}
          >
            {g.label}
            <span className={`ml-1.5 text-xs ${activeGrade === i ? "text-rose-200" : "text-gray-400"}`}>
              {g.count}자
            </span>
          </button>
        ))}
      </div>

      {/* 현재 학년 한자 그리드 */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {current.list.map((kanji) => (
          <div
            key={kanji.char}
            className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-rose-300 transition-colors"
          >
            <p className="text-2xl font-bold text-gray-800 mb-1.5">{kanji.char}</p>
            <p className="text-[10px] text-rose-600 leading-tight mb-0.5 truncate" title={kanji.onyomi}>
              음: {kanji.onyomi}
            </p>
            <p className="text-[10px] text-blue-600 leading-tight mb-0.5 truncate" title={kanji.kunyomi}>
              훈: {kanji.kunyomi}
            </p>
            <p className="text-[10px] text-gray-500 leading-tight">{kanji.meaning}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-4 text-right">{current.label} 총 {current.list.length}자</p>

      {/* 퀴즈 맛보기 */}
      <div className="mt-6">
        {quiz.phase === "idle" && (
          <div className="text-center">
            <button
              onClick={startQuiz}
              className="bg-rose-50 border border-rose-300 text-rose-700 font-semibold px-6 py-3 rounded-full hover:bg-rose-100 transition-colors text-sm"
            >
              🎮 {current.label} 퀴즈 맛보기 (3문제)
            </button>
          </div>
        )}

        {quiz.phase === "question" && (() => {
          const q = quiz.questions[quiz.index];
          return (
            <div className="bg-white border border-rose-200 rounded-2xl p-5 sm:p-6">
              <p className="text-xs text-gray-400 mb-3 text-center">
                {quiz.index + 1} / {quiz.questions.length}
              </p>
              <p className="text-5xl font-bold text-gray-800 text-center mb-6">{q.kanji.char}</p>
              <p className="text-sm text-gray-500 text-center mb-4">이 한자의 뜻은?</p>
              <div className="grid grid-cols-2 gap-2">
                {q.choices.map((choice: string, i) => {
                  let cls =
                    "border rounded-xl py-3 px-4 text-sm font-medium transition-colors text-center ";
                  if (quiz.selected === null) {
                    cls += "border-gray-200 text-gray-700 hover:border-rose-400 hover:bg-rose-50 cursor-pointer";
                  } else if (i === q.answer) {
                    cls += "border-green-400 bg-green-50 text-green-700";
                  } else if (i === quiz.selected) {
                    cls += "border-red-400 bg-red-50 text-red-700";
                  } else {
                    cls += "border-gray-200 text-gray-400";
                  }
                  return (
                    <button key={i} className={cls} onClick={() => selectAnswer(i)}>
                      {choice}
                    </button>
                  );
                })}
              </div>
              {quiz.selected !== null && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    {quiz.selected === q.answer ? "✅ 정답!" : `❌ 오답! 정답: ${q.kanji.meaning}`}
                  </p>
                  <button
                    onClick={nextQuestion}
                    className="bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-rose-700 transition-colors"
                  >
                    {quiz.index + 1 < quiz.questions.length ? "다음 문제 →" : "결과 보기"}
                  </button>
                </div>
              )}
            </div>
          );
        })()}

        {quiz.phase === "result" && (
          <div className="bg-white border border-rose-200 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-4xl mb-3">🎉</p>
            <p className="text-xl font-bold text-gray-800 mb-1">
              {quiz.score}/{quiz.total} 정답!
            </p>
            <p className="text-gray-500 text-sm mb-6">
              전체 {quiz.gradeLabel} 한자 퀴즈는 앱에서!
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors mb-3 w-full sm:w-auto"
            >
              📱 앱에서 전체 퀴즈 풀기 (무료)
            </a>
            <div className="flex justify-center gap-3 mt-3">
              <button
                onClick={shareResult}
                className="border border-gray-300 text-gray-600 text-sm px-4 py-2 rounded-full hover:border-gray-400 transition-colors"
              >
                공유하기 🔗
              </button>
              <button
                onClick={resetQuiz}
                className="border border-rose-300 text-rose-600 text-sm px-4 py-2 rounded-full hover:border-rose-500 transition-colors"
              >
                다시 풀기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
