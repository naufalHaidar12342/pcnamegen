"use client";
import Typewriter from "typewriter-effect";
export default function TypingTextAnimation({ textToShow }) {
	return (
		<Typewriter
			options={{
				strings: textToShow,
				autoStart: true,
				loop: true,
			}}
		/>
	);
}
