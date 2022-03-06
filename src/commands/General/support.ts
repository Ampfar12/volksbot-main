import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `*HELLO THERE 🎉*\n\n
        _*𓀬volksꦼꦃbot🜲 NEWS*_:https://chat.whatsapp.com/HnQg2TeAKLH6TSBOQKmAH3\n\n 
        _*WELCOME TO 𓀬volksꦼꦃbot🜲*_:https://chat.whatsapp.com/HnQg2TeAKLH6TSBOQKmAH3\n\n
        _*𓀬volksꦼꦃbot🜲 CASINO*_:coming soon\n\n`,
           MessageType.text
        ))
       
        return void M.reply('Sent you the Group Link in personal message')
        

        }
}
