/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: [],
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig

