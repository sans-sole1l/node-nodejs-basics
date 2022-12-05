import { createReadStream } from 'node:fs';
import process from 'node:process';

const read = async () => {
    // Write your code here 
    const stream = createReadStream('src/streams/files/fileToRead.txt', 'utf-8');

    let data = '';

    stream.on('data', chunk => data += chunk);
    stream.on('end', () => process.stdout.write(data));
};

await read();