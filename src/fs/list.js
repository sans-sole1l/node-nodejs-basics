import fsPromises from "node:fs/promises";
import path from "node:path";

const list = async () => {
    // Write your code here 
    const dirPath = path.resolve("src/fs/files");

    try {
		const content = await fsPromises.readdir(dirPath);
        console.log(content);
	} catch (err) {
		if (err?.code === "ENOENT") {
			throw new Error("FS operation failed");
		}
		throw err;
	}
};

await list();