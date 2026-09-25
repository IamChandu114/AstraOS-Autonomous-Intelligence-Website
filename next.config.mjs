/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ASTRAOS_DASHBOARD_URL: 'https://astra-os-mu.vercel.app/',
    NEXT_PUBLIC_API_BASE_URL: '/api/astraos',
    NEXT_PUBLIC_WS_BASE_URL: 'wss://astraos.onrender.com',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [{ source: '/runtime', destination: 'https://astra-os-mu.vercel.app/', permanent: false }]
  },
  async rewrites() {
    return [{ source: '/api/astraos/:path*', destination: 'https://astraos.onrender.com/:path*' }]
  },
}

export default nextConfig
