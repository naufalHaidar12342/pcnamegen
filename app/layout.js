import "./globals.css";
import { jetBrainsMono, kalnia } from "@/app/libraries/fonts";
import { Providers } from "./libraries/providers";

export const metadata = {
	title: "pcnamegen",
	description:
		"A simple name generator for your computer who recently installed/reinstalled OS",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark">
			<body className={jetBrainsMono.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
