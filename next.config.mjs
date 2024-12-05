/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.yes24.com",
      },
      {
        protocol: "https",
        hostname: "dtftpjqioqarxtmkrhpq.supabase.co",
      },
    ],
  },
};

export default nextConfig;
