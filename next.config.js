/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["*"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
      //    bodyParser: false,
    });
    return config;
  },
  images: {
    domains: ["localhost", "*"],
  },
};

module.exports = nextConfig;
