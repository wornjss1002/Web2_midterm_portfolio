import React from "react";
import VideoBackground from "../components/video.js"; // 비디오 컴포넌트 임포트
import WebMenu from "../components/WebMenu";
import AppMenu from "../components/AppMenu";

export default function AboutPage() {
  return (
    <div className="">
      <VideoBackground />
      <div className="flex justify-center gap-[30%] mt-[3%] rou">
        <div className="bg-white rounded-3xl">
          <h3 className="text-4xl p-6 text-center">WEB</h3>
          <div className="text-center">
            <WebMenu />
          </div>
        </div>
        <div className="bg-white rounded-3xl">
          <h3 className="text-4xl p-6 text-center">Android</h3>
          <div>
            <AppMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
