import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'general;',
            description: 'shows general section',
            category: 'general',
            usage: `${client.config.prefix}general`,
            dm: true,
            aliases: ['6']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help7.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
 👋 (❤ω❤) Hello ${M.sender.username}

           ɢᴇɴᴇʀᴀʟ ꜱɪᴅᴇ 
🔰Command: *admins*
💠Description:tags admins
♦️Usage: ${this.client.config.prefix}admin

🔰Command: *delete*
💠Description: deletes not massage
♦️Usage: ${this.client.config.prefix}delete

🔰Command: *help*
💠Description: shows help menu
♦️Usage:${this.client.config.prefix}help

🔰Command: *bot*
💠Description: check if bot works
♦️Usage:${this.client.config.prefix}bot

🔰Command: *Invitelink*
💠Description: sends group link
♦️Usage:${this.client.config.prefix}invitelink

🔰Command: *mod*
💠Description:checks bot admins
♦️Usage:${this.client.config.prefix}mod

🔰Command: *profile*
💠Description: shows your profile
♦️Usage:${this.client.config.prefix}profile

🔰Command: *xp*
💠Description: shows your xp
♦️Usage:${this.client.config.prefix}xp

🔰Command: *support*
💠Description: get 𓀬volksꦼꦃbot🜲 group link
♦️Usage:${this.client.config.prefix}support

🔰Command: *rank*
💠Description: shows your rank
♦️Usage:${this.client.config.prefix}rank

🔰Command: *rules*
💠Description: shows bot rules
♦️Usage:${this.client.config.prefix}rules

  *Note: Use ${this.client.config.prefix}h <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
