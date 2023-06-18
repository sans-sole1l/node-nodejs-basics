import { writeFile } from "node:fs/promises";
import path from "node:path";

const create = async () => {
	const dest = path.resolve("src/fs/files/fresh.txt");
	const content = "I am fresh and young";

	try {
		await writeFile(dest, content, {flag: "wx"});
	} catch (err) {
		if (err?.code === "EEXIST") {
			throw new Error("FS operation failed");
		}
		throw err;
	}
};

await create();