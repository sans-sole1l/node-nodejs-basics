import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { promisify } from 'node:util';

const compress = async () => {
    // Write your code here 
    const pipe = promisify(pipeline);

    const gzip = createGzip();
    const source = createReadStream('src/zip/files/fileToCompress.txt');
    const destination = createWriteStream('src/zip/files/archive.gz');

    try {
        await pipe(source, gzip, destination);
    } catch (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
};

await compress();