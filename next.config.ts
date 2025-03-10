import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn2.iconfinder.com',
          port: '',
          pathname: '/**',
          search: '',
        },
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com',
          port: '',
          pathname: '/**',
          search: '',
        },
      ],
    },
};

export default nextConfig;
