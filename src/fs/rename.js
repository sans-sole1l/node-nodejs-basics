import fsPromises from "node:fs/promises";
import path from "node:path";

const rename = async () => {
    // Write your code here 
    const oldPath = path.resolve("src/fs/files/wrongFilename.txt");
    const newPath = path.resolve("src/fs/files/properFilename.md");

    try {
		await fsPromises.rename(oldPath, newPath);
	} catch (err) {
		if (err?.code === "ENOENT" || err?.code === "EEXIST") {
			throw new Error("FS operation failed");
		}
		throw err;
	}
};

await rename();