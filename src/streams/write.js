import { createWriteStream } from 'node:fs';
import process from 'node:process';

const write = async () => {
    // Write your code here 
    const input = process.stdin;
    const output = createWriteStream('src/streams/files/fileToWrite.txt', 'utf-8');

    let data = '';

    input.on('data', chunk => {
        data += chunk;
        output.write(chunk);
    });
};

await write();