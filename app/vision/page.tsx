import React from "react";
import VideoBackground from "../components/video";
import Image from "next/image";

export default function VisionPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <VideoBackground />

      <div className="relative z-10 w-full max-w-[1200px] p-8">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black">Security Consultant</h1>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            보안 컨설팅
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              src="https://img.freepik.com/premium-vector/network-technician-skilled-person-avatar-professor-character-cyber-security-consultant-concept_135661-1858.jpg"
              alt="Goals"
              className="w-[300px] h-auto rounded-xl shadow-md"
            />
            <p className="text-gray-600 text-2xl">
              보안 컨설턴트는 조직이나 기업이 사이버 공격, 데이터 유출, 시스템
              침입 등의 보안 위협으로부터 안전할 수 있도록 다양한 보안 솔루션을
              제공하고 조언하는 전문가입니다.<br></br>이 직업은 정보 보안을
              강화하기 위해 취약점 분석, 보안 정책 수립, 시스템 강화 등의 활동을
              수행하며, 고객의 요구와 환경에 맞춰 맞춤형 보안 전략을 제안합니다.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            공부 방향
          </h2>
          <div className="flex flex-col  gap-6">
            <div className="flex gap-6">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/9485/9485811.png"
                alt="Web Icon"
                className="w-[150px] h-auto rounded-xl shadow-md"
              />
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI89gP_rjr2kZlU_iYLgidnTI6YT9rP9QAxw&s"
                alt="Android Icon"
                className="w-[150px] h-auto rounded-xl shadow-md"
              />
              <p className="text-gray-600 text-2xl">
                저는 현재 웹과 모바일 앱 보안에 관심을 갖고 있습니다. 기본적인
                구조나 프로토콜, 어떠한 취약점이 있는지와 그에 대한 대응 방안을
                공부하고 있습니다. <br />
                이와 더불어 침투 테스트나 정보 보안에 관한 법률에 대해서도
                앞으로 공부해 나갈 것입니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
