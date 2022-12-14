import process from "process";
import chalk from "chalk";

namespace Utils {
    export async function prompt(question: string): Promise<string> {
        process.stdout.write(chalk.blueBright("avert ") + question + " ");

        if (process.stdin.isPaused) process.stdin.resume();
        return new Promise((resolve) => process.stdin.once("data", (data) => {
            process.stdin.pause();
            resolve(data.toString("utf8"));
        }))
    }

    export function log(...args): void {
        console.log(chalk.blueBright("avert"), ...args);
    }
}

export default Utils;