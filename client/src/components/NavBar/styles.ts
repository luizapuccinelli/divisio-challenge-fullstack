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
  display: flex;
  justify-content: center;
  height: 20vh;
  width: 100%;
`

export const NavBarContent = styled.div`
  width: 80%;
  height: 20vh;
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
