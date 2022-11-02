/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ["picsum.photos", "nextui.org"],
  },
};

module.exports = nextConfig;
