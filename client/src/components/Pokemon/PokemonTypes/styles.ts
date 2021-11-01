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
  }
}

function HandleTypeText(type: string) {
  if (
    type === 'Fire' ||
    type === 'Poison' ||
    type === 'Bug' ||
    type === 'Water'
  ) {
    return '#ffff'
  }
}

export const Types = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-radius: 3px;
  background-color: ${(props) => HandleTypeBg(props.theme)};
  color: ${(props) => HandleTypeText(props.theme)};
  }
`
