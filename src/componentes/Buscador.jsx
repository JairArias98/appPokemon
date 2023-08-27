import { useState } from "react";

export function Buscador({ setPokemonEncontrado, setMostrarTodos }) {
  const [buscar, setBuscar] = useState([]);

  function buscarPokemon() {
    const pokemonNombre = buscar.trim();
    if (pokemonNombre !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNombre.toLowerCase()}`)
        .then((response) => {
          if (!response) {
          }
          return response.json();
        })
        .then((dataPoke) => {
          setPokemonEncontrado(dataPoke);
          setMostrarTodos(false);
        })
        .catch((error) => {
          setPokemonEncontrado();
          setMostrarTodos(true);
        });
    }
  }

  return (
    <header className="header">
      <nav className="nav-main">
        <input
          onChange={(e) => setBuscar(e.target.value)}
          className="buscar"
          type="search"
          name=""
          id=""
          placeholder="Nombre..."
        />
        <button onClick={buscarPokemon} className="btn">
          Buscar
        </button>
      </nav>
    </header>
  );
}
