/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "rules",
			description: "shows the rules for beyond",
			category: "general",
			usage: `${client.config.prefix}rules`,
			baseXp: 0,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
			const buttons = [
				{
				  buttonId: "rules",
				  buttonText: { displayText: `${this.client.config.prefix}rules` },
				  type: 1,
				},
			  ];
			
			  const buttonMessage: any = {
				contentText: `\n\n_*HELLO THERE 𓀬volksꦼꦃbot🜲 HERE*_\n\n 1.don't dm mods for asking to be a bot admin.\n\n 2.don't ask us to sell our bots to you.\n\n hope you enjoy using this bot\n\n`,
				footerText: "𓀬volksꦼꦃbot🜲",
				buttons: buttons,
				headerType: 1,
			  };
			  await M.reply(buttonMessage, MessageType.buttonsMessage);
		;
	};
}
