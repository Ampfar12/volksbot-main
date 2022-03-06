import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'dev',
            description: 'shows dev section',
            category: 'dev',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['3']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help4.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`

👋 (❤ω❤) Hello ${M.sender.username}

         ᴅᴇᴠ ꜱɪᴅᴇ 
🔰Command: Ban
💠Description: Bans someone from using the bot
♦️Usage: ${this.client.config.prefix}ban (tag member)

🔰Command: unban
💠Description: unbans member if banned
♦️Usage: ${this.client.config.prefix}unban (tah member) 
 
🔰Command: Status
💠Description: post on the Bots status 
♦️Usage: ${this.client.config.prefix}status (what you wanna post)
 
🔰Command:Join 
💠Description: Joins group
♦️Usage: ${this.client.config.prefix}join (your group link)

🔰Command: leave
💠Description: leaves the group
♦️Usage: ${this.client.config.prefix}leave

🔰Command: broadcast
💠Description: broadcast massage to all groups
♦️Usage: ${this.client.config.prefix}bc (massage) 


 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
