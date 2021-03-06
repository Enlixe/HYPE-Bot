/**
 * @author Enlixe#3991
 * @license GPL-3.0
*/

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(warn, shardID) {
        const chalk = require('chalk');
        console.log(chalk.yellowBright(`[ WARN (START) ]`));
        console.log(warn);
        console.log(chalk.gray(`Event: warn`));
        console.log(chalk.gray(`Shard: ${shardID}`));
        console.log(chalk.gray(`Logged on: ${require("../Utils/getTime")()}`));
        console.log(chalk.yellowBright(`[ WARN (END) ]`));
    }
}