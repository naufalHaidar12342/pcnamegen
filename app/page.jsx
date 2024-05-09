import Image from "next/image";
import { handjet } from "@/app/libraries/fonts";
import { BsRobot } from "react-icons/bs";
import {
	HiLightBulb,
	HiQuestionMarkCircle,
	HiExternalLink,
} from "react-icons/hi";
import { FaRegHandPointRight } from "react-icons/fa6";
import ComputerNameGenerator from "./components/generator-section";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import NavigationMenu from "./components/navigation-menu";
import StepsToUsePCNAMEGEN from "./components/steps-to-use-pcnamegen";
// import NavigationMenu from "@/app/components/navigation-menu";

function generateName() {
	const random = Math.floor(Math.random() * 10000000);
	const alphabet = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	return "DESKTOP-" + alphabet + random.toString(36).toUpperCase() + alphabet;
}

function generateSevenDigitsName() {
	const alphabet = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let name = "DESKTOP-";
	for (let i = 0; i < 7; i++) {
		if (i % 2 === 0) {
			name = name + alphabet[Math.floor(Math.random() * alphabet.length)];
		} else {
			name = name + numbers[Math.floor(Math.random() * numbers.length)];
		}
	}
	return name;
}
// console.log("hasil random generator modif=", generateSevenDigitsName());
// console.log("hasil random generator", generateName());
export default function Home() {
	return (
		<main className="flex min-h-screen max-w-screen-xl mx-auto flex-col items-center justify-center gap-6 p-16">
			<div className="flex flex-col items-center flex-wrap gap-2">
				<div
					className={`${handjet.className} text-3xl xl:text-4xl inline-flex items-center gap-2`}
				>
					<h2>pcnamegen</h2>
					<BsRobot className="" />
				</div>
				<span className="text-xl xl:text-2xl">
					The generic name generator for your computer/desktop computer name
				</span>
			</div>
			<NavigationMenu />
			{/* the generator goes here */}
			<ComputerNameGenerator />
			<div
				className="bg-cyan-300 rounded-2xl flex flex-col p-5 text-gray-900 "
				id="compatibility"
			>
				<h3 className="inline-flex items-center text-xl gap-2 font-semibold">
					<HiLightBulb className="text-2xl" />
					Compatibility
				</h3>
				<p className="pt-1">
					<b className="italic">Technically</b>, this program will run just fine
					on any devices with web browser capability. But,{" "}
					<b>I heavily advise</b> you to use this on a{" "}
					<b>desktop computer, laptop, or your mobile devices</b> due to its
					comfortable screen size and great performance (compared to something
					like car's Android TV, smartwatch, etc.)
				</p>
			</div>

			<div
				className="flex flex-col w-full border-2 border-slate-200 p-5 rounded-2xl "
				id="how-to-use-this"
			>
				<div className="flex flex-col">
					<h3 className="font-bold text-2xl flex flex-wrap gap-2 items-center">
						<HiQuestionMarkCircle className="" />
						How to use this?
					</h3>
					<span className="pt-3 text-lg">
						After you generate the name, here are some of ideas on where you
						could put it down before typing {":"}
					</span>
				</div>
				<StepsToUsePCNAMEGEN />
			</div>
			<div
				className="flex flex-col  w-full gap-6 border-2 border-slate-200 p-5 rounded-2xl"
				id="why-i-made-this-tool"
			>
				<div className="flex flex-col">
					<h3 className="font-bold text-2xl flex flex-wrap gap-2 items-center">
						<HiQuestionMarkCircle className="" />
						Why I made this tool?
					</h3>
					<p className="pt-2">
						Sometimes, every 6 months or so, I like to re-install my Windows
						computer to keep it fresh. And everytime I got to the "Name your
						local account" part, I always stuck on what name should I use,
						surprisingly similar like the time I have to come up with in-game
						name/nickname when I start playing a game. So, I made this tool to
						help me generate a name for my computer, and I hope it can help you
						too!
					</p>
				</div>
			</div>
		</main>
	);
}
