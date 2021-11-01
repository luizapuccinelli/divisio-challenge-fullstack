import React from 'react'
import { Type } from './PokemonTypes/Type'
import { PokemonContainer, PokemonContent } from './styles'
import { PokemonProps } from './types'

export function Pokemon(props: PokemonProps) {
  return (
    <PokemonContainer>
      <PokemonContent>
        <h1>{props.pokemon.name}</h1>
        <p>#{props.pokemon.number}</p>
        <div>
          {props.pokemon.types.map((type) => {
            return <Type key={type} type={type} />
          })}
        </div>
        <img src={props.pokemon.image} alt={props.pokemon.name} />
      </PokemonContent>
    </PokemonContainer>
  )
}
