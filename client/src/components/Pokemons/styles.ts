import styled from 'styled-components'

export const PokemonList = styled.div`
  background-color: #red;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin: 30px 400px;
`
export const LoadImage = styled.div<any>`
  margin-left: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: ${(props) => `url(${props.image})`};
  background-size: 1920px;
  background-position: center;
  h1 {
    margin-left: 60px;
    font-size: 60px;
    color: black;
    margin-top: 600px;
  }
`
