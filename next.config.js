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
        hostname: 'unsplash.com',

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
  async redirects() {
    if (process.env.NEXT_PUBLIC_ENV === "production") {
      const redirectPaths = [
        "/case-studies",
        "/solutions",
        "/industries",
        "/blogs",
        "/blogs/:path*",
      ];
  
      return redirectPaths.map((path) => ({
        source: path,
        destination: "/",
        permanent: false,
      }));
    }
    return [];
  }
  
};

module.exports = withBundleAnalyzer(nextConfig);