import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`

🔰️ 1. *ʙᴏᴛꜱ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to bot side.
♦️ Usage: ${this.client.config.prefix} bot
               
🔰️ 2. *ᴄᴏɴꜰɪɢ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to user side.
♦️ Usage: ${this.client.config.prefix} config
    
🔰️ 3. *ᴅᴇᴠ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to media side
♦️ Usage: ${this.client.config.prefix} dev

🔰️ 4. *ꜰᴜɴ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to pro ( paid ) side.
♦️ Usage: ${this.client.config.prefix} fun

🔰️ 5. *ᴇᴅᴜᴄᴀᴛɪᴠᴇ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to admin side.
♦️ Usage: ${this.client.config.prefix} Educative
    
🔰️ 6. *ɢᴇɴᴇʀᴀʟ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to anime, manga side.
♦️ Usage: ${this.client.config.prefix} general

🔰️ 7. *ᴍᴇᴅɪᴀ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to hentai, ecchi, harem side.
♦️ Usage: ${this.client.config.prefix} media

🔰️ 8. *ɴꜱꜰᴡ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to bot games side.
♦️ Usage: ${this.client.config.prefix} nsfw

🔰️ 9. *ᴡᴇᴇʙ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to bot admins side.
♦️ Usage: ${this.client.config.prefix} weeb

🔰️ 10. *ᴀᴅᴍɪɴꜱ ꜱɪᴅᴇ*
💠️ Description: By using this you will be redirected to admins side.
♦️ Usage: ${this.client.config.prefix} admin

   •━━━ ✽ • ✽ ━━━•
 
 *Note: Use ${this.client.config.prefix}<Section_name> or <Section_number> to view the section info. E.g ${this.client.config.prefix}bot/1*
     
     
`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
