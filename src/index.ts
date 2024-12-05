import * as core from "@actions/core";
import { glob } from "fast-glob";

async function run() {
    try {
        const prefix = core.getInput("prefix", { required: true });
        const postfix = core.getInput("postfix", { required: true });
        const patterns = core.getInput("patterns", { required: true });
        const files = await glob(
            core.getInput("files", { required: true, trimWhitespace: true }),
        );

        const mapper = JSON.parse(patterns);
    } catch (e) {
        if (e instanceof Error) {
            core.setFailed(e.message);
        }
        core.setFailed("Unknown error");
    }
}

run();
