import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'fun',
            description: 'shows fun section',
            category: 'fun',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['5']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help6.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
👋 (❤ω❤) Hello ${M.sender.username}

           ꜰᴜɴ ꜱɪᴅᴇ 
🔰Command: *chat*
💠Description: chat with bot in the group
♦️Usage: ${this.client.config.prefix}chat

🔰Command: *fact*
💠Description: tells you random facts
♦️Usage: ${this.client.config.prefix}fact

🔰Command: *joke*
💠Description:tells a random joke
♦️Usage: ${this.client.config.prefix}joke

🔰Command: *quote*
💠Description: random quotes
♦️Usage: ${this.client.config.prefix}quote

🔰Command: *reactions*
💠Description: shows reactions
♦️Usage: ${this.client.config.prefix}react

🔰Command: *ship*
💠Description: ships you with some
♦️Usage: ${this.client.config.prefix}ship (tag person)

🔰Command: *trigger*
💠Description: shakes your profile picture
♦️Usage: ${this.client.config.prefix}trigger

🔰Command: *advice*
💠Description: sends random advice
♦️Usage:${this.client.config.prefix}advice

🔰Command: *jail*
💠Description: takes you to jail
♦️Usage:${this.client.config.prefix}jail

🔰Command: *why*
💠Description: sends random questions n responses
♦️Usage: ${this.client.config.prefix}why

🔰Command: *igstalk*
💠Description: checks Instagram account
♦️Usage:${this.client.config.prefix}igstalk (username)

🔰Command: *chess*
💠Description: play chess
♦️Usage: ${this.client.config.prefix}chess

  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
