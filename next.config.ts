import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.tgdd.vn',
        port: '',
        pathname: '/Products/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'cdnv2.tgdd.vn',
        port: '',
        pathname: '/**',
        search: '',
      },

      {
        protocol: 'https',
        hostname: 'cdn-media.sforum.vn',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
