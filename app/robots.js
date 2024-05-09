export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: "https://pcnamegen.vercel.app/sitemap.xml",
	};
}
