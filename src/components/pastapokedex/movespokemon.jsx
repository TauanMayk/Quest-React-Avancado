const MovesPokemon = ({ pokemons }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2 className="moves-title">Movimentos dos Pokemon</h2>
            <ul style={{ listStyle: "none" }} className="moves-list">
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <strong style={{ color: getTypeColor(pokemon.types[0]) }}>{pokemon.name.toUpperCase()}:</strong>
                        {pokemon.moves.length > 0 ? (
                            <span>
                                {pokemon.moves.slice(0, 3).map((move, i) => (
                                    <span key={i} style={{ marginLeft: "5px", }}>
                                        {move}
                                        {i < 4 ? "" : ""}
                                    </span>
                                ))}
                            </span>
                        ) : (
                            <span> Nenhum movimento disponível.</span>
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

export default MovesPokemon;