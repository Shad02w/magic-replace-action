import * as core from "@actions/core";
import { glob } from "fast-glob";
import * as fs from "node:fs/promises";
import { replace } from "@shad02w/magic-replace";

async function run() {
    try {
        const prefix = core.getInput("prefix", { required: true });
        const suffix = core.getInput("suffix", { required: true });
        const patterns = core.getInput("patterns", { required: true });
        const files = await glob(
            core.getInput("files", { required: true, trimWhitespace: true }),
        );

        const mapper = JSON.parse(patterns);

        console.log("targerting files: ", files);

        for (const file of files) {
            const content = await fs.readFile(file, "utf8");
            const newContent = replace([prefix, suffix], mapper, content);
            await fs.writeFile(file, newContent);
        }
    } catch (e) {
        if (e instanceof Error) {
            core.setFailed(e.message);
        }
        core.setFailed("Unknown error");
    }
}

run();
