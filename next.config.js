/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nitj.ac.in',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
