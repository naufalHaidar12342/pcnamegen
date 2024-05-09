"use client";
import { FaCopy } from "react-icons/fa6";
import { GiPerspectiveDiceSixFacesSix } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Textarea } from "@nextui-org/input";
import CopyToClipboard from "./copy-to-clipboard";
import { extendVariants, Input } from "@nextui-org/react";
import CustomizedTextarea from "./customized-textarea";
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
export default function ComputerNameGenerator() {
	const [nameGenerated, setNameGenerated] = useState("DESKTOP-AF1V2Z3");
	const [textAreaValue, setTextAreaValue] = useState(nameGenerated);

	const generateName = () => {
		const setNameForTextarea = generateSevenDigitsName();
		setNameGenerated(setNameForTextarea);
		setTextAreaValue(setNameForTextarea);
	};

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-wrap gap-4 items-center">
				<CustomizedTextarea
					label="Generated computer name"
					labelPlacement="outside"
					minRows={1}
					isReadOnly
					variant="bordered"
					className={``}
					value={textAreaValue}
					onChange={(e) => setTextAreaValue(e.target.value)}
					endContent={<CopyToClipboard textToBeCopied={textAreaValue} />}
				/>
			</div>
			<motion.button
				onClick={generateName}
				whileHover={{
					scale: 1.1,
				}}
				className="mt-3 text-5xl rounded-full bg-cyan-500 p-2 group"
				aria-label="Click to generate computer name"
			>
				<GiPerspectiveDiceSixFacesSix className="group-hover:animate-spin group-hover:duration-[2ms]" />
			</motion.button>
		</div>
	);
}
