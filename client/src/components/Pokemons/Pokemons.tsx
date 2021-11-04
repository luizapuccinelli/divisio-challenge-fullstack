import { Pokemon } from 'components/Pokemon/Pokemon'
import { PokemonList } from './styles'
import { PokemonInfoProps } from './types'

export function Pokemons(props: PokemonInfoProps) {
  return (
    <>
      <PokemonList>
        {props.pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />
        })}
      </PokemonList>
    </>
  )
}
