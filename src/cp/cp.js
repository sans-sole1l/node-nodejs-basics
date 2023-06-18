import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    fork("./src/cp/files/script.js", args);
};

spawnChildProcess(["hello", "world"]); 