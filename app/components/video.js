// components/VideoBackground.js
import React from "react";

const VideoBackground = () => {
  return (
    <video
      src="https://cdn.pixabay.com/video/2023/09/28/182699-869766689_large.mp4" // 비디오 파일 경로
      autoPlay
      muted
      loop
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        zIndex: -1,
        opacity: 0.5, // 비디오 투명도를 조절
      }}
    ></video>
  );
};

export default VideoBackground;
