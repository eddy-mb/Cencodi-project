/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        // port: "",
        // pathname: "",
      },
      {
        protocol: "https",
        hostname: "previews.123rf.com",
        // port: "",
        // pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;
