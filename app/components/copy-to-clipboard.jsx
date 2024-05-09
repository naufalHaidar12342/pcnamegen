"use client";
import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import copy from "clipboard-copy";

export default function CopyToClipboard({ textToBeCopied }) {
	const [IsComputerNameCopied, setIsComputerNameCopied] = useState(false);
	async function handleCopyToClipboardClick() {
		try {
			await copy(textToBeCopied);
			setIsComputerNameCopied(true);
		} catch (error) {
			console.error("Failed to copy to clipboard. Full message=", error);
		}
	}
	return (
		<div className="flex">
			<Tooltip
				placement="bottom"
				content={
					IsComputerNameCopied ? "Copied to clipboard!" : "Copy to clipboard"
				}
			>
				<Button
					isIconOnly
					variant="light"
					className=""
					onClick={() => handleCopyToClipboardClick()}
				>
					<FaCopy className="text-xl " />
				</Button>
			</Tooltip>
		</div>
	);
}
