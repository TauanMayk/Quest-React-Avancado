const PokemonTypes = ({ pokemons }) => {
    return (
        <div style={{ textAlign: "center" }} className="types">
            <h2>Tipos dos Pokémon</h2>
            <ul style={{ listStyle: "none" }} className="list-types">
                {pokemons.map((pokemon, index) => (
                    <p key={index}>
                        <span>{pokemon.name.toUpperCase()}:</span>
                        {pokemon.types.length > 0 ? (
                            <ul>
                                {pokemon.types.map((type, i) => (
                                    <li key={i} style={{ marginBottom: "5px", color: getTypeColor(type) }}>
                                        {type.toUpperCase()}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <span> Nenhum tipo disponível.</span>
                        )}
                    </p>
                ))}
            </ul>
        </div>
    );
};

const getTypeColor = (type) => {
    const typeColors = {
        normal: "#A8A878",
        fire: "#F08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        ice: "#98D8D8",
        fighting: "#C03028",
        poison: "#A040A0",
        ground: "#E0C068",
        flying: "#A890F0",
        psychic: "#F85888",
        bug: "#A8B820",
        rock: "#B8A038",
        ghost: "#705898",
        dragon: "#7038F8",
        dark: "#705848",
        steel: "#B8B8D0",
        fairy: "#EE99AC"
    };

    return typeColors[type] || "#000";
};

export default PokemonTypes;
