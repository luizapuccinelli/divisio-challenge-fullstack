import React from 'react'
import { Type } from 'components/PokemonTypes'
import {
  PokemonContainer,
  PokemonContent,
  PokemonType,
  PokemonImage
} from './styles'
import { PokemonProps } from './types'

export function Pokemon({ pokemon }: PokemonProps) {
  return (
    <PokemonContainer>
      <PokemonContent>
        <h1>{pokemon.name}</h1>
        <p>Nº {pokemon.number}</p>
        <PokemonType>
          {pokemon.types.map((type) => {
            return <Type key={type} type={type} />
          })}
        </PokemonType>
        <PokemonImage image={pokemon.image} />
      </PokemonContent>
    </PokemonContainer>
  )
}
