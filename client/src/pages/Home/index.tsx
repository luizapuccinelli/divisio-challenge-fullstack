import React from 'react'
import { HomeBackground, Button } from './styles'
import pikachu from '../../static/pikachu.png'

const Home = () => {
  return (
    <HomeBackground>
      <img src={pikachu} alt="Pikachu" />
      <div>
        <h1>Bem-vindo(a) treinador(a) Pokemon!</h1>
        <Button to="/pokedex">Acessar Pokedex</Button>
      </div>
    </HomeBackground>
  )
}
export default Home
