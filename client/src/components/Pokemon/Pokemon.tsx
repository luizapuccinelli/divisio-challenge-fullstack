import React from 'react'
import { PokemonContainer, PokemonContent } from './styles'
import { PokemonProps } from './types'

export function Pokemon(props: PokemonProps) {
  return (
    <PokemonContainer>
      <PokemonContent>
        <h1>{props.pokemon.name}</h1>
        <p>#{props.pokemon.number}</p>
        <span>
          {props.pokemon.types.map((type) => {
            return <p key={type}>{type}</p>
          })}
        </span>
        <img src={props.pokemon.image} alt={props.pokemon.name} />
      </PokemonContent>
    </PokemonContainer>
  )
}
