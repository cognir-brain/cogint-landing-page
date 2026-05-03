/** @type {import('next').NextConfig} */
const nextConfig = {
	// Expose SITE_URL at build time, useful for meta tags and absolute URLs
	env: {
		SITE_URL: 'https://cogint.cognir.ai',
	},
};

export default nextConfig;
