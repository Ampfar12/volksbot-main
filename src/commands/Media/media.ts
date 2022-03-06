import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'media',
            description: 'shows media section',
            category: 'media',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['7']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help8.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
👋 (❤ω❤) Hello ${M.sender.username}
    
           ᴍᴇᴅɪᴀ ꜱɪᴅᴇ
🔰Command: *blur*
💠Description: blurs a imagine
♦️Usage:${this.client.config.prefix}Blur

🔰Command: *google*
💠Description: searches something on gooogle
♦️Usage:${this.client.config.prefix}google (what you wanna google) 

🔰Command: *play*
💠Description: plays the song you want
♦️Usage:${this.client.config.prefix}play (song name) 

🔰Command: *retrieve*
💠Description: send view once pick or video
♦️Usage:${this.client.config.prefix}retrieve (make sure to tag a view once picture/video when using this command) 

🔰Command: *screenshot*
💠Description: screenshots 
♦️Usage:${this.client.config.prefix}screenshot (link) 

🔰Command: *advice*
💠Description: gives random advice
♦️Usage:${this.client.config.prefix}advice

🔰Command: *steal*
💠Description: steals a sticker
♦️Usage:${this.client.config.prefix}steal : crop , stretch , author/pack

🔰Command: *yts*
💠Description: searches on YouTube
♦️Usage:${this.client.config.prefix}yts (what you wanna search) 

🔰Command: *yta*
💠Description: confirms YouTube video to audio
♦️Usage:${this.client.config.prefix}yta (link) 

🔰Command: *ytv*
💠Description: turns YouTube video to a video
♦️Usage:${this.client.config.prefix}ytv (link) 

🔰Command: *spotify*
💠Description: searchs song on spotify 
♦️Usage:${this.client.config.prefix}spotify (song name) 
 
  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
