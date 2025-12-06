/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/g-duck-website',
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

