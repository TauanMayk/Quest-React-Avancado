const PokemonList = ({ pokemons }) => {
    return (
        <div style={{ marginTop: "5px" }}>
            <h2 className="pokemon-list">Lista de Pokemons</h2>
            <ul style={{ listStyleType: "none" }} className="pokemon-list">
                {pokemons.map((pokemon, index) => (
                    <li key={index} className="pokemon-name">
                        {pokemon.name.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;