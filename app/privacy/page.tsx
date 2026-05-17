import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 하루일본어",
  description:
    "하루일본어 웹사이트의 개인정보 처리와 광고, 쿠키 사용에 대한 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">개인정보처리방침</h1>
      <p className="text-sm text-gray-500 mb-8">최종 업데이트: 2025년 5월</p>

      <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">1. 개요</h2>
          <p>
            하루일본어(이하 &ldquo;본 사이트&rdquo;)는 일본어 학습 콘텐츠를 제공하는 웹사이트입니다. 본 방침은 본 사이트 이용 중 수집될 수 있는 정보와 그 활용 방식에 대해 안내합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">2. 수집하는 정보</h2>
          <p>본 사이트는 이용자가 직접 제공하는 개인 정보를 별도로 수집하지 않습니다. 다만 서비스 운영 목적으로 아래와 같은 정보가 자동으로 기록될 수 있습니다.</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
            <li>방문 페이지, 접속 시간, 브라우저 종류 등의 서버 로그 데이터</li>
            <li>Google Analytics 등 분석 도구를 통한 방문 통계</li>
            <li>광고 서비스 제공을 위한 쿠키 및 유사 기술</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">3. 쿠키 사용</h2>
          <p>
            본 사이트는 서비스 개선과 광고 제공을 위해 쿠키(Cookie)를 사용할 수 있습니다. 쿠키는 이용자의 브라우저에 저장되는 소량의 데이터이며, 브라우저 설정을 통해 거부하거나 삭제할 수 있습니다.
            다만 쿠키를 비활성화할 경우 일부 기능이 정상적으로 동작하지 않을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">4. 광고</h2>
          <p>
            본 사이트는 Google AdSense 등 제3자 광고 서비스를 사용할 수 있습니다. 이러한 광고 서비스는 이용자의 관심사에 맞는 광고를 제공하기 위해 쿠키 또는 웹 비콘을 활용할 수 있습니다.
            광고 서비스의 개인정보 처리 방식에 대해서는 해당 광고 서비스의 개인정보처리방침을 참고하시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">5. 외부 링크</h2>
          <p>
            본 사이트는 Google Play 스토어 등 외부 사이트로의 링크를 포함할 수 있습니다. 이러한 외부 사이트의 개인정보 처리 방식은 본 방침의 적용 대상이 아닙니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">6. 앱 서비스 안내</h2>
          <p>
            본 사이트와 연관된 앱 서비스(JLPT 일본어 단어 문법 공부)는 별도의 개인정보처리방침을 가질 수 있습니다. 앱 이용 관련 개인정보 처리에 대해서는 앱 내 고지 사항을 확인하시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">7. 문의</h2>
          <p>
            본 방침과 관련한 문의는 <a href="/contact" className="text-rose-600 hover:underline">문의하기</a> 페이지를 통해 연락해주시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">8. 방침 변경</h2>
          <p>
            본 방침은 법령 또는 서비스 변경에 따라 수정될 수 있으며, 변경 시 본 페이지에 업데이트 날짜와 함께 공지합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
