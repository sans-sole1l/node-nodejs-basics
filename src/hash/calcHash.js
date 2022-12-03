import { createReadStream } from 'node:fs';
import path from "node:path";

const {
    createHash
} = await import('node:crypto');

const calculateHash = async () => {
    // Write your code here 
    const PATH = "src/hash/files/fileToCalculateHashFor.txt";
    const filePath = path.resolve(PATH);

    const hash = createHash('sha256');

    const input = createReadStream(filePath);

    input.on('readable', () => {
        const data = input.read();

        if (data) {
            hash.update(data);
        } else {
            console.log(`${hash.digest('hex')}`);
        }
    });
};

await calculateHash();