/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
            },
            {
                protocol: 'https',
                hostname: 'panel.scordemy.in',
            },
            {
                protocol: 'https',
                hostname: 'bootstrapmade.com',
            },
        ],
    },
};

export default nextConfig;
