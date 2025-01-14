import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3307', 
        pathname: '/byd/wp-content/uploads/**', 
      },
    ],
  },
};

export default nextConfig;
