import React from 'react'
import { Types } from './styles'
import { PokemonTypeProps } from './types'

export function Type(props: PokemonTypeProps) {
  return <Types theme={props.type}>{props.type}</Types>
}
