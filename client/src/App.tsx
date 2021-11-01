import { GlobalStyle } from './style-guide/GlobalStyle'
import { ApolloProvider } from '@apollo/client'
import client from 'config/apollo-client'
import Pokedex from 'pages/Pokedex'

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Pokedex />
  </ApolloProvider>
)

export default App
