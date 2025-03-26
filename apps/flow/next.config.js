/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@studiosenmaster/sen-ui"],
  output: 'standalone'
}

module.exports = nextConfig 