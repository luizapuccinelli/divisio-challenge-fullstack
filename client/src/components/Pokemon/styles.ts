import styled from 'styled-components'

export const PokemonContainer = styled.div`
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
`
export const PokemonContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 26px;
    color: rgba(23, 23, 27, 0.6);
  }

  p {
    text-align: center;
    font-size: 20px;
    color: black;
    font-weight: bold;
    & + p {
      margin-left: 20px;
    }
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`
