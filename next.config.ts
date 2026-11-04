/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sticky-grata-tidjanizitouni-028d59c3.koyeb.app",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "phpezebkmsnlxmbnkope.supabase.co",
        pathname: "/storage/v1/object/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
