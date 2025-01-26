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

// it might not appear because they are called asynchronously, so if the timeout is longer on creating than calling it
// the new Pokémon won't show up on the terminal.

console.time("promise.js")
CreatePokemon( {name : "Riolu", type1 : "Fighting" })
.then(()=> CreatePokemon( {name : "Snivy", type1 : "Grass" }))
.then(()=> CreatePokemon( {name : "Oshawott", type1 : "Water" }))
.then(()=> CreatePokemon( {name : "Bulbasaur", type1 : "Grass" }))
.then(()=> CreatePokemon( {name : "Zubat", type1 : "Poison", type2: "Flying"}))
.then(()=> CreatePokemon( {name : "Diancie", type1 : "Rock", type2: "Fairy" }))
.then(() => fetchPokemon())
console.timeEnd("promise.js")
