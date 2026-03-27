/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      { source: '/career', destination: '/fr/career', permanent: true },
      { source: '/career/:id', destination: '/fr/career/:id', permanent: true },
      { source: '/skills', destination: '/fr/skills', permanent: true },
      { source: '/contact', destination: '/fr/contact', permanent: true },
    ]
  },
}

module.exports = nextConfig
