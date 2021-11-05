import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffd23b;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    text-align: center;
  }
`
export const Button = styled(Link)`
  color: #ffff;
  background-color: #e74a39;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 50px;
  width: 70%;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    background-color: #b00723;
  }
`
