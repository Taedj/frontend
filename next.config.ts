/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supreme-anett-tidjanizitouni-76253975.koyeb.app",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
