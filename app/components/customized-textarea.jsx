"use client";
import { extendVariants, Textarea } from "@nextui-org/react";
const CustomizedTextarea = extendVariants(Textarea, {
	variants: {
		textSize: {
			baseText: {
				input: "text-lg",
				label: "text-xl",
				base: "",
			},
		},
	},
	defaultVariants: {
		textSize: "baseText",
	},
});
export default CustomizedTextarea;
