import { useState } from 'react'
import { ModalProps } from './types'
import { PokemonType } from 'pages/Pokedex/types'
import { PokemonImage } from 'components/Pokemon/styles'
import { Type } from 'components/PokemonTypes'
import { AiFillCloseCircle } from 'react-icons/ai'
import {
  ModalBg,
  ModalContent,
  PokemonInfo,
  PokemonStrg,
  PokemonWeak,
  PokemonWeakStrg
} from './styles'

export function PokemonModal({ name, setName, pokemons }: ModalProps) {
  const pokemonList = pokemons
  const [selectedPokemon] = useState<PokemonType[]>([])
  pokemonList.map((pokemon) => {
    if (name === pokemon.name) {
      selectedPokemon.push(pokemon)
    }
  })

  return (
    <ModalBg>
      <ModalContent>
        <button onClick={() => setName('')}>
          <AiFillCloseCircle />
        </button>
        {selectedPokemon.map((selected) => {
          return (
            <PokemonInfo key={selected.id}>
              <h1>{selected.name}</h1>
              <PokemonImage image={selected.image} />
              <p>{selected.classification}</p>
              {selected.types.map((type) => {
                return <Type key={type} type={type} />
              })}
              <p>max HP: {selected.maxHP}</p>
              <p>max CP: {selected.maxCP}</p>
              <PokemonWeakStrg>
                <PokemonWeak>
                  <p>Weaknesses:</p>
                  {selected.weaknesses.map((type) => {
                    return <Type key={type} type={type} />
                  })}
                </PokemonWeak>
                <PokemonStrg>
                  <p>Resistant:</p>
                  {selected.resistant.map((type) => {
                    return <Type key={type} type={type} />
                  })}
                </PokemonStrg>
              </PokemonWeakStrg>
            </PokemonInfo>
          )
        })}
      </ModalContent>
    </ModalBg>
  )
}
