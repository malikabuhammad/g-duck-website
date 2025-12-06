const isProd = process.env.NODE_ENV === 'production'
const repoName = '/g-duck-website'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
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

