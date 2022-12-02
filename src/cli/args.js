import process from 'node:process';

const parseArgs = () => {
    // Write your code here 
    console.log(
        process.argv.slice(2).reduce((acc, currentValue, index, array) => {
            if (currentValue.startsWith("--")) {
                return acc + currentValue.slice(2) + " is ";
            }

            if (array.length === index + 1) {
                return acc + currentValue;
            }

            return acc + currentValue + ", ";
        }, "")
    )
};

parseArgs();