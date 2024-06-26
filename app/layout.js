import "./globals.css";
import { jetBrainsMono, kalnia } from "@/app/libraries/fonts";
import { Providers } from "./libraries/providers";

export const metadata = {
	title: "pcnamegen",
	description:
		"A simple name generator for your computer who recently installed/reinstalled OS",
	metadataBase: "https://pcnamegen.vercel.app",
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
		},
		bingBot: {
			index: true,
			follow: true,
		},
	},
	openGraph: {
		title: "pcnamegen",
		description:
			"A simple name generator for your computer who recently installed/reinstalled OS",
		url: "https://pcnamegen.vercel.app",
		siteName: "pcnamegen",
		// images: [
		// 	{
		// 		url: "/pcnamegen-ogimage.png",
		// 		width: 1200,
		// 		height: 630,
		// 		alt: "pcnamegen OpenGraph Image, made with Figma and Bootstrap Icons",
		// 	},
		// ],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark">
			<meta
				name="google-site-verification"
				content="5aa6As9VZ5jfr0kpvPJV8ZIlaVBpWrnSayF5Qfx-nVI"
			/>
			<body className={jetBrainsMono.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
