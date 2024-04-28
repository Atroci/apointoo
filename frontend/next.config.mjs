/** @type {import('next').NextConfig} */
const nextConfig = {  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },};

export default nextConfig;
