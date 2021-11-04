import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarBg = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20vh;
  background-color: #e84a44;
`

export const NavBarContainer = styled.div`
  height: 15vh;
  width: 100%;
  margin: 0 150px;
`

export const NavBarContent = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const PokedexButton = styled(Link)`
  margin-left: 20px;
  align-self: center;
  background-color: #62c5f7;
  border: 8px solid #166b9d;
  color: #166b9d;
  padding: 35px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 50%;
  transition: 0.5s;
  &:hover {
    background-color: #166b9d;
    color: #62c5f7;
  }
`
