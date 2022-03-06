import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'educative',
            description: 'shows educative section',
            category: 'educative',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['4']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help5.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
👋 (❤ω❤) Hello ${M.sender.username} 
 
        ᴇᴅᴜᴄᴀᴛɪᴠᴇ ꜱɪᴅᴇ
🔰Command: *crypto*
💠Description:shows crypto prices
♦️Usage: ${this.client.config.prefix}crypto

🔰Command: *github*
💠Description: searches github account
♦️Usage: ${this.client.config.prefix}github (name of person) 

🔰Command: *whether*
💠Description: check whether
♦️Usage:{this.client.config.prefix}weather (area)

🔰Command: *covid*
💠Description: checks covid cases
♦️Usage:${this.client.config.prefix}covid (country) 

🔰Command: *element*
💠Description:checks elements
♦️Usage:${this.client.config.prefix}element

🔰Command:*calculator*
💠Description: works like a calculator
♦️Usage:${this.client.config.prefix}calculator (sum)



🔰Command: *ip*
💠Description: gives more info about ip address
♦️Usage:${this.client.config.prefix}ip (ip address) 

  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
