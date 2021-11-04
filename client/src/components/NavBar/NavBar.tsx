import {
  NavBarBg,
  NavBarContainer,
  NavBarContent,
  PokedexButton
} from './styles'

export function NavBar() {
  return (
    <NavBarBg>
      <NavBarContainer>
        <NavBarContent>
          <PokedexButton to="/">Voltar</PokedexButton>
        </NavBarContent>
      </NavBarContainer>
    </NavBarBg>
  )
}
