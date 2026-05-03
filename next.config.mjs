/** @type {import('next').NextConfig} */
const nextConfig = {
	// Expose SITE_URL at build time, useful for meta tags and absolute URLs
	env: {
		SITE_URL: 'https://cogint.cognir.ai',
	},
	// Allow custom domain in dev server
	onDemandEntries: {
		maxInactiveAge: 60 * 1000,
		pagesBufferLength: 5,
	},
	// Allow hostname in headers
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
