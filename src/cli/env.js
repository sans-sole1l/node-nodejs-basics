import process from 'node:process';

const parseEnv = () => {
    // Write your code here 
    const keys =  Object.keys(process.env).filter((key) => key.startsWith("RSS_"));
    const rssVars = keys.map((key) => `${key}=${process.env[key]}`).join("; ");
    console.log(rssVars);
};

parseEnv();