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
console.log("hasil random generator modif=", generateSevenDigitsName());
console.log("hasil random generator", generateName());
export default function Home() {
	return (
		<main className="flex min-h-screen max-w-screen-lg mx-auto flex-col items-center justify-center p-16">
			<div className="flex flex-col items-center flex-wrap gap-2">
				<div
					className={`${handjet.className} text-2xl xl:text-4xl inline-flex items-center gap-2`}
				>
					<h2>pcnamegen</h2>
					<BsRobot className="" />
				</div>
				<span className="text-xl">
					The generic name generator for your computer/desktop computer name
				</span>
			</div>
			<div className="flex justify-center flex-wrap gap-10 my-3 text-lg">
				<a href="#how-to-use-this" className="underline">
					How to use
				</a>
				<a href="#compatibility" className="underline">
					Compatibility
				</a>
			</div>
			{/* the generator goes here */}
			<ComputerNameGenerator />
			<div
				className="bg-cyan-300 rounded-2xl flex flex-col p-5 text-gray-900 my-5"
				id="compatibility"
			>
				<h3 className="inline-flex items-center text-xl  gap-2 font-semibold">
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
				className="flex flex-col gap-6 border-2 border-slate-200 p-5 rounded-2xl"
				id="how-to-use-this"
			>
				<div className="flex flex-col">
					<h3 className="font-semibold text-2xl flex flex-wrap gap-2 items-center">
						<HiQuestionMarkCircle className="" />
						How to use this?
					</h3>
					<span className="pt-2">
						After generating name for your computer, here are some suggestion on
						how to apply it:
					</span>
				</div>
				<div className="flex flex-col gap-3 px-4" id="about-to-install-os">
					<h3 className="font-semibold text-xl flex flex-wrap gap-2 items-center">
						<FaRegHandPointRight />
						About to start installing/reinstalling operating system
						(Recommended)
					</h3>
					<p className="">
						Generate the name through other computer/laptop, or just use your
						smartphone, then write it down manually in the prompt
					</p>
					<p>
						Alternatively, you can take a picture of the generated
						name/screenshot it from your other computer/mobile devices, then use
						it as reference rather than writing it on a piece of paper
					</p>
				</div>
				<div className="flex flex-col gap-3 px-4" id="finish-install-os">
					<h3 className="font-semibold text-xl flex flex-wrap gap-2 items-center">
						<FaRegHandPointRight />
						Finished installing/reinstalling operating system
					</h3>
					<p>For Windows user, you can use these guides </p>
					<div className="list-disc flex flex-col gap-2 px-5">
						<li>
							<a
								href="https://www.howtogeek.com/743967/how-to-rename-your-windows-11-pc/"
								target="_blank"
								className="flex flex-wrap items-center gap-2 underline"
							>
								How To Geek - How To Rename Your Windows 11 PC
								<HiExternalLink className="text-xl" />
							</a>
						</li>
						<li>
							<a
								href="https://www.howtogeek.com/787936/how-to-change-your-user-name-on-windows-10-or-11/"
								target="_blank"
								className="flex flex-wrap items-center gap-2 underline"
							>
								How To Geek - How To Change Your User Name on Windows 10 or 11
								<HiExternalLink className="text-xl" />
							</a>
						</li>
					</div>
				</div>
			</div>
		</main>
	);
}
