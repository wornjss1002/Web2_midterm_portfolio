import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com", "encrypted-tbn0.gstatic.com"],
  },
};

export default withNextVideo(nextConfig);
