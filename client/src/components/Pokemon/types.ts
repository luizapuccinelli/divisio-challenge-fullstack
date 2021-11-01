export interface PokemonProps {
    pokemon: {
      id: string
      name: string
      image: string
      maxHP: number
      number: number
      types: string[]
    }
}