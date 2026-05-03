/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['cogint.cognir.ai'],  // ← tambahkan ini
  
  env: {
    SITE_URL: 'https://cogint.cognir.ai',
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;