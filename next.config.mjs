/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio-2025' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
