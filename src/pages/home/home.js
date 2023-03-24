import { useEffect, useState } from "react";
import { getPokemon } from "../../services/homeService";

import "./home.css";

function Home() {
  const [pokemon, setPokemon] = useState("");
  const [allPokemon, setAllPokemon] = useState("");

  useEffect(() => {
    getPokemon("").then((res) => {
      setAllPokemon(res);
    });
  }, []);

  const buscarPokemon = (nome) => {
    getPokemon(nome.target.value).then((res) => {
      setPokemon(res);
    });
  };

  const listPokemon = () => {
    return allPokemon.results.map((pok,index) =>(
      <div key = {index}>
        {pok.name}
      </div>
    ))
   
  };

  return (
    <div className="App">
      <input type={"tex"} onChange={buscarPokemon}></input>

      {pokemon ? (
        <>
          nome: {pokemon?.name}
          <img src={pokemon?.sprites?.back_default}
          alt={pokemon?.name}
          ></img>
        </>
      ) : (
        <></>
      )}

      {allPokemon && (
        
        <>
          <br></br>Procure Seu Pokemon
          {listPokemon()}
        </>
      )}
    </div>
  );
}

export default Home;
