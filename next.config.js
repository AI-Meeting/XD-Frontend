/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
      //    bodyParser: false,
      images: {
        domains: ["localhost", "*"],
      },
    });

    return config;
  },
};

module.exports = nextConfig;
