import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import MovesPokemon from "./movespokemon";
import PokemonAbilities from "./pokemonabilities";
import PokemonTypes from "./pokemonstypes";

const ImagePokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const promises = [];
                for (let i = 1; i <= limit; i++) {
                    promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
                }

                const results = await Promise.all(promises);

                const pokemonData = await Promise.all(
                    results.map(async (data) => {

                        const types = data.types.map(typeInfo => typeInfo.type.name);

                        const abilitiesPromises = data.abilities.map(async (abilityData) => {
                            const response = await fetch(abilityData.ability.url);
                            const abilityDetails = await response.json();

                            const effectEntry =
                                abilityDetails.effect_entries.find(entry => entry.language.name === "pt") ||
                                abilityDetails.effect_entries.find(entry => entry.language.name === "en");

                            return {
                                name: abilityData.ability.name,
                                description: effectEntry ? effectEntry.effect : "Descrição não encontrada."
                            };
                        });

                        const abilities = await Promise.all(abilitiesPromises);

                        return {
                            name: data.name,
                            image: data.sprites.other["official-artwork"].front_default,
                            moves: data.moves.map(move => move.move.name),
                            abilities: abilities,
                            types: types
                        };
                    })
                );

                setPokemons(pokemonData);
            } catch (error) {
                console.log("Erro ao buscar Pokémon", error);
            }
        };

        fetchPokemons();
    }, [limit]);

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {pokemons.length > 0 ? (
                    pokemons.map((pokemon, index) => (
                        <img key={index} src={pokemon.image} alt={pokemon.name} style={{ width: "200px", height: "200px", margin: "10px" }} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            {/* Renderiza os componentes separados */}
            <PokemonList pokemons={pokemons} />

            <MovesPokemon pokemons={pokemons} />

            <PokemonAbilities pokemons={pokemons} />

            <PokemonTypes pokemons={pokemons} />

            <button onClick={() => setLimit(limit + 10)} style={{ marginTop: "20px", padding: "10px", fontSize: "16px", cursor: "pointer" }}>
                Carregar mais Pokémon
            </button>
        </div>
    );
};

export default ImagePokemon;