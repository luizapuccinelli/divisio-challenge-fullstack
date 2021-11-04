import styled from 'styled-components'

export const PokedexBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e84a44;
`

export const PokedexScreen = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #62c5f7;
  box-shadow: inset 0px 0px 36px -2px rgba(0, 0, 0, 0.43);
`
export const PokedexFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #e84a44;
  p {
    color: #ffff;
    text-align: center;
  }
  a {
    color: #ffff;
    text-decoration: none;
    &:hover {
      color: #313131;
    }
  }
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
