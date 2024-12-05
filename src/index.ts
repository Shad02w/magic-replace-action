import * as core from "@actions/core";

async function run() {
	try {
		const patterns = core.getInput("patterns");
		console.log(patterns);
	} catch (e) {
		if (e instanceof Error) {
			core.setFailed(e.message);
		}
		core.setFailed("Unknown error");
	}
}

run();
