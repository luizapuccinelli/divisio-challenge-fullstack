import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { getPokemons } from '../../gql/getPokemons'
import { PokemonType } from './types'
import { Pokemons } from 'components/Pokemons/Pokemons'
import { PokedexBg, PokedexFooter, PokedexScreen, LoadImage } from './styles'
import { NavBarBg } from 'components/NavBar/styles'
import { NavBar } from 'components/NavBar/NavBar'
import pokedex from '../../static/pokedex.png'

export function Pokedex() {
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
    <>
      {loading ? (
        <LoadImage image={pokedex}>
          <h1>Loading ...</h1>
        </LoadImage>
      ) : (
        <>
          <NavBar />
          <PokedexBg>
            <PokedexScreen>
              <Pokemons pokemons={pokemons} />
            </PokedexScreen>
          </PokedexBg>
          <PokedexFooter />
        </>
      )}
    </>
  )
}

export default Pokedex
