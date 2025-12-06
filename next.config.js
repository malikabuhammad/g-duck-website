/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: [],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig

