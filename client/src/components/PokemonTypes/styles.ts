import styled from 'styled-components'

function HandleTypeBg(type: string) {
  if (type === 'Grass') {
    return '#9bcc50'
  } else if (type === 'Fire') {
    return '#fd7d24'
  } else if (type === 'Water') {
    return '#4592c4'
  } else if (type === 'Poison') {
    return '#b97fc9'
  } else if (type === 'Bug') {
    return '#729f3f'
  } else if (type === 'Flying') {
    return '#3dc7ef'
  } else if (type === 'Normal') {
    return '#a4acaf'
  } else if (type === 'Electric') {
    return '#eed535'
  } else if (type === 'Ground') {
    return '#ab9842'
  } else if (type === 'Fairy') {
    return '#fdb9e9'
  } else if (type === 'Fighting') {
    return '#d56723'
  } else if (type === 'Psychic') {
    return '#f366b9'
  } else if (type === 'Steel') {
    return '#9eb7b8'
  } else if (type === 'Ice') {
    return '#51c4e7'
  } else if (type === 'Rock') {
    return '#a38c21'
  } else if (type === 'Dragon') {
    return '#f16e57'
  }
}

function HandleTypeText(type: string) {
  if (
    type === 'Fire' ||
    type === 'Poison' ||
    type === 'Bug' ||
    type === 'Water' ||
    type === 'Fighting' ||
    type === 'Psychic' ||
    type === 'Rock' ||
    type === 'Dragon'
  ) {
    return '#ffff'
  }
}

export const Types = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  flex-direction: row;
  border-radius: 3px;
  background-color: ${(props) => HandleTypeBg(props.theme)};
  color: ${(props) => HandleTypeText(props.theme)};
  margin-top: 5px;
  }
`
