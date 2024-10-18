import React from "react";
import VideoBackground from "../components/video.js"; // 비디오 컴포넌트 임포트
import { TbWorldWww } from "react-icons/tb";
import { GrAndroid } from "react-icons/gr";
import { FaPencil } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { GiSoccerBall } from "react-icons/gi";
import { IoMusicalNotes } from "react-icons/io5";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-[100%] mt-[10%] flex justify-center">
      <VideoBackground />
      <div className="w-full max-w-[900px] bg-white rounded-3xl p-[80px] z-10">
        <div className="flex gap-6 ">
          <Image
            src="/amasia.jpg"
            alt="me"
            className="h-auto max-w-[200px] rounded-2xl mb-4"
          />
          <div className="flex flex-col">
            <h2 className="text-3xl ml-[25%] mt-[3%]">Jae Gweon</h2>
            <div className="flex mt-[13%] p-2">
              <FaPencil className="text-4xl text-black-300 mt-[6%]" />
              <div className="flex ml-4 border-l-2 border-gray-300 pl-4">
                <TbWorldWww className="text-7xl text-blue-300" />
                <GrAndroid className="text-7xl text-green-300 ml-4" />
              </div>
            </div>
            <div className="flex mt-[8%] p-2 ">
              <FcLike className="text-4xl h-[100%] text-black" />
              <div className="flex ml-4 border-l-2 h-[100%] border-gray-300 pl-4">
                <GiSoccerBall className="text-7xl text-blue-500" />
                <IoMusicalNotes className="text-7xl text-yellow-500 ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
