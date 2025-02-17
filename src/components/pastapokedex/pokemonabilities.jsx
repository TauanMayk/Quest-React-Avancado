const PokemonAbilities = ({ pokemons }) => {
    return (
        <div style={{ marginTop: "10px", textAlign: "center" }}>
            <h2 className="abilities-title">Habilidades dos Pokemons</h2>
            <ul style={{ listStyle: "none" }} className="abilities-list">
                {pokemons.map((pokemon, index) => (
                    <li key={index} style={{ margin: "8px 0" }}>
                        <strong style={{ color: getTypeColor(pokemon.types[0]) }}>{pokemon.name.toUpperCase()}:</strong>

                        {pokemon.abilities.length > 0 ? (
                            <ul>
                                
                                {pokemon.abilities.slice(0,2).map ((ability, i) => (
                                    <li key={i} style={{ marginBottom: "5px" }}>
                                        <strong>{ability.name.replace("-", " ").toUpperCase()}:</strong>
                                        <p style={{ margin: 0, fontSize: "11px", color: "#555" }}>{ability.description}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <span> Nenhuma habilidade disponível.</span>
                        )}
                    </li>
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

export default PokemonAbilities;
