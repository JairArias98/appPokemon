import "./App.css";
import { MostrarTarjetas } from "./componentes/MostrarTarjetas";
import { Buscador } from "./componentes/Buscador";
import { useState } from "react";

function App() {
  const [pokemonEncontrado, setPokemonEncontrado] = useState();
  const [mostrarTodos, setMostrarTodos] = useState(true);

  return (
    <>
      <Buscador
        setPokemonEncontrado={setPokemonEncontrado}
        setMostrarTodos={setMostrarTodos}
      />
      <MostrarTarjetas
        pokemonEncontrado={pokemonEncontrado}
        mostrarTodos={mostrarTodos}
      />
    </>
  );
}

export default App;
