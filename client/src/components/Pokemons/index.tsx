import { Pokemon } from 'components/Pokemon'
import { NoPokemon, PokemonList } from './styles'
import { PokemonInfoProps } from './types'

export function Pokemons({ pokemons }: PokemonInfoProps) {
  return (
    <>
      {pokemons.length ? (
        <PokemonList>
          {pokemons.map((pokemon) => {
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
