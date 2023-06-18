import process from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    // Write your code here 
    const input = process.stdin;
    const output = process.stdout;

    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split("").reverse().join(""));
        },
    });

    input.pipe(reverse).pipe(output);
};

await transform();