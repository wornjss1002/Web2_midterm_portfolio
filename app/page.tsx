import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <video
        src="https://cdn.pixabay.com/video/2023/09/28/182699-869766689_large.mp4"
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
          opacity: 0.4,
        }}
      ></video>

      <div className="flex justify-center items-center min-h-screen ">
        <Link
          href="/about"
          className="text-5xl font-bold text-white py-4 px-8 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg hover:from-blue-500 hover:to-blue-700 transition-transform transform hover:scale-105"
          style={{
            backgroundImage: "linear-gradient(135deg, #4f93ff, #003399)",
          }}
        >
          Get Start!
        </Link>
      </div>
    </div>
  );
}
