import { useState } from 'react'
import { ModalContainer, ModalMain } from './styles'
import { ModalProps } from './types'
import { PokemonType } from 'pages/Pokedex/types'
import { PokemonImage } from 'components/Pokemon/styles'
import { Type } from 'components/PokemonTypes'

const Modal: React.FC<ModalProps> = ({ name, setName, pokemons }) => {
  const pokemonList = [...pokemons]
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonType[]>([])
  pokemonList.map((pokemon) => {
    if (name === pokemon.name) {
      selectedPokemon.push(pokemon)
    }
  })
  console.log(selectedPokemon)

  return (
    <ModalContainer>
      <ModalMain>
        <span onClick={() => setName('')}>x</span>
        {selectedPokemon.map((selected) => {
          return (
            <div key={selected.id}>
              <h1>{selected.name}</h1>
              <PokemonImage image={selected.image} />
              <p>max HP: {selected.maxHP}</p>
              <p>max CP: {selected.maxCP}</p>
              <p>weaknesses: {selected.weaknesses}</p>
              <p>resistant: {selected.resistant}</p>
              {selected.types.map((type) => {
                return <Type key={type} type={type} />
              })}
            </div>
          )
        })}
      </ModalMain>
    </ModalContainer>
  )
}

export default Modal
