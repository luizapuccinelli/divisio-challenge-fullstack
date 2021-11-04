import { Pokemon } from 'components/Pokemon/Pokemon'
import { NoPokemon, PokemonList } from './styles'
import { PokemonInfoProps } from './types'

export function Pokemons(props: PokemonInfoProps) {
  return (
    <>
      {props.pokemons.length > 1 ? (
        <PokemonList>
          {props.pokemons.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />
          })}
        </PokemonList>
      ) : (
        <NoPokemon>
          <p>Não temos Pokemons</p>
        </NoPokemon>
      )}
    </>
  )
}
