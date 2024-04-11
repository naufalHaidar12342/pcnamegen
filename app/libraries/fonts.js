import {
	JetBrains_Mono,
	Kalnia,
	Pixelify_Sans,
	Handjet,
} from "next/font/google";
export const kalnia = Kalnia({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "500", "600", "700"],
});
export const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "fallback",
	weight: ["300", "400", "500", "600", "700"],
});
export const pixelifySans = Pixelify_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700"],
});
export const handjet = Handjet({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700"],
});
