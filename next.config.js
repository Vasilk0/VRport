/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "/VRport",
  assetPrefix: "/VRport/",
};

module.exports = nextConfig;
