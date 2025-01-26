import { pokemonDatabase } from "./pokemonDatabase.js";

function fetchPokemon() {
    const fetchTime = Math.floor(Math.random()*500) + 1;
    setTimeout(() => {
        console.log(pokemonDatabase)
    },fetchTime)

}

function CreatePokemon(pokemon, callback) {
    const createTime = Math.floor(Math.random()*500) + 1;
    setTimeout(() => {
        pokemonDatabase.push(pokemon)
        callback()
    },createTime)}

// it might not appear because they are called asynchronously, so if the timeout is longer on creating than calling it
// the new Pokémon won't show up on the terminal.
console.time("callback.js")
CreatePokemon( {name : "Riolu", type1 : "Fighting" }, () => {
    CreatePokemon( {name : "Snivy", type1 : "Grass0" }, fetchPokemon)
})
console.timeEnd("callback.js")