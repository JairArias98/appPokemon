import React, { useState, useEffect } from "react";
import "../App.css";

export function MostrarTarjetas({ pokemonEncontrado, mostrarTodos }) {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
      .then((response) => response.json())
      .then((data) => {
        const pokemon = data.results.map((element) =>
          fetch(element.url).then((response) => response.json())
        );

        Promise.all(pokemon)
          .then((pokemonData) => {
            setPokes(pokemonData);
          })
          .catch((error) => console.log(error));
      });
  }, []);

  return (
    <div className="cards">
      {pokemonEncontrado ? (
        <div className="card">
          <img src={pokemonEncontrado.sprites.front_default} alt="" />
          <h2>{pokemonEncontrado.name}</h2>
          <p>
            {pokemonEncontrado.types.map((type) => (
              <span key={type.type.name}>{type.type.name} </span>
            ))}
          </p>
        </div>
      ) 
      : (
        pokes.map(
          (poke, id) =>
            mostrarTodos && (
              <div className="card" key={id}>
                <img src={poke.sprites.front_default} alt="" />
                <h2>{poke.name}</h2>
                <p>
                  {poke.types.map((type) => (
                    <span key={type.type.name}>{type.type.name} </span>
                  ))}
                </p>
              </div>
            )
        )
      )}
    </div>
  );
}
