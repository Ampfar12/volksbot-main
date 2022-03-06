import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'admin',
            description: 'shows fun section',
            category: 'moderation',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['8']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help9.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
👋 (❤ω❤) Hello  ${M.sender.username}

        「 moderation 」
🔰Command:*activate*
💠Description:
♦️Usage:${this.client.config.prefix}activate : cmd , invitelink , nsfw , mod , events , safe

🔰Command: *deactivate*
💠Description:
♦️Usage:${this.client.config.prefix}deactivate : : cmd , invitelink , nsfw , mod , events , safe

🔰Command: *close*
💠Description: closes the group
♦️Usage:${this.client.config.prefix}close

🔰Command: *demote*
💠Description: removes someone from been admin
♦️Usage:${this.client.config.prefix}demote (tag member)

🔰Command:*gest*
💠Description: sets group name
♦️Usage:${this.client.config.prefix}gset (group name)

🔰Command:*open*
💠Description: opens group
♦️Usage:${this.client.config.prefix}open

🔰Command:*promote*
💠Description: adds someone as admin
♦️Usage:${this.client.config.prefix}promote (tag member)

🔰Command:*purge*
💠Description:removes everyone in the group
♦️Usage:${this.client.config.prefix}purge

🔰Command:*revoke*
💠Description:reset group link
♦️Usage:${this.client.config.prefix}revoke

🔰Command:*add*
💠Description:adds someone in group
♦️Usage:${this.client.config.prefix}add (number)

🔰Command:*desc*
💠Description:sets group description
♦️Usage:${this.client.config.prefix}gadd desc (group desciption)

  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
