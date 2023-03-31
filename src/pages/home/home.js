import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { getPokemon } from '../../services/homeService';
import PokemonCard from './cards';

import './home.css';

function Home() {
  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      const pokemons = []
      for (let i = 1; i <= 30; i++) {
        const res = await getPokemon(i)
        pokemons.push(res)
      }
      setAllPokemon(pokemons)
    }
    getPokemons()
  }, [])

 

  return (
    <div className="App">
      <h1>BRANCH CAIO</h1>
        <Grid container>
          {allPokemon.map((pokemon)=>(
             <Grid item xs={3}>
              <PokemonCard name={pokemon.name} image={pokemon.sprites.front_default}/>
             </Grid>
          ))}
          </Grid>

    </div>
  );
}

export default Home;

