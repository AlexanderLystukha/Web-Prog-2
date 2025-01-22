import fs from "fs"

export function readFromJsonFile(filename){
    const rawText = fs.readFileSync(filename).toString();

    return JSON.parse(rawText);
}

export function writeToJsonFile(filename, data){
    const stringToWrite = JSON.stringify(data);
}

