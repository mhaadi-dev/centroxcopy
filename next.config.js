const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',

      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',

      },
    ],
  },
  experimental: {
    taint: true,
  },
  reactStrictMode: false,
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.devtool = 'source-map';
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);