/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "wselbyikbotganmtktxi.supabase.co" }],
  },
  experimental: {
    staleTimes: {
      dynamic: 3600,
      static: 3600,
    },
  },
};

export default nextConfig;
