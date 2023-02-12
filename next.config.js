/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // configure (https://i.imgur.com/PRZK8HV.png)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/*',
      }
    ]
  }
}

module.exports = nextConfig
