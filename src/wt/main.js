import os from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
    // Write your code here
    const systemCpuCores = os.cpus();

    const threads = systemCpuCores.map((_, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker("./src/wt/worker.js", {
              workerData: 10 + i,
            });

            worker.on("message", (data) => resolve({ status: "resolved", data }));
            worker.on("error", () => reject({ status: "error", data: null }));
            worker.on("exit", (code) => {
              if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
            });
        });
    })
    
    const results = await Promise.all(threads);

    console.log(results);
};

await performCalculations();