import fsPromises from "node:fs/promises";
import path from "node:path";

const remove = async () => {
    // Write your code here 
    const filePath = path.resolve("src/fs/files/fileToRemove.txt");

    try {
		await fsPromises.rm(filePath);
	} catch (err) {
		if (err?.code === "ENOENT") {
			throw new Error("FS operation failed");
		}
		throw err;
	}
};

await remove();