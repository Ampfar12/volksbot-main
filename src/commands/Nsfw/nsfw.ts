import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'nsfw',
            description: 'shows nsfw section',
            category: 'nsfw',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['9']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/nsfw.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
if (!(await this.client.getGroupData(M.from)).nsfw)
			return void M.reply(
				`Don't be a pervert, Baka! This is not an NSFW group.`
			);
        const mn=`
👋 (❤ω❤) Hello  ${M.sender.username}

        「 Nsfw 🔞 」
🔰Commannd
💠Description:	
♦️Usage:${this.client.config.prefix}bj

🔰Command:
💠Description:
♦️Usage:${this.client.config.prefix}darkjoke

🔰Command:
💠Description:
♦️Usage:${this.client.config.prefix}lesbian

🔰Command:
💠Description:
♦️Usage:${this.client.config.prefix}nneko

🔰Command:
💠Description:
♦️Usage:${this.client.config.prefix}nwaifu

🔰Command:
💠Description:
♦️Usage:${this.client.config.prefix}trap

  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
