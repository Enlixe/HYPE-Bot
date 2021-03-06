/**
 * @author Enlixe#3991
 * @license GPL-3.0
*/

const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const pkg = require(path.resolve("package.json"));
const yaml = require("yaml");
const settingsFile = fs.readFileSync(path.resolve("settings.yaml"), 'utf8');
const settings = yaml.parse(settingsFile);

module.exports = () => {
    process.stdout.write(`${String.fromCharCode(160)}\n`);
    process.stdout.write(`[${chalk.redBright("BOOT")}] Starting ${chalk.magentaBright(`HYPE v${pkg.version}`)}\n`);
    process.stdout.write(`${String.fromCharCode(160)}\n`);
    process.stdout.write(`${chalk.gray(`</> Made by Enlixe | https://github.com/enlixe`)}\n`);
    process.stdout.write(`${chalk.gray(`[@] Source Code: https://github.com/enlixe/`)}\n`);
    process.stdout.write(`${String.fromCharCode(160)}\n`);
    process.stdout.write(`[${chalk.redBright("BOOT")}] Environment - ${chalk.cyanBright(`${process.env.NODE_ENV || "unknown"}`)}\n`);

    process.stdout.write(`[${chalk.redBright("BOOT")}] Building bot...\n`);
}

module.exports.update = () => new Promise(async (resolve) => {
    try {
        process.stdout.write(`[${chalk.redBright("BOOT")}] Checking for latest version...\n`);

        if(settings.autoupdate) {
            const UPDATER = require(path.resolve("src", "Utils", "Autoupdater"));
            const info = await UPDATER.check();
            if(info.same) {
                process.stdout.write(`[${chalk.redBright("BOOT")}] Bot up-to date\n`);
            } else {
                process.stdout.write(`[${chalk.redBright("BOOT")}] New version found! Updating to ${chalk.redBright(`v${info.latest}`)}\n`);
                await UPDATER.update();
                process.stdout.write(`[${chalk.redBright("BOOT")}] ${chalk.redBright(`v${info.current}`)} -> ${chalk.greenBright(`v${info.latest}`)}\n`);
                process.stdout.write(`[${chalk.redBright("BOOT")}] Updated successfully! Exiting...\n`);
                process.exit();
            }
        } else process.stdout.write(`[${chalk.redBright("BOOT")}] Skipped Updating (Auto-Update is disabled)\n`);

        process.stdout.write(`[${chalk.redBright("BOOT")}] Starting bot...\n`);
        resolve();
    } catch(err) {
        process.stdout.write(`[${chalk.redBright("BOOT")}] Failed to update with reason ${err}\n`);
    }
});