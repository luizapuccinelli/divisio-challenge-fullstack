import { useQuery } from '@apollo/client'
import { getPokemons } from '../../gql/getPokemons'
import { Pokemons } from 'components/Pokemons/Pokemons'
import { PokedexBg, PokedexFooter, PokedexScreen, LoadImage } from './styles'
import { NavBar } from 'components/NavBar/NavBar'
import pokedex from '../../static/pokedex.png'

export function Pokedex() {
  const { data: { pokemons = [] } = {}, loading } = useQuery(getPokemons, {
    variables: {
      first: 151
    } 
  })

  return (
    <>
      {loading && (
        <LoadImage image={pokedex}>
          <h1>Loading ...</h1>
        </LoadImage>
      )}
      <>
        <NavBar />
        <PokedexBg>
          <PokedexScreen>
            <Pokemons pokemons={pokemons} />
          </PokedexScreen>
        </PokedexBg>
        <PokedexFooter>
          <p>
            Feito por &nbsp;
            <a
              href="https://www.linkedin.com/in/luizakataokaoliveira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luiza Kataoka
            </a>
          </p>
        </PokedexFooter>
      </>
    </>
  )
}

export default Pokedex
