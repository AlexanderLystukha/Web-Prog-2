import { pokemonDatabase } from "./pokemonDatabase";

function fetchPokemon() {
    const fetchTime = Math.floor(Math.random()*500) + 1;
    setTimeout(fetchTime)
    console.log(pokemonDatabase)
}

function CreatePokemon(pokemon) {
    const createTime = Math.floor(Math.random()*500) + 1;
    setTimeout(createTime)
    pokemonDatabase.push(pokemon)
}
CreatePokemon( {name : "Riolu", type1 : "Fighting" })
CreatePokemon( {name : "Snivy", type1 : "Grass0" })
fetchPokemon()