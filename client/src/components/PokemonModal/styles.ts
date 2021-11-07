import styled from 'styled-components'

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: block;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  border-radius: 10px;
  padding: 0px 0px 30px 0px;
  position: fixed;
  width: 40%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1200px) {
    width: 60%;
  }
  button {
    background-color: transparent;
    border: none;
    margin: 10px;
    cursor: pointer;
    align-self: self-end;
    font-size: 24px;
  }
`

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    margin: 8px 0px;
    @media (max-width: 1200px) {
      margin: 3px 0px;
      font-size: 24px;
    }
  }
  p {
    font-size: 24px;
    margin: 5px 0px;
    font-weight: bold;
    color: #343234;
    @media (max-width: 800px) {
      font-size: 16px;
    }
  }
`

export const PokemonWeakStrg = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const PokemonWeak = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  @media (max-width: 1200px) {
    width: 70%;
  }
`

export const PokemonStrg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  @media (max-width: 1200px) {
    width: 70%;
  }
`
