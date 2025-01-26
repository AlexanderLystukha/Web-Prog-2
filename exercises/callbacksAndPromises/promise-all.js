import { pokemonDatabase } from "./pokemonDatabase.js";

function fetchPokemon() {
    const fetchTime = Math.floor(Math.random()*500) + 1;
    setTimeout(() => {
        console.log(pokemonDatabase)
    },fetchTime)

}

function CreatePokemon(pokemon) {
    const createTime = Math.floor(Math.random()*500) + 1;
    return new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve(pokemonDatabase.push(pokemon))
    },createTime)
    })
}

const pokemonPromises = [
    CreatePokemon( {name : "Snivy", type1 : "Grass" }),
    CreatePokemon( {name : "Oshawott", type1 : "Water" }),
    CreatePokemon( {name : "Bulbasaur", type1 : "Grass" }),
    CreatePokemon( {name : "Zubat", type1 : "Poison", type2: "Flying"}),
    CreatePokemon( {name : "Diancie", type1 : "Rock", type2: "Fairy" })
]

console.time("promise-all.js")
Promise.all(pokemonPromises)
.then(() => fetchPokemon())
console.timeEnd("promise-all.js")
