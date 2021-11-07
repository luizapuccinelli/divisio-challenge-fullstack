import { gql } from '@apollo/client'

export const getPokemons = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
      maxHP
      maxCP
      weaknesses
      resistant
      classification
    }
  }
`
