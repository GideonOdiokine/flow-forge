import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
            {
                protocol: 'https',
                hostname: 'ucarecdn.com',
            },
            {
                protocol: 'https',
                hostname: 'lomwqwq633.ucarecd.net',
            },
        ],
    },
    //   WIP: I will take this out later
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
