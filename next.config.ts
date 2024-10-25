import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                port: '',
                pathname: '/**/**',
            },

        ],
    },
};


export default nextConfig;
