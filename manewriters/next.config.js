/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'imgs.search.brave.com',
              port: '',
              // pathname: ['/free-photo/**','premium-photo/**']
            },
            {
              protocol: 'https',
              hostname: 'www.kindpng.com',
              port: '',
              // pathname: ['/free-photo/**','premium-photo/**']
            },
            {
              protocol: 'https',
              hostname: 'upload.wikimedia.org',
              port: '',
              // pathname: ['/free-photo/**','premium-photo/**']
            },
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              // pathname: ['/free-photo/**','premium-photo/**']
            },
        ]
    }
}

module.exports = nextConfig
