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

👋 (❤ω❤) Hello ${M.sender.username}   
*Donate via paypal:*
https://www.paypal.me/TerminatorRsa
    
    
My name is 𓀬volksꦼꦃbot🜲
    
My prefix is ${this.client.config.prefix}

    
1| *Don't Call* Bots to avoid Blocking.
    
2| *Don't Spam* in Groups&Pm to avoid Blocking.
 
 *Note: Use ${this.client.config.prefix}<Section_name> or <Section_number> to view the section info. E.g ${this.client.config.prefix}bot/1*
     
     
`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
