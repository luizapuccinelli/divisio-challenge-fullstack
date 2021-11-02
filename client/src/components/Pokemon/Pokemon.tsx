import React from 'react'
import { Type } from '../PokemonTypes/Type'
import {
  PokemonContainer,
  PokemonContent,
  PokemonType,
  PokemonImage
} from './styles'
import { PokemonProps } from './types'

export function Pokemon(props: PokemonProps) {
  return (
    <PokemonContainer>
      <PokemonContent>
        <h1>{props.pokemon.name}</h1>
        <p>Nº {props.pokemon.number}</p>
        <PokemonType>
          {props.pokemon.types.map((type) => {
            return <Type key={type} type={type} />
          })}
        </PokemonType>
        <PokemonImage image={props.pokemon.image} />
      </PokemonContent>
    </PokemonContainer>
  )
}
