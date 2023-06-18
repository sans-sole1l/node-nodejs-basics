import fsPromises from "node:fs/promises";
import path from "node:path";

const read = async () => {
    // Write your code here 
    const filePath = path.resolve("src/fs/files/fileToRead.txt");

    try {
		const content = await fsPromises.readFile(filePath, {encoding: "utf-8"});
        console.log(content);
	} catch (err) {
		if (err?.code === "ENOENT") {
			throw new Error("FS operation failed");
		}
		throw err;
	}
};

await read();