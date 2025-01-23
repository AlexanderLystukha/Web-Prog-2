// import fs from "fs";
//
// fs.writeFileSync("core-module.txt", "hello world");
//
// const content = fs.readFileSync("core-module.txt");
//
// console.log(content.toString());
import { faker } from "@faker-js/faker"
import { readFromJsonFile, writeToJsonFile } from "./utilities.js";

const pokemon = readFromJsonFile("pokemon.json");

console.log(pokemon);

pokemon.forEach((pokemon) => {
    pokemon.nickname = faker.internet.username()
})

writeToJsonFile("pokemon.json", pokemon);

console.log(pokemon)