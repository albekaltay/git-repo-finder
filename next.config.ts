import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Webpack yapılandırmasını özelleştirelim
  webpack: (config, { isServer }) => {
    // Redux için özel yapılandırma
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
        path: false,
      },
    };
    return config;
  },
  // Diğer yapılandırmalar
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
