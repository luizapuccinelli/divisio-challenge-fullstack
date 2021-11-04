import styled from 'styled-components'

export const PokemonList = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  gap: 50px;
  margin: 100px 200px;
`

export const NoPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  p {
    text-align: center;
    font-size: 50px;
    color: #ffff;
  }
`
