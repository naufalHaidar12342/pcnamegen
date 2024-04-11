"use client";
import { FaClipboardList } from "react-icons/fa6";
import { GiPerspectiveDiceSixFacesSix } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Textarea } from "@nextui-org/input";
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
	return (
		<div className="flex flex-col items-center">
			<Textarea
				isReadOnly
				name=""
				className="rounded-xl bg-slate-600 text-center"
				defaultValue={"test"}
			/>
			<motion.button
				onClick={""}
				whileHover={{
					scale: 1.1,
				}}
				className="text-5xl rounded-full bg-cyan-500 p-2 "
				aria-label="Click to generate computer name"
			>
				<GiPerspectiveDiceSixFacesSix />
			</motion.button>
		</div>
	);
}
