/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'ATX Registry1',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://rahulosp.github.io/kasm-registry1/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry1/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
