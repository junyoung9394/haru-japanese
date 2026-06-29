import type { Metadata } from "next";
import AppDownloadCta from "@/components/AppDownloadCta";
import AdSlot from "@/components/AdSlot";
import AdBanner from "@/components/AdBanner";
import { AD_SLOTS } from "@/lib/adSlots";

export const metadata: Metadata = {
  title: "비즈니스 일본어 | 하루일본어",
  description:
    "직장에서 바로 쓰는 비즈니스 일본어 표현을 배워보세요. 출퇴근 인사, 전화 응대, 이메일 문구, 회의 표현, 경어 패턴까지 한번에 확인할 수 있습니다.",
};

const greetingPhrases = [
  {
    japanese: "おはようございます",
    reading: "오하요고자이마스",
    meaning: "안녕하세요 (아침 인사, 출근 시)",
  },
  {
    japanese: "お疲れ様でした",
    reading: "오츠카레사마데시타",
    meaning: "수고하셨습니다 (퇴근 인사)",
  },
  {
    japanese: "お先に失礼します",
    reading: "오사키니 시츠레이시마스",
    meaning: "먼저 실례하겠습니다 (먼저 퇴근할 때)",
  },
  {
    japanese: "いってきます",
    reading: "잇테키마스",
    meaning: "다녀오겠습니다 (외출 시)",
  },
  {
    japanese: "いってらっしゃい",
    reading: "잇테랏샤이",
    meaning: "다녀오세요 (외출하는 동료에게)",
  },
  {
    japanese: "ただいま戻りました",
    reading: "타다이마 모도리마시타",
    meaning: "지금 돌아왔습니다 (외출 후 복귀 시)",
  },
  {
    japanese: "よろしくお願いします",
    reading: "요로시쿠 오네가이시마스",
    meaning: "잘 부탁드립니다",
  },
  {
    japanese: "失礼しました",
    reading: "시츠레이시마시타",
    meaning: "실례했습니다 / 죄송합니다",
  },
];

const phonePhrases = [
  {
    japanese: "もしもし、〇〇でございます",
    reading: "모시모시、〇〇데 고자이마스",
    meaning: "여보세요, 〇〇입니다 (전화 수신 시)",
  },
  {
    japanese: "少々お待ちください",
    reading: "쇼쇼 오마치 쿠다사이",
    meaning: "잠시만 기다려 주십시오",
  },
  {
    japanese: "折り返しご連絡いたします",
    reading: "오리카에시 고렌라쿠 이타시마스",
    meaning: "다시 연락 드리겠습니다",
  },
  {
    japanese: "担当者に代わります",
    reading: "탄토샤니 카와리마스",
    meaning: "담당자로 바꿔 드리겠습니다",
  },
  {
    japanese: "ただいま席を外しております",
    reading: "타다이마 세키오 하즈시테 오리마스",
    meaning: "지금 자리를 비우고 있습니다",
  },
  {
    japanese: "伝言をお願いできますか",
    reading: "덴곤오 오네가이 데키마스카",
    meaning: "메모를 남겨 주실 수 있을까요?",
  },
  {
    japanese: "恐れ入りますが、もう一度おっしゃっていただけますか",
    reading: "오소레이리마스가、모이치도 옷샤테 이타다케마스카",
    meaning: "죄송하지만, 다시 한번 말씀해 주실 수 있을까요?",
  },
  {
    japanese: "お電話ありがとうございます",
    reading: "오덴와 아리가토 고자이마스",
    meaning: "전화 주셔서 감사합니다",
  },
];

const emailPhrases = [
  {
    japanese: "お世話になっております",
    reading: "오세와니 낫테 오리마스",
    meaning: "신세를 지고 있습니다 (이메일 첫 인사)",
  },
  {
    japanese: "以上、よろしくお願いいたします",
    reading: "이죠、요로시쿠 오네가이 이타시마스",
    meaning: "이상, 잘 부탁드립니다 (이메일 마무리)",
  },
  {
    japanese: "ご確認のほど、よろしくお願いします",
    reading: "고카쿠닌노 호도、요로시쿠 오네가이시마스",
    meaning: "확인해 주시기 바랍니다",
  },
  {
    japanese: "添付ファイルをご確認ください",
    reading: "텐푸 파이루오 고카쿠닌 쿠다사이",
    meaning: "첨부 파일을 확인해 주십시오",
  },
  {
    japanese: "ご不明な点がございましたら、お気軽にお問い合わせください",
    reading: "고후메이나 텐가 고자이마시타라、오키가루니 오토이아와세 쿠다사이",
    meaning: "궁금한 점이 있으시면 편하게 문의해 주십시오",
  },
  {
    japanese: "取り急ぎご連絡まで",
    reading: "토리이소기 고렌라쿠 마데",
    meaning: "우선 급히 연락 드립니다 (간단한 연락 마무리)",
  },
  {
    japanese: "何卒よろしくお願い申し上げます",
    reading: "나니토조 요로시쿠 오네가이 모시아게마스",
    meaning: "아무쪼록 잘 부탁드립니다 (격식 높은 표현)",
  },
  {
    japanese: "ご返信お待ちしております",
    reading: "고헨신 오마치시테 오리마스",
    meaning: "답변을 기다리겠습니다",
  },
];

