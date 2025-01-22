// import fs from "fs";
//
// fs.writeFileSync("core-module.txt", "hello world");
//
// const content = fs.readFileSync("core-module.txt");
//
// console.log(content.toString());

import { readFromJsonFile, writeToJsonFile } from "./utilities.js";

const pokemon = readFromJsonFile("pokemon.json");

console.log(pokemon);

writeToJsonFile("pokemon.json", pokemon);