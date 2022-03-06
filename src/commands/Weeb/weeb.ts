import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'weeb',
            description: 'shows weeb section',
            category: 'weeb',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['10']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help6.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
👋 (❤ω❤) Hello ${M.sender.username}
   
        「 Weeb 」
 🔰Command: *ap*
💠Description:
♦️Usage:${this.client.config.prefix}aq

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}character

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}loli

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}waifu

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}gen

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}husbando

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}rpaper

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}meguminpaper

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}shinobu-paper

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}anime-line

🔰Command:**
💠Description:
♦️Usage:${this.client.config.prefix}kitsune
 
  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
