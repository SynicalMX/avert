import process from "process";
import chalk from "chalk";
var Utils;
(function (Utils) {
    async function prompt(question) {
        process.stdout.write(chalk.blueBright("avert ") + question + " ");
        if (process.stdin.isPaused)
            process.stdin.resume();
        return new Promise((resolve) => process.stdin.once("data", (data) => {
            process.stdin.pause();
            resolve(data.toString("utf8"));
        }));
    }
    Utils.prompt = prompt;
    function log(...args) {
        console.log(chalk.blueBright("avert"), ...args);
    }
    Utils.log = log;
})(Utils || (Utils = {}));
export default Utils;
