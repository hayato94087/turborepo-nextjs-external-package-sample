/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "math-helpers"],
};

module.exports = nextConfig;
