/**
 * @author Enlixe
 * @license GPL-3.0
*/

const config = {
    id: process.env.CLIENTID,
    secret: process.env.CLIENTSECRET,
    redirect: process.env.REDIRECT,
    state: process.env.NODE_ENV || "unknown",
    prod: process.env.NODE_ENV === "production",
    token: process.env.DISCORDTOKEN,
    prefix: process.env.NODE_ENV === "production" ? "H!" : "H$",
    invite: `https://discord.com/oauth2/authorize?client_id=${process.env.CLIENTID}&permissions=537159744&scope=bot`,
    oauth: `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENTID}&redirect_uri=${encodeURIComponent(process.env.REDIRECT)}&response_type=code&scope=guilds%20identify`,
    support: "https://discord.com/invite/GCyF49m",
    dashboard: "https://enlixer.carrd.co",
    website: "https://enlixer.carrd.co",
    port: 3000,

    owners: ["524805915526955048"],
    developers: ["524805915526955048"],
    admins: [],
    helpers: [],
    get staffs() { return ([...this.owners, ...this.developers]); }
};

module.exports = config;