/** @type {import('next').NextConfig} */

const defineNextConfig = (config) => config;

export default defineNextConfig({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});
