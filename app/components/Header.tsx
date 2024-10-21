"use client"; // 클라이언트 컴포넌트로 설정

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // usePathname 훅 추가
import { RiAccountCircleFill } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { BsFillFlagFill } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { GrAndroid } from "react-icons/gr";

export default function Header() {
  const pathname = usePathname(); // 현재 경로 가져오기

  return (
    <div>
      <h1 className="flex justify-center">
        <Link href="/">
          <div className="text-7xl text-[#414141] justify-center mt-[8%] flex gap-10">
            <TbWorldWww />
            JK Web Portfolio
            <GrAndroid />
          </div>
        </Link>
      </h1>
      <nav className="py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center font-bold">
            {/* About Link */}
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-[black]" : "text-gray-400"
              } hover:text-[#414141] text-4xl ml-40 mr-40 mt-12`}
            >
              <div className="flex items-center">
                <RiAccountCircleFill className="mr-1" />
                About
              </div>
            </Link>

            {/* 요소 사이에 선을 추가 */}
            <div className="border-l-2 border-green-900 h-12 mx-6 mt-[3%]"></div>

            {/* Portfolio Link */}
            <Link
              href="/portfolio"
              className={`${
                pathname === "/portfolio" ? "text-[black]" : "text-gray-400"
              } hover:text-[#414141] text-4xl ml-40 mr-40 mt-12`}
            >
              <div className="flex items-center">
                <TiDocumentText className="mr-1" />
                PortFolio
              </div>
            </Link>

            {/* 또 다른 요소 사이에 선을 추가 */}
            <div className="border-l-2 border-green-900 h-12 mx-6 mt-[3%]"></div>

            {/* Vision Link */}
            <Link
              href="/vision"
              className={`${
                pathname === "/vision" ? "text-[black]" : "text-gray-400"
              } hover:text-[#414141] text-4xl ml-40 mr-40 mt-12`}
            >
              <div className="flex items-center">
                <BsFillFlagFill className="mr-2" />
                Vision
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
