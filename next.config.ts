import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment', // Disarankan saat dangerouslyAllowSVG true
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Contoh CSP
  },
  output: 'export',
};

export default nextConfig;
