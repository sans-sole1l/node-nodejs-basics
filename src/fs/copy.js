import { cp } from "node:fs/promises";
import path from "node:path";

const copy = async () => {
    // Write your code here 
    const src = path.resolve("src/fs/files");
    const dest = path.resolve("src/fs/files_copy");

	try {
		await cp(src, dest, {errorOnExist: true, recursive: true, force: false});
	} catch (err) {
		if (err?.code === "ERR_FS_CP_EEXIST" || err?.code === "ENOENT") {
			throw new Error("FS operation failed");
		}
		throw err;
	}
};

copy();