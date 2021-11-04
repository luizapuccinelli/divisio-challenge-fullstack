import styled from 'styled-components'

function getMeta(url: string) {
  const img = new Image()
  img.src = url
  return img.width
}

function HandleImageSize(size: string) {
  if (size > '300px') {
    return '130px'
  } else {
    return '100px'
  }
}

export const PokemonContainer = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: #ffff;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
`
export const PokemonContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  h1 {
    text-align: center;
    font-size: 26px;
    color: #313131;
    margin: 30px 0px 5px 0px;
  }

  p {
    text-align: center;
    font-size: 20px;
    color: #b5b5b5;
    font-weight: bold;
    margin: 5px 0px;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

export const PokemonType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PokemonImage = styled.div<any>`
  object-fit: contain;
  width: 100%;
  height: 200px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: ${(props) => HandleImageSize(`${getMeta(props.image)}px`)};
  background-repeat: no-repeat;
  background-position: center;
`