const meetingPhrases = [
  {
    japanese: "ご意見をお聞かせください",
    reading: "고이켄오 오키카세 쿠다사이",
    meaning: "의견을 들려주십시오",
  },
  {
    japanese: "ご提案があります",
    reading: "고테이안가 아리마스",
    meaning: "제안이 있습니다",
  },
  {
    japanese: "おっしゃる通りです",
    reading: "옷샤루 토오리데스",
    meaning: "말씀하신 대로입니다 / 맞습니다",
  },
  {
    japanese: "検討させていただきます",
    reading: "켄토 사세테 이타다키마스",
    meaning: "검토하겠습니다",
  },
  {
    japanese: "確認してからご報告します",
    reading: "카쿠닌시테카라 고호코쿠시마스",
    meaning: "확인 후 보고 드리겠습니다",
  },
  {
    japanese: "本日はお時間をいただきありがとうございます",
    reading: "혼지츠와 오지칸오 이타다키 아리가토 고자이마스",
    meaning: "오늘 시간 내주셔서 감사합니다",
  },
  {
    japanese: "少し時間をいただけますか",
    reading: "스코시 지캉오 이타다케마스카",
    meaning: "잠깐 시간을 주실 수 있을까요?",
  },
  {
    japanese: "以上で私の説明を終わります",
    reading: "이죠데 와타시노 세츠메이오 오와리마스",
    meaning: "이상으로 제 설명을 마치겠습니다",
  },
];

const keigo = [
  { plain: "する", keigo: "いたす", meaning: "하다" },
  { plain: "もらう", keigo: "いただく", meaning: "받다" },
  { plain: "言う", keigo: "申す", meaning: "말하다" },
  { plain: "行く / 来る", keigo: "参る", meaning: "가다 / 오다" },
  { plain: "いる", keigo: "おる", meaning: "있다" },
  { plain: "もらう", keigo: "頂戴する", meaning: "받다 (격식)" },
  { plain: "知っている", keigo: "存じております", meaning: "알고 있다" },
  { plain: "思う", keigo: "存じます", meaning: "생각하다" },
  { plain: "見る", keigo: "拝見する", meaning: "보다 (겸양)" },
  { plain: "もらえますか", keigo: "いただけますか", meaning: "주실 수 있을까요?" },
];

export default function BusinessPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8 items-start">
      <div className="flex-1 min-w-0 space-y-10">
      {/* 페이지 헤더 */}
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          회사에서의 기본 일본어
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          일본 직장 문화에서 꼭 필요한 비즈니스 일본어 표현을 정리했습니다.
          출퇴근 인사부터 전화 응대, 이메일, 회의까지 실제 업무 현장에서 바로 활용해 보세요.
        </p>
      </section>

      {/* 경어 안내 박스 */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">경어(敬語/けいご)란?</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          일본 직장 문화에서 경어(けいご)는 필수입니다. 경어는 크게 세 가지로 나뉩니다.
          상대방을 높이는 <span className="font-semibold text-gray-800">존경어(尊敬語)</span>,
          자신을 낮추는 <span className="font-semibold text-gray-800">겸양어(謙譲語)</span>,
          그리고 정중하게 말하는 <span className="font-semibold text-gray-800">정중어(丁寧語)</span>가 있습니다.
          비즈니스 상황에서는 특히 겸양어와 정중어를 적절히 사용하는 것이 중요합니다.
        </p>
      </section>

      {/* 1. 출퇴근 인사 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">1. 출퇴근 인사</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {greetingPhrases.map((phrase) => (
            <div
              key={phrase.japanese}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <p className="text-base font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 2. 전화 표현 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">2. 전화 표현</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {phonePhrases.map((phrase) => (
            <div
              key={phrase.japanese}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <p className="text-base font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 3. 이메일/문서 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">3. 이메일 / 문서 표현</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {emailPhrases.map((phrase) => (
            <div
              key={phrase.japanese}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <p className="text-base font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 4. 회의 표현 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">4. 회의 표현</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {meetingPhrases.map((phrase) => (
            <div
              key={phrase.japanese}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <p className="text-base font-bold text-gray-800 mb-1">{phrase.japanese}</p>
              <p className="text-sm text-rose-600 mb-1">{phrase.reading}</p>
              <p className="text-sm text-gray-600">{phrase.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot />

      {/* 5. 기본 경어 패턴 */}
      <section>
        <h2 className="text-lg font-bold text-gray-800 mb-4">5. 기본 경어 패턴</h2>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          비즈니스 일본어의 핵심은 ます・です체 사용과 동사 변환입니다.
          아래 표에서 보통체 동사가 경어에서 어떻게 바뀌는지 확인해 보세요.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left font-bold text-gray-700 border-b border-gray-200">
                  보통체
                </th>
                <th className="p-3 text-left font-bold text-gray-700 border-b border-gray-200">
                  경어 (겸양어)
                </th>
                <th className="p-3 text-left font-bold text-gray-700 border-b border-gray-200">
                  의미
                </th>
              </tr>
            </thead>
            <tbody>
              {keigo.map((row, index) => (
                <tr
                  key={row.plain}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="p-3 text-gray-800 font-medium border-b border-gray-100">
                    {row.plain}
                  </td>
                  <td className="p-3 text-rose-600 font-bold border-b border-gray-100">
                    {row.keigo}
                  </td>
                  <td className="p-3 text-gray-600 border-b border-gray-100">
                    {row.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AppDownloadCta />

      <AdSlot />
      </div>

      <aside className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky" style={{ top: "80px" }}>
          <AdBanner slotId={AD_SLOTS.sidebar} variant="sidebar" />
        </div>
      </aside>
      </div>
    </div>
  );
}
