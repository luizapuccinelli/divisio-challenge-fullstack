import { Pokemon } from 'components/Pokemon/Pokemon'
import { LoadImage, PokemonList } from './styles'
import { PokemonInfoProps } from './types'
import pokedex from '../../static/pokedex.png'

export function Pokemons(props: PokemonInfoProps) {
  return (
    <>
      {props.load ? (
        <LoadImage image={pokedex}>
          <h1>Loading ...</h1>
        </LoadImage>
      ) : (
        <PokemonList>
          {props.pokemons.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />
          })}
        </PokemonList>
      )}
    </>
  )
}
