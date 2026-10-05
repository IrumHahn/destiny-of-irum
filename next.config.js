/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: __dirname },
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'destiny-of-irum.vercel.app' }],
      destination: 'https://destiny.irumai.kr/:path*',
      permanent: true,
    }];
  },
};
module.exports = nextConfig;
