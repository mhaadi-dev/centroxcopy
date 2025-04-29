const { hostname } = require('os')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'tailwindui.com' },
      { protocol: 'https', hostname: 'unsplash.com' },
      { protocol: 'https', hostname: 'asset.cloudinary.com' },
      { protocol: 'https', hostname: 'centrox-landing-bucket.s3.eu-north-1.amazonaws.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      {protocol:"https",hostname:"img.youtube.com"}
    ],
  },
  experimental: {
    taint: true,
  },
  reactStrictMode: false,
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.devtool = 'source-map'
    }
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)