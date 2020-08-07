/**
 * @author Enlixe#3991
 * @license GPL-3.0
*/

const { Command } = global.Hype;

class _Command extends Command {
    constructor (client) {
        super(client, {
            name: "about",
            description: "About The Hype Bot.",
            usage: "",
            guildOnly: false,
            aliases: ["abt", "info"],
            permission: {
                bot: ["embedLinks"],
                user: []
            },
            enabled: true
        });
    }

    async run(message, args, { GuildDB, prefix, language, translator, responder, rawArgs }) {
        try {
            const embed = this.client.embeds.embed();
            embed.fields = [
                {
                    name: "About Hype BOT",
                    value: [
                        `Name = Hype`,
                        `Birthday = 20 July 2020`,
                        `Owner = Enlixe#3991`,
                        `Co-Owner = Captain Levi#6918, albertkim#5460`,
                        `Language = Discord.js by Node.js`,
                        `TY for = HYPE〆Revolution`,
                    ].join("\n"),
                    color: this.client.utils.colors.jewel,
                    inline: true
                }
            ];
            responder.send({ embed });
        } catch(e) {
            responder.send({
                embed: this.client.embeds.error(message.author, {
                    description: translator.translate("SOMETHING_WRONG", e)
                })
            });
        }
    }
}
module.exports = _Command;