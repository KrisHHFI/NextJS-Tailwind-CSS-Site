/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/NextJS-Tailwind-CSS-Site/' : '',
  images: {
    unoptimized: true, // Since GitHub Pages doesn't support image optimization
  },
};

export default nextConfig;