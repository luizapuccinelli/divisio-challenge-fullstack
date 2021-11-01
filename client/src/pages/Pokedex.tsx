import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { getPokemons } from '../gql/getPokemons'
import { Pokemon } from 'components/Pokemon/Pokemon'
import { PokemonList } from './styles'

interface Pokemon {
  id: string
  name: string
  image: string
  maxHP: number
  number: number
  types: string[]
}

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const { data: { pokemons = [] } = {}, loading } = useQuery(getPokemons, {
    variables: {
      first: 20
    }
  })
  useEffect(() => {
    if (pokemons) {
      setPokemonList(pokemons)
    }
  })
  return (
    <PokemonList>
      {pokemonList.map((pokemon) => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />
      })}
    </PokemonList>
  )
}

export default Pokedex
