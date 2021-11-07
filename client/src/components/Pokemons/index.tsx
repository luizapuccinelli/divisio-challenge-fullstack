import { Pokemon } from 'components/Pokemon'
import React, { useState } from 'react'
import { NoPokemon, PokemonList, PokemonButton } from './styles'
import { PokemonInfoProps } from './types'
import PokemonModal from '../PokemonModal'

export function Pokemons({ pokemons }: PokemonInfoProps) {
  const [name, setName] = useState('')
  return (
    <>
      {pokemons.length ? (
        <PokemonList>
          {pokemons.map((pokemon) => {
            return (
              <PokemonButton
                onClick={() => {
                  setName(pokemon.name)
                }}
                key={pokemon.id}
              >
                <Pokemon pokemon={pokemon} />
              </PokemonButton>
            )
          })}
          {name && (
            <PokemonModal pokemons={pokemons} name={name} setName={setName} />
          )}
        </PokemonList>
      ) : (
        <NoPokemon>
          <p>Não temos Pokemons</p>
        </NoPokemon>
      )}
    </>
  )
}
