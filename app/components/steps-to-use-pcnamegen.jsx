"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaMobileButton, FaNoteSticky } from "react-icons/fa6";
export default function StepsToUsePCNAMEGEN() {
	return (
		<div>
			<Accordion selectionMode="multiple" className="">
				<AccordionItem
					title="On your mobile device"
					subtitle="Android, iOS, hell even your burner phone could work"
					indicator={<FaMobileButton className="text-xl" />}
					className="font-semibold"
				>
					{
						"Using your notepad, or message app, or messenger app such as WhatsApp, to write it down. If you are using WhatsApp, make sure you direct the message to your own number (save your number first as a contact if you haven't done so)."
					}
				</AccordionItem>
				<AccordionItem
					title="On a piece of paper"
					subtitle="The good old pen (or pencil) and paper"
					indicator={<FaNoteSticky className="text-xl" />}
					className="font-semibold"
				>
					{
						"Write it down on a piece of paper. Make sure you write it in front of your computer. Use sticky notes if you have them since this computer name is short"
					}
				</AccordionItem>
			</Accordion>
		</div>
	);
}
