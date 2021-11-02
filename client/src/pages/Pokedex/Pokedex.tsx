import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { getPokemons } from '../../gql/getPokemons'
import { Pokemon } from 'components/Pokemon/Pokemon'
import { PokemonList } from './styles'
import { PokemonType } from './types'

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([])
  const { data: { pokemons = [] } = {}, loading } = useQuery(getPokemons, {
    variables: {
      first: 20
    }
  })

  useEffect(() => {
    if (loading === false && pokemons) {
      setPokemonList(pokemons)
    }
  }, [loading, pokemons])

  return (
    <PokemonList>
      {pokemonList.map((pokemon) => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />
      })}
    </PokemonList>
  )
}

export default Pokedex
