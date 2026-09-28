import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/testimonials",
        destination: "/#testimonials",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/#testimonials",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
