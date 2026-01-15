/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
