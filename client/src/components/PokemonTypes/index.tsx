import React from 'react'
import { Types } from './styles'
import { PokemonTypeProps } from './types'

export function Type({ type }: PokemonTypeProps) {
  return <Types theme={type}>{type}</Types>
}
