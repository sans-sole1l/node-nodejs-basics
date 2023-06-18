import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

const decompress = async () => {
    // Write your code here 
    const pipe = promisify(pipeline);

    const unzip = createUnzip();
    const source = createReadStream('src/zip/files/archive.gz');
    const destination = createWriteStream('src/zip/files/fileToCompress.txt');

    try {
        await pipe(source, unzip, destination);
    } catch (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
};

await decompress();