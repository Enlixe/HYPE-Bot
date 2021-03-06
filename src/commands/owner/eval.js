/**
 * @author Enlixe#3991
 * @license GPL-3.0
*/

const { Command } = global.Hype;

class _Command extends Command {
    constructor (client) {
        super(client, {
            name: "eval",
            description: "Evals JS Code.",
            usage: "<code>",
            guildOnly: false,
            aliases: ["ev"],
            permission: {
                bot: [],
                user: []
            },
            cooldown: 0,
            enabled: true
        });
    }

    async run(message, args, { GuildDB, prefix, language, translator, responder, rawArgs }) {
        if(!this.client.config.staffs.includes(message.author.id)) return;
        const code = args.join(" ");
        try {
            const evaled = eval(code);
            const clean = await this.client.clean(evaled);
            const MAX_CHARS = 3 + 2 + clean.length + 3;
            if (MAX_CHARS > 2000) {
                return message.channel.createMessage(`${this.client.emojis.tick} Output exceeded 2000 characters. Sending as a file.`, { file: Buffer.from(clean), name: "output.txt" });
            }
            message.channel.createMessage(`\`\`\`js\n${clean || ":shrug:"}\n\`\`\``);
        } catch (err) {
            const clean = await this.client.clean(err);
            const MAX_CHARS = 3 + 2 + clean.length + 3;
            if (MAX_CHARS > 2000) {
                return message.channel.createMessage(`${this.client.emojis.cross} Output exceeded 2000 characters. Sending as a file.`, { file: Buffer.from(clean), name: "output.txt" });
            }
            message.channel.createMessage(`\`ERROR\` \`\`\`xl\n${clean || ":shrug:"}\n\`\`\``);
        }
    }
}

module.exports = _Command;