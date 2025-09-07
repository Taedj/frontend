/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supreme-anett-tidjanizitouni-76253975.koyeb.app",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "phpezebkmsnlxmbnkope.supabase.co",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};

module.exports = nextConfig;
