/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    qualities: [50, 75, 100],
  },
  experimental: {
    staleTimes: {
      dynamic: 3600,
      static: 3600,
    },
  },
};

export default nextConfig;
