import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { getPokemons } from '../../gql/getPokemons'
import { PokemonType } from './types'
import { Pokemons } from 'components/Pokemons/Pokemons'

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

  return <Pokemons pokemons={pokemons} load={loading} />
}

export default Pokedex
